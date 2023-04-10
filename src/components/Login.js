import React, { useState } from 'react';
import './Login.css';

const Login = () => {
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
    alert('Log in successful!');
    // Perform login logic here
  };

  const handleToggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <div>
      {showLoginForm && (
        <div className="modal-container">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseLoginForm}>
              X
            </button>
            <form onSubmit={handleSubmit} className="login-form">
              <label>
                <span>Username:</span>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  className="login-input"
                />
              </label>
              <label>
                <span>Password:</span>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="login-input"
                />
              </label>
              <button type="submit" className="login-submit">
                Log in
              </button>
            </form>
          </div>
        </div>
      )}
      <button onClick={handleToggleLoginForm} className="login-button">
        Log in
      </button>
    </div>
  );
};

export default Login;
