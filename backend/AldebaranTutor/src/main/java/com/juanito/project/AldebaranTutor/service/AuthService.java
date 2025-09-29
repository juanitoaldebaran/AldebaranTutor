package com.juanito.project.AldebaranTutor.service;

import com.juanito.project.AldebaranTutor.dto.request.LoginRequest;
import com.juanito.project.AldebaranTutor.dto.request.RegisterRequest;
import com.juanito.project.AldebaranTutor.model.User;
import com.juanito.project.AldebaranTutor.repo.UserRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
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
                logger.error("Email already exists: {}", registerRequest.getEmail());
                throw new RuntimeException("Email already exists, please log in");
            }

            if (userRepo.existsByUserName(registerRequest.getUserName())) {
                logger.error("Username already exists: {}", registerRequest.getUserName());
                throw new RuntimeException("Username already exists, please choose a different one");
            }

            User newUser = new User()
                    .setUserName(registerRequest.getUserName())
                    .setEmail(registerRequest.getEmail().toLowerCase().trim())
                    .setPassword(passwordEncoder.encode(registerRequest.getPassword()))
                    .setActive(true);

            User savedUser = userRepo.save(newUser);
            logger.info("User successfully registered: {}", savedUser.getEmail());
            return savedUser;

        } catch (RuntimeException e) {
            logger.error("Failed to register user: {}", e.getMessage());
            throw e;
        } catch (Exception e) {
            logger.error("Unexpected error during user registration: {}", e.getMessage());
            throw new RuntimeException("Failed to register user", e);
        }
    }

    public User LoginUser(LoginRequest loginRequest) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getEmail().toLowerCase().trim(),
                            loginRequest.getPassword()
                    )
            );

            logger.info("User successfully logged in: {}", loginRequest.getEmail());
            return userRepo.findUserByEmail(loginRequest.getEmail().toLowerCase().trim())
                    .orElseThrow(() -> new RuntimeException("User not found"));

        } catch (BadCredentialsException e) {
            logger.error("Invalid credentials for user: {}", loginRequest.getEmail());
            throw new RuntimeException("Invalid email or password");
        } catch (RuntimeException e) {
            logger.error("Failed to login user: {}", e.getMessage());
            throw e;
        } catch (Exception e) {
            logger.error("Unexpected error during login: {}", e.getMessage());
            throw new RuntimeException("Authentication failed", e);
        }
    }
}