import React from 'react';
import './NewMatchCard.css';
import Button from '../common/Button';

const NewMatchCard: React.FC = () => {
    return (
        <div className="card-div newmatch-card">
            <div className="newmatch-card-content">
                <div className='card-title newmatch-card-title'>
                    <h2>신규 매칭기록</h2>
                    <Button label='자세히 보기' href=''/>
                </div>
                <ul>
                    <li>매칭시도 건수</li>
                    <li>매칭 성공률</li>
                    <li>총 성공수 / 시도 건 수</li>
                </ul>
            </div>
        </div>
    );
};

export default NewMatchCard;