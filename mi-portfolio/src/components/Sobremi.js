import React from 'react';
import '../styles.css';

const Sobremi = () => {
  return (
    <section id="sobremi" className="sobremi">
      <div className="contenido-seccion">
        <h2>Sobre Mi</h2>
        <p>
          <span> Hola soy Hernan </span>un estudiante de programacion buscando
          crear su experiencia en el campo laboral tengo practica con proyectos
          personales y deseo bastante seguir mejorando para dedicarme
          completamente a ser desarrollador full stack.
        </p>
        <div className="fila">
          <div className="col">
            <h3>Datos personales</h3>
            <ul>
              <li>
                <strong>Cumpleaños</strong>
                20-01-1999
              </li>
              <li>
                <strong>Telefono</strong>
                +595991328539
              </li>
              <li>
                <strong>Email</strong>
                h_er21@hotmail.com
              </li>
              <li>
                <strong>Direccion</strong>
                Asuncion Paraguay
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Intereses</h3>
            <div className="contenedor-intereses">
              <div className="Intereses">
                <i className="fa-solid fa-gamepad fa-beat"></i>
                <span>JUEGOS</span>
              </div>
              <div className="Intereses">
                <i className="fa-solid fa-guitar fa-beat"></i>
                <span>MUSICA</span>
              </div>
              <div className="Intereses">
                <i className="fa-solid fa-chess-knight fa-beat"></i>
                <span>AJEDREZ</span>
              </div>
              <div className="Intereses">
                <i className="fa-solid fa-video fa-beat"></i>
                <span>CINE</span>
              </div>
            </div>
          </div>
        </div>
        <button>
          Descargar CV
          <i className="bi bi-download"></i>
          <span className="overlay"> </span>
        </button>
      </div>
    </section>
  );
};

export default Sobremi;