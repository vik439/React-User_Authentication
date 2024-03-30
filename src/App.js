// App.js
import React, { useState } from 'react';
import { UserContext } from './UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Dashboard from './Dashboard';

const App = () => {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (userData) => {
    setUser(userData);
    setShowSignup(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const authenticate = (email, password) => {
    const users = JSON.parse(sessionStorage.getItem('users')) || [];
    const foundUser = users.find(user => user.email === email && user.password === password);
    return foundUser ? foundUser : null;
  };

  return (
    <div className="app">
      <UserContext.Provider value={{ user, handleLogin, handleLogout, authenticate }}>
        {user ? (
          <Dashboard />
        ) : showSignup ? (
          <SignupForm setShowSignup={setShowSignup} />
        ) : (
          <LoginForm setShowSignup={setShowSignup} />
        )}
      </UserContext.Provider>
    </div>
  );
};

export default App;
