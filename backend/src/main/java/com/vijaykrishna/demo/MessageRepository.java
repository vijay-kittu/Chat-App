package com.vijaykrishna.demo;

import com.vijaykrishna.demo.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
}
