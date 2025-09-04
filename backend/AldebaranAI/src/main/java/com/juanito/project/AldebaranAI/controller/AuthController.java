package com.juanito.project.AldebaranAI.controller;

import com.juanito.project.AldebaranAI.dto.request.LoginRequest;
import com.juanito.project.AldebaranAI.dto.request.RegisterRequest;
import com.juanito.project.AldebaranAI.dto.response.LoginResponse;
import com.juanito.project.AldebaranAI.dto.response.UserResponse;
import com.juanito.project.AldebaranAI.service.AuthService;
import com.juanito.project.AldebaranAI.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.juanito.project.AldebaranAI.model.User;

@RestController
public class AuthController {
    private final AuthService authService;
    private final JwtService jwtService;

    @Autowired
    public AuthController(AuthService authService, JwtService jwtService) {
        this.authService = authService;
        this.jwtService = jwtService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        try {
            User newUser = authService.RegisterUser(registerRequest);

            UserResponse userResponse = new UserResponse(newUser);
            return ResponseEntity.status(HttpStatus.CREATED).body(userResponse);

        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        try {
            User loginUser = authService.LoginUser(loginRequest);
            String jwtToken = jwtService.generateToken(loginUser);

            UserResponse userResponse = new UserResponse(loginUser);

            LoginResponse loginResponse = new LoginResponse()
                    .setUserResponse(userResponse)
                    .setExpiresIn(jwtService.getExpirationTime())
                    .setJwtToken(jwtToken);

            return ResponseEntity.ok(loginResponse);

        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
}
