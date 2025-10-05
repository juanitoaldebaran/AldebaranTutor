package com.juanito.project.AldebaranTutor.dto.request;

import java.util.Date;

public class ChatRequest {
    private String chatText;
    private Date createdAt;

    public ChatRequest(String chatText, Date createdAt) {
        this.chatText = chatText;
        this.createdAt = createdAt;
    }

    public String getChatText() {
        return chatText;
    }

    public void setChatText(String chatText) {
        this.chatText = chatText;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
