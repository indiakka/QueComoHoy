import React from "react";
import "./Heybot.css"; // importa el archivo CSS

function Heybot() {
  return (
    <div>
      <div className="chat-container">
        {" "}
        {/* Aplica la clase CSS a la caja de chat */}
        <iframe
          className="embed-container"
          src="https://heybot.thesamur.ai/heybot/embed?id=EuaGRLAuUHZkbDFs4rui8kZUxvta2jz8"
          title="Heybot chat"
        />
      </div>
      <button className="chat-btn">Chat</button>{" "}
      {/* Aplica la clase CSS al botón de chat */}
    </div>
  );
}

export default Heybot;
