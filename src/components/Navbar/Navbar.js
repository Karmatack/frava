// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [navBackground, setNavBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Manejar el desplazamiento al hacer scroll
    const handleScroll = () => {
      const navBgElement = document.getElementById('nav-bg');
      const navElement = document.querySelector('nav');

      if (navBgElement && navElement) {
        const rect = navBgElement.getBoundingClientRect();
        setNavBackground(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Desplazar hacia arriba cuando la ruta cambia
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Ejecuta este efecto cada vez que la ruta cambia

  return (
    <>
      <nav className={navBackground ? 'scrolled' : ''}>
        <div className="container">
          <div id="icon" className="fontawesome-cog"></div>
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776; {/* Ícono de hamburguesa */}
          </div>
          <ul className={menuOpen ? 'menu open' : 'menu'}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>¿Quiénes Somos?</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Servicios</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
          </ul>
        </div>
      </nav>
      <div id="nav-bg"></div>
    </>
  );
}

export default Navbar;
