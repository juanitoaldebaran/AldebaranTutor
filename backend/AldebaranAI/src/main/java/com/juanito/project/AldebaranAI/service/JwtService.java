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

import java.security.Key;
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
        } catch (RuntimeException e) {
            logger.error("Failed to extract claims");
            throw new RuntimeException(e.getMessage());
        }
    }

    public Claims extractAllClaims(String jwtToken) {
        try {
            return Jwts.parser()
                    .setSigningKey(getSigningKey())
                    .build()
                    .parseClaimsJws(jwtToken)
                    .getBody();
        } catch (RuntimeException e) {
            logger.error("Failed to extract all claims");
            throw new RuntimeException(e.getMessage());
        }
    }

    public Date extractExpiration(String jwtToken) {
        try {
            return extractClaims(jwtToken, Claims::getExpiration);
        } catch (RuntimeException e) {
            logger.error("Failed to extract expiration");
            throw new RuntimeException(e.getMessage());
        }
    }

    public String extractUsername(String jwtToken) {
        try {
            return extractClaims(jwtToken, Claims::getSubject);
        } catch (RuntimeException e) {
            logger.error("Failed to extract username");
            throw new RuntimeException(e.getMessage());
        }
    }



    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public boolean isTokenExpired(String jwtToken) {
        try {
            return extractExpiration(jwtToken).before(new Date(System.currentTimeMillis()));
        } catch (RuntimeException e) {
            logger.error("Failed to check if token expired");
            throw new RuntimeException(e.getMessage());
        }
    }

    public boolean isTokenValid(UserDetails userDetails, String jwtToken) {
        try {
            String userName = extractUsername(jwtToken);

            return userDetails.equals(userName) && !isTokenExpired(jwtToken);
        } catch (RuntimeException e) {
            logger.error("Failed to check if token valid");
            throw new RuntimeException(e.getMessage());
        }
    }

    public String generateToken(Map<String, Object> claims, UserDetails userDetails) {
        return buildJwtToken(userDetails, claims);
    }
    public String buildJwtToken(UserDetails userDetails, Map<String, Object> claims) {
        try {
            String token = Jwts.builder()
                    .setSubject(userDetails.getUsername())
                    .setClaims(claims)
                    .setIssuedAt(new Date(System.currentTimeMillis()))
                    .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
                    .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                    .compact();
            logger.info("jwt token successfully created!");
            return token;
        } catch (RuntimeException e) {
            logger.error("Failed to build jwt token");
            throw new RuntimeException(e.getMessage());
        }
    }

    public Key getSigningKey() {
        try {
            byte[] byteKey = Decoders.BASE64.decode(jwtSecret);
            return Keys.hmacShaKeyFor(byteKey);
        } catch (RuntimeException e) {
            logger.error("Failed to generate secret key");
            throw new RuntimeException(e.getMessage());
        }
    }

    public long getExpirationTime() {
        return expirationTime;
    }
}
