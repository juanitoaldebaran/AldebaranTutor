package com.juanito.project.AldebaranAI.model;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table (name = "messages_table")
public class Messages {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long messagesId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn (name = "conversation_id")
    private Conversation conversation;

    @Column (name = "content", nullable = false, columnDefinition = "TEXT")
    private String content;

    @Enumerated (EnumType.STRING)
    @Column (name = "sender_type", nullable = false)
    private SenderType senderType;

    @Temporal(TemporalType.TIMESTAMP)
    @Column (name = "created_at", nullable = false)
    private Date createdAt;

    @Column (name = "token_count")
    private Long tokenCount;

    @Column (name = "processing_time_ms")
    private Long processingTimeMs;

    public Messages(Long messagesId, Conversation conversation, String content, SenderType senderType, Date createdAt, Long tokenCount, Long processingTimeMs) {
        this.messagesId = messagesId;
        this.conversation = conversation;
        this.content = content;
        this.senderType = senderType;
        this.createdAt = createdAt;
        this.tokenCount = tokenCount;
        this.processingTimeMs = processingTimeMs;
    }

    public Messages() {
    }

    public Long getMessagesId() {
        return messagesId;
    }

    public void setMessagesId(Long messagesId) {
        this.messagesId = messagesId;
    }

    public Conversation getConversation() {
        return conversation;
    }

    public void setConversation(Conversation conversation) {
        this.conversation = conversation;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
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

    public Long getTokenCount() {
        return tokenCount;
    }

    public void setTokenCount(Long tokenCount) {
        this.tokenCount = tokenCount;
    }

    public Long getProcessingTimeMs() {
        return processingTimeMs;
    }

    public void setProcessingTimeMs(Long processingTimeMs) {
        this.processingTimeMs = processingTimeMs;
    }
}
