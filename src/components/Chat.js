import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Chat = ({userName}) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
 
  const fetchMessages = async() => {
    try{
      const response = await axios.get("http://localhost:8080/api/messages/get");
      setMessages(response.data);
    }
    catch(error){
      console.error("Error fetching messages: ", error);
    }
  }

  const postInput = async(event) => {

    if (!input.trim()) return;
  
    setInput(event.target.value);

    const timestamp = new Date().toISOString().slice(0, 19); // Format: "YYYY-MM-DDTHH:mm:ss"

    
    try{
      axios.post("http://localhost:8080/api/messages/send", {userName: userName, message:input, timeStamp: timestamp});
      setMessages([...messages, {userName,input,timestamp}]);
      /*setInput("");*/
    }
    catch(error){
      console.error("Error sending message:", error);
    }
  }

  useEffect(() => {
    fetchMessages(); // 👈 Fetch messages when the component mounts
  }, []);

  return (
    <div className='general_chat'>
      <h1>General Chat Room</h1>
      <div className="chat-box" style={{ border: '1px solid #ccc', padding: '10px', height: '400px', overflowY: 'scroll' }}>
        {/*messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <img src={msg.avatar} alt={`${msg.name}'s avatar`} style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
            <div>
              <strong>{msg.name}</strong>
              <p>{msg.text}</p>
            </div>
          </div>
        ))*/}
        {messages.map((msg) => (
          (
            <div  className='message' >
              <strong>{msg.userName}:</strong> {msg.message} <br />
              
            </div>
          )
        ))}

      </div>
      <div className='chat-input'>
        <input
          type="text"
          /*value={input}*/
          onChange={postInput}
          placeholder="Type a message..."
          style={{ width: '80%', padding: '10px', marginRight: '10px' }}
        />
        <button onClick={postInput} style={{ padding: '10px 20px' }}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
