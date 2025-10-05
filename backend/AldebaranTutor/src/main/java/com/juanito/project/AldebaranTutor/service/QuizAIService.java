package com.juanito.project.AldebaranTutor.service;

import com.google.genai.Client;
import com.google.genai.types.BlockedReason;
import com.google.genai.types.GenerateContentResponse;
import com.juanito.project.AldebaranTutor.dto.request.ChatRequest;
import com.juanito.project.AldebaranTutor.dto.response.ChatResponse;
import com.juanito.project.AldebaranTutor.dto.response.AIQuizResponse;
import com.juanito.project.AldebaranTutor.model.Chat;
import com.juanito.project.AldebaranTutor.model.Level;
import com.juanito.project.AldebaranTutor.model.Sector;
import com.juanito.project.AldebaranTutor.model.SenderType;
import com.juanito.project.AldebaranTutor.repo.ChatRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

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
        return String.format(
                """
            Generate 10 %s difficulty technical interview questions for %s.

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
        """, sector, level);
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
        String userText = chatRequest.getChatText().trim();
        boolean aiSuccess = false;

        // 1. Save USER message
        Chat userChatResponse = new Chat();
        userChatResponse.setChatContent(userText);
        userChatResponse.setSenderType(SenderType.USER);
        userChatResponse.setCreatedAt(new Date());
        chatRepo.save(userChatResponse);
        logger.info("Saved user chat: {}", userText);

        try {
            // 2. Generate AI response
            GenerateContentResponse generateContentResponse = generatePrompt(userText);

            // 3. Save AI message
            if (generateContentResponse.text() != null) {
                String aiText = generateContentResponse.text().trim();
                Chat aiChatResponse = new Chat();
                aiChatResponse.setChatContent(aiText);
                aiChatResponse.setSenderType(SenderType.AI);
                aiChatResponse.setCreatedAt(new Date());
                chatRepo.save(aiChatResponse);
                logger.info("Saved AI chat: {}", aiText);
                aiSuccess = true;
            }

        } catch (Exception e) {
            // Log the full exception for debugging the connection/API issue
            logger.error("Failed to generate AI response. Sending error message to user.", e);

            // 4. Save an ERROR message from AI if the call failed
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

        // 5. Fetch all chats (including the new user chat and the AI response OR AI error message)
        return fetchAllChat();
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
