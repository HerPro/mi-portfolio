import React from 'react';
import '../styles.css';
const Curriculum = () => {
  return (
    <section id="curriculum" className="curriculum">
      <div className="conntenido-seccion">
        <h2>Curriculum</h2>
        <div className="fila">
          <div className="col izquierda">
            <h3>Educación</h3>
            <div className="item izq">
              <h4>Ingenieria informatica</h4>
              <span className="casa">Universida del Norte</span>
              <span className="fecha">2020-2025</span>
              <p>
                estoy jungando un poco con el formato mas tarde pensare en algo
                para poder encajar los mas perfecto en mi perfil y poder hacer
                lo mejor posible mi portfolio
              </p>
            </div>
            <div className="item izq">
              <h4>Desarrollador Full Stack</h4>
              <span className="casa">Lumetrio</span>
              <span className="fecha">2022-2023</span>
              <p>
                estoy jungando un poco con el formato mas tarde pensare en algo
                para poder encajar los mas perfecto en mi perfil y poder hacer
                lo mejor posible mi portfolio
              </p>
            </div>
            <div className="item izq">
              <h4>Tecnico Superior Mecatronica</h4>
              <span className="casa">ITC instituto tecnico en electricidad</span>
              <span className="fecha">2022-2024</span>
              <p>
                estoy jungando un poco con el formato mas tarde pensare en algo
                para poder encajar los mas perfecto en mi perfil y poder hacer
                lo mejor posible mi portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;