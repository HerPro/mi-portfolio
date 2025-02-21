import React from 'react';
import '../styles.css';
const Inicio = () => {
  return (
    <section id="inicio" className="inicio">
      <div className="contenedor-banner">
        <div className="contenedor-img">
        <img src="/Perfil.jpg" alt="Perfil" />
        </div>
        <h1>Esteban as Gomez</h1>
        <h2>Estudiante</h2>
        <div className="redes">
          <a href="https://facebook.com/tu-perfil" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/tu-perfil" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Inicio;