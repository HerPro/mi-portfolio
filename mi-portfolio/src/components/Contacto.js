import React from 'react';
import '../styles.css';

const Contacto = () => {
  return (
    <section id="contacto" className="contacto">
      <div className="contenido-seccion">
        <h2>CONTACTO</h2>
        <div className="fila">
          <div className="col">
            <input type="text" placeholder="Tu Nombre" />
            <input type="text" placeholder="Numero telefono" />
            <input type="text" placeholder="Direccion de correo" />
            <input type="text" placeholder="Tema" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Mensaje"
            ></textarea>
            <button>
              Enviar Mensaje <i className="fa-sharp fa-solid fa-paper-plane"></i>
              <span className="overlay"></span>
            </button>
          </div>
          <div className="col">
            <img src="Imagen/images.jpg" alt="" />
            <div className="info">
              <ul>
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  Prof. Delfin Chamorro 340-757, Asunción
                </li>
                <li>
                  <i className="fa-solid fa-mobile-screen"></i>
                  Numero Telefonico: +595-991328539
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  Email: h_er21@hotmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;