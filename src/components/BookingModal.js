import React from 'react';
import ReactDOM from 'react-dom';

function BookingModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6">
            {/* Fondo completamente negro */}
            <div 
                className="absolute inset-0 bg-black transition-opacity"
            ></div>

            {/* Botón de regresar (Esquina superior izquierda) */}
            <button
                onClick={onClose}
                className="
                    fixed top-6 left-6 md:top-10 md:left-10
                    flex items-center gap-2.5
                    text-gray-400 hover:text-white 
                    font-inter font-medium tracking-normal-apple text-sm md:text-base
                    transition-all duration-300 ease-out
                    hover:-translate-x-2 focus:outline-none z-50
                "
                aria-label="Regresar"
            >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Regresar
            </button>

            {/* Contenido (Centrado en la pantalla negra) */}
            <div className="relative w-full max-w-3xl bg-black animate-fadeInUp flex flex-col items-center">
                <div className="text-center relative z-0 w-full px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-light tracking-wide text-white mb-6">
                        Consultoría Estratégica
                    </h2>
                    
                    <p className="text-base md:text-lg font-inter font-normal tracking-normal-apple text-gray-400 leading-relaxed mb-12 max-w-xl mx-auto">
                        Agenda una videollamada para una consultoría 1 a 1 de manera directa con nosotros. Entenderemos las necesidades de tu proyecto y te propondremos la ruta tecnológica ideal para potenciar tu marca.
                    </p>

                    <a
                        href="https://calendar.app.google/XBKgVwKBHMKcdyAu5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex items-center justify-center
                            px-8 py-3.5
                            bg-white
                            text-black
                            font-inter font-medium text-sm md:text-base tracking-tight-apple
                            rounded-full
                            hover:bg-gray-200
                            transition-all duration-300 ease-out
                            hover:scale-105
                            focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black
                        "
                    >
                        Agendar en Google Calendar
                        <svg 
                            className="ml-3 w-4 h-4 md:w-5 md:h-5" 
                            fill="none" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </a>
                </div>
            </div>
            
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </div>,
        document.body
    );
}

export default BookingModal;
