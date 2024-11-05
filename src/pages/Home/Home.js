import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ClientsCarousel from '../../components/Carrousel/Carrousel';

function Home() {
  // Inicializamos AOS para las animaciones de scroll
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main>
      {/* Sección "Sobre nosotros" */}
      <section id="about" className="py-20 text-center">
        <div className="container mx-auto" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Sobre nosotros</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-200 bg-opacity-20 rounded-lg p-8 shadow-lg transition-transform transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Experiencia</h3>
              <p className="text-lg text-gray-600">
                Contamos con un equipo de expertos con amplia experiencia en contabilidad y finanzas.
              </p>
            </div>
            <div className="bg-gray-200 bg-opacity-20 rounded-lg p-8 shadow-lg transition-transform transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Compromiso</h3>
              <p className="text-lg text-gray-600">
                Nos comprometemos a brindar un servicio personalizado y de alta calidad a nuestros clientes.
              </p>
            </div>
            <div className="bg-gray-200 bg-opacity-20 rounded-lg p-8 shadow-lg transition-transform transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Confianza</h3>
              <p className="text-lg text-gray-600">
                Construimos relaciones duraderas basadas en la confianza y la transparencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección "Servicios" */}
      <section id="services" className="py-20 text-center bg-gray-50">
        <div className="container mx-auto" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Servicios que ofrecemos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-200 bg-opacity-20 rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Contabilidad</h3>
              <p className="text-lg text-gray-600">Contabilidad general</p>
              <p className="text-lg text-gray-600">Contabilidad de costos</p>
              <p className="text-lg text-gray-600">Contabilidad financiera</p>
            </div>
            <div className="bg-gray-200 bg-opacity-20 rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Impuestos</h3>
              <p className="text-lg text-gray-600">Declaración de impuestos</p>
              <p className="text-lg text-gray-600">Planificación fiscal</p>
              <p className="text-lg text-gray-600">Asesoría fiscal</p>
            </div>
            <div className="bg-gray-200 bg-opacity-20 rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Auditoría</h3>
              <p className="text-lg text-gray-600">Auditoría financiera</p>
              <p className="text-lg text-gray-600">Auditoría interna</p>
              <p className="text-lg text-gray-600">Revisión de estados financieros</p>
            </div>
          </div>

          <h2 className="text-4xl font-bold mt-16 mb-12 text-gray-800">Áreas de especialización</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-200 bg-opacity-20 rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Empresas en general</h3>
              <p className="text-lg text-gray-600">
                Brindamos soluciones personalizadas para el crecimiento y la gestión financiera de las PYMES.
              </p>
            </div>
            <div className="bg-gray-200 bg-opacity-20 rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in" data-aos-delay="100">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Comercio electrónico</h3>
              <p className="text-lg text-gray-600">
                Apoyamos a empresas online con la gestión de sus operaciones y la optimización fiscal.
              </p>
            </div>
            <div className="bg-gray-200 bg-opacity-20 rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Organizaciones sin fines de lucro</h3>
              <p className="text-lg text-gray-600">
                Ayudamos a las ONG a cumplir con sus obligaciones contables y fiscales.
              </p>
            </div>
            <div className="bg-gray-200 bg-opacity-20 rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in" data-aos-delay="300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Profesionales independientes</h3>
              <p className="text-lg text-gray-600">
                Ofrecemos soluciones contables y fiscales para autónomos y profesionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección "Clientes" */}
      <section id="clients" className="py-20 bg-gray-100">
        
        <ClientsCarousel />
      </section>
    </main>
  );
}

export default Home;
