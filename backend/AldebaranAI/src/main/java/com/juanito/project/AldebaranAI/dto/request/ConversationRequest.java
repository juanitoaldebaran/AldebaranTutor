package com.juanito.project.AldebaranAI.dto.request;

public class ConversationRequest {
    private String firstMessage;

    public ConversationRequest(String firstMessage) {
        this.firstMessage = firstMessage;
    }

    public ConversationRequest() {
    }

    public String getFirstMessage() {
        return firstMessage;
    }

    public void setFirstMessage(String firstMessage) {
        this.firstMessage = firstMessage;
    }
}
