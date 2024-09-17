import React from 'react';
import './Contact.css';
import Map from '../../components/Map/Maps';

function Contact() {
  return (
    <>
      <main>
        <h2>Rellena el formulario y un asesor se comunicará contigo</h2>
        <section className="form_wrap">

          <section className="cantact_info">
            <section className="info_title">
              <span className="fa fa-user-circle"></span>
              <h2>INFORMACIÓN<br />DE CONTACTO</h2>
            </section>
            <section className="info_items">
              <p><span className="fa fa-envelope"></span> asesoriafrava@gmail.com</p>
              <p><span className="fa fa-mobile"></span> +51 ### ### ####</p>
            </section>
          </section>

          <form action="#" className="form_contact">
            <h2>Envía un mensaje</h2>
            <div className="user_info">
              <label htmlFor="names">Nombres *</label>
              <input type="text" id="names" required />

              <label htmlFor="phone">Teléfono / Celular</label>
              <input type="text" id="phone" />

              <label htmlFor="email">Correo electrónico *</label>
              <input type="email" id="email" required />

              <label htmlFor="mensaje">Mensaje *</label>
              <textarea id="mensaje" rows="6" required></textarea>

              <input type="button" value="Enviar Mensaje" id="btnSend" />
            </div>
          </form>

        </section>
        <h3>Ubicación</h3>
        <Map />
      </main>
    </>
  );
}

export default Contact;
