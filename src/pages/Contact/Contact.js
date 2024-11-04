import React, { useState } from "react";
import ClientsCarousel from '../../components/Carrousel/Carrousel';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

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
      <main className="p-4">
        <h2 className="text-center text-3xl font-bold mb-6 text-[#1F2937]">
          Rellena el formulario y un asesor se comunicará contigo
        </h2>

        <section className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-6xl mx-auto border-2 border-[#1F2937]">
          {/* Información de Contacto */}
          <section className="bg-[#1F2937] text-white p-6 lg:w-1/3 flex flex-col items-center">
            <div className="mb-6">
              <span className="text-5xl mb-4 block text-yellow-400">
                <i className="fa fa-user-circle"></i>
              </span>
              <h2 className="text-3xl font-bold">INFORMACIÓN DE CONTACTO</h2>
            </div>
            <div className="space-y-4">
              <p className="flex items-center text-lg font-semibold">
                <i className="fa fa-envelope text-2xl mr-2 text-yellow-400"></i>
                asesoriafrava@gmail.com
              </p>
              <p className="flex items-center text-lg font-semibold">
                <i className="fa fa-mobile text-2xl mr-2 text-yellow-400"></i>
                +51 ### ### ####
              </p>
            </div>
          </section>

          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="p-6 flex-1 bg-gray-100 flex flex-col"
          >
            <h2 className="text-xl font-bold mb-4 text-[#1F2937]">Envía un mensaje</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold mb-1 text-[#1F2937]">
                  Nombres *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-[#1F2937] focus:border-[#1F2937] outline-none p-2 text-black rounded"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-semibold mb-1 text-[#1F2937]">
                  Teléfono / Celular
                </label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-2 border-[#1F2937] focus:border-[#1F2937] outline-none p-2 text-black rounded"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold mb-1 text-[#1F2937]">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-[#1F2937] focus:border-[#1F2937] outline-none p-2 text-black rounded"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-semibold mb-1 text-[#1F2937]">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  className="w-full border-2 border-[#1F2937] focus:border-[#1F2937] outline-none p-2 resize-none text-black rounded"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#1F2937] text-white font-semibold py-2 px-4 rounded hover:bg-gray-800 transition"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </section>

        {/* Sección "Clientes" */}
      <section id="clients" className="py-20 bg-gray-100 ">
        
        <ClientsCarousel />
      </section>

        

      </main>
    </>
  );
}

export default Contact;
