package com.vijaykrishna.demo.controller;

import com.vijaykrishna.demo.dao.MessageRepository;
import com.vijaykrishna.demo.entity.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("api/messages")
@CrossOrigin(origins={"http://localhost:3000", "https://portfolio-vijaykrishna.vercel.app/"})
public class MessageController {

    @Autowired
    private MessageRepository messageRepository;

    @PostMapping("/send")
    public Message sendMessage(@RequestBody Message message){
        if (message.getTimeStamp() == null) {
            message.setTimeStamp(LocalDateTime.now());
        }
        return messageRepository.save(message);
    }

    @GetMapping("/get")
    public List<Message> getAllMessages(){
        return messageRepository.findAll();
    }
}
