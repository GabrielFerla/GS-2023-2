// App.js
import React, { useState } from 'react';
import Login from './routers/Login';
import Home from './routers/Home';
import Nav from './components/Nav';
import Rodape from './components/Rodape';

const App = () => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div>
      < Nav />
      {user ? (
        <Home user={user} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
      <Rodape />
    </div>
  );
};

export default App;
