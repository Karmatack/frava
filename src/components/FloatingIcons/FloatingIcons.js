import React from 'react';
import './FloatingIcons.css';

import whatsapp from '../../assets/svg/whatsapp.svg'
import gmail from '../../assets/svg/gmail.svg'

function FloatingIcons() {
  return (
    <div>
      <a href="https://wa.me/51902985139" target="_blank" rel="noopener noreferrer" id="whatsapp-icon">
        <img src={whatsapp} alt="WhatsApp" />
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=asesoriafrava@gmail.com&su=Consulta&body=Hola,%20me%20gustaría%20hacer%20una%20consulta%20sobre..."
        target="_blank" rel="noopener noreferrer" id="gmail-icon"
      >
        <img src={gmail} alt="Gmail" />
      </a>
    </div>
  );
}

export default FloatingIcons;
