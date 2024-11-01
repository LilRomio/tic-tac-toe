import React, { useState, useEffect, useRef } from 'react';
import { useGameStore } from '../../stores/useGameStore';
import './ChatBox.scss';

const ChatBox = ({ player }) => {
  const messages = useGameStore((store) => store.messages);
  const sendMessage = useGameStore((store) => store.sendMessage);
  const [input, setInput] = useState('');

  // Ref for the messages container to enable auto-scroll
  const messagesEndRef = useRef(null);
  // Send the message
  const handleSend = () => {
    if (input.trim()) {
      sendMessage(player, input);
      setInput('');
    }
  };

  // Send the message when Enter is pressed
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  // Scroll to the latest message when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-box">
      <h3>{player}</h3>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.player === player ? 'outgoing' : 'incoming'}`}>
            <span>{msg.text}</span>
            <span className="timestamp">{msg.timestamp}</span>
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message"
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
