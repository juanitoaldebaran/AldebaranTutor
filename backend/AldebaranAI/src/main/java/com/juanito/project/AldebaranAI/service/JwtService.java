package com.juanito.project.AldebaranAI.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {
    private static final Logger logger = LoggerFactory.getLogger(JwtService.class);

    @Value("${jwt.secret-key}")
    private String jwtSecret;

    @Value("${jwt.expiration}")
    private long expirationTime;

    public <T> T extractClaims(String jwtToken, Function<Claims, T> claimsResolver) {
        try {
            final Claims claims = extractAllClaims(jwtToken);
            return claimsResolver.apply(claims);
        } catch (Exception e) {
            logger.error("Failed to extract claims: " + e.getMessage());
            throw new RuntimeException("Failed to extract claims", e);
        }
    }

    public Claims extractAllClaims(String jwtToken) {
        try {
            return Jwts.parser()
                    .verifyWith(getSigningKey())
                    .build()
                    .parseSignedClaims(jwtToken)
                    .getPayload();
        } catch (Exception e) {
            logger.error("Failed to extract all claims: " + e.getMessage());
            throw new RuntimeException("Invalid JWT token", e);
        }
    }

    public Date extractExpiration(String jwtToken) {
        try {
            return extractClaims(jwtToken, Claims::getExpiration);
        } catch (Exception e) {
            logger.error("Failed to extract expiration: " + e.getMessage());
            throw new RuntimeException("Failed to extract expiration", e);
        }
    }

    public String extractUsername(String jwtToken) {
        try {
            return extractClaims(jwtToken, Claims::getSubject);
        } catch (Exception e) {
            logger.error("Failed to extract username: " + e.getMessage());
            throw new RuntimeException("Failed to extract username", e);
        }
    }

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public boolean isTokenExpired(String jwtToken) {
        try {
            return extractExpiration(jwtToken).before(new Date());
        } catch (Exception e) {
            logger.error("Failed to check if token expired: " + e.getMessage());
            throw new RuntimeException("Failed to check token expiration", e);
        }
    }

    public boolean isTokenValid(UserDetails userDetails, String jwtToken) {
        try {
            String userName = extractUsername(jwtToken);
            return userDetails.getUsername().equals(userName) && !isTokenExpired(jwtToken);
        } catch (Exception e) {
            logger.error("Failed to check if token valid: " + e.getMessage());
            return false; // Return false instead of throwing exception
        }
    }

    public String generateToken(Map<String, Object> claims, UserDetails userDetails) {
        return buildJwtToken(userDetails, claims);
    }

    public String buildJwtToken(UserDetails userDetails, Map<String, Object> claims) {
        try {
            String token = Jwts.builder()
                    .subject(userDetails.getUsername())
                    .claims(claims)
                    .issuedAt(new Date(System.currentTimeMillis()))
                    .expiration(new Date(System.currentTimeMillis() + expirationTime))
                    .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                    .compact();
            logger.info("JWT token successfully created for user: " + userDetails.getUsername());
            return token;
        } catch (Exception e) {
            logger.error("Failed to build jwt token: " + e.getMessage());
            throw new RuntimeException("Failed to build JWT token", e);
        }
    }

    public SecretKey getSigningKey() {
        try {
            byte[] keyBytes = Decoders.BASE64.decode(jwtSecret);
            return Keys.hmacShaKeyFor(keyBytes);
        } catch (Exception e) {
            logger.error("Failed to generate secret key: " + e.getMessage());
            throw new RuntimeException("Failed to generate secret key", e);
        }
    }

    public long getExpirationTime() {
        return expirationTime;
    }
}