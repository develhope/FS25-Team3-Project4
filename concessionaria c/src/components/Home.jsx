import React, { useRef, useEffect } from 'react';
import ChatBot from './chat';
import ducatiPanigaleImage from '../assets/Moto/ducati-panigale-v4-r.jpg';
import bmwLogo from '../assets/Logo Banner/bmw.jpg';
import ducatiLogo from '../assets/Logo Banner/ducati.jpg';
import ktmLogo from '../assets/Logo Banner/ktm.png';
import yamahaLogo from '../assets/Logo Banner/yamaha.jpg';
import s1000rrHome from '../assets/Moto/s1000rrhome.jpeg';
import '../styles/home.css';

const Home = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;
    let intervalId;

    const moveCarousel = () => {
      const images = banner.querySelectorAll('.banner img');
      const firstImage = images[0];
      const imageWidth = firstImage.offsetWidth;

      banner.style.transition = 'transform 0.5s ease-in-out';
      banner.style.transform = `translateX(-${imageWidth}px)`;

      setTimeout(() => {
        banner.style.transition = 'none';
        banner.style.transform = 'translateX(0)';
        banner.appendChild(firstImage);
      }, 500);
    };

    intervalId = setInterval(moveCarousel, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home-container">
      <div className="text-and-image">
        <div className="text-content">
          <h1>Concessionaria C</h1>
          <h2>Esplora la nostra gamma di moto e prenota un test ride.</h2>
          <p>
            Con i nostri vent'anni di attività ed esperienza nel settore delle due ruote la CONCESSIONARIA C è una delle aziende più longeve e specializzate del settore nata grazie al suo fondatore Francesco Nobile, Francesco Damiata, Alessandro Amoroso e Mike Darmand!
          </p>
        </div>
        <div className="image-content">
          <img src={s1000rrHome} alt="BMW S1000RR" />
        </div>
      </div>
      <div className="product">
        <div className="product-image">
          <img src={ducatiPanigaleImage} alt="Ducati Panigale V4 R" />
        </div>
        <div className="product-details">
          <div className="product-info">
            <h2>Ducati Panigale V4 R</h2>
            <p>Esplora il nostro modello più avanzato.</p>
          </div>
          <div className="prices">
            <div className="original-price">Prezzo: €30.000</div>
            <div className="discount-price">Nuovo Prezzo: €25.000</div>
          </div>
          <button>Scopri ora</button>
        </div>
      </div>
      <div className="banner" ref={bannerRef}>
        <img src={bmwLogo} alt="BMW" />
        <img src={ducatiLogo} alt="Ducati" />
        <img src={ktmLogo} alt="KTM" />
        <img src={yamahaLogo} alt="Yamaha" />
      </div>
      <div className="location">
        <h2>Dove trovarci</h2>
        <iframe
          title="Mappa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20351.190094196015!2dLONGITUDINE!3dLATITUDINE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDQ5JzQ4LjMiTiAxMDTCsDU0JzIxLjQiVw!5e0!3m2!1sen!2suk!4v1622185437609!5m2!1sen!2suk"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <ChatBot />
    </div>
  );
};

export default Home;