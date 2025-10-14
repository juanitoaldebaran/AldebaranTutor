package com.juanito.project.AldebaranTutor.controller;

import com.juanito.project.AldebaranTutor.dto.response.AIQuizResponse;
import com.juanito.project.AldebaranTutor.model.Level;
import com.juanito.project.AldebaranTutor.model.Sector;
import com.juanito.project.AldebaranTutor.service.QuizAIService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/quiz")
public class QuizAIController {
    private static final Logger logger = LoggerFactory.getLogger(QuizAIController.class);
    private final QuizAIService quizAIService;

    @Autowired
    public QuizAIController(QuizAIService quizAIService) {
        this.quizAIService = quizAIService;
    }

    @PostMapping ("/it")
    public ResponseEntity<?> generateITQuiz(@RequestParam(defaultValue = "EASY") String levelName) {
        try {
            logger.info("Generating IT Quiz for level: {}", levelName);
            Level levelQuiz = Level.valueOf(levelName.toUpperCase());
            AIQuizResponse aiItResponse = quizAIService.generateResponse(Sector.IT, levelQuiz);

            return new ResponseEntity<>(aiItResponse, HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("Failed to generate IT Quiz", e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/finance")
    public ResponseEntity<?> generateFinanceQuiz(@RequestParam(defaultValue = "EASY") String levelName) {
        try {
            logger.info("Generating Finance Quiz for level: {}", levelName);
            Level level = Level.valueOf(levelName.toUpperCase());
            AIQuizResponse aiFinanceResponse = quizAIService.generateResponse(Sector.FINANCE, level);

            return new ResponseEntity<>(aiFinanceResponse ,HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("Failed to generate finance quiz", e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/engineering")
    public ResponseEntity<?> generateEngineeringQuiz(@RequestParam(defaultValue = "EASY") String levelName) {
        try {
            logger.info("Generating Engineering Quiz for level: {}", levelName);
            Level level = Level.valueOf(levelName.toUpperCase());
            AIQuizResponse aiEngineeringResponse = quizAIService.generateResponse(Sector.ENGINEERING, level);

            return new ResponseEntity<>(aiEngineeringResponse ,HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("Failed to generate engineering quiz", e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
