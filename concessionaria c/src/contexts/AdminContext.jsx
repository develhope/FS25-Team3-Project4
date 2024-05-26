import React, { createContext, useState } from 'react';


export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {

  const [admins, setAdmins] = useState([
    { username: 'Ermes', email: 'alessandroamoroso@gmail.com', password: 'xxx' }
  ]);

  const [currentAdmin, setCurrentAdmin] = useState(null);


  const registerAdmin = (adminData) => {
    setAdmins([...admins, adminData]);
    console.log('Amministratore registrato:', adminData);
  };


  const loginAdmin = (adminData) => {
    const admin = admins.find(admin => admin.username === adminData.username && admin.password === adminData.password);
    if (admin) {
      setCurrentAdmin(admin);
      console.log('Amministratore connesso:', admin);
    } else {
      console.error('Credenziali non valide');
    }
  };

  return (
    <AdminContext.Provider value={{ admins, registerAdmin, currentAdmin, loginAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
