import React, { createContext, useContext, useState } from 'react';

export const RegistrationContext = createContext();

export const useRegistration = () => useContext(RegistrationContext);

export const RegistrationProvider = ({ children }) => {
    const [registrations, setRegistrations] = useState([
        { username: 'Dartakk', email: 'damiatafrancesco@gmail.com', password: '123456' },
    ]);
    const [currentUser, setCurrentUser] = useState(null);

    const registerUser = (userData) => {
        const isExistingUser = registrations.some(user => user.username === userData.username || user.email === userData.email);
        if (!isExistingUser) {
            setRegistrations(prevRegistrations => [...prevRegistrations, userData]);
            console.log('User registered:', userData);
        } else {
            console.error('User already exists.');
        }
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
