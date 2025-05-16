import React, { useState } from 'react';
import ChatLogList from './ChatLogList';
import ChatLogDetail from './ChatLogDetail';
import './ChatLog.css';

const ChatLogPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="chat-log-page">
      <div className="chat-log-list">
        <ChatLogList onSelect={setSelectedId} />
      </div>
      <div className="chat-log-detail">
        {selectedId ? (
          <ChatLogDetail chatId={selectedId} />
        ) : (
          <div className="placeholder">채팅을 선택해주세요.</div>
        )}
      </div>
    </div>
  );
};

export default ChatLogPage;