package com.juanito.project.AldebaranAI.model;

import java.util.Date;
import java.util.List;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table (name = "user_table")
public class User {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long id;

    @Column (name = "username", unique = true)
    private String userName;

    @Column (name = "email", unique = true)
    private String email;

    @Column (name = "user_type")
    @Enumerated (EnumType.STRING)
    private UserType userType;

    @OneToMany (mappedBy = "user", cascade = CascadeType.ALL)
    private List<Conversation> conversationList;

    @CreationTimestamp
    @Column (name = "created_at")
    private Date createdAt;

    public User(Long id, String userName, String email, UserType userType, List<Conversation> conversationList, Date createdAt) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.userType = userType;
        this.conversationList = conversationList;
        this.createdAt = createdAt;
    }

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }

    public List<Conversation> getConversationList() {
        return conversationList;
    }

    public void setConversationList(List<Conversation> conversationList) {
        this.conversationList = conversationList;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
