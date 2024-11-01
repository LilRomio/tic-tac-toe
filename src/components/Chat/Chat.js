import React from 'react';
import ChatBox from './ChatBox';
import './Chat.scss';

const Chat = () => {
  return (
    <div className="chat-container">
      <ChatBox player="Player 1" />
      <ChatBox player="Player 2" />
    </div>
  );
};

export default Chat;
