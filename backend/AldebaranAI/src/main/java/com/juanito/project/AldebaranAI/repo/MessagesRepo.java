package com.juanito.project.AldebaranAI.repo;

import com.juanito.project.AldebaranAI.model.Messages;
import com.juanito.project.AldebaranAI.model.SenderType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface MessagesRepo extends JpaRepository<Messages, Long> {

    List<Messages> findByConversationConversationIdOrderByCreatedAtAsc(Long conversationId);
    List<Messages> findByConversationConversationIdOrderByCreatedAtDesc(Long conversationId);

    Page<Messages> findByConversationConversationIdOrderByCreatedAtDesc(Long conversationId, Pageable pageable);

    @Query("SELECT m FROM Messages m WHERE m.conversation.conversationId = :conversationId ORDER BY m.createdAt DESC")
    List<Messages> findRecentMessages(@Param("conversationId") Long conversationId, Pageable pageable);

    List<Messages> findByConversationConversationIdAndSenderType(Long conversationId, SenderType senderType);

    long countByConversationConversationId(Long conversationId);

    @Query("SELECT SUM(m.tokenCount) FROM Messages m WHERE m.conversation.user.id = :userId " +
            "AND m.createdAt >= :since AND m.tokenCount IS NOT NULL")
    Long sumTokensByUserSince(@Param("userId") Long userId, @Param("since") LocalDateTime since);

    @Query("SELECT AVG(m.processingTimeMs) FROM Messages m WHERE m.senderType = 'AI' " +
            "AND m.createdAt >= :since AND m.processingTimeMs IS NOT NULL")
    Double averageAIResponseTime(@Param("since") LocalDateTime since);

    @Query("SELECT m FROM Messages m WHERE m.conversation.user.id = :userId " +
            "AND LOWER(m.content) LIKE LOWER(CONCAT('%', :searchTerm, '%'))")
    List<Messages> searchUserMessages(@Param("userId") Long userId,
                                      @Param("searchTerm") String searchTerm);
}