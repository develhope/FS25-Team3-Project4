import React, { useContext, useState } from 'react';
import { AdminContext } from '../contexts/AdminContext';


const Amministratore = () => {
  const { currentAdmin, loginAdmin } = useContext(AdminContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    loginAdmin({ username, password });
  };

  if (!currentAdmin) {
    return (
      <div>
        <h2>Login Amministratore</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h2>Benvenuto, {currentAdmin.username}</h2>
      <p>Email: {currentAdmin.email}</p>
    </div>
  );
};

export default Amministratore;
