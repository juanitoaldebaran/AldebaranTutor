package com.juanito.project.AldebaranAI.controller;

import com.juanito.project.AldebaranAI.dto.request.ChatRequest;
import com.juanito.project.AldebaranAI.dto.response.ErrorResponse;
import com.juanito.project.AldebaranAI.dto.response.MessageResponse;
import com.juanito.project.AldebaranAI.model.SenderType;
import com.juanito.project.AldebaranAI.service.ConversationService;
import com.juanito.project.AldebaranAI.service.GeminiAIService;
import com.juanito.project.AldebaranAI.util.AuthenticationUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/ai/conversations/{conversationId}/messages")
public class MessageController {

    private static final Logger logger = LoggerFactory.getLogger(MessageController.class);

    private final GeminiAIService geminiAIService;
    private final ConversationService conversationService;
    private final AuthenticationUtil authenticationUtil;

    public MessageController(GeminiAIService geminiAIService, ConversationService conversationService, AuthenticationUtil authenticationUtil) {
        this.geminiAIService = geminiAIService;
        this.conversationService = conversationService;
        this.authenticationUtil = authenticationUtil;
    }

    @PostMapping
    public ResponseEntity<?> sendMessage(@RequestBody ChatRequest chatRequest, @PathVariable Long conversationId) {
        try {
            String userEmail = authenticationUtil.getCurrentEmail();

            if (!conversationService.isConversationOwnedByUser(conversationId, userEmail)) {
                logger.warn("User {} attempted to access conversation {} they don't own", userEmail, conversationId);
                return ResponseEntity.status(HttpStatus.FORBIDDEN)
                        .body(new ErrorResponse("Access denied: You don't own this conversation"));
            }

            List<MessageResponse> messages = geminiAIService.createMessages(chatRequest, conversationId);
            logger.info("Messages created successfully for conversation: {} by user: {}", conversationId, userEmail);
            return ResponseEntity.ok(messages);

        } catch (RuntimeException e) {
            logger.error("Failed to create messages for conversation {}: {}", conversationId, e.getMessage());
            return ResponseEntity.badRequest().body(new ErrorResponse(e.getMessage()));
        } catch (Exception e) {
            logger.error("Unexpected error creating messages: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(List.of(new MessageResponse("Error occurred while processing your message", SenderType.AI, new Date())));
        }
    }

    @GetMapping
    public ResponseEntity<?> getConversationMessages(@PathVariable Long conversationId) {
        try {
            String userEmail = authenticationUtil.getCurrentEmail();

            if (!conversationService.isConversationOwnedByUser(conversationId, userEmail)) {
                logger.warn("User {} attempted to access messages for conversation {} they don't own", userEmail, conversationId);
                return ResponseEntity.status(HttpStatus.FORBIDDEN)
                        .body(new ErrorResponse("Access denied: You don't own this conversation"));
            }

            List<MessageResponse> messages = geminiAIService.getMessageById(conversationId);
            return ResponseEntity.ok(messages);

        } catch (RuntimeException e) {
            logger.error("Failed to get messages for conversation {}: {}", conversationId, e.getMessage());
            return ResponseEntity.badRequest().body(new ErrorResponse(e.getMessage()));
        } catch (Exception e) {
            logger.error("Unexpected error getting messages: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ErrorResponse("Failed to retrieve messages"));
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllMessages() {
        try {
            List<MessageResponse> allMessages = geminiAIService.getAllMessages();
            return ResponseEntity.ok(allMessages);
        } catch (Exception e) {
            logger.error("Failed to get all messages: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ErrorResponse("Failed to retrieve messages"));
        }
    }

}