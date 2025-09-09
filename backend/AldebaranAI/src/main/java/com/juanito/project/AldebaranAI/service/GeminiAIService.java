package com.juanito.project.AldebaranAI.service;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import com.juanito.project.AldebaranAI.dto.request.ChatRequest;
import com.juanito.project.AldebaranAI.dto.response.MessageResponse;
import com.juanito.project.AldebaranAI.model.Conversation;
import com.juanito.project.AldebaranAI.model.Messages;
import com.juanito.project.AldebaranAI.model.SenderType;
import com.juanito.project.AldebaranAI.repo.ConversationRepo;
import com.juanito.project.AldebaranAI.repo.MessagesRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GeminiAIService {

    private static final Logger logger = LoggerFactory.getLogger(GeminiAIService.class);

        private static final String AI_GEMINI_MODEL = "gemini-2.5-flash";

    private final Client client;
    private final MessagesRepo messagesRepo;
    private final ConversationRepo conversationRepo;

    public GeminiAIService(Client client, MessagesRepo messagesRepo, ConversationRepo conversationRepo) {
        this.client = client;
        this.messagesRepo = messagesRepo;
        this.conversationRepo = conversationRepo;
    }

    public List<MessageResponse> createMessages(ChatRequest chatRequest, Long conversationId) {
        try {
            if (chatRequest.getMessage() == null || chatRequest.getMessage().trim().isEmpty()) {
                throw new IllegalArgumentException("Message cannot be empty");
            }

            Conversation conversation = conversationRepo.findById(conversationId)
                    .orElseThrow(() -> new RuntimeException("No conversation found with ID: " + conversationId));

            ///Create User Message
            Messages userMessage = new Messages();
            userMessage.setConversation(conversation);
            userMessage.setContent(chatRequest.getMessage().trim());
            userMessage.setSenderType(SenderType.USER);
            userMessage.setCreatedAt(chatRequest.getCreatedAt() != null ? chatRequest.getCreatedAt() : new Date());

            messagesRepo.save(userMessage);
            logger.info("User message saved for conversation: {}", conversationId);

            ///Create AI Message
            try {
                GenerateContentResponse aiResponse = generateAIResponse(chatRequest.getMessage());

                if (aiResponse != null && aiResponse.text() != null && !aiResponse.text().trim().isEmpty()) {
                    Messages aiMessages = new Messages();
                    aiMessages.setConversation(conversation);
                    aiMessages.setContent(aiResponse.text().trim());
                    aiMessages.setSenderType(SenderType.AI);
                    aiMessages.setCreatedAt(new Date());

                    messagesRepo.save(aiMessages);
                    logger.info("AI Message saved for conversation: {}", conversationId);
                } else {
                    logger.warn("AI Response is empty or null: {}", conversationId);
                }
            } catch (Exception e) {
                    Messages aiErrorMessages = new Messages();
                    aiErrorMessages.setConversation(conversation);
                    aiErrorMessages.setContent("AI Failed to generate response, Please try again");
                    aiErrorMessages.setSenderType(SenderType.AI);
                    aiErrorMessages.setCreatedAt(new Date());

                    messagesRepo.save(aiErrorMessages);
                    logger.info("AI Failed messages saved for conversation: {}", conversationId);
            }

            List<Messages> allMessages = messagesRepo.findByConversation_ConversationIdOrderByCreatedAtAsc(conversationId);
            return allMessages.stream()
                    .map(m -> new MessageResponse(m.getContent(), m.getSenderType(), m.getCreatedAt()))
                    .collect(Collectors.toList());

        } catch (IllegalArgumentException e) {
            logger.error("Invalid input for conversation {}: {}", conversationId, e.getMessage());
            throw e;
        } catch (RuntimeException e) {
            logger.error("Failed to create messages for conversation {}: {}", conversationId, e.getMessage());
            throw e;
        } catch (Exception e) {
            logger.error("Unexpected error creating messages: {}", e.getMessage());
            throw new RuntimeException("Failed to process chat request", e);
        }
    }

    private GenerateContentResponse generateAIResponse(String message) {
        int maxRetries = 3;
        int retryDelay = 1000;

        for (int attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                long startTime = System.currentTimeMillis();
                GenerateContentResponse response = client.models.generateContent(AI_GEMINI_MODEL, message, null);
                long processingTime = System.currentTimeMillis() - startTime;

                logger.info("AI response generated successfully (attempt {}, processing time: {}ms)",
                        attempt, processingTime);
                return response;

            } catch (Exception e) {
                logger.warn("AI response generation failed on attempt {} of {}: {}",
                        attempt, maxRetries, e.getMessage());

                if (attempt == maxRetries) {
                    logger.error("Failed to generate AI response after {} attempts", maxRetries);
                    throw new RuntimeException("AI service unavailable after " + maxRetries + " attempts: " + e.getMessage());
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

    public List<MessageResponse> getAllMessages() {
        try {
            List<Messages> allMessages = messagesRepo.findAll();
            return allMessages.stream()
                    .map(m -> new MessageResponse(m.getContent(), m.getSenderType(), m.getCreatedAt()))
                    .collect(Collectors.toList());
        } catch (Exception e) {
            logger.error("Failed to get all messages: {}", e.getMessage());
            throw new RuntimeException("Failed to retrieve messages", e);
        }
    }

    public List<MessageResponse> getMessageById(Long conversationId) {
        try {
            conversationRepo.findById(conversationId)
                    .orElseThrow(() -> new RuntimeException("No conversation found with ID: " + conversationId));

            List<Messages> messagesListById = messagesRepo.findByConversation_ConversationIdOrderByCreatedAtAsc(conversationId);
            return messagesListById.stream()
                    .map(m -> new MessageResponse(m.getContent(), m.getSenderType(), m.getCreatedAt()))
                    .collect(Collectors.toList());
        } catch (RuntimeException e) {
            logger.error("Failed to get messages for conversation {}: {}", conversationId, e.getMessage());
            throw e;
        } catch (Exception e) {
            logger.error("Unexpected error getting messages: {}", e.getMessage());
            throw new RuntimeException("Failed to retrieve conversation messages", e);
        }
    }
}