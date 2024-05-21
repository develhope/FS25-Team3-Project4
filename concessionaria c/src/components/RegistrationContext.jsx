import React, { createContext, useState } from 'react';

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
    const [registrations, setRegistrations] = useState([
        { username: 'Dartakk', email: 'damiatafrancesco@gmail.com', password: '123456' }
    ]);
    const [currentUser, setCurrentUser] = useState(null);

    const registerUser = (userData) => {
        setRegistrations([...registrations, userData]);
        console.log('User registered:', userData);
    };

    const loginUser = (userData) => {
        const user = registrations.find(user => user.username === userData.username && user.password === userData.password);
        if (user) {
            setCurrentUser(user);
            console.log('User logged in:', user);
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
