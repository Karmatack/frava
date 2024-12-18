// Carrousel.js (src/components/Carrousel/Carrousel.js)
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Carrousel() {
  const logos = require.context('../../assets/companylogo', false, /\.webp$/);
  const logoArray = logos.keys().map(logos);
  const duplicatedLogos = [...logoArray, ...logoArray];

  useEffect(() => {
    // Asegura que AOS se inicialice cada vez que el carrusel se carga
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto text-center bg-white" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">Clientes</h2>
      <div className="overflow-hidden relative w-full bg-white">
        <div
          className="flex animate-scroll"
          style={{ width: `${duplicatedLogos.length * 20}%` }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="mx-4 flex-shrink-0">
              <img
                src={logo}
                alt={`Cliente ${index + 1}`}
                className="w-48 h-24 md:w-64 md:h-32 lg:w-80 lg:h-40 object-contain transition-transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
