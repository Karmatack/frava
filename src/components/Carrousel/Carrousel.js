import React from 'react';
import logo1 from '../../assets/companylogo/logo1.png';
import logo2 from '../../assets/companylogo/logo2.png';
import logo3 from '../../assets/companylogo/logo3.png';
import logo4 from '../../assets/companylogo/logo4.png';
import logo5 from '../../assets/companylogo/logo5.png';

function ClientsCarousel() {
  return (
    <div className="container mx-auto text-center" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">Clientes</h2>
      <div className="overflow-hidden relative w-full">
        <div className="flex w-[200%] animate-scroll">
          {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
            <div key={index} className="mx-4">
              <img
                src={logo}
                alt={`Cliente ${index + 1}`}
                className="w-48 h-24 object-contain transition-transform hover:scale-110"
              />
            </div>
          ))}
          {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
            <div key={index + 5} className="mx-4">
              <img
                src={logo}
                alt={`Cliente ${index + 1}`}
                className="w-48 h-24 object-contain transition-transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientsCarousel;
