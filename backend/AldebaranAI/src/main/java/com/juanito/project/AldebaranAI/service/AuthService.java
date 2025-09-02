package com.juanito.project.AldebaranAI.service;

import com.juanito.project.AldebaranAI.dto.request.LoginRequest;
import com.juanito.project.AldebaranAI.dto.request.RegisterRequest;
import com.juanito.project.AldebaranAI.model.User;
import com.juanito.project.AldebaranAI.model.UserType;
import com.juanito.project.AldebaranAI.repo.UserRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthService(UserRepo userRepo, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    public User RegisterUser(RegisterRequest registerRequest) {
        try {
            if (userRepo.existsByEmail(registerRequest.getEmail())) {
                logger.error("Email already exist, please log in");
            }

            if (userRepo.existsByUserName(registerRequest.getUserName())) {
                logger.error("Username already exist, please use another username");
            }

            User newUser = new User()
                    .setUserName(registerRequest.getUserName())
                    .setEmail(registerRequest.getEmail())
                    .setPassword(passwordEncoder.encode(registerRequest.getPassword()))
                    .setUserType(UserType.BASIC)
                    .setActive(true);

            return userRepo.save(newUser);
        } catch (RuntimeException e) {
            logger.error("Failed to register user");
            throw new RuntimeException(e.getMessage());
        }
    }

    public User LoginUser(LoginRequest loginRequest) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    loginRequest.getEmail(),
                    loginRequest.getPassword()
            ));

            logger.info("User successfully login", loginRequest.getEmail());

            return userRepo.findUserByEmail(loginRequest.getEmail()).orElseThrow(() -> new RuntimeException("User Not Found"));
        } catch (RuntimeException e) {
            logger.error("Failed to login user");
            throw new RuntimeException(e.getMessage());
        }
    }

}
