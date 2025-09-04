package com.juanito.project.AldebaranAI.dto.response;

import com.juanito.project.AldebaranAI.model.Conversation;

import java.util.Date;

public class ConversationResponse {
    private Long conversationId;
    private String name;
    private Date createdAt;

    public ConversationResponse(Conversation conversation) {
        this.conversationId = conversation.getConversationId();
        this.name = conversation.getName();
        this.createdAt = conversation.getCreatedAt();
    }

    public ConversationResponse() {
    }

    public Long getConversationId() {
        return conversationId;
    }

    public void setConversationId(Long conversationId) {
        this.conversationId = conversationId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
