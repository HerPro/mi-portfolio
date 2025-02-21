import React from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Sobremi from './components/Sobremi';
import Skills from './components/Skills';
import Curriculum from './components/Curriculum';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Carrusel from './components/Carrusel';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './styles.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Inicio />
      <Sobremi />
      <Skills />
      <Curriculum />
      <Carrusel/>
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;