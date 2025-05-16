import React from 'react';
import './Sidebar.css'

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className='sidebar-content'>
                <ul>
                    <li>회원 및 반려동물 관리</li>
                    <li>매칭 및 채팅기록 관리</li>
                    <li>컨텐츠 및 신고 관리</li>
                    <li>통계 및 대시보드</li>
                    <li>설정 및 운영도구</li>
                    <li>추가기능 및 이벤트 관리</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;