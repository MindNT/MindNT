import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button1 from '../utils/button1';

// Define paths for public assets
const logoSrc = '/logo.svg';
const whatsAppIconSrc = '/icons/WhatsApp.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Activar después de 50px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavigation = (sectionId) => {
    if (location.pathname === '/') {
      // Si estamos en la página principal, hacer scroll a la sección
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si estamos en otra página, ir a la página principal con el hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <div className="relative">
      <header 
        className={`flex items-center justify-between text-white transition-all duration-500 ease-in-out rounded-2xl ${
          isScrolled 
            ? 'bg-white/[0.08] backdrop-blur-3xl border border-white/[0.12] shadow-2xl shadow-black/25' 
            : 'bg-transparent'
        }`}
        style={{
          padding: isScrolled ? '12px 24px' : '16px 24px'
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
          <Link to="/" className="hover:opacity-80 transition-opacity duration-200">
            <img src={logoSrc} alt="Logo" className="h-8 sm:h-10 w-auto" />
          </Link>
        </div>
        
        {/* Desktop navbar - hidden on mobile */}
        <nav className="hidden lg:flex space-x-6 flex-1 justify-center relative z-10">
          <button 
            onClick={() => location.pathname === '/' ? scrollToTop() : handleNavigation('inicio')} 
            className="hover:font-bold transition-all duration-200 cursor-pointer"
          >
            Inicio
          </button>
          <button 
            onClick={() => handleNavigation('nosotros')} 
            className="hover:font-bold transition-all duration-200 cursor-pointer"
          >
            Nosotros
          </button>
          <button 
            onClick={() => handleNavigation('servicios')} 
            className="hover:font-bold transition-all duration-200 cursor-pointer"
          >
            Servicios
          </button>
          <button 
            onClick={() => handleNavigation('nexxus')} 
            className="hover:font-bold transition-all duration-200 cursor-pointer"
          >
            Nexxus
          </button>
          <button 
            onClick={() => handleNavigation('urgente')} 
            className="hover:font-bold transition-all duration-200 cursor-pointer"
          >
            ¿Proyecto Urgente?
          </button>
        </nav>
        
        {/* Desktop WhatsApp button */}
        <div className="hidden lg:block relative z-10">
          <Button1 text="WhatsApp" iconSrc={whatsAppIconSrc} onClick={() => window.open('https://wa.me/529993661475', '_blank')} />
        </div>

        {/* Mobile hamburger menu button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden relative z-20 p-2 rounded-lg transition-all duration-200 hover:bg-white/10"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </header>

      {/* Mobile menu overlay */}
      <div className={`lg:hidden fixed inset-0 z-30 transition-all duration-300 ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={toggleMobileMenu}
        ></div>
        
        {/* Mobile menu */}
        <div className={`absolute top-20 right-6 left-6 transition-all duration-500 ease-out ${
          isMobileMenuOpen 
            ? 'transform translate-y-0 opacity-100 scale-100' 
            : 'transform -translate-y-4 opacity-0 scale-95'
        }`}>
          <div className="bg-white/[0.12] backdrop-blur-3xl border border-white/[0.2] rounded-2xl shadow-2xl shadow-black/25 overflow-hidden">
            {/* Glass effect gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.02] rounded-2xl" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-2xl" />
            
            <nav className="relative z-10 p-6 space-y-1">
              <button 
                onClick={() => {
                  if (location.pathname === '/') {
                    scrollToTop();
                  } else {
                    handleNavigation('inicio');
                  }
                  toggleMobileMenu();
                }}
                className="w-full text-center py-4 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 font-medium"
              >
                Inicio
              </button>
              <button 
                onClick={() => {
                  handleNavigation('nosotros');
                  toggleMobileMenu();
                }}
                className="w-full text-center py-4 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 font-medium"
              >
                Nosotros
              </button>
              <button 
                onClick={() => {
                  handleNavigation('servicios');
                  toggleMobileMenu();
                }}
                className="w-full text-center py-4 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 font-medium"
              >
                Servicios
              </button>
              <button 
                onClick={() => {
                  handleNavigation('nexxus');
                  toggleMobileMenu();
                }}
                className="w-full text-center py-4 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 font-medium"
              >
                Nexxus
              </button>
              <button 
                onClick={() => {
                  handleNavigation('urgente');
                  toggleMobileMenu();
                }}
                className="w-full text-center py-4 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 font-medium"
              >
                ¿Proyecto Urgente?
              </button>
              
              {/* Mobile WhatsApp button */}
              <div className="pt-4 border-t border-white/10 mt-4 flex justify-center">
                <Button1 
                  text="WhatsApp" 
                  iconSrc={whatsAppIconSrc} 
                  onClick={() => {
                    window.open('https://wa.me/529993661475', '_blank');
                    toggleMobileMenu();
                  }} 
                />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
