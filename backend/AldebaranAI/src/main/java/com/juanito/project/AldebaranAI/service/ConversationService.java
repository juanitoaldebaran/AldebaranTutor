package com.juanito.project.AldebaranAI.service;

import com.juanito.project.AldebaranAI.dto.request.ConversationRequest;
import com.juanito.project.AldebaranAI.model.Conversation;
import com.juanito.project.AldebaranAI.model.User;
import com.juanito.project.AldebaranAI.repo.ConversationRepo;
import com.juanito.project.AldebaranAI.repo.UserRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ConversationService {

    private static final Logger logger = LoggerFactory.getLogger(ConversationService.class);

    private final ConversationRepo conversationRepo;
    private final UserRepo userRepo;

    public ConversationService(ConversationRepo conversationRepo, UserRepo userRepo) {
        this.conversationRepo = conversationRepo;
        this.userRepo = userRepo;
    }

    public Conversation createConversation(String userEmail, ConversationRequest conversationRequest) {
        try {
            User user = userRepo.findUserByEmail(userEmail)
                    .orElseThrow(() -> new RuntimeException("No user found with email: " + userEmail));

            String contentTitle = generateConversationTitle(conversationRequest);

            Conversation conversation = new Conversation();
            conversation.setName(contentTitle);
            conversation.setUser(user);
            conversation.setCreatedAt(new Date());

            Conversation savedConversation = conversationRepo.save(conversation);
            logger.info("Conversation created successfully: {} for user: {}", savedConversation.getName(), userEmail);
            return savedConversation;

        } catch (RuntimeException e) {
            logger.error("Failed to create conversation for user {}: {}", userEmail, e.getMessage());
            throw e;
        } catch (Exception e) {
            logger.error("Unexpected error creating conversation: {}", e.getMessage());
            throw new RuntimeException("Failed to create conversation", e);
        }
    }

    private String generateConversationTitle(ConversationRequest conversationRequest) {
        if (conversationRequest.getFirstMessage() == null || conversationRequest.getFirstMessage().isBlank()) {
            return "New Conversation";
        }

        String[] titleWords = conversationRequest.getFirstMessage().split("\\s+");
        String[] limitedWords = titleWords.length > 5 ?
                java.util.Arrays.copyOfRange(titleWords, 0, 5) : titleWords;
        return String.join(" ", limitedWords);
    }

    public List<Conversation> getConversationsByUserEmail(String userEmail) {
        try {
            User user = userRepo.findUserByEmail(userEmail)
                    .orElseThrow(() -> new RuntimeException("User not found with email: " + userEmail));
            List<Conversation> conversations = conversationRepo.findByUser(user);
            logger.info("Found {} conversations for user: {}", conversations.size(), userEmail);
            return conversations;
        } catch (RuntimeException e) {
            logger.error("Failed to get conversations for user {}: {}", userEmail, e.getMessage());
            throw e;
        } catch (Exception e) {
            logger.error("Unexpected error getting user conversations: {}", e.getMessage());
            throw new RuntimeException("Failed to get user conversations", e);
        }
    }

    public List<Conversation> searchUserConversationsByName(String userEmail, String searchTerm) {
        try {
            if (searchTerm == null || searchTerm.trim().isEmpty()) {
                throw new RuntimeException("Search term cannot be empty");
            }

            User user = userRepo.findUserByEmail(userEmail)
                    .orElseThrow(() -> new RuntimeException("User not found with email: " + userEmail));

            // Get user's conversations that match the search term
            List<Conversation> allUserConversations = conversationRepo.findByUser(user);
            return allUserConversations.stream()
                    .filter(conv -> conv.getName().toLowerCase().contains(searchTerm.toLowerCase()))
                    .toList();
        } catch (RuntimeException e) {
            logger.error("Failed to search conversations for user {} with term '{}': {}", userEmail, searchTerm, e.getMessage());
            throw e;
        } catch (Exception e) {
            logger.error("Unexpected error during conversation search: {}", e.getMessage());
            throw new RuntimeException("Failed to search conversations", e);
        }
    }

    public boolean isConversationOwnedByUser(Long conversationId, String userEmail) {
        try {
            Optional<Conversation> conversation = conversationRepo.findById(conversationId);
            if (conversation.isEmpty()) {
                return false;
            }
            return conversation.get().getUser().getEmail().equals(userEmail);
        } catch (Exception e) {
            logger.error("Error checking conversation ownership: {}", e.getMessage());
            return false;
        }
    }

    // Admin-only methods (keep for admin functionality)
    public List<Conversation> getAllConversations() {
        try {
            return conversationRepo.findAll();
        } catch (Exception e) {
            logger.error("Failed to fetch all conversations: {}", e.getMessage());
            throw new RuntimeException("Failed to fetch conversations", e);
        }
    }

    public List<Conversation> searchConversationByName(String searchTerm) {
        try {
            if (searchTerm == null || searchTerm.trim().isEmpty()) {
                throw new RuntimeException("Search term cannot be empty");
            }
            return conversationRepo.findByNameContainingIgnoreCase(searchTerm.trim());
        } catch (RuntimeException e) {
            logger.error("Failed to search conversations with term '{}': {}", searchTerm, e.getMessage());
            throw e;
        } catch (Exception e) {
            logger.error("Unexpected error during conversation search: {}", e.getMessage());
            throw new RuntimeException("Failed to search conversations", e);
        }
    }
}