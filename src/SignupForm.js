// SignupForm.js
import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

const SignupForm = ({ setShowSignup }) => {
  const { handleLogin } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!name || !email || !phone || !password) {
      alert('Please provide all details.');
      return;
    }
    const user = { name, email, phone, password };
    // Store signed-up user in session storage
    const users = JSON.parse(sessionStorage.getItem('users')) || [];
    users.push(user);
    sessionStorage.setItem('users', JSON.stringify(users));
    // Call handleLogin function from context
    handleLogin(user);
  };

  const handleCancel = () => {
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
      <p>
        Already have an account?{' '}
        <span className="link" onClick={() => setShowSignup(false)} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
          Login
        </span>
      </p>
    </div>
  );
};

export default SignupForm;
