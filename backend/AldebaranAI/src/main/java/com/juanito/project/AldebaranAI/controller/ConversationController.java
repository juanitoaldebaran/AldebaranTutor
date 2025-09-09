package com.juanito.project.AldebaranAI.controller;

import com.juanito.project.AldebaranAI.dto.request.ConversationRequest;
import com.juanito.project.AldebaranAI.dto.response.ConversationResponse;
import com.juanito.project.AldebaranAI.dto.response.ErrorResponse;
import com.juanito.project.AldebaranAI.model.Conversation;
import com.juanito.project.AldebaranAI.service.ConversationService;
import com.juanito.project.AldebaranAI.util.AuthenticationUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

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
            ConversationResponse conversationResponse = new ConversationResponse(newConversation);

            return ResponseEntity.status(HttpStatus.CREATED).body(conversationResponse);
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

            List<ConversationResponse> responses = conversations.stream()
                    .map(ConversationResponse::new)
                    .collect(Collectors.toList());

            return ResponseEntity.ok(responses);

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

            List<ConversationResponse> responses = conversations.stream()
                    .map(ConversationResponse::new)
                    .collect(Collectors.toList());

            return ResponseEntity.ok(responses);
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


}