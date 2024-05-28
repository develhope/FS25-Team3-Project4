import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectedBikesContext } from '../contexts/SelectedBikesContext';
import '../styles/gamma.css';

const Gamma = () => {
  const navigate = useNavigate();
  const { addBike } = useContext(SelectedBikesContext);

  const handleTestRide = (bike) => {
    addBike(bike);
    navigate('/profile');
  };

  const availableBikes = [0, 1, 2, 3, 5, 6, 8, 10, 11]; 

  const bikes = [
    { id: 1, name: 'Ducati Panigale V4 R', price: '€43,000', image: 'src/assets/Moto/64de49eea7a06.r_d.1500-1000-0.jpeg' },
    { id: 2, name: 'Ducati StreetFighter V4 R', price: '€20,190', image: 'src/assets/Moto/ducati-streetfighter-v4-sp-copertina.jpg' },
    { id: 3, name: 'Ducati MultiStrada V4 R', price: '€31,290', image: 'src/assets/Moto/ducati-multistrada-v4-pikes-peak-statica-pista.jpg' },
    { id: 4, name: 'KTM RC8C', price: '€39,900', image: 'src/assets/Moto/KTMrc8c.jpg' },
    { id: 5, name: 'KTM SuperDuke 1290', price: '€20,950', image: 'src/assets/Moto/ktm-1290-super-duke-r-evo-2022-copertina.jpg' },
    { id: 6, name: 'KTM SuperAdventure 1290 R', price: '€21,450', image: 'src/assets/Moto/371531_my21-ktm-1290-super-adventure-r_-static.jpg' },
    { id: 7, name: 'BMW S1000 RR', price: '€21,000', image: 'src/assets/Moto/s1000rr.jpg' },
    { id: 8, name: 'BMW S1000 R', price: '€16,450', image: 'src/assets/Moto/S1000r.jpg' },
    { id: 9, name: 'GS 1250 R', price: '€20,350', image: 'src/assets/Moto/006-R-1250-GS-Adventure-MY-2024-000_-_Copia.jpg' },
    { id: 10, name: 'Yamaha R1', price: '€20,699', image: 'src/assets/Moto/2024-Yamaha-YZF-R1-12.jpg' },
    { id: 11, name: 'Yamaha MT10', price: '€16,299', image: 'src/assets/Moto/2022-Yamaha-MT-10-Review_-_Copia.jpg' },
    { id: 12, name: 'Yamaha Tracer GT', price: '€16,499', image: 'src/assets/Moto/2024-Yamaha-MT09TRDX-EU-Power_Grey-Static-008-03.jpg' },
  ];

  return (
    <div className="gamma-container">
      {bikes.map((bike, index) => (
        <div key={bike.id} className="bike-item">
          <img src={bike.image} alt={bike.name} className="bike-image" />
          <div className="bike-info">
            <h3>{bike.name}</h3>
            <p>{bike.price}</p>
            {availableBikes.includes(index) ? (
              <p style={{ color: 'green' }}>Disponibile</p>
            ) : (
              <p style={{ color: 'red' }}>Non disponibile</p>
            )}
            {availableBikes.includes(index) && (
              <button onClick={() => handleTestRide(bike)}>Prenota il Test Ride</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gamma;
