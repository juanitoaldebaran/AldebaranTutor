package com.juanito.project.AldebaranAI.dto.response;

import java.util.Date;

public class AIResponse {
    private String content;
    private Date createdAt;
    public AIResponse() {}
    public AIResponse(String content, Date createdAt) {
        this.content = content;
        this.createdAt = createdAt;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
