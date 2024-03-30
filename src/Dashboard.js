// Dashboard.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Dashboard = () => {
  const { user, handleLogout } = useContext(UserContext);
  const users = JSON.parse(sessionStorage.getItem('users')) || [];

  return (
    <div className="dashboard">
      <h1>This is the Dashboard</h1>
      <h2>Welcome, {user.name}</h2>
      <h3>All Signed-up Users:</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}, <strong>Phone:</strong> {user.phone}, <strong>Password:</strong>{user.password}
          </li>
        ))}
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
