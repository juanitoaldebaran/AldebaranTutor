package com.juanito.project.AldebaranAI.repo;

import com.juanito.project.AldebaranAI.model.Conversation;
import org.springframework.data.jpa.repository.JpaRepository;
import com.juanito.project.AldebaranAI.model.User;

import java.util.List;

public interface ConversationRepo extends JpaRepository<Conversation, Long> {

    boolean existsByName(String name);
    List<Conversation> findByUser(User user);
    Conversation findByName(String name);

    List<Conversation> findByNameContainingIgnoreCase(String name);
}
