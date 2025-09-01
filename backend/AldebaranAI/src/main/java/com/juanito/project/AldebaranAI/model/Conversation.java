package com.juanito.project.AldebaranAI.model;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;
import java.util.List;

@Entity
@Table (name = "conversation_table")
public class Conversation {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long conversationId;

    @ManyToOne
    @JoinColumn (name = "user_id")
    private User user;

    @Column (name = "name")
    private String name;

    @CreationTimestamp
    @Column (name = "created_at")
    private Date createdAt;

    @OneToMany (mappedBy = "conversation", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Messages> messagesList;

    public Conversation(Long conversationId, User user, String name, Date createdAt, List<Messages> messagesList) {
        this.conversationId = conversationId;
        this.user = user;
        this.name = name;
        this.createdAt = createdAt;
        this.messagesList = messagesList;
    }

    public Conversation() {
    }

    public Long getConversationId() {
        return conversationId;
    }

    public void setConversationId(Long conversationId) {
        this.conversationId = conversationId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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

    public List<Messages> getMessagesList() {
        return messagesList;
    }

    public void setMessagesList(List<Messages> messagesList) {
        this.messagesList = messagesList;
    }
}
