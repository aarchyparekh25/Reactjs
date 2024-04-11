import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleUserClick = (userId) => {
    const user = users.find((user) => user.id === userId);
    setSelectedUser(user);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };
  
  return (
    <div className="user-list"> {/* Removed unnecessary class "user-list-title" */}
    <h2 className="user-list-title">Users</h2>
    <div className="user-list-container">
      <div className="user-list">
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => handleUserClick(user.id)}>
              {user.name}
              <button className="red-button" onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={`user-details ${selectedUser ? 'show' : 'hide'}`}>
        {selectedUser && <User user={selectedUser} onDelete={handleDeleteUser} />}
      </div>
    </div></div>
  );;
};

export default UserList;