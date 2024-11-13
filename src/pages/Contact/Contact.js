import React, { useState } from "react";
import ClientsCarousel from "../../components/Carrousel/Carrousel";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    empresa: "", // Campo opcional de empresa
    phone: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendTimes, setSendTimes] = useState([]); // Estado para registrar los tiempos de envío

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = Date.now();
    const oneMinuteAgo = now - 60000;

    // Filtrar los envíos que ocurrieron en el último minuto
    const recentSends = sendTimes.filter((time) => time > oneMinuteAgo);

    if (recentSends.length >= 3) {
      setStatusMessage({
        type: "error",
        text: "Has alcanzado el límite de 3 mensajes en 1 minuto. Por favor, espera un momento antes de enviar otro mensaje.",
      });
      setIsModalOpen(true);
      return;
    }

    // Agregar el tiempo actual a la lista de envíos
    setSendTimes([...recentSends, now]);
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:8080/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        setStatusMessage({
          type: "success",
          text: "Mensaje enviado con éxito",
        });
      } else {
        setStatusMessage({
          type: "error",
          text: `Error del servidor (código ${response.status}): No se pudo enviar el mensaje. Inténtalo más tarde.`,
        });
      }
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error de red o servidor inactivo", error);
      setStatusMessage({
        type: "error",
        text: "Error de red o servidor inactivo: No se pudo conectar al servidor. Verifica tu conexión o intenta más tarde.",
      });
      setIsModalOpen(true);
    } finally {
      setTimeout(() => setIsSubmitting(false), 5000);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStatusMessage({ type: "", text: "" });
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
                +51 962 414 654
              </p>
            </div>
          </section>

          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="p-6 flex-1 bg-gray-100 flex flex-col"
          >
            <h2 className="text-xl font-bold mb-4 text-[#1F2937]">
              Envía un mensaje
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block font-semibold mb-1 text-[#1F2937]"
                >
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
                <label
                  htmlFor="empresa"
                  className="block font-semibold mb-1 text-[#1F2937]"
                >
                  Empresa(opcional)
                </label>
                <input
                  type="text"
                  id="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full border-2 border-[#1F2937] focus:border-[#1F2937] outline-none p-2 text-black rounded"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-semibold mb-1 text-[#1F2937]"
                >
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
                <label
                  htmlFor="email"
                  className="block font-semibold mb-1 text-[#1F2937]"
                >
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
                <label
                  htmlFor="message"
                  className="block font-semibold mb-1 text-[#1F2937]"
                >
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
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </div>
          </form>
        </section>

        {/* Modal de confirmación o error */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center transform transition-transform duration-300 scale-100">
              <div className="mb-4">
                {statusMessage.type === "success" ? (
                  <svg
                    className="w-16 h-16 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-16 h-16 text-red-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </div>
              <h3
                className={`text-2xl font-bold mb-4 ${
                  statusMessage.type === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {statusMessage.type === "success"
                  ? "¡Mensaje Enviado!"
                  : "Ocurrió un Error"}
              </h3>
              <p className="mb-6 text-gray-700">{statusMessage.text}</p>
              <button
                onClick={closeModal}
                className="bg-[#1F2937] text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-800 transition transform hover:scale-105"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}

        <section id="clients" className="py-20 bg-gray-100 ">
          <ClientsCarousel />
        </section>
      </main>
    </>
  );
}

export default Contact;
