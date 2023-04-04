import React, { useState } from "react";
import axios from "axios";
import "./ChatBox.css";

function ChatBox() {
  const [userMessage, setUserMessage] = useState("");
  const [botResponse, setBotResponse] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = {
      message: userMessage,
    };

    try {
      const response = await axios.post("/api/chat", message);
      const data = response.data;
      setBotResponse([
        ...botResponse,
        { author: "bot", message: data.response },
      ]);
    } catch (error) {
      console.log(error);
    }

    setUserMessage("");
  };

  const handleChange = (e) => {
    setUserMessage(e.target.value);
  };

  const renderMessages = () => {
    return botResponse.map((message, index) => {
      if (message.author === "user") {
        return (
          <div key={index} className="message">
            <span className="author">Usuario:</span>
            <p>{message.message}</p>
          </div>
        );
      } else {
        return (
          <div key={index} className="message">
            <span className="author">ChatGPT:</span>
            <p>{message.message}</p>
          </div>
        );
      }
    });
  };

  return (
    <div className="chatbox">
      <h2>Chat con ChatGPT</h2>
      <div className="message-container">{renderMessages()}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userMessage}
          onChange={handleChange}
          placeholder="Escribe tu mensaje aquí"
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ChatBox;
