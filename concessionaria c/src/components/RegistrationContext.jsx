import React, { createContext, useState } from 'react';

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
    const [registrations, setRegistrations] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    const registerUser = (userData) => {
        setRegistrations([...registrations, userData]);
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Registration success:', data);
        })
        .catch(error => {
            console.error('Registration error:', error);
        });
    };

    const loginUser = (userData) => {
        const user = registrations.find(user => user.username === userData.username && user.password === userData.password);
        if (user) {
            setCurrentUser(user);
        } else {
            console.error('Invalid credentials');
        }
    };

    return (
        <RegistrationContext.Provider value={{ registrations, registerUser, currentUser, loginUser }}>
            {children}
        </RegistrationContext.Provider>
    );
};