import React, { useState, useEffect } from 'react';
import './Header.css';
import imagdescript from "../../assets/background/fondoQuienesSomos.png"

function Header() {
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navBgElement = document.getElementById('nav-bg');
      const navElement = document.querySelector('nav');
      
      if (navBgElement && navElement) {
        const rect = navBgElement.getBoundingClientRect();
        // Si el top del nav-bg está en la parte visible de la ventana, se activa el cambio
        if (rect.top <= 0) {
          setNavBackground(true);
        } else {
          setNavBackground(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={navBackground ? 'scrolled' : ''}>
        <div className="container">
          <div id="icon" className="fontawesome-cog"></div>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">¿Quiénes Somos?</a></li>
            <li><a href="/services">Servicios</a></li>
            <li><a href="/clients">Clientes</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>
      </nav>

      <header>
        <div className="video-background">
          <iframe
            id="background-video"
            src="https://www.youtube.com/embed/841Aqh5vI3k?autoplay=1&mute=1&loop=1&playlist=841Aqh5vI3k&controls=0&showinfo=0&modestbranding=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Video de fondo"
          />
        </div>
        <div className="container" id="home">
          <div className="left-content">
            <h1>Tu socio estratégico en asesoría contable</h1>
            <p>
            En Grupo FraVa, trabajamos de la mano contigo para impulsar el crecimiento de tu empresa, ofreciendo
                  soluciones contables, tributarias, laborales y financieras personalizadas y de alta calidad. Juntos,
                  alcanzamos tus metas.
            </p>
          </div>
          <div className="right-content">
          <img src={imagdescript} alt="Descripción de la imagen" />
          </div>
        </div>
      </header>

      <div id="nav-bg"></div>
    </>
  );
}

export default Header;
