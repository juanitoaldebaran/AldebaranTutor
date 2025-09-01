package com.juanito.project.AldebaranAI.repo;

import com.juanito.project.AldebaranAI.model.User;
import com.juanito.project.AldebaranAI.model.UserType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {
    List<User> findByIsActiveTrue();
    List<User> findByUserType(UserType userType);
    boolean existsByEmail(String email);
    boolean existsByUserName(String userName);
    Optional<User> findUserById(Long id);
    Optional<User> findUserByUsername(String userName);
    Optional<User> findUserByEmail(String email);
    Optional<User> findByUserNameAndIsActiveTrue(String userName);

    @Query("SELECT u FROM User u WHERE u.createdAt >= :since")
    List<User> findUsersCreatedSince(@Param("since") LocalDateTime since);

    @Query("SELECT COUNT(u) FROM User u WHERE u.userType = :userType")
    long countByUserType(@Param("userType") UserType userType);

}
