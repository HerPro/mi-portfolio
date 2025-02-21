import React, { useEffect } from 'react';
import '../styles.css';

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {


      const gear = document.getElementById("gear");



      

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      gear.style.transform = `rotate(${scrollTop}deg)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer>
      <a href="#inicio" className="arriba">
        <i className="fa-solid fa-angles-up"></i>
      </a>
      <div id="gear-container">
        <i className="fa-solid fa-cog" id="gear"></i>
      </div>
      <div id="container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
    </div>

    </footer>
  );
};

export default Footer;