package com.juanito.project.AldebaranTutor.service;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import com.juanito.project.AldebaranTutor.dto.request.ChatRequest;
import com.juanito.project.AldebaranTutor.dto.response.ChatResponse;
import com.juanito.project.AldebaranTutor.dto.response.AIQuizResponse;
import com.juanito.project.AldebaranTutor.model.Chat;
import com.juanito.project.AldebaranTutor.model.Level;
import com.juanito.project.AldebaranTutor.model.Sector;
import com.juanito.project.AldebaranTutor.model.SenderType;
import com.juanito.project.AldebaranTutor.repo.ChatRepo;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.apache.poi.xwpf.extractor.XWPFWordExtractor;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuizAIService {
    private static final Logger logger = LoggerFactory.getLogger(QuizAIService.class);
    private static final String GOOGLE_GEMINI_API = "gemini-2.5-flash";

    private final Client client;

    private final ChatRepo chatRepo;

    public QuizAIService(Client client, ChatRepo chatRepo) {
        this.client = client;
        this.chatRepo = chatRepo;
    }

    public String buildPrompt(Sector sector, Level level) {
        String sectorTopics = getSectorTopics(sector);

        return String.format(
                """
            Generate 10 %s most asked interview questions with %s difficulty.

            The questions must specifically cover the following areas: %s
            Each question must be multiple choice with 4 options.

            Return ONLY valid JSON (no markdown, no comments), in this format:
            {
              "questions": [
                {
                  "question": "string",
                  "options": ["string", "string", "string", "string"],
                  "correctAnswer": "string",
                  "explanation": "string"
                }
              ]
            }
        """, sector, level, sectorTopics);
    }

    private String getSectorTopics(Sector sector) {
        switch (sector) {
            case IT:
                return "Data Structures and Algorithms, System Design, Object-Oriented Programming, and Artificial Intelligence/Machine Learning";
            case FINANCE:
                return "Excel VBA, Financial Modelling, Investment Analysis, and Risk Management";
            case ENGINEERING:
                return "Engineering Design, Principle of Engineering, CAD Design, and Circuit Analysis";
            default:
                return "general knowledge for the " + sector + " industry.";
        }
    }

    public GenerateContentResponse generatePrompt(String prompt) {
        logger.info("Generate AI prompt");

        int maxTries = 3;
        int retryDelay = 2000;


        for (int attempt = 0; attempt <= maxTries; attempt++) {
            
            try {
                long startTime = System.currentTimeMillis();
                GenerateContentResponse aiResponse = client.models.generateContent(GOOGLE_GEMINI_API, prompt, null);
                long processingTime = System.currentTimeMillis() - startTime;

                logger.info("AI response generated successfully (attempt {}, processing time: {}ms)", attempt, processingTime);
                return  aiResponse;
            } catch (Exception e) {

                logger.error("AI response generation failed on attempt {} of {}.", attempt, maxTries, e);

                if (attempt == maxTries) {
                    throw new RuntimeException("Failed to generate AI response after " + maxTries + " attempts.", e);
                }

                try {
                    Thread.sleep(retryDelay * attempt);
                } catch (InterruptedException ie) {
                    Thread.currentThread().interrupt();
                    throw new RuntimeException("Request interrupted", ie);
                }
            }
        }
        throw new RuntimeException("Failed to generate AI response");
    }

    public AIQuizResponse generateResponse(Sector sector, Level level) {
        String prompt = buildPrompt(sector, level);

        try {
            GenerateContentResponse response = generatePrompt(prompt);

            if (response.text() != null && response != null) {
                String cleaned = cleanAIResponse(response.text());

                AIQuizResponse aiQuizResponse = new AIQuizResponse();
                aiQuizResponse.setQuizJsonResponse(cleaned);
                aiQuizResponse.setSector(sector);
                aiQuizResponse.setLevel(level);

                return aiQuizResponse;
            }
        } catch (Exception e) {
            throw new Error(e.getMessage());
        }

        AIQuizResponse aiQuizResponse = new AIQuizResponse();
        aiQuizResponse.setQuizJsonResponse("{\"questions\":[]}");
        aiQuizResponse.setSector(sector);
        aiQuizResponse.setLevel(level);

        return aiQuizResponse;
    }

    public List<ChatResponse> createChat(ChatRequest chatRequest) {
        logger.info("Starting a conversation with our AI Chatbot");

        String userText = chatRequest.getChatText();
        MultipartFile file = chatRequest.getFile();

        String combinedPrompt = userText == null ? "" : userText;
        String userContentForHistory = userText == null ? "" : userText;

        if (file != null) {
            try {
                String extractedText = extractTextFromFile(file);
                combinedPrompt += "\n\n--- DOCUMENT CONTEXT START (File: " + file.getOriginalFilename() + ") ---\n"
                        + extractedText
                        + "\n--- DOCUMENT CONTEXT END ---\n";

                userContentForHistory += "\n\n[File uploaded: " + file.getOriginalFilename() + " (" + file.getSize() + " bytes)]";

                logger.info("Extracted text from file and added to prompt.");
            } catch (Exception e) {
                logger.error("Failed to extract text from file: {}", file.getOriginalFilename(), e);
                combinedPrompt += "\n\n(Note: The uploaded file '" + file.getOriginalFilename() + "' could not be read. Proceed with only the text message.)";
                userContentForHistory += "\n\n[File uploaded: " + file.getOriginalFilename() + " (Extraction Failed)]";
            }
        }

        if (combinedPrompt.trim().isEmpty()) {
            throw new IllegalArgumentException("No content (text or readable file data) was provided for the AI.");
        }

        Chat userChatResponse = new Chat();
        userChatResponse.setChatContent(userContentForHistory.trim());
        userChatResponse.setSenderType(SenderType.USER);
        userChatResponse.setCreatedAt(new Date());
        chatRepo.save(userChatResponse);
        logger.info("Saved user chat (includes file note if applicable).");

        boolean aiSuccess = false;
        try {
            GenerateContentResponse generateContentResponse = generatePrompt(combinedPrompt);

            if (generateContentResponse.text() != null) {
                String aiText = generateContentResponse.text().trim();
                Chat aiChatResponse = new Chat();
                aiChatResponse.setChatContent(aiText);
                aiChatResponse.setSenderType(SenderType.AI);
                aiChatResponse.setCreatedAt(new Date());
                chatRepo.save(aiChatResponse);
                logger.info("Saved AI chat.");
                aiSuccess = true;
            }

        } catch (Exception e) {
            logger.error("Failed to generate AI response. Sending error message to user.", e);

            if (!aiSuccess) {
                Chat errorChatResponse = new Chat();
                errorChatResponse.setChatContent(
                        "Error: The AI tutor is currently unavailable or the request failed. Please try again."
                );
                errorChatResponse.setSenderType(SenderType.AI);
                errorChatResponse.setCreatedAt(new Date());
                chatRepo.save(errorChatResponse);
                logger.warn("Saved AI error chat.");
            }
        }

        return fetchAllChat();
    }

    private String extractTextFromFile(MultipartFile file) throws Exception {
        String fileName = file.getOriginalFilename().toLowerCase();

        try (InputStream inputStream = file.getInputStream()) {
            if (fileName.endsWith(".pdf")) {
                try (PDDocument pdDocument = PDDocument.load(inputStream)) {
                    PDFTextStripper stripper = new PDFTextStripper();
                    return stripper.getText(pdDocument);
                }
            } else if (fileName.endsWith(".docx")) {
                try (XWPFDocument xwpfDocument = new XWPFDocument(inputStream)) {
                    XWPFWordExtractor extractor = new XWPFWordExtractor(xwpfDocument);
                    return extractor.getText();
                }
            } else if (fileName.endsWith(".txt")) {
                return new String(inputStream.readAllBytes(), "UTF-8");
            } else  {
                throw new UnsupportedOperationException("Unsupported file format: " + fileName);
            }
        }
    }

    public List<ChatResponse> fetchAllChat() {
        List<Chat> allChat = chatRepo.findAllByOrderByCreatedAtAsc();
        return allChat.stream()
                .map(ch -> new ChatResponse(ch.getChatContent(), ch.getSenderType(), ch.getCreatedAt()))
                .collect(Collectors.toList());
    }

    public void clearAllChats() {
        logger.info("Delete all chats");
        chatRepo.deleteAll();
    }

    private String cleanAIResponse(String text) {
        return text.replaceAll("```(?:json)?", "").trim();
    }

}
