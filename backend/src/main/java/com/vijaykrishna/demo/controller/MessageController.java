package com.vijaykrishna.demo.controller;

import com.vijaykrishna.demo.dao.MessageRepository;
import com.vijaykrishna.demo.entity.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/messages")
@CrossOrigin(origins="http://localhost:3000")
public class MessageController {

    @Autowired
    private MessageRepository messageRepository;

    @PostMapping("/send")
    public Message sendMessage(@RequestBody Message message){
        return messageRepository.save(message);
    }

    @GetMapping("/get")
    public List<Message> getAllMessages(){
        return messageRepository.findAll();
    }
}
