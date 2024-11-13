import React, { useEffect } from "react";
import { FaHandsHelping, FaChartLine } from "react-icons/fa";
import fotoFranzuet from "../../assets/imagens/foto-Franzuet.webp";
import fotoVanessa from "../../assets/imagens/foto-Vanessa.webp";
import compromiso from "../../assets/imagens/compromiso.webp";
import eficiencia from "../../assets/imagens/eficiencia.webp";
import vocacion from "../../assets/imagens/vocacion.webp";
import frava from "../../assets/imagens/frava.webp";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="flex flex-col items-center p-8 bg-gray-100">
      {/* Section: Who We Are */}
      <section
        className="w-full max-w-5xl mb-12 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-6 text-blue-900">
          ¿Quiénes Somos?
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          <strong>Grupo Frava</strong> es una empresa especializada en asesoría
          contable, laboral, tributaria y financiera, que valora el trabajo en
          equipo y la importancia de compartir, escuchar y valorar las ideas de
          todos sus miembros.
        </p>
        <p className="text-lg text-gray-700">
          Con un equipo altamente calificado, Grupo Frava se enfoca en ofrecer
          servicios de calidad que contribuyan al desarrollo económico y ético
          de nuestros clientes y la comunidad.
        </p>
      </section>

      {/* Sección Misión y Visión */}
      <section
        className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl"
        data-aos="fade-up"
      >
        <div className="flex-1 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900 flex items-center gap-2">
            <FaHandsHelping /> Misión
          </h3>
          <p className="text-lg text-gray-700">
            Brindar asesoría oportuna y confiable a nuestros clientes,
            contribuyendo al desarrollo económico del país con altos estándares
            éticos y en cumplimiento de la normatividad legal.
          </p>
        </div>
        <div className="flex-1 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900 flex items-center gap-2">
            <FaChartLine /> Visión
          </h3>
          <p className="text-lg text-gray-700">
            Ser una empresa líder a nivel nacional en consultoría integral,
            destacándonos en áreas como contabilidad, tributación, laboral,
            comercial, financiera y administrativa de alta calidad.
          </p>
        </div>
      </section>

      <section
        className="flex flex-col w-full max-w-5xl space-y-8 mt-6"
        data-aos="fade-up"
      >
        {/* Tarjeta de perfil de Franzuet Ramos */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 duration-300 bg-gradient-to-br from-[#1F2937] via-[#374151] to-[#4B5563] text-white">
          <div className="flex flex-col items-center lg:w-1/3">
            <img
              src={fotoFranzuet}
              alt="Franzuet Ramos"
              className="w-32 h-32 rounded-full mb-4 hover:scale-110 transition duration-300 object-cover shadow-md"
            />
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">Franzuet Ramos</h3>
              <p className="text-gray-300">Director Ejecutivo</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-4 lg:mt-0 lg:ml-8 text-gray-200 lg:w-2/3">
            <p className="text-lg text-center">
              En Grupo Frava, creemos que el éxito se construye con cada idea
              compartida, cada esfuerzo conjunto y un equipo comprometido a
              ofrecer soluciones innovadoras y de calidad en asesoría contable,
              laboral, tributaria y financiera.
            </p>
          </div>
        </div>

        {/* Tarjeta de perfil de Vanessa Toledo */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-center rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 duration-300 bg-gradient-to-br from-[#1F2937] via-[#374151] to-[#4B5563] text-white">
          <div className="flex flex-col items-center lg:w-1/3">
            <img
              src={fotoVanessa}
              alt="Vanessa Toledo"
              className="w-32 h-32 rounded-full mb-4 hover:scale-110 transition duration-300 object-cover shadow-md"
            />
            <div className="text-center">
              <h3 className="text-xl font-bold text-white">Vanessa Toledo</h3>
              <p className="text-gray-300">Gerente General</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-4 lg:mt-0 lg:mr-8 text-gray-200 lg:w-2/3">
            <p className="text-lg text-center">
              En Grupo Frava, trabajamos con pasión y compromiso, porque sabemos
              que cada desafío es una oportunidad para crecer juntos, brindando
              soluciones de calidad que impulsan el éxito de nuestros clientes y
              el desarrollo de nuestro equipo.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Valores */}
      <section
        className="w-full max-w-5xl my-12 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-6 text-blue-900">
          Nuestros Valores
        </h2>
        <div className="flex flex-wrap justify-center gap-16">
          <div className="flex flex-col items-center">
            <img src={compromiso} alt="Compromiso" className="w-24 h-24 mb-4" />
            <p className="text-xl font-semibold text-gray-800">Compromiso</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={eficiencia} alt="Eficiencia" className="w-24 h-24 mb-4" />
            <p className="text-xl font-semibold text-gray-800">Eficiencia</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={vocacion}
              alt="Vocación de Servicio"
              className="w-24 h-24 mb-4"
            />
            <p className="text-xl font-semibold text-gray-800">
              Vocación de Servicio
            </p>
          </div>
        </div>
      </section>

      {/* Sección Historia */}
      <section
        className="w-full max-w-5xl my-12 flex flex-col lg:flex-row items-center gap-12"
        data-aos="fade-up"
      >
        <img
          src={frava}
          alt="Conoce más de Nosotros"
          className="w-3/4 lg:w-1/2 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        />
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-blue-900">
            Conoce más de Nosotros
          </h2>
          <p className="text-lg text-gray-700">
            Hace 10 años, un grupo de profesionales se unió con la misión de
            ofrecer soluciones estratégicas a las empresas. Hoy, somos una de
            las principales organizaciones en consultoría, con un equipo
            altamente capacitado y comprometido en brindar un excelente
            servicio.
          </p>
        </div>
      </section>

      <section className="w-full max-w-5xl mt-12" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          VIDEOS RELACIONADOS
        </h2>
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
            <p className="text-lg text-black text-center">
              "Un recorrido por la historia y misión de Grupo Frava"
            </p>
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
            <p className="text-lg text-black text-center">
              "Conoce más sobre nuestra experiencia"
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6 mt-6">
          <div className="flex flex-col items-center w-full lg:w-1/2">
            <iframe
              className="w-full aspect-video rounded-lg mb-2"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rbvLbM8IDy4?si=7kmiibGm6hsu3Y-R&amp;start=7"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-lg text-black text-center">
              "Explicacion de Temas Relacionados""
            </p>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/2">
            <iframe
              className="w-full aspect-video rounded-lg mb-2"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kzhyMS0s2vk?si=JteNKUHdLixHjSs2&amp;start=418"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-lg text-black text-center">
              "Entrevista a nuestro Gerente General"
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
