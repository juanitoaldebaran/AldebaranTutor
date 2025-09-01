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
    private Long id;

    @ManyToOne
    @JoinColumn (name = "user_id")
    private User user;

    @Column (name = "title")
    private String title;

    @CreationTimestamp
    @Column (name = "created_at")
    private Date createdAt;

    @OneToMany (mappedBy = "conversation", cascade = CascadeType.ALL)
    private List<Messages> messagesList;

    public Conversation(Long id, User user, String title, Date createdAt, List<Messages> messagesList) {
        this.id = id;
        this.user = user;
        this.title = title;
        this.createdAt = createdAt;
        this.messagesList = messagesList;
    }

    public Conversation() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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
