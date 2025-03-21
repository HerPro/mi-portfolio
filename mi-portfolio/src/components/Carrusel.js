import React, { useState, useEffect, useCallback,useRef } from 'react';
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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef(null)
  const images = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8];
  const totalCards = images.length;

  // Memoizamos las funciones con useCallback
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  }, [totalCards]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  }, [totalCards]);

    // Manejo del arrastre
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.clientX || e.touches[0].clientX);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const currentX = e.clientX || e.touches[0].clientX;
      const diffX = startX - currentX;
  
      if (Math.abs(diffX) > 100) { // Umbral de desplazamiento
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        setIsDragging(false);
      }
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  // Autoplay con dependencias correctas
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Cambio a 5 segundos como indica el comentario
    return () => clearInterval(interval);
  }, [nextSlide]); // Agregamos nextSlide como dependencia

  return (
    <div className="main">
            <div 
        id="carousel-container"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      ></div>
      <div id="carousel-container">
        <div id="carousel-content">
          {images.map((image, index) => (
            <div
              key={index}
              className={`card ${
                index === currentIndex ? 'selected' : 
                index === (currentIndex - 1 + totalCards) % totalCards ? 'left' : 
                index === (currentIndex + 1) % totalCards ? 'right' : 'hidden'
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
      <button className="carousel-button prev-button" onClick={prevSlide}> 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
      </svg>
    </button>

    <button className="carousel-button next-button" onClick={nextSlide}> 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
      </svg>
    </button>
    </div>
  );
};

export default Carrusel;