package com.juanito.project.AldebaranTutor.repo;

import com.juanito.project.AldebaranTutor.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {
    List<User> findByIsActiveTrue();
    boolean existsByEmail(String email);
    boolean existsByUserName(String userName);
    Optional<User> findUserById(Long id);
    Optional<User> findUserByUserName(String userName);
    Optional<User> findUserByEmail(String email);
    Optional<User> findByUserNameAndIsActiveTrue(String userName);


}
