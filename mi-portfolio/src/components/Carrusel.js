import React, { useState, useEffect, useRef } from 'react';
import imagen1 from '../carrusel/imagen1.jpg';
import imagen2 from '../carrusel/imagen2.jpg';
import imagen3 from '../carrusel/imagen3.jpg';
import imagen4 from '../carrusel/imagen4.jpg';
import imagen5 from '../carrusel/imagen5.jpg';
import imagen6 from '../carrusel/imagen6.jpg';
import imagen7 from '../carrusel/imagen7.jpg';
import imagen8 from '../carrusel/imagen8.jpg';

import '../styles.css';

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [imagen1, imagen2, imagen3,imagen4,imagen5,imagen6,imagen7,imagen8]; // Array de imágenes
  const totalCards = images.length;

  // Lógica del carrusel (nextSlide, prevSlide, autoplay, etc.)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main">
      <div id="carousel-container">
        <div id="carousel-content">
          {images.map((image, index) => (
            <div
              key={index}
              className={`card ${
                index === currentIndex
                  ? 'selected'
                  : index === (currentIndex - 1 + totalCards) % totalCards
                  ? 'left'
                  : index === (currentIndex + 1) % totalCards
                  ? 'right'
                  : 'hidden'
              }`}
            >
              <img src={image} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div>
        <div id="carousel-dots">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? 'active-dot' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <button id="prev" onClick={prevSlide}>Anterior</button>
      <button id="next" onClick={nextSlide}>Siguiente</button>
    </div>
  );
};

export default Carrusel;