import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Gamma from './Gamma';
import Profile from './Profile';
import Home from './Home';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import { RegistrationProvider } from '../contexts/RegistrationContext';
import { SelectedBikesProvider } from '../contexts/SelectedBikesContext';
import '../styles/App.css';
import '../styles/backgroundimage.css';

function App() {
  return (
    <Router>
      <RegistrationProvider>
        <SelectedBikesProvider>
          <div className="app-container">
            <div className='background-image'></div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gamma" element={<Gamma />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/registration" element={<RegistrationForm />} />
            </Routes>
          </div>
        </SelectedBikesProvider>
      </RegistrationProvider>
    </Router>
  );
}

export default App;
