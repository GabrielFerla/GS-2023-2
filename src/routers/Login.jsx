// Login.js
import React, { useState } from 'react';
import AuthService from '../routers/AuthService.jsx';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await AuthService.login(username, password);
      
      if (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
        onLogin(user);
      } else {
        alert('Login failed. Please check your username and password.');
      }
    } catch (error) {
      alert('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
