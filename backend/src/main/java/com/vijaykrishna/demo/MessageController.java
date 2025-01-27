package com.vijaykrishna.demo;

import com.vijaykrishna.demo.Message;
import com.vijaykrishna.demo.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from React app
public class MessageController {

    @Autowired
    private MessageRepository messageRepository;

    // Fetch all messages
    @GetMapping
    public List<Message> getMessages() {
        return messageRepository.findAll();
    }

    // Save a new message
    @PostMapping
    public Message createMessage(@RequestBody Message message) {
        return messageRepository.save(message);
    }
}
