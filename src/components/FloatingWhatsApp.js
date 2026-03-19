import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/243899530506" 
      className="whatsapp-float d-flex justify-content-center align-items-center"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp pour votre projet"
    >
      <FaWhatsapp size={32} color="white" />
    </a>
  );
};

export default FloatingWhatsApp;
