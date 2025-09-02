package com.juanito.project.AldebaranAI.dto.request;

import com.juanito.project.AldebaranAI.model.UserType;

public class RegisterRequest {
    private String userName;
    private String email;
    private String password;
    private UserType userType;

    public RegisterRequest(String userName, String email, String password, UserType userType) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.userType = userType;
    }

    public RegisterRequest() {
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }
}
