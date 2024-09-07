import React from 'react';
import './Home.css';

import logo1 from '../../assets/companylogo/logo1.png';
import logo2 from '../../assets/companylogo/logo2.png';
import logo3 from '../../assets/companylogo/logo3.png';
import logo4 from '../../assets/companylogo/logo4.png';
import logo5 from '../../assets/companylogo/logo5.png';


function Home() {
  return (
    <main>
      {/* Sección "Sobre nosotros" */}
      <section id="about">
        <div className="container">
          <h2>Sobre nosotros</h2>
          <div className="cards">
            <div className="card">
              <h3>Experiencia</h3>
              <p>Contamos con un equipo de expertos con amplia experiencia en contabilidad y finanzas.</p>
            </div>
            <div className="card">
              <h3>Compromiso</h3>
              <p>Nos comprometemos a brindar un servicio personalizado y de alta calidad a nuestros clientes.</p>
            </div>
            <div className="card">
              <h3>Confianza</h3>
              <p>Construimos relaciones duraderas basadas en la confianza y la transparencia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección "Servicios" */}
      <section id="services">
        <div className="container">
          <div id="fondo">
            <h2>Servicios que ofrecemos</h2>
            <div className="cards">
              <div className="card">
                <h3>Contabilidad</h3>
                <p>Contabilidad general</p>
                <p>Contabilidad de costos</p>
                <p>Contabilidad financiera</p>
              </div>
              <div className="card">
                <h3>Impuestos</h3>
                <p>Declaración de impuestos</p>
                <p>Planificación fiscal</p>
                <p>Asesoría fiscal</p>
              </div>
              <div className="card">
                <h3>Auditoría</h3>
                <p>Auditoría financiera</p>
                <p>Auditoría interna</p>
                <p>Revisión de estados financieros</p>
              </div>
            </div>

            <h2 id="abc">Áreas de especialización</h2>
            <div className="cards">
              <div className="card">
                <h3>Empresas en general</h3>
                <p>Brindamos soluciones personalizadas para el crecimiento y la gestión financiera de las PYMES.</p>
              </div>
              <div className="card">
                <h3>Comercio electrónico</h3>
                <p>Apoyamos a empresas online con la gestión de sus operaciones y la optimización fiscal.</p>
              </div>
              <div className="card">
                <h3>Organizaciones sin fines de lucro</h3>
                <p>Ayudamos a las ONG a cumplir con sus obligaciones contables y fiscales.</p>
              </div>
              <div className="card">
                <h3>Profesionales independientes</h3>
                <p>Ofrecemos soluciones contables y fiscales para autónomos y profesionales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección "Clientes" */}
      <section id="clients">
        <div className="container">
          <h2>Clientes</h2>
          <div className="client-slider">
            <div className="slide-track">
              <div className="slide">
              <img src={logo1} alt="Cliente 1" />
              </div>
              <div className="slide">
              <img src={logo2} alt="Cliente 2" />
              </div>
              <div className="slide">
              <img src={logo3} alt="Cliente 3" />
              </div>
              <div className="slide">
              <img src={logo4} alt="Cliente 4" />
              </div>
              <div className="slide">
              <img src={logo5} alt="Cliente 5" />
              </div>
              {/* Duplicamos el contenido para crear un efecto de carrusel continuo */}
              <div className="slide">
              <img src={logo1} alt="Cliente 1" />
              </div>
              <div className="slide">
              <img src={logo2} alt="Cliente 2" />
              </div>
              <div className="slide">
              <img src={logo3} alt="Cliente 3" />
              </div>
              <div className="slide">
              <img src={logo4} alt="Cliente 4" />
              </div>
              <div className="slide">
              <img src={logo5} alt="Cliente 5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
