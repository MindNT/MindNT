import React from 'react';
import ReactDOM from 'react-dom';

function GalleryModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    // Lista con las imágenes reales que subiste a la carpeta public/images/gallery
    const images = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "505160859_10236157085284202_2772329379792117640_n.jpg",
        "518364112_10171766572085024_5593564169126300167_n.jpg"
    ];

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[9999] flex items-start justify-center p-6 h-screen overflow-y-auto">
            {/* Fondo completamente negro */}
            <div 
                className="fixed inset-0 bg-black transition-opacity"
            ></div>

            {/* Botón de regresar */}
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

            {/* Contenido principal */}
            <div className="relative w-full max-w-6xl bg-black animate-fadeInUp mt-24 mb-24 flex flex-col items-center">
                
                <div className="w-full text-center relative z-0 px-4 md:px-8">
                    
                    {/* Meta Info */}
                    <div className="flex flex-col items-center justify-center text-xs md:text-sm font-inter font-medium tracking-normal-apple text-gray-500 uppercase mb-8">
                        <span className="border border-gray-800 bg-gray-900 px-6 py-2 rounded-full">Nuestro Trabajo</span>
                    </div>

                    {/* Título Principal */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-inter font-light tracking-wide text-white mb-10 leading-tight">
                        Creatividad e Impacto
                    </h2>

                    {/* Reflexión / Introducción */}
                    <div className="text-base md:text-xl font-inter font-normal tracking-normal-apple text-gray-300 leading-relaxed max-w-4xl mx-auto mb-20 text-center space-y-6 md:space-y-8">
                        <p>Trabajar con clientes excepcionales nos ha enseñado que cada marca tiene una historia única que merece ser documentada con precisión y arte. Entendemos que el impacto radica en respaldar la estrategia con una calidad técnica incuestionable.</p>
                        <p>Para garantizar el máximo nivel en nuestros servicios de marketing visual, nuestro equipo de fotografía cuenta con el talento de <strong>Abel Castro</strong>, un reconocido fotógrafo profesional con experiencia en producciones de alto perfil, como su trabajo en el podcast de Marco Antonio Regil. Su visión, sumada a nuestra dedicación, asegura que el profesionalismo hable a través de cada imagen en lugar de las palabras.</p>
                    </div>

                    {/* Grid de Galería */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full">
                        {images.map((image, idx) => (
                            <div 
                                key={idx} 
                                className="w-full aspect-[4/5] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative group"
                            >
                                <img 
                                    src={`${process.env.PUBLIC_URL}/images/gallery/${image}`} 
                                    alt={`Trabajo ${idx + 1}`} 
                                    className="relative z-10 w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-0"
                                    onLoad={(e) => {
                                        e.target.style.opacity = 1;
                                    }}
                                    onError={(e) => {
                                        // Oculta la etiqueta img si ocurre un error con la imagen
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        ))}
                    </div>
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

export default GalleryModal;
