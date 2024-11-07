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
    <footer className="bg-gray-800 text-white py-10 w-full">
      <div className="w-full flex flex-col md:flex-row md:justify-center gap-10 px-4 md:px-10">
        {/* Sección de la imagen de Grupo Frava */}
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-1">
          <img src={logofrava} alt="Grupo FraVa" className="w-40 h-auto md:w-48" />
          <div className="bg-gray-700 p-4 rounded-md text-center">
            <p className="text-sm leading-relaxed">
              Estamos comprometidos en ofrecer soluciones de calidad en asesoría contable, tributaria, laboral y financiera.
            </p>
          </div>
        </div>

        {/* Sección de contacto */}
        <div className="flex flex-col items-center text-center space-y-4 md:flex-1">
          <h2 className="text-lg font-bold">CONTÁCTANOS</h2>
          <div className="flex flex-col items-center space-y-3">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-400">
              <img src={location} alt="Ubicación" className="w-6 h-6" />
              <span>Comas, Lima/Peru</span>
            </a>
            <div className="flex items-center space-x-2">
              <img src={phone} alt="Teléfono" className="w-6 h-6" />
              <span>(+51) 962414654</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={whatsapp} alt="Whatsapp" className="w-6 h-6" />
              <span>962-414-654</span>
            </div>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=asesoriafrava@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-400">
              <img src={gmail} alt="Gmail" className="w-6 h-6" />
              <span>gerencia@grupofrava.com</span>
            </a>
          </div>
        </div>

        {/* Sección de redes sociales */}
        <div className="flex flex-col items-center text-center space-y-4 md:flex-1">
          <h2 className="text-lg font-bold">SÍGUENOS</h2>
          <div className="flex flex-col items-center space-y-3">
            <a href="https://www.facebook.com/CORPORACIONFRAVA" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-400">
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
              <span>Facebook</span>
            </a>
            <a href="https://www.linkedin.com/company/grupo-frava/?originalSubdomain=pe" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-400">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <div className="text-center mt-8 text-sm text-gray-400">
        &copy; 2024 GRUPO FRAVA | Todos los derechos reservados
      </div>
    </footer>
  );
}

export default Footer;
