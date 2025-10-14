package com.juanito.project.AldebaranTutor.controller;

import com.juanito.project.AldebaranTutor.dto.request.ChatRequest;
import com.juanito.project.AldebaranTutor.dto.response.ChatResponse;
import com.juanito.project.AldebaranTutor.service.QuizAIService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/ai/chat")
public class AIChatbotController {
    private static final Logger logger = LoggerFactory.getLogger(AIChatbotController.class);
    private final QuizAIService quizAIService;

    @Autowired
    public AIChatbotController(QuizAIService quizAIService) {
        this.quizAIService = quizAIService;
    }

    @PostMapping(value = "/send", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<?> sendUnifiedMessage(
            @RequestPart(value = "chatText", required = false) String chatText,
            @RequestPart(value = "file", required = false) MultipartFile file) {

        boolean noText = (chatText == null || chatText.trim().isEmpty());
        boolean noFile = (file == null || file.isEmpty());

        if (noText && noFile) {
            return ResponseEntity.badRequest().body(createErrorResponse("Message cannot be empty. Send either 'chatText', a 'file', or both."));
        }

        try {
            ChatRequest chatRequest = new ChatRequest();
            chatRequest.setChatText(noText ? null : chatText.trim());
            chatRequest.setFile(noFile ? null : file);

            List<ChatResponse> chatHistory = quizAIService.createChat(chatRequest);
            return ResponseEntity.ok(chatHistory);

        } catch (Exception e) {
            logger.error("Error processing chat request: {}", e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(createErrorResponse("Failed to process message: " + e.getMessage()));
        }
    }

    @GetMapping("/history")
    public ResponseEntity<?> getChatHistory() {
        try {
            logger.info("Fetching chat history");
            List<ChatResponse> chatHistory = quizAIService.fetchAllChat();
            return ResponseEntity.ok(chatHistory);
        } catch (Exception e) {
            logger.error("Error fetching chat history: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(createErrorResponse("Failed to fetch chat history: " + e.getMessage()));
        }
    }

    @DeleteMapping("/clear")
    public ResponseEntity<?> clearChatHistory() {
        try {
            logger.info("Clearing chat history");
            quizAIService.clearAllChats();
            Map<String, String> response = new HashMap<>();
            response.put("message", "Chat history cleared successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Error clearing chat history: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(createErrorResponse("Failed to clear chat history: " + e.getMessage()));
        }
    }

    private Map<String, String> createErrorResponse(String message) {
        Map<String, String> error = new HashMap<>();
        error.put("error", message);
        return error;
    }

}