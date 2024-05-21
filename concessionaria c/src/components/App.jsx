import React from 'react';
import Navbar from './Navbar';
import { RegistrationProvider } from './RegistrationContext';
import '../css/App.css';

function App() {
  return (
    <RegistrationProvider>
      <div className="app-container">
        <Navbar />
      </div>
    </RegistrationProvider>
  );
}

export default App;