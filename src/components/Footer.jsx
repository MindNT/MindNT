import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-32">
      {/* Subtle divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <img src="/logo.svg" alt="MindNT Logo" className="h-8 w-auto mb-6 opacity-90" />
              <p className="text-gray-300/90 text-base leading-relaxed max-w-md font-light">
                Desarrollo web innovador y soluciones digitales de alta calidad. 
                Transformamos ideas en experiencias digitales excepcionales.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com/mindnt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-11 h-11 bg-white/[0.03] backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-500 hover:scale-105"
              >
                <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/mindnt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-11 h-11 bg-white/[0.03] backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-500 hover:scale-105"
              >
                <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/mindnt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-11 h-11 bg-white/[0.03] backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-500 hover:scale-105"
              >
                <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Navigation Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Services */}
            <div>
              <h3 className="text-white/90 font-medium mb-6 text-sm tracking-wide">Servicios</h3>
              <ul className="space-y-4">
                <li><a href="#servicios" className="text-gray-400 text-sm font-light hover:text-white transition-colors duration-300">Landing Pages</a></li>
                <li><a href="#servicios" className="text-gray-400 text-sm font-light hover:text-white transition-colors duration-300">E-commerce</a></li>
                <li><a href="#servicios" className="text-gray-400 text-sm font-light hover:text-white transition-colors duration-300">Web Corporativas</a></li>
                <li><a href="#servicios" className="text-gray-400 text-sm font-light hover:text-white transition-colors duration-300">Automatizaciones</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-white/90 font-medium mb-6 text-sm tracking-wide">Empresa</h3>
              <ul className="space-y-4">
                <li><a href="#nosotros" className="text-gray-400 text-sm font-light hover:text-white transition-colors duration-300">Nosotros</a></li>
                <li><a href="#nexxus" className="text-gray-400 text-sm font-light hover:text-white transition-colors duration-300">Nexxus IA</a></li>
                <li><a href="#inicio" className="text-gray-400 text-sm font-light hover:text-white transition-colors duration-300">Proyectos</a></li>
                <li><a href="#inicio" className="text-gray-400 text-sm font-light hover:text-white transition-colors duration-300">Blog</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-white/90 font-medium mb-6 text-sm tracking-wide">Contacto</h3>
              <div className="space-y-4">
                <p className="text-gray-400 text-sm font-light">
                  <a href="mailto:info@mindnt.com" className="hover:text-white transition-colors duration-300">
                    info@mindnt.com
                  </a>
                </p>
                <p className="text-gray-400 text-sm font-light">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                    WhatsApp
                  </a>
                </p>
                <p className="text-gray-400 text-sm font-light">
                  <a href="#inicio" className="hover:text-white transition-colors duration-300">
                    Agendar llamada
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-light">
            Copyright © 2024 MindNT. Todos los derechos reservados.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-500 text-xs font-light hover:text-gray-300 transition-colors duration-300">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-500 text-xs font-light hover:text-gray-300 transition-colors duration-300">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;