import React, { useState } from 'react';
import '../styles.css';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const mostrarOcultarMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const seleccionar = () => {
    setMenuVisible(false);
  };

  return (
    <div className="contenedor-header">
      <header>
        <div className="logo">
          <a href="#">Esteban</a>
        </div>
        <nav id="nav" className={menuVisible ? "responsive" : ""}>
          <ul>
            <li><a href="#inicio" onClick={seleccionar}><i className="bi bi-house"></i> INICIO</a></li>
            <li><a href="#sobremi" onClick={seleccionar}><i className="bi bi-person-circle"></i> SOBRE MI</a></li>
            <li><a href="#skill" onClick={seleccionar}><i className="bi bi-code-slash"></i> SKILLS</a></li>
            <li><a href="#curriculum" onClick={seleccionar}><i className="bi bi-paperclip"></i> CURRICULUM</a></li>
            <li><a href="#contacto" onClick={seleccionar}><i className="bi bi-telephone"></i> CONTACTO</a></li>
          </ul>
        </nav>
        <div className="nav-responsive" onClick={mostrarOcultarMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>
    </div>
  );
};

export default Header;