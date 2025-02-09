package com.vijaykrishna.demo.controller;

import com.vijaykrishna.demo.dao.UserRepository;
import com.vijaykrishna.demo.entity.User;
import com.vijaykrishna.demo.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins="http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public User registerUser(@Valid @RequestBody User user) {
        {
            User dbUser = userRepository.save(user);
            return dbUser;
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        User dbUser = userRepository.findByUserName(user.getUserName());

        if (dbUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found");
        }

        if (!dbUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
        }

        return ResponseEntity.ok("Login successful!");
    }

    @GetMapping("/get/{userName}")
    public ResponseEntity<Boolean> checkUserExists(@PathVariable String userName){
        boolean exists = userRepository.existsByUserName(userName);
        return ResponseEntity.ok(exists);
    }
}
