import React from "react";
import logofrava from '../../assets/logofrava/logoFrava.jpg';
import location from '../../assets/svg/location.png';
import phone from '../../assets/svg/phone.png';
import whatsapp from '../../assets/svg/whatsapp.svg';
import facebook from '../../assets/svg/facebook.svg';
import linkedin from '../../assets/svg/linkedin.svg';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:space-x-10 px-10"> {/* Añadido padding */}
        
        {/* Brand Section */}
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <img src={logofrava} alt="Grupo FraVa" className="w-40 h-auto mb-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:ml-10 lg:ml-20"> {/* Ajustes aquí */}
          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold mb-3">SOBRE NOSOTROS</h2>
            <div className="bg-gray-700 p-4 rounded-md">
              <p className="text-sm leading-relaxed">
                Estamos comprometidos en ofrecer soluciones de calidad en asesoría contable, tributaria, laboral y financiera.
              </p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold mb-3">SÍGUENOS</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <img src={facebook} alt="Facebook" className="w-8 h-8" />
              <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
              <img src={location} alt="Ubicación" className="w-8 h-8" />
              <img src={phone} alt="Teléfono" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        &copy; 2024 GRUPO FRAVA | Todos los derechos reservados
      </div>
    </footer>
  );
}

export default Footer;
