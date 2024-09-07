import React from "react";
import "./Footer.css";

import logofrava from '../../assets/logofrava/logoFrava.jpg';
import location from '../../assets/svg/location.png';
import phone from '../../assets/svg/phone.png';
import whatsapp from '../../assets/svg/whatsapp.svg';
import mail from '../../assets/svg/gmail.svg';

import facebook from '../../assets/svg/facebook.svg';
import linkedin from '../../assets/svg/linkedin.svg';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-brand"> 
          <img src={logofrava} alt="Grupo FraVa" />
            <p>
              Estamos comprometidos en ofrecer soluciones de calidad en asesoría
              contable, tributaria, laboral y financiera.
            </p>
          </div>
          <div className="footer-contact">
            <h3>CONTÁCTANOS</h3>
            <ul>
              <li>
              <img src={location} alt="Ubicación" />
                
                <strong>Oficina:</strong> Calle #, Nro. #, Urb. #, Carabayllo,
                Lima - Perú
              </li>
              <li>
                <img src={phone} alt="teléfono"/>
                <strong>Central Telefónica:</strong> (+51) ###-####
              </li>
              <li>
              <img src={whatsapp} alt="whatsapp"/>
                <strong>WhatsApp:</strong> 962414654
              </li>
              <li>
              <img src={mail} alt="Correo"/>
                <strong>Correo Electrónico:</strong> asesoriafrava@gmail.com
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>SÍGUENOS</h3>
            <ul>
              <li>
                <img src={facebook} alt="Facebook" />
                <a
                  href="https://www.facebook.com/CORPORACIONFRAVA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <img src={linkedin} alt="LinkedIn" />
                <a
                  href="https://www.linkedin.com/company/grupo-frava/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 GRUPO FRAVA | Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
