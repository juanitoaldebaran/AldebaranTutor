package com.juanito.project.AldebaranTutor.repo;

import com.juanito.project.AldebaranTutor.model.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatRepo extends JpaRepository<Chat, Long> {
    List<Chat> findAllByOrderByCreatedAtAsc();
}
