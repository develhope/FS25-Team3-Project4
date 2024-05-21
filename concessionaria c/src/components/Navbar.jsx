import React, { useState, useContext } from 'react';
import "../css/navbar.css";
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import { RegistrationContext } from './RegistrationContext';

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
                        <li className="nav-item">Home</li>
                        <li className="nav-item">Chi siamo</li>
                        <li className="nav-item">Gamma</li>
                        <li className="nav-item">Prenota un Test Ride</li>
                    </ul> 
                </div>
                <div className="dx-nav">
                    {currentUser ? (
                        <div className="profile">Il mio profilo</div>
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