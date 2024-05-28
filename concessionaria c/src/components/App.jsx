import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Gamma from './Gamma';
import Profile from './Profile';
import Home from './Home';
import '../styles/App.css';
import { RegistrationProvider } from '../contexts/RegistrationContext';
import { SelectedBikesProvider } from '../contexts/SelectedBikesContext';
import '../styles/backgroundimage.css';

function App() {
  return (
    <Router>
      <RegistrationProvider>
        <SelectedBikesProvider>
          <div className="app-container">
            <div className='background-image'></div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gamma" element={<Gamma />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </SelectedBikesProvider>
      </RegistrationProvider>
    </Router>
  );
}

export default App;