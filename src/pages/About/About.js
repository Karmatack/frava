import React from 'react';
import './About.css';

import fotoFranzuet from '../../assets/imagens/foto-Franzuet.webp';
import fotoVanessa from '../../assets/imagens/foto-Vanessa.webp';

function About() {
  return (
    <>
      <main className="content">
        
        <section className="info-box-container">
          <div className="info-box">
            <h2>MISION</h2>
            <p>Brindar asesoría oportuna y confiable a nuestros clientes, enfocados en contribuir al desarrollo económico del país dentro de los más altos estándares éticos y morales, cumpliendo siempre la normatividad legal.</p>
          </div>
          <div className="info-box">
            <h2>VISION</h2>
            <p>Ser una empresa líder a nivel nacional y consolidarnos en “ofrecer una consultoría integral, en materia contable, tributaria, laboral, comercial, financiera y administrativa de alta calidad”.</p>
          </div>
        </section>

        {/* Primer Profile y Text Box Section */}
        <section className="profile-text-section">
          <div className="profile-box-left">
            <div className="profile-container">
              <div className="profile-img">
                <img src={fotoFranzuet} alt="Franzuet Ramos" />
              </div>
              <div className="profile-info">
                <h3>Franzuet Ramos</h3>
                <p>Director Ejecutivo</p>
              </div>
            </div>
          </div>
          <div className="text-box-right">
            <p>En Consultoría Tributaria Frava, estamos dedicados a ofrecerte asesoría contable, laboral, tributaria y financiera con un enfoque ético y profesional. Nuestro equipo trabaja incansablemente para ayudarte a cumplir con todas tus obligaciones y evitar problemas futuros, siempre con el objetivo de contribuir al desarrollo económico del país. Queremos ser tu socio de confianza en cada paso, respaldándote con la información y el apoyo que necesitas. Gracias por elegirnos para acompañarte en tu camino.</p>
          </div>
        </section>

        {/* Segundo Text Box y Profile Section */}
        <section className="text-profile-section">
          <div className="text-box-left">
            <p>Nos enorgullece ofrecer asesoría oportuna y confiable, contribuyendo al desarrollo económico del país con los más altos estándares éticos y legales. Nuestra misión es brindar una consultoría integral y de alta calidad en áreas contables, tributarias, laborales, comerciales, financieras y administrativas.</p>
          </div>
          <div className="profile-box-right">
            <div className="profile-container">
              <div className="profile-img">
                <img src={fotoVanessa} alt="Vanessa Toledo" />
              </div>
              <div className="profile-info">
                <h3>Vanessa Toledo</h3>
                <p>Gerente General</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="video-section">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9JQyySExDXc?si=RNI80-JUbgz7aVh6"
            title="YouTube video player"
            frameBorder="0"
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
