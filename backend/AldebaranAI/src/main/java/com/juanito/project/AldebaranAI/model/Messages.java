package com.juanito.project.AldebaranAI.model;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table (name = "messages_table")
public class Messages {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn (name = "conversation_id")
    private Conversation conversation;

    @Column (name = "content")
    private String content;

    @Column (name = "sender_type")
    @Enumerated (EnumType.STRING)
    private SenderType senderType;

    @CreationTimestamp
    @Column (name = "created_at")
    private Date createdAt;

    public Messages(Long id, Conversation conversation, String content, SenderType senderType, Date createdAt) {
        this.id = id;
        this.conversation = conversation;
        this.content = content;
        this.senderType = senderType;
        this.createdAt = createdAt;
    }

    public Messages() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
}
