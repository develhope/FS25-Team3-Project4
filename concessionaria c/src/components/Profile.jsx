import React, { useContext, useState } from 'react';
import { RegistrationContext } from '../contexts/RegistrationContext';
import { SelectedBikesContext } from '../contexts/SelectedBikesContext';
import '../styles/profile.css';

const Profile = () => {
  const { currentUser } = useContext(RegistrationContext);
  const { selectedBikes, setSelectedBikes } = useContext(SelectedBikesContext);
  const [selectedBike, setSelectedBike] = useState(null);

  const handleConfirm = () => {
    alert('Test ride confirmed for ' + selectedBike.name);
  };

  const handleCancel = (bike) => {
    setSelectedBikes(selectedBikes.filter(b => b.id !== bike.id));
    setSelectedBike(null);
  };

  return (
    <div className="profile-container">
      {currentUser ? (
        <>
          <div className="profile-info">
            <h2>Il mio profilo</h2>
            <p><strong>Utente:</strong> {currentUser.username}</p>
          </div>
          <div className="test-ride-section">
            <div className="test-ride-list">
              <h3>Moto prenotate per il test ride:</h3>
              {selectedBikes.length > 0 ? (
                selectedBikes.map((bike, index) => (
                  <div key={index} className="test-ride-item" onClick={() => setSelectedBike(bike)}>
                    <img src={bike.image} alt={bike.name} className="test-ride-image" />
                    <div className="test-ride-info">
                      <h4>{bike.name}</h4>
                      <p>{bike.price}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Nessuna moto prenotata per il test ride.</p>
              )}
            </div>
            {selectedBike && (
              <div className="test-ride-details">
                <h4>{selectedBike.name}</h4>
                <p>{selectedBike.price}</p>
                <button onClick={handleConfirm}>Conferma Test Ride</button>
                <button onClick={() => handleCancel(selectedBike)}>Cancella</button>
              </div>
            )}
          </div>
        </>
      ) : (
        <p>Devi effettuare il login per vedere il tuo profilo.</p>
      )}
    </div>
  );
};

export default Profile;
