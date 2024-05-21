import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import { RegistrationContext } from '../contexts/RegistrationContext';

const Navbar = () => {
    const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);
    const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
    const { registerUser, loginUser, currentUser } = useContext(RegistrationContext);

    const toggleRegisterDropdown = () => {
        setIsRegisterDropdownOpen(!isRegisterDropdownOpen);
        setIsLoginDropdownOpen(false);
    };

    const toggleLoginDropdown = () => {
        setIsLoginDropdownOpen(!isLoginDropdownOpen);
        setIsRegisterDropdownOpen(false);
    };

    const handleRegister = (userData) => {
        registerUser(userData);
        setIsRegisterDropdownOpen(false);
    };

    const handleLogin = (userData) => {
        loginUser(userData);
        setIsLoginDropdownOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="sx-nav">
                    <ul className="nav-list">
                        <li className="nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item"><Link to="/gamma">Gamma</Link></li>
                        <li className="nav-item">Chi siamo</li>
                    </ul> 
                </div>
                <div className="dx-nav">
                    {currentUser ? (
                        <div className="profile"><Link to="/profile">Il mio profilo</Link></div>
                    ) : (
                        <ul className="nav-options">
                            <li className="options-item" onClick={toggleLoginDropdown}>Accedi</li>
                            <li className="options-item" onClick={toggleRegisterDropdown}>Registrati</li>
                        </ul>
                    )}
                    {isRegisterDropdownOpen && !currentUser && <RegistrationForm onRegister={handleRegister} />}
                    {isLoginDropdownOpen && !currentUser && <LoginForm onLogin={handleLogin} />}
                </div>
            </div> 
        </nav>
    );
};

export default Navbar;
