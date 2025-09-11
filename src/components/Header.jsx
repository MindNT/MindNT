import React, { useState, useEffect } from 'react';
import Button1 from '../utils/button1';

// Define paths for public assets
const logoSrc = '/logo.svg';
const whatsAppIconSrc = '/icons/WhatsApp.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Activar después de 50px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header 
      className={`flex items-center text-white transition-all duration-500 ease-in-out rounded-2xl ${
        isScrolled 
          ? 'bg-white/[0.08] backdrop-blur-3xl border border-white/[0.12] shadow-2xl shadow-black/25' 
          : 'bg-transparent'
      }`}
      style={{
        padding: isScrolled ? '12px 24px' : '16px 0px'
      }}
    >
      {/* Gradient overlays for glass effect when scrolled */}
      {isScrolled && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.02] rounded-2xl" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-2xl" />
        </>
      )}
      
      {/* Logo on the left */}
      <div className="flex items-center relative z-10">
        <img src={logoSrc} alt="Logo" className="h-10 w-auto" />
      </div>
      
      {/* Centered navbar */}
      <nav className="flex space-x-6 flex-1 justify-center relative z-10">
        <button onClick={scrollToTop} className="hover:font-bold transition-all duration-200 cursor-pointer">Inicio</button>
        <a href="#nosotros" className="hover:font-bold transition-all duration-200">Nosotros</a>
        <a href="#servicios" className="hover:font-bold transition-all duration-200">Servicios</a>
        <a href="#nexxus" className="hover:font-bold transition-all duration-200">Nexxus</a>
        <a href="#urgente" className="hover:font-bold transition-all duration-200">¿Proyecto Urgente?</a>
      </nav>
      
      {/* WhatsApp button on the right */}
      <div className="relative z-10">
        <Button1 text="WhatsApp" iconSrc={whatsAppIconSrc} onClick={() => window.open('https://wa.me/529993661475', '_blank')} />
      </div>
    </header>
  );
};

export default Header;
