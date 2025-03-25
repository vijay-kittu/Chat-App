import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const { user } = useContext(AuthContext);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/messages/get"
      );
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages: ", error);
    }
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const postInput = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior (if applicable)
    if (!input.trim()) return;

    try {
      const response = await axios.post(
        "http://localhost:8080/api/messages/send",
        {
          username: user.userName,
          message: input,
          timeStamp: new Date().toISOString().slice(0, 19),
        }
      );
      setMessages([
        ...messages,
        {
          username: user.userName,
          message: input,
          timeStamp: response.data.timeStamp,
        },
      ]);
      //setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="general_chat">
      <h3>General Chat Room</h3>
      <div className="chat-box">
        {messages.map((msg, index) => {
          const timestamp = new Date(msg.timeStamp);

          const date = timestamp.toISOString().slice(0, 10);
          const hours = timestamp.getHours().toString().padStart(2, "0");
          const minutes = timestamp.getMinutes().toString().padStart(2, "0");
          const seconds = timestamp.getSeconds().toString().padStart(2, "0");

          return (
            <div key={msg.timeStamp || index} className="message">
              <div>
                <strong>{msg.username}:</strong> {msg.message} <br />
              </div>
              <div className="timestamp">
                <p>
                  {date}, {hours}:{minutes}:{seconds}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="chat-input">
        <input
          type="text"
          /*value={input}*/
          onChange={handleInput}
          placeholder="Type a message..."
        />
        <button onClick={postInput}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
