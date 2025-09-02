package com.juanito.project.AldebaranAI.model;

import java.util.*;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table (name = "user_table")
public class User implements UserDetails {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long id;

    @Column (name = "username", unique = true)
    private String userName;

    @Column (name = "email", unique = true)
    private String email;

    @Column(name = "password")
    private String password;

    @Column (name = "user_type")
    @Enumerated (EnumType.STRING)
    private UserType userType;

    @OneToMany (mappedBy = "user", cascade = CascadeType.ALL)
    private List<Conversation> conversationList;

    @CreationTimestamp
    @Column (name = "created_at")
    private Date createdAt;

    @Column (name = "is_active")
    private boolean isActive;

    public User(Long id, String userName, String email, UserType userType, List<Conversation> conversationList, String password, Date createdAt, boolean isActive) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.userType = userType;
        this.conversationList = conversationList;
        this.password = password;
        this.createdAt = createdAt;
        this.isActive = isActive;
    }

    public User() {
    }

    public Long getId() {
        return id;
    }

    public User setId(Long id) {
        this.id = id;
        return this;
    }

    public String getUserName() {
        return userName;
    }

    public User setUserName(String userName) {
        this.userName = userName;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public User setEmail(String email) {
        this.email = email;
        return this;
    }

    public UserType getUserType() {
        return userType;
    }

    public User setUserType(UserType userType) {
        this.userType = userType;
        return this;
    }

    public List<Conversation> getConversationList() {
        return conversationList;
    }

    public void setConversationList(List<Conversation> conversationList) {
        this.conversationList = conversationList;
    }

    public User setPassword(String password) {
        this.password = password;
        return this;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public User setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
        return this;
    }

    public boolean isActive() {
        return isActive;
    }

    public User setActive(boolean active) {
        this.isActive = active;
        return this;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(userType.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
