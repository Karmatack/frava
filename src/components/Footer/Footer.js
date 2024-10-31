import React from "react";
import logofrava from '../../assets/logofrava/logoFrava.jpg';
import location from '../../assets/svg/location.png';
import phone from '../../assets/svg/phone.png';
import whatsapp from '../../assets/svg/whatsapp.svg';
import facebook from '../../assets/svg/facebook.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import gmail from '../../assets/svg/gmail.svg';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <div className="flex flex-col items-center justify-center space-y-4"> 
          <img src={logofrava} alt="Grupo FraVa" className="w-40 h-auto" />
          <div className="bg-gray-700 p-4 rounded-md text-center"> 
            <p className="text-sm leading-relaxed">
              Estamos comprometidos en ofrecer soluciones de calidad en asesoría contable, tributaria, laboral y financiera.
            </p>
          </div>
        </div>
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-lg font-bold">CONTÁCTANOS</h2>
          <div className="flex flex-col items-start space-y-3">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <img src={location} alt="Ubicación" className="w-8 h-8" />
              <span>Calle #, Nro.#, Urb.#, Carabayllo, Lima-Peru</span>
            </a>
            <div className="flex items-center space-x-2">
              <img src={phone} alt="Teléfono" className="w-8 h-8" />
              <span>(+51) ###-###</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={whatsapp} alt="Whatsapp" className="w-8 h-8" />
              <span>962-414-654</span>
            </div>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=asesoriafrava@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <img src={gmail} alt="Gmail" className="w-8 h-8" />
              <span>asesoriafrava@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-lg font-bold">SÍGUENOS</h2>
          <div className="flex flex-col items-start space-y-3">
            <a href="https://www.facebook.com/CORPORACIONFRAVA" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <img src={facebook} alt="Facebook" className="w-8 h-8" />
              <span>Facebook</span>
            </a>
            <a href="https://www.linkedin.com/company/grupo-frava/?originalSubdomain=pe" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
              <span>LinkedIn</span>
            </a>
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
