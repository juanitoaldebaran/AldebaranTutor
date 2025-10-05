package com.juanito.project.AldebaranTutor.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table (name = "chat_table")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Chat {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long chatId;

    @Column (name = "chat_content", nullable = false, columnDefinition = "TEXT")
    private String chatContent;

    @Column (name = "sender_type")
    @Enumerated (EnumType.STRING)
    private SenderType senderType;

    @Column (name = "created_at")
    private Date createdAt;

}
