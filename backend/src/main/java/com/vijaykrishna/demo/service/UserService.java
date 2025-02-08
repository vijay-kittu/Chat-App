package com.vijaykrishna.demo.service;

import com.vijaykrishna.demo.dao.UserRepository;
import com.vijaykrishna.demo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        /*if(userRepository.existsByUserName(user.getUserName())){
            throw new RuntimeException("User already exists!");
        }*/

        return userRepository.save(user);

    }
}
