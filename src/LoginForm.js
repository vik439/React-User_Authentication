// LoginForm.js
import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const LoginForm = ({ setShowSignup }) => {
  const { handleLogin, authenticate } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setErrorMessage('Please provide both email and password.');
      return;
    }
    // Call authenticate function from context
    const userData = authenticate(email, password);
    if (userData) {
      handleLogin(userData);
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  const handleCancel = () => {
    setEmail('');
    setPassword('');
    setErrorMessage('');
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <p>
        New user?{' '}
        <span className="link" onClick={() => setShowSignup(true)} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
          Sign up
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
