import React, { useState } from 'react';
import { useRegistration } from '../contexts/RegistrationContext';
import { useNavigate } from 'react-router-dom';
import '../styles/registrationForm.css';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { registerUser } = useRegistration();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerUser({ username, email, password });
        navigate('/login');
    };

    return (
        <div className="registration-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Nome utente</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                <button type="submit">Registrati</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
