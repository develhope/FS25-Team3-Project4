import React, { createContext, useState } from 'react';

export const SelectedBikesContext = createContext();

export const SelectedBikesProvider = ({ children }) => {
  const [selectedBikes, setSelectedBikes] = useState([]);

  const addBike = (bike) => {
    setSelectedBikes((prevBikes) => [...prevBikes, bike]);
  };

  return (
    <SelectedBikesContext.Provider value={{ selectedBikes, setSelectedBikes, addBike }}>
      {children}
    </SelectedBikesContext.Provider>
  );
};
