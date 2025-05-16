import React from 'react';
import './NewReportCard.css';
import Button from '../common/Button';

const NewReportCard: React.FC = () => {
    return (
        <div className="card-div newrepot-card">
            <div className="newrepot-card-content">
                <div className='card-title newrepot-card-title'>
                    <h2>신고 건수</h2>
                    <Button label='자세히 보기' href=''/>
                </div>
                <ul>
                    <li>총 신규 건수</li>
                    <li>미처리 신고</li>
                    <li>신규 신고</li>
                </ul>
            </div>
        </div>
    );
};

export default NewReportCard;