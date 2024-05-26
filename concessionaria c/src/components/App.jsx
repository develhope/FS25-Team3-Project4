import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Gamma from './Gamma';
import Profile from './Profile';
import Home from './Home';
import '../styles/App.css';
import { RegistrationProvider } from '../contexts/RegistrationContext';
import { SelectedBikesProvider } from '../contexts/SelectedBikesContext';
import '../styles/backgroundimage.css';
import Amministratore from './Amministratore';
import { AdminContext, AdminProvider } from '../contexts/AdminContext';


function App() {
  return (
    <Router>
      <AdminProvider>
        <RegistrationProvider>
          <SelectedBikesProvider>
            <div className="app-container">
              <div className='background-image'></div>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gamma" element={<Gamma />} />
                <Route path="/profile" element={<Profile />} />
                <Route path='/Ammistratore' element={<Amministratore />} />
              </Routes>
            </div>
          </SelectedBikesProvider>
        </RegistrationProvider>
      </AdminProvider>
    </Router>
  );
}

export default App;
