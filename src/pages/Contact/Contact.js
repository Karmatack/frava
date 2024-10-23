import React, { useState } from "react";
import "./Contact.css";
import Map from "../../components/Map/Maps";

function Contact() {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: "", // Cambiado de 'names' a 'name'
    phone: "",
    email: "",
    message: "", // Cambiado de 'mensaje' a 'message'
  });

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Manejador para enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        alert("Mensaje enviado con éxito");
      } else {
        alert("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error de red", error);
      alert("Error de red");
    }
  };

  return (
    <>
      <main>
        <h2 className="text-center mx-auto w-full">
          Rellena el formulario y un asesor se comunicará contigo
        </h2>

        <section className="form_wrap">
          <section className="cantact_info">
            <section className="info_title">
              <span className="fa fa-user-circle"></span>
              <h2>
                INFORMACIÓN
                <br />
                DE CONTACTO
              </h2>
            </section>
            <section className="info_items">
              <p>
                <span className="fa fa-envelope"></span> asesoriafrava@gmail.com
              </p>
              <p>
                <span className="fa fa-mobile"></span> +51 ### ### ####
              </p>
            </section>
          </section>

          <form onSubmit={handleSubmit} className="form_contact">
            <h2>Envía un mensaje</h2>
            <div className="user_info">
              <label htmlFor="name">Nombres *</label>
              <input
                type="text"
                id="name" // Asegúrate de que el ID coincida
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="phone">Teléfono / Celular</label>
              <input
                type="text"
                id="phone" // El ID debe coincidir con "phone" para ser enviado correctamente
                value={formData.phone}
                onChange={handleChange}
              />

              <label htmlFor="email">Correo electrónico *</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Mensaje *</label>
              <textarea
                id="message" // El ID debe coincidir con "message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
              ></textarea>

              <input type="submit" value="Enviar Mensaje" id="btnSend" />
            </div>
          </form>
        </section>

        <h2 className="text-center mx-auto w-full">Ubícanos en :</h2>
        <Map />
      </main>
    </>
  );
}

export default Contact;
