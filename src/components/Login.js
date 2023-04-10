import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("log in successful")
    // Perform login logic here
  };

  const handleCloseLoginForm = () => {
    const loginForm = document.querySelector('.login-form');
    loginForm.style.display = 'none';
  };

  return (
    <div>
      <button class="close-btn" onClick={handleCloseLoginForm}>X</button>
      
      <form onSubmit={handleSubmit} className="login-form" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.2rem'}}>
        <label>
          <span>Username:</span>
          <input type="text" value={username} onChange={handleUsernameChange} className="login-input"  />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" value={password} onChange={handlePasswordChange} className="login-input" />
        </label>
        <button type="submit" className="login-submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
//hi
