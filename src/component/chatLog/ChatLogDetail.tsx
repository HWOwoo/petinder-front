import React from 'react';

const ChatLogDetail: React.FC<{ chatId: string }> = ({ chatId }) => {
  return (
    <div>
      <h2>채팅 상세</h2>
      <p>선택된 채팅 ID: {chatId}</p>
      <div className="chat-detail-box">
        {/* 실제 메시지 목록 혹은 유저 정보 표시 */}
        여기에 메시지 로그를 표시할 수 있습니다.
      </div>
    </div>
  );
};

export default ChatLogDetail;
