// Login.js
import React, { useState } from 'react';
import AuthService from '../routers/AuthService.jsx';
import '../css/login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await AuthService.authenticate(username, password);
      
      if (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
        onLogin(user);
      } else {
        alert('Login inválido');
      }
    } catch (error) {
      alert('Login inválido');
    }
  };

  return (
    <div className="login-container"> 
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <label>
          Usuário:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
