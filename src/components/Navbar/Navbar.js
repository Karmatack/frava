// src/components/Navbar/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logofrava/logoFrava.jpg';
import './Navbar.css';

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
          {navBackground && (
            <div className="flex items-center space-x-2 transition-opacity duration-300">
              <img src={logo} alt="GrupoFrava" className="w-8 h-8" />
              <span className="text-white font-semibold text-lg">GrupoFrava</span>
            </div>
          )}

          <div className="menu-icon text-white text-2xl cursor-pointer md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </div>

          <ul className={`menu ${menuOpen ? 'open' : 'hidden'} md:flex md:space-x-8`}>
            <li><Link to="/" className="text-white hover:text-gray-400" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
            <li><Link to="/nosotros" className="text-white hover:text-gray-400" onClick={() => setMenuOpen(false)}>¿Quiénes Somos?</Link></li>
            <li><Link to="/servicios-contables" className="text-white hover:text-gray-400" onClick={() => setMenuOpen(false)}>Servicios</Link></li>
            <li><Link to="/contacto" className="text-white hover:text-gray-400" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
          </ul>
        </div>
      </nav>
      <div id="nav-bg"></div>
    </>
  );
}

export default Navbar;
