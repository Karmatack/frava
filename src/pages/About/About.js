import React, { useEffect } from 'react';
import fotoFranzuet from '../../assets/imagens/foto-Franzuet.webp';
import fotoVanessa from '../../assets/imagens/foto-Vanessa.webp';
import compromiso from '../../assets/imagens/compromiso.webp';
import eficiencia from '../../assets/imagens/eficiencia.webp';
import vocacion from '../../assets/imagens/vocacion.webp';
import frava from '../../assets/imagens/frava.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="flex flex-col items-center p-6 bg-gray-100">
      <section className="w-full max-w-5xl mb-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4 text-center text-black">¿Quiénes Somos?</h2>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Especialización:</strong> Grupo Frava es una empresa especializada en asesoría contable, laboral, tributaria y financiera.
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Valores del equipo:</strong> La empresa valora el trabajo en equipo y destaca la importancia de compartir, escuchar y valorar las ideas de todos sus miembros.
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Capital humano:</strong> Grupo Frava cuenta con un equipo altamente calificado, enfocado en proporcionar un servicio de calidad.
        </p>
      </section>

      <section className="flex flex-col lg:flex-row justify-between w-full max-w-5xl space-y-6 lg:space-y-0 lg:space-x-6 mt-6" data-aos="fade-up">
        <div className="w-full lg:w-1/2 p-6 border rounded-lg shadow-lg bg-white hover:scale-105 transition transform duration-300 mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-black">Misión</h2>
          <p className="text-lg text-black">Brindar asesoría oportuna y confiable a nuestros clientes, enfocados en contribuir al desarrollo económico del país dentro de los más altos estándares éticos y morales, cumpliendo siempre la normatividad legal.</p>
        </div>
        <div className="w-full lg:w-1/2 p-6 border rounded-lg shadow-lg bg-white hover:scale-105 transition transform duration-300 mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-black">Visión</h2>
          <p className="text-lg text-black">Ser una empresa líder a nivel nacional, consolidándonos en ofrecer una consultoría integral en las áreas contable, tributaria, laboral, comercial, financiera y administrativa de alta calidad.</p>
        </div>
      </section>

      <section className="flex flex-col w-full max-w-5xl space-y-6 lg:space-y-0 mt-6" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 mb-6">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/4">
            <img src={fotoFranzuet} alt="Franzuet Ramos" className="w-32 h-32 rounded-full mb-4 hover:scale-110 transition transform duration-300 object-cover" />
            <div className="text-center">
              <h3 className="text-xl font-bold text-black">Franzuet Ramos</h3>
              <p className="text-gray-600">Director Ejecutivo</p>
            </div>
          </div>
          <div className="p-6 bg-blue-600 text-white rounded-lg shadow-lg w-full lg:w-3/4 flex justify-center items-center text-center hover:scale-105 transition transform duration-300 mt-14 lg:mt-0">
            <p className="text-lg whitespace-normal">En Grupo Frava, creemos que el éxito se construye con cada idea compartida, cada esfuerzo conjunto y un equipo comprometido a ofrecer soluciones innovadoras y de calidad en asesoría contable, laboral, tributaria y financiera.</p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start lg:space-x-6 mb-6">
          <div className="p-6 bg-blue-600 text-white rounded-lg shadow-lg w-full lg:w-3/4 flex justify-center items-center text-center hover:scale-105 transition transform duration-300 mt-14 lg:mt-0">
            <p className="text-lg whitespace-normal">En Grupo Frava, trabajamos con pasión y compromiso, porque sabemos que cada desafío es una oportunidad para crecer juntos, brindando soluciones de calidad que impulsan el éxito de nuestros clientes y el desarrollo de nuestro equipo.</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/4">
            <img src={fotoVanessa} alt="Vanessa Toledo" className="w-32 h-32 rounded-full mb-4 hover:scale-110 transition transform duration-300 object-cover" />
            <div className="text-center">
              <h3 className="text-xl font-bold text-black">Vanessa Toledo</h3>
              <p className="text-gray-600">Gerente General</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-5xl mt-12 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">NUESTROS VALORES</h2>
        <div className="flex flex-wrap justify-center space-x-6 lg:space-x-16 border-2 border-transparent">
          <div className="flex flex-col items-center text-center transform hover:translate-x-1 transition duration-300 mb-6 lg:mb-0">
            <img src={compromiso} alt="Compromiso" className="w-24 h-24 mb-2" />
            <p className="text-lg font-semibold text-black">COMPROMISO</p>
          </div>
          <div className="flex flex-col items-center text-center mx-auto transform hover:translate-x-1 transition duration-300 mb-6 lg:mb-0">
            <img src={eficiencia} alt="Eficiencia" className="w-24 h-24 mb-2" />
            <p className="text-lg font-semibold text-black">EFICIENCIA</p>
          </div>
          <div className="flex flex-col items-center text-center transform hover:translate-x-1 transition duration-300 mb-6 lg:mb-0">
            <img src={vocacion} alt="Vocación de Servicio" className="w-24 h-24 mb-2" />
            <p className="text-lg font-semibold text-black">VOCACIÓN DE SERVICIO</p>
          </div>
        </div>
      </section>
      <section className="w-full max-w-5xl mt-12 flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0" data-aos="fade-up">
        <div className="w-full lg:w-1/2 flex justify-start">
          <img src={frava} alt="Conoce más de Nosotros" className="w-3/4 lg:w-1/2 h-auto rounded-lg shadow-lg ml-16" />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-8 text-black">Conoce más de Nosotros</h2>
          <p className="text-lg text-gray-700">
            Hace 10 años, un grupo de profesionales se unió con la misión de ofrecer soluciones estratégicas a las empresas. Hoy, somos una de las principales organizaciones en consultoría, con un equipo altamente capacitado y comprometido en brindar un excelente servicio.
          </p>
        </div>
      </section>

<section className="w-full max-w-5xl mt-12" data-aos="fade-up">
  <h2 className="text-2xl font-bold mb-4 text-center text-black">VIDEOS RELACIONADOS</h2>
  <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6">
    <div className="flex flex-col items-center w-full lg:w-1/2">
      <iframe
        className="w-full aspect-video rounded-lg mb-2"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9JQyySExDXc?si=nLs6M-WWrnDGstT0&amp;start=83"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="text-lg text-black text-center">Un recorrido por la historia y misión de Grupo Frava</p>
    </div>
    <div className="flex flex-col items-center w-full lg:w-1/2">
      <iframe
        className="w-full aspect-video rounded-lg mb-2"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dyZPtIXtv8E?si=mUhDWtAeN2aoobv4"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="text-lg text-black text-center">Conoce más sobre nuestra experiencia</p>
    </div>
  </div>
</section>
    </main>
  );
}

export default About;
