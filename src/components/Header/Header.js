import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import imagdescript from "../../assets/background/fondoQuienesSomos.png";

function Header() {
  const [navBackground, setNavBackground] = useState(false);
  const location = useLocation();

  useEffect(() => {
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

  let headerContent = { title: "", text: "", videoUrl: "" };

  switch (location.pathname) {
    case '/about':
      headerContent = {
        title: 'Sobre nosotros',
        text: 'Somos una empresa especializada en asesoría contable, laboral, tributaria y financiera, donde compartimos, escuchamos y valoramos las ideas de un equipo que se extiende más allá de nuestras oficinas, todo ello gracias al capital humano altamente calificado con el que contamos',
        videoUrl: 'https://www.youtube.com/embed/841Aqh5vI3k?autoplay=1&mute=1&loop=1&playlist=841Aqh5vI3k&controls=0&showinfo=0&modestbranding=1'  
      };
      break;
    case '/services':
      headerContent = {
        title: 'Nuestros Servicios',
        text: 'Ofrecemos asesoría contable, laboral, tributaria y financiera, enfocada en enfrentar fiscalizaciones tributarias con éxito. Proveemos información y documentación que garantiza el cumplimiento normativo, evitando riesgos de multas o embargos.',
        videoUrl: 'https://www.youtube.com/embed/841Aqh5vI3k?autoplay=1&mute=1&loop=1&playlist=841Aqh5vI3k&controls=0&showinfo=0&modestbranding=1' 
      };
      break;
    case '/clients':
      headerContent = {
        title: 'Clientes',
        text: 'Conoce a los clientes que confían en Grupo FraVa. Nuestra prioridad es brindar un servicio de calidad que supere sus expectativas.',
        videoUrl: 'https://www.youtube.com/embed/841Aqh5vI3k?autoplay=1&mute=1&loop=1&playlist=841Aqh5vI3k&controls=0&showinfo=0&modestbranding=1' 
      };
      break;
    case '/contact':
      headerContent = {
        title: 'Contacto',
        text: 'Ponte en contacto con nosotros. Estaremos encantados de responder a tus preguntas y ayudarte a alcanzar tus objetivos empresariales.',
        videoUrl: 'https://www.youtube.com/embed/841Aqh5vI3k?autoplay=1&mute=1&loop=1&playlist=841Aqh5vI3k&controls=0&showinfo=0&modestbranding=1'
      };
      break;
    default:  
      headerContent = {
        title: 'Tu socio estratégico en asesoría contable',
        text: 'En Grupo FraVa, trabajamos de la mano contigo para impulsar el crecimiento de tu empresa, ofreciendo soluciones contables, tributarias, laborales y financieras personalizadas y de alta calidad. Juntos, alcanzamos tus metas.',
        videoUrl: 'https://www.youtube.com/embed/841Aqh5vI3k?autoplay=1&mute=1&loop=1&playlist=841Aqh5vI3k&controls=0&showinfo=0&modestbranding=1' 
      };
      break;
  }

  return (
    <>
      <nav className={navBackground ? 'scrolled' : ''}>
        <div className="container">
          <div id="icon" className="fontawesome-cog"></div>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">¿Quiénes Somos?</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/clients">Clientes</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>
      </nav>

      <header>
        <div className="video-background">
          <iframe
            id="background-video"
            src={headerContent.videoUrl}  
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Video de fondo de Grupo FraVa"
          />
        </div>
        <div className="container" id="home">
          <div className="left-content">
            <h1>{headerContent.title}</h1>
            <p>{headerContent.text}</p>
          </div>
          <div className="right-content">
            <img src={imagdescript} alt="Imagen descriptiva del equipo de Grupo FraVa" />
          </div>
        </div>
      </header>

      <div id="nav-bg"></div>
    </>
  );
}

export default Header;
