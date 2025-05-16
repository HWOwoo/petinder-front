import React from 'react';
import './NewBestUser.css';
import Button from '../common/Button';

const NewBestUser: React.FC = () => {
    return (
        <div className="card-div-big newbest-card">
            <div className="newbest-card-content ">
                <div className='card-title newbest-card-title'>
                    <h2>최고 인기 유저</h2>
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

export default NewBestUser;