package com.juanito.project.AldebaranAI.dto.response;

import com.juanito.project.AldebaranAI.model.User;

import java.util.Date;

public class UserResponse {
    private String userName;
    private String email;
    private Date createdAt;

    public UserResponse(User user) {
        this.userName = user.getUserName();
        this.email = user.getEmail();
        this.createdAt = user.getCreatedAt();
    }

    public UserResponse() {
    }

    public String getUserName() {
        return userName;
    }

    public UserResponse setUserName(String userName) {
        this.userName = userName;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public UserResponse setEmail(String email) {
        this.email = email;
        return this;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public UserResponse setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
        return this;
    }
}
