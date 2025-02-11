package com.vijaykrishna.demo.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "messages")
public class Message {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "username")
    private String userName;

    @Column(name = "timestamp", nullable = false, updatable = false)
private LocalDateTime timeStamp;

    @Column(name = "message")
    private String message;

    public Message() {

    }

    public Message( String userName, LocalDateTime timeStamp, String message) {
        this.userName = userName;
        this.timeStamp = timeStamp;
        this.message = message;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public LocalDateTime getDateTime() {
        return timeStamp;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.timeStamp = dateTime;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "Message{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", dateTime=" + timeStamp +
                ", message='" + message + '\'' +
                '}';
    }
}
