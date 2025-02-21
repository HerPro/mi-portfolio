import React from 'react';
import '../styles.css';

const Skills = () => {
  return (
    <section id="skill" className="skill">
      <div className="contenido-seccion">
        <h2>Skills</h2>
        <div className="fila">
          <div className="col">
            <h3>Professional Skills</h3>
            <div className="skills">
              <span>Comunicacion</span>
              <div className="barra-skill">
                <div className="progreso comunicacion">
                  <span>60%</span>
                </div>
              </div>
            </div>
            <div className="skills">
              <span>Trabajo en equipo</span>
              <div className="barra-skill">
                <div className="progreso trabajo">
                  <span>75%</span>
                </div>
              </div>
            </div>
            <div className="skills">
              <span>Dedicacion</span>
              <div className="barra-skill">
                <div className="progreso dedicacion">
                  <span>90%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <h3>Technical Skills</h3>
            <div className="skills">
              <span>Javascript</span>
              <div className="barra-skill">
                <div className="progreso Javascript">
                  <span> 55% </span>
                </div>
              </div>
            </div>
            <div className="skills">
              <span> Html & Css </span>
              <div className="barra-skill">
                <div className="progreso html">
                  <span> 70% </span>
                </div>
              </div>
            </div>
            <div className="skills">
              <span>Bootstrap</span>
              <div className="barra-skill">
                <div className="progreso bootstrap">
                  <span> 50% </span>
                </div>
              </div>
            </div>
            <div className="skills">
              <span>Python</span>
              <div className="barra-skill">
                <div className="progreso python">
                  <span> 50% </span>
                </div>
              </div>
            </div>
            <div className="skills">
              <span>React</span>
              <div className="barra-skill">
                <div className="progreso react">
                  <span> 15% </span>
                </div>
              </div>
            </div>
            <div className="skills">
              <span>Postgresql</span>
              <div className="barra-skill">
                <div className="progreso post">
                  <span> 50% </span>
                </div>
              </div>
            </div>
            <div className="skills">
              <span>Django</span>
              <div className="barra-skill">
                <div className="progreso django">
                  <span> 25% </span>
                </div>
              </div>
            </div>
            <div className="skills">
              <span>Git y Github</span>
              <div className="barra-skill">
                <div className="progreso git">
                  <span> 60% </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;