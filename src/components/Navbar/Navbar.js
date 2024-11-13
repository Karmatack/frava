// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logofrava/logoFrava.jpg';

function Navbar() {
  const [navBackground, setNavBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all ${navBackground ? 'bg-gray-800' : 'bg-transparent'}`}>
        <div className={`flex items-center ${navBackground ? 'justify-between' : 'justify-end'} max-w-7xl mx-auto px-6 py-4`}>
          {/* Logo y nombre que aparece solo al hacer scroll */}
          {navBackground && (
            <div className="flex items-center space-x-2 transition-opacity duration-300">
              <img src={logo} alt="GrupoFrava" className="w-8 h-8" />
              <span className="text-white font-semibold text-lg">GrupoFrava</span>
            </div>
          )}

          {/* Icono de menú para pantallas pequeñas */}
          <div className="menu-icon text-white text-2xl cursor-pointer md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </div>

          {/* Menú de navegación */}
          <ul className={`flex space-x-6 ${menuOpen ? 'block' : 'hidden md:flex'} md:space-x-8`}>
            <li><Link to="/" className="text-white hover:text-gray-400" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
            <li><Link to="/nosotros" className="text-white hover:text-gray-400" onClick={() => setMenuOpen(false)}>¿Quiénes Somos?</Link></li>
            <li><Link to="/servicios-contables" className="text-white hover:text-gray-400" onClick={() => setMenuOpen(false)}>Servicios</Link></li>
            <li><Link to="/contacto" className="text-white hover:text-gray-400" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
