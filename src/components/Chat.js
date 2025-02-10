import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [user, setUser] = useState({ id: 1, name: 'John Doe', avatar: 'https://via.placeholder.com/40' }); // Replace with actual user data

  // Fetch messages from the Spring Boot backend
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/messages'); // Backend endpoint
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  // Send a message to the backend
  const sendMessage = async () => {
    if (input.trim() !== '') {
      const newMessage = { userId: user.id, name: user.name, avatar: user.avatar, text: input };

      try {
        const response = await axios.post('http://localhost:8080/api/messages', newMessage); // Backend endpoint
        setMessages([...messages, response.data]); // Add the new message to the chat
        setInput('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className='general_chat'>
      <h1>General Chat Room</h1>
      <div className="chat-box" style={{ border: '1px solid #ccc', padding: '10px', height: '400px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <img src={msg.avatar} alt={`${msg.name}'s avatar`} style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
            <div>
              <strong>{msg.name}</strong>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='bottom'>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ width: '80%', padding: '10px', marginRight: '10px' }}
        />
        <button onClick={sendMessage} style={{ padding: '10px 20px' }}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
