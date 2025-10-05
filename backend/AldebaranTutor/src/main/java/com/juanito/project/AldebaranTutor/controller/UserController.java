package com.juanito.project.AldebaranTutor.controller;

import com.juanito.project.AldebaranTutor.dto.request.LoginRequest;
import com.juanito.project.AldebaranTutor.dto.request.RegisterRequest;
import com.juanito.project.AldebaranTutor.dto.response.LoginResponse;
import com.juanito.project.AldebaranTutor.dto.response.UserResponse;
import com.juanito.project.AldebaranTutor.model.User;
import com.juanito.project.AldebaranTutor.service.AuthService;
import com.juanito.project.AldebaranTutor.service.JwtService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    private final AuthService authService;
    private final JwtService jwtService;
    private final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    public UserController(AuthService authService, JwtService jwtService) {
        this.authService = authService;
        this.jwtService = jwtService;
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponse> signUpUser(@RequestBody RegisterRequest createUserRequest) {
        try {
            User newUser = authService.RegisterUser(createUserRequest);

            UserResponse savedUserResponse = new UserResponse(newUser);
            logger.info("Successfully create a new user");

            return new ResponseEntity<>(savedUserResponse, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginUserRequest) {
        try {
            User loginUser = authService.LoginUser(loginUserRequest);
            String jwtToken = jwtService.generateToken(loginUser);

            UserResponse newUserResponse = new UserResponse(loginUser);

            LoginResponse loginUserResponse = new LoginResponse();
            loginUserResponse.setJwtToken(jwtToken);
            loginUserResponse.setExpiresIn(jwtService.getExpirationTime());
            loginUserResponse.setUserResponse(newUserResponse);

            return new ResponseEntity<>(loginUserResponse, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
}
