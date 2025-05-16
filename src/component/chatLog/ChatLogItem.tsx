import React from 'react';

interface Props {
  chat: {
    id: string;
    name: string;
    lastMessage: string;
    time: string;
  };
  onClick: () => void;
}

const ChatLogItem: React.FC<Props> = ({ chat, onClick }) => {
  return (
    <div className="chat-log-item" onClick={onClick}>
      <div>
        <strong>{chat.name}</strong>
        <p className="last-msg">{chat.lastMessage}</p>
      </div>
      <span className="chat-time">{chat.time}</span>
    </div>
  );
};

export default ChatLogItem;
