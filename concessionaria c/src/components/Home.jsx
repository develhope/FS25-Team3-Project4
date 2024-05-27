import '../styles/home.css';
import ChatBot from './chat';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Consessionaria C</h1>
      <h2>Esplora la nostra gamma di moto e prenota un test ride.</h2>
      <p>Con i nostri vent'anni di attività ed esperienza nel settore delle due ruote la CONCESSIONARIA C è una
         delle aziende più longeve e specializzate del settore nata grazie al suo fondatore Francesco Nobile,
         Francesco Damiata, Alessandro Amoroso e Mike Darmand!</p>

         <ChatBot />
    </div>
  );
};

export default Home;
