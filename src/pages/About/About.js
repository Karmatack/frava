import React, { useEffect } from 'react';
import fotoFranzuet from '../../assets/imagens/foto-Franzuet.webp';
import fotoVanessa from '../../assets/imagens/foto-Vanessa.webp';
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
      <section className="flex flex-col lg:flex-row justify-between w-full max-w-5xl space-y-6 lg:space-y-0 lg:space-x-6" data-aos="fade-up">
        <div className="w-full lg:w-1/2 p-6 border rounded-lg shadow-lg bg-white hover:scale-105 transition transform duration-300">
          <h2 className="text-2xl font-bold mb-4 text-black">Misión</h2>
          <p className="text-lg text-black">Brindar asesoría oportuna y confiable a nuestros clientes, enfocados en contribuir al desarrollo económico del país dentro de los más altos estándares éticos y morales, cumpliendo siempre la normatividad legal.</p>
        </div>
        <div className="w-full lg:w-1/2 p-6 border rounded-lg shadow-lg bg-white hover:scale-105 transition transform duration-300">
          <h2 className="text-2xl font-bold mb-4 text-black">Visión</h2>
          <p className="text-lg text-black">Ser una empresa líder a nivel nacional, consolidándonos en ofrecer una consultoría integral en las áreas contable, tributaria, laboral, comercial, financiera y administrativa de alta calidad.</p>
        </div>
      </section>
      <section className="flex flex-col w-full max-w-5xl space-y-6 lg:space-y-0 mt-6" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/4">
            <img src={fotoFranzuet} alt="Franzuet Ramos" className="w-32 h-32 rounded-full mb-4 hover:scale-110 transition transform duration-300 object-cover" />
            <div className="text-center">
              <h3 className="text-xl font-bold text-black">Franzuet Ramos</h3>
              <p className="text-gray-600">Director Ejecutivo</p>
            </div>
          </div>
          <div className="p-6 bg-blue-600 text-white rounded-lg shadow-lg w-full lg:w-3/4 flex justify-center items-center text-center hover:scale-105 transition transform duration-300 mt-4 lg:mt-0">
            <p className="text-lg">En Consultoría Tributaria Frava, estamos dedicados a ofrecerte asesoría contable, laboral, tributaria y financiera con un enfoque ético y profesional...</p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start lg:space-x-6">
          <div className="p-6 bg-blue-600 text-white rounded-lg shadow-lg w-full lg:w-3/4 flex justify-center items-center text-center hover:scale-105 transition transform duration-300 mt-4 lg:mt-0">
            <p className="text-lg">Nos enorgullece ofrecer asesoría oportuna y confiable...</p>
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
      <section className="w-full max-w-5xl mt-6" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">VIDEOS RELACIONADOS</h2>
        <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex flex-col items-center w-full lg:w-1/2">
            <iframe
              className="w-full aspect-video rounded-lg mb-2"
              src="https://www.youtube.com/embed/9JQyySExDXc?si=wAkPI9flYGvaPUY2&start=83"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p className="text-center text-black italic">"Quienes Somos..."</p>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/2">
            <iframe
              className="w-full aspect-video rounded-lg mb-2"
              src="https://www.youtube.com/embed/dyZPtIXtv8E?si=7HUGnOKI2utW_03S"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p className="text-center text-black italic">"Fehaciencia de Operaciones"</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;