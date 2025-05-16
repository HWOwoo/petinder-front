import Sidebar from '../../component/sidebar/Sidebar';
import React, { useState } from 'react';
import './UserPet.css';

interface User {
  name: string;
  email: string;
  joinDate: string;
}

const sampleUsers: User[] = [
  { name: '홍길동', email: 'hong@example.com', joinDate: '2023-08-01' },
  { name: '김철수', email: 'kim@example.com', joinDate: '2023-09-15' },
  { name: '이영희', email: 'lee@example.com', joinDate: '2023-07-10' },
];

const UserPet: React.FC = () => {

  const [sortBy, setSortBy] = useState<'name' | 'joinDate'>('name');
  const [sortAsc, setSortAsc] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null); // 🔹 추가

  const sortedUsers = [...sampleUsers].sort((a, b) => {
    const compare = a[sortBy].localeCompare(b[sortBy]);
    return sortAsc ? compare : -compare;
  });

  const handleSort = (field: 'name' | 'joinDate') => {
    if (field === sortBy) {
      setSortAsc(!sortAsc);
    } else {
      setSortBy(field);
      setSortAsc(true);
    }
  };

  const toggleDetail = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    return (
    <div className='admin-index'>
      <Sidebar />
      <div className='admin-user-content'>
        <div className='admin-user-content-header'>
          <div className="user-filter-bar">
            <input
              type="text"
              className="search-input"
              placeholder="유저 이름 검색"
            />

            <select className="sort-select">
              <option value="date">가입일순</option>
              <option value="match">매칭 수순</option>
              <option value="name">이름순</option>
            </select>

            <button className="sort-direction">⬆️</button>
          </div>
        </div>

        <div className='admin-user-content-body'>
          <table className="user-table">
            <thead>
              <tr>
                <th onClick={() => handleSort('name')}>
                  이름 {sortBy === 'name' && (sortAsc ? '▲' : '▼')}
                </th>
                <th>이메일</th>
                <th onClick={() => handleSort('joinDate')}>
                  가입일 {sortBy === 'joinDate' && (sortAsc ? '▲' : '▼')}
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers.map((user, index) => (
                <React.Fragment key={index}>
                  <tr
                    className="clickable-row"
                    onClick={() => toggleDetail(index)}
                  >
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.joinDate}</td>
                  </tr>
                  {openIndex === index && (
                    <tr className="detail-row">
                      <td colSpan={3}>
                        <div className="detail-box">
                          상세 정보: {user.name} 님은 가입일 {user.joinDate}에 가입하셨으며,
                          이메일은 {user.email}입니다.
                          {/* 이곳에 반려동물, 신고, 매칭 등 정보도 추가 가능 */}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserPet;

