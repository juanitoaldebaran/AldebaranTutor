package com.juanito.project.AldebaranTutor.dto.request;

import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

public class ChatRequest {
    private String chatText;
    private MultipartFile file;
    private Date createdAt;

    public ChatRequest() {
    }

    public ChatRequest(String chatText, MultipartFile file, Date createdAt) {
        this.chatText = chatText;
        this.file = file;
        this.createdAt = createdAt;
    }

    public String getChatText() {
        return chatText;
    }

    public void setChatText(String chatText) {
        this.chatText = chatText;
    }

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
