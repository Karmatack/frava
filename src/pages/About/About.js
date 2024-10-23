import React from 'react';
import fotoFranzuet from '../../assets/imagens/foto-Franzuet.webp';
import fotoVanessa from '../../assets/imagens/foto-Vanessa.webp';

function About() {
  return (
    <>
      <main className="flex flex-col items-center p-6 bg-gray-100">

        {/* Sección de Especialización y Valores */}
        <section className="w-full max-w-5xl mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-black">¿Quiénes Somos?</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Especialización:</strong> Grupo Frava es una empresa especializada en asesoría contable, laboral, tributaria y financiera.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Valores del equipo:</strong> La empresa valora el trabajo en equipo y destaca la importancia de compartir, escuchar y valorar las ideas de todos sus miembros.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Capital humano:</strong> Grupo Frava cuenta con un equipo altamente calificado, enfocado en proporcionar un servicio de calidad.
          </p>
        </section>

        {/* Misión y Visión */}
        <section className="flex flex-col lg:flex-row justify-between w-full max-w-5xl space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="w-full lg:w-1/2 p-6 border rounded-lg shadow-lg bg-white hover:scale-105 transition transform duration-300">
            <h2 className="text-2xl font-bold mb-4 text-black">Misión</h2>
            <p className="text-lg text-black">Brindar asesoría oportuna y confiable a nuestros clientes, enfocados en contribuir al desarrollo económico del país dentro de los más altos estándares éticos y morales, cumpliendo siempre la normatividad legal.</p>
          </div>
          <div className="w-full lg:w-1/2 p-6 border rounded-lg shadow-lg bg-white hover:scale-105 transition transform duration-300">
            <h2 className="text-2xl font-bold mb-4 text-black">Visión</h2>
            <p className="text-lg text-black">Ser una empresa líder a nivel nacional, consolidándonos en ofrecer una consultoría integral en las áreas contable, tributaria, laboral, comercial, financiera y administrativa de alta calidad.</p>
          </div>
        </section>

        {/* Primer Profile y Text Box Section */}
        <section className="flex flex-col lg:flex-row justify-between items-center w-full max-w-5xl space-y-6 lg:space-y-0 lg:space-x-6 mt-12">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/4">
            <img src={fotoFranzuet} alt="Franzuet Ramos" className="w-32 h-32 rounded-full mb-4 hover:scale-110 transition transform duration-300" />
            <div className="text-center">
              <h3 className="text-xl font-bold text-black">Franzuet Ramos</h3>
              <p className="text-gray-600">Director Ejecutivo</p>
            </div>
          </div>
          <div className="p-6 bg-blue-600 text-white rounded-lg shadow-lg w-full lg:w-3/4 flex justify-center items-center text-center">
            <p className="text-lg">En Consultoría Tributaria Frava, estamos dedicados a ofrecerte asesoría contable, laboral, tributaria y financiera con un enfoque ético y profesional. Nuestro equipo trabaja incansablemente para ayudarte a cumplir con todas tus obligaciones y evitar problemas futuros, siempre con el objetivo de contribuir al desarrollo económico del país. Queremos ser tu socio de confianza en cada paso, respaldándote con la información y el apoyo que necesitas. Gracias por elegirnos para acompañarte en tu camino.</p>
          </div>
        </section>

        {/* Segundo Text Box y Profile Section */}
        <section className="flex flex-col lg:flex-row justify-between items-center w-full max-w-5xl space-y-6 lg:space-y-0 lg:space-x-6 mt-12">
          <div className="p-6 bg-blue-600 text-white rounded-lg shadow-lg w-full lg:w-3/4 flex justify-center items-center text-center">
            <p className="text-lg">Nos enorgullece ofrecer asesoría oportuna y confiable, contribuyendo al desarrollo económico del país con los más altos estándares éticos y legales. Nuestra misión es brindar una consultoría integral y de alta calidad en áreas contables, tributarias, laborales, comerciales, financieras y administrativas.</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/4">
            <img src={fotoVanessa} alt="Vanessa Toledo" className="w-32 h-32 rounded-full mb-4 hover:scale-110 transition transform duration-300" />
            <div className="text-center">
              <h3 className="text-xl font-bold text-black">Vanessa Toledo</h3>
              <p className="text-gray-600">Gerente General</p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="w-full max-w-5xl mt-12">
          <iframe
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/9JQyySExDXc?si=RNI80-JUbgz7aVh6"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
      </main>
    </>
  );
}

export default About;
