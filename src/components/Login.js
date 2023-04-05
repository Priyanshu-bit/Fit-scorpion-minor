import React, { useState } from 'react';

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
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

  const handleToggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div>
      <button onClick={handleToggleLoginForm}>{showLoginForm ? 'Hide Login Form' : 'Show Login Form'}</button>
      {showLoginForm && (
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
          <label style={{width: '100%'}}>
            <span>Username:</span>
            <input type="text" value={username} onChange={handleUsernameChange} style={{width: '100%', padding: '0.5rem', borderRadius: '0.5rem', border: 'none', backgroundColor: '#f0f0f0'}} />
          </label>
          <label style={{width: '100%'}}>
            <span>Password:</span>
            <input type="password" value={password} onChange={handlePasswordChange} style={{width: '100%', padding: '0.5rem', borderRadius: '0.5rem', border: 'none', backgroundColor: '#f0f0f0'}} />
          </label>
          <button type="submit" style={{padding: '0.5rem 1rem', borderRadius: '0.5rem', border: 'none', backgroundColor: '#008000', color: 'white', fontWeight: 'bold'}}>Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
