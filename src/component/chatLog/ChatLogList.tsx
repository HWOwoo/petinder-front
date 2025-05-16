import React from 'react';
import ChatLogItem from './ChatLogItem';

const dummyChats = [
  { id: '1', name: '홍길동 & 김철수', lastMessage: '안녕하세요', time: '2024-10-01 10:00' },
  { id: '2', name: '이영희 & 박영수', lastMessage: '좋아요!', time: '2024-10-02 09:30' },
];

const ChatLogList: React.FC<{ onSelect: (id: string) => void }> = ({ onSelect }) => {
  return (
    <>
      {dummyChats.map(chat => (
        <ChatLogItem key={chat.id} chat={chat} onClick={() => onSelect(chat.id)} />
      ))}
    </>
  );
};

export default ChatLogList;
