package com.juanito.project.AldebaranAI.controller;

import com.juanito.project.AldebaranAI.dto.request.ConversationRequest;
import com.juanito.project.AldebaranAI.model.Conversation;
import com.juanito.project.AldebaranAI.service.ConversationService;
import com.juanito.project.AldebaranAI.util.AuthenticationUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ai/conversations")
public class ConversationController {

    private static final Logger logger = LoggerFactory.getLogger(ConversationController.class);

    private final ConversationService conversationService;
    private final AuthenticationUtil authenticationUtil;

    public ConversationController(ConversationService conversationService, AuthenticationUtil authenticationUtil) {
        this.conversationService = conversationService;
        this.authenticationUtil = authenticationUtil;
    }

    @PostMapping
    public ResponseEntity<?> createConversation(@RequestBody ConversationRequest conversationRequest) {
        try {
            String userEmail = authenticationUtil.getCurrentEmail();
            Conversation newConversation = conversationService.createConversation(userEmail, conversationRequest);
            logger.info("Conversation created successfully: {} for user: {}", newConversation.getName(), userEmail);
            return ResponseEntity.status(HttpStatus.CREATED).body(newConversation);
        } catch (RuntimeException e) {
            logger.error("Failed to create conversation: {}", e.getMessage());
            return ResponseEntity.badRequest().body(new ErrorResponse(e.getMessage()));
        } catch (Exception e) {
            logger.error("Unexpected error creating conversation: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ErrorResponse("Failed to create conversation"));
        }
    }

    @GetMapping
    public ResponseEntity<?> getUserConversations() {
        try {
            String userEmail = authenticationUtil.getCurrentEmail();
            List<Conversation> conversations = conversationService.getConversationsByUserEmail(userEmail);
            return ResponseEntity.ok(conversations);
        } catch (RuntimeException e) {
            logger.error("Failed to fetch user conversations: {}", e.getMessage());
            return ResponseEntity.badRequest().body(new ErrorResponse(e.getMessage()));
        } catch (Exception e) {
            logger.error("Unexpected error fetching conversations: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ErrorResponse("Failed to fetch conversations"));
        }
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchUserConversations(@RequestParam String term) {
        try {
            String userEmail = authenticationUtil.getCurrentEmail();
            List<Conversation> conversations = conversationService.searchUserConversationsByName(userEmail, term);
            return ResponseEntity.ok(conversations);
        } catch (RuntimeException e) {
            logger.error("Failed to search conversations: {}", e.getMessage());
            return ResponseEntity.badRequest().body(new ErrorResponse(e.getMessage()));
        } catch (Exception e) {
            logger.error("Unexpected error searching conversations: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ErrorResponse("Failed to search conversations"));
        }
    }

    @GetMapping("/admin/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> getAllConversations() {
        try {
            List<Conversation> allConversations = conversationService.getAllConversations();
            return ResponseEntity.ok(allConversations);
        } catch (Exception e) {
            logger.error("Failed to fetch all conversations: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ErrorResponse("Failed to fetch conversations"));
        }
    }

    public static class ErrorResponse {
        private String message;
        private long timestamp;

        public ErrorResponse(String message) {
            this.message = message;
            this.timestamp = System.currentTimeMillis();
        }

        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
        public long getTimestamp() { return timestamp; }
        public void setTimestamp(long timestamp) { this.timestamp = timestamp; }
    }
}