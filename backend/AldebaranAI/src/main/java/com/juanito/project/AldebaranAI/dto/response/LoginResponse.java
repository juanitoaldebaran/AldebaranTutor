package com.juanito.project.AldebaranAI.dto.response;

public class LoginResponse {
    private String jwtToken;
    private long expiresIn;

    private UserResponse userResponse;

    public LoginResponse(String jwtToken, long expiresIn) {
        this.jwtToken = jwtToken;
        this.expiresIn = expiresIn;
    }

    public LoginResponse() {
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public LoginResponse setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
        return this;
    }

    public Long getExpiresIn() {
        return expiresIn;
    }

    public LoginResponse setExpiresIn(long expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }

    public UserResponse getUserResponse() {
        return userResponse;
    }

    public LoginResponse setUserResponse(UserResponse userResponse) {
        this.userResponse = userResponse;
        return this;
    }
}
