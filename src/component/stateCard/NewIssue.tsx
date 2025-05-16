import React from 'react';
import './NewIssue.css';
import Button from '../common/Button';

const NewIssue: React.FC = () => {
    return (
        <div className="card-div newissue-card">
            <div className="newissue-card-content ">
                <div className='card-title newissue-card-title'>
                    <h2>이슈 상황</h2>
                    <Button label='자세히 보기' href=''/>
                </div>
                <ul>
                    <li>최종확인 필요건</li>
                </ul>
            </div>
        </div>
    );
};

export default NewIssue;