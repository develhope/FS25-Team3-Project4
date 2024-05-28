import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";
import { RegistrationContext } from '../contexts/RegistrationContext';

const Navbar = () => {
    const { currentUser } = useContext(RegistrationContext);

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
                            <li className="options-item"><Link to="/login">Accedi</Link></li>
                            <li className="options-item"><Link to="/registration">Registrati</Link></li>
                        </ul>
                    )}
                </div>
            </div> 
        </nav>
    );
};

export default Navbar;
