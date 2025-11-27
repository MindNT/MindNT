import React from 'react';

function ContactButton() {
    const phoneNumber = '529991778325'; // +52 999 177 8325 (sin espacios ni símbolos)
    const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre los servicios de MindNT.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
        px-4 py-2
        bg-gray-900
        text-white
        text-sm
        font-inter font-medium
        rounded-full
        hover:bg-gray-800
        transition-all duration-200
        tracking-normal-apple
      "
        >
            Contactar
        </a>
    );
}

export default ContactButton;
