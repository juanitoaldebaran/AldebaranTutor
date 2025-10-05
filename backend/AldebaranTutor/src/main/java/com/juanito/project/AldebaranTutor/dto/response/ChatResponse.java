package com.juanito.project.AldebaranTutor.dto.response;

import com.juanito.project.AldebaranTutor.model.SenderType;

import java.util.Date;

public class ChatResponse {
    private String textContent;
    private SenderType senderType;
    private Date createdAt;

    public ChatResponse(String textContent, SenderType senderType, Date createdAt) {
        this.textContent = textContent;
        this.senderType = senderType;
        this.createdAt = createdAt;
    }

    public ChatResponse() {
    }

    public String getTextContent() {
        return textContent;
    }

    public void setTextContent(String textContent) {
        this.textContent = textContent;
    }

    public SenderType getSenderType() {
        return senderType;
    }

    public void setSenderType(SenderType senderType) {
        this.senderType = senderType;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
