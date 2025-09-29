package com.juanito.project.AldebaranTutor.service;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import com.juanito.project.AldebaranTutor.dto.response.AIQuizResponse;
import com.juanito.project.AldebaranTutor.model.Level;
import com.juanito.project.AldebaranTutor.model.Sector;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class QuizAIService {
    private static final Logger logger = LoggerFactory.getLogger(QuizAIService.class);
    private static final String GOOGLE_GEMINI_API = "gemini-2.5-flash";

    private final Client client;

    public QuizAIService(Client client) {
        this.client = client;
    }

    public String buildPrompt(Sector sector, Level level) {
        return String.format(
                """
            Generate 20 %s difficulty technical interview questions for %s.

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
        int retryDelay = 1000;

        for (int attempt = 0; attempt <= maxTries; attempt++) {
            try {
                long startTime = System.currentTimeMillis();
                GenerateContentResponse aiResponse = client.models.generateContent(GOOGLE_GEMINI_API, prompt, null);
                long processingTime = System.currentTimeMillis() - startTime;

                logger.info("AI response generated successfully (attempt {}, processing time: {}ms)", attempt, processingTime);
                return  aiResponse;
            } catch (Exception e) {
                logger.error("AI response generation failed on attempt {} of {}: {}", attempt, maxTries, e.getMessage());

                if (attempt == maxTries) {
                    throw new RuntimeException(e.getMessage());
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

    private String cleanAIResponse(String text) {
        return text.replaceAll("```(?:json)?", "").trim();
    }

}
