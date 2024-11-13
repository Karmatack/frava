import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ClientsCarousel from '../../components/Carrousel/Carrousel';
import { FaBalanceScale, FaHandshake, FaUsers, FaChartLine } from 'react-icons/fa';

function Home() {
  // Inicializamos AOS para las animaciones de scroll
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Sección "Sobre nosotros" */}
      <section id="about" className="py-20 text-center bg-white">
        <div className="container mx-auto" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-12 text-[#1F2937]">Sobre nosotros</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Experiencia", icon: <FaUsers />, text: "Contamos con un equipo de expertos con amplia experiencia en contabilidad, finanzas, laboral, tributario y administrativo." },
              { title: "Compromiso", icon: <FaHandshake />, text: "Nos comprometemos a brindar un servicio personalizado y de alta calidad a nuestros clientes." },
              { title: "Confianza", icon: <FaBalanceScale />, text: "Construimos relaciones duraderas basadas en la confianza y la transparencia." },
            ].map((item, index) => (
              <div key={index} className="bg-[#1F2937] bg-opacity-90 text-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-2">
                <div className="text-yellow-400 text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección "Servicios" */}
      <section id="services" className="py-20 text-center bg-gray-50">
        <div className="container mx-auto" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-12 text-[#1F2937]">Servicios que ofrecemos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Contabilidad",
                items: ["Contabilidad general", "Contabilidad de costos", "Contabilidad financiera"],
                icon: <FaChartLine />,
              },
              {
                title: "Impuestos",
                items: ["Declaración de impuestos", "Planificación fiscal", "Asesoría fiscal"],
                icon: <FaBalanceScale />,
              },
              {
                title: "Auditoría",
                items: ["Auditoría financiera", "Auditoría interna", "Revisión de estados financieros"],
                icon: <FaHandshake />,
              },
            ].map((service, index) => (
              <div key={index} className="bg-[#1F2937] bg-opacity-90 text-white rounded-lg p-8 shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                <div className="text-yellow-400 text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                {service.items.map((item, idx) => (
                  <p key={idx} className="text-lg border-b border-gray-400 pb-1">{item}</p>
                ))}
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold mt-16 mb-12 text-[#1F2937]">Áreas de especialización</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Empresas en general",
                description: "Brindamos soluciones personalizadas para el crecimiento y la gestión financiera de las PYMES.",
                icon: <FaUsers />,
              },
              {
                title: "Comercio electrónico",
                description: "Apoyamos a empresas online con la gestión de sus operaciones y la optimización fiscal.",
                icon: <FaChartLine />,
              },
              {
                title: "Organizaciones sin fines de lucro",
                description: "Ayudamos a las ONG a cumplir con sus obligaciones contables y fiscales.",
                icon: <FaBalanceScale />,
              },
              {
                title: "Profesionales independientes",
                description: "Ofrecemos soluciones contables y fiscales para autónomos y profesionales.",
                icon: <FaHandshake />,
              },
            ].map((area, index) => (
              <div key={index} className="bg-gray-200 bg-opacity-20 rounded-lg p-8 shadow-md hover:shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                <div className="text-[#1F2937] text-5xl mb-4">{area.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-[#1F2937]">{area.title}</h3>
                <p className="text-lg text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección "Clientes" */}
      <section id="clients" className="py-20 bg-white">
        <ClientsCarousel />
      </section>
    </main>
  );
}

export default Home;
