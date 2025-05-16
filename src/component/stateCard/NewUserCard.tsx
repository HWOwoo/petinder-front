import React from 'react';
import './NewUserCard.css';
import Button from '../common/Button';

const NewUserCard: React.FC = () => {
    return (
        <div className="card-div newuser-card">
            <div className="newuser-card-content ">
                <div className='card-title newuser-card-title'>
                    <h2>신고 건수</h2>
                    <Button label='자세히 보기' href=''/>
                </div>
                <ul>
                    <li>회원 수: 100명</li>
                    <li>반려동물 수: 50마리</li>
                    <li>가입일: 2023-10-01</li>
                </ul>
            </div>
        </div>
    );
};

export default NewUserCard;