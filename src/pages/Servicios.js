import React, { useEffect, useState } from 'react';
import GalleryModal from '../components/GalleryModal';

function Servicios() {
    const [isVisible, setIsVisible] = useState(false);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    useEffect(() => {
        // Trigger fade-in animation after component mounts
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const services = [
        {
            title: 'Branding e Identidad',
            description: 'Construimos la esencia visual y estratégica que diferencia a tu marca y proyecta autoridad en el mercado.',
            hook: 'Tu identidad, proyectada con distinción.',
            delay: 'delay-200'
        },
        {
            title: 'Desarrollo Web & UX',
            description: 'Diseñamos experiencias digitales de alto rendimiento, optimizadas para convertir visitantes en clientes.',
            hook: 'Tu presencia digital, sin límites técnicos.',
            delay: 'delay-400'
        },
        {
            title: 'Marketing Estratégico',
            description: 'Campañas inteligentes basadas en datos para maximizar tu visibilidad y el retorno de tu inversión.',
            hook: 'Resultados tangibles, crecimiento constante.',
            delay: 'delay-600'
        },
        {
            title: 'Fotografía Profesional',
            description: 'Capturamos la esencia de tu negocio con narrativa visual de alta calidad, diseñada para cautivar y generar confianza.',
            hook: 'La imagen que tu marca merece.',
            delay: 'delay-[800ms]'
        }
    ];

    return (
        <div className="min-h-screen h-screen bg-white flex items-center justify-center px-6 overflow-hidden">
            {/* Main Content Container */}
            <div className="max-w-6xl w-full">
                {/* Page Title */}
                <div className="text-center mb-16">
                    <h1
                        className={`
              text-3xl md:text-4xl lg:text-5xl
              font-inter font-light
              tracking-wide
              text-gray-900
              mb-4
              transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
                    >
                        Servicios
                    </h1>
                    <p
                        className={`
              text-base md:text-lg
              font-inter font-normal
              text-gray-600
              tracking-normal-apple
              transition-all duration-1000 ease-out delay-100
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
                    >
                        Transformamos información en ventaja competitiva.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`
                group
                text-center
                transition-all duration-700 ease-out
                ${service.delay}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
                        >
                            {/* Subtle line above */}
                            <div
                                className="
                  w-12 h-px
                  bg-gray-300
                  mx-auto
                  mb-6
                  group-hover:w-16
                  group-hover:bg-gray-900
                  transition-all duration-500
                "
                            />

                            {/* Service Title */}
                            <h2
                                className="
                  text-xl md:text-2xl
                  font-inter font-medium
                  tracking-tight-apple
                  text-gray-900
                  mb-3
                  transition-all duration-300
                  group-hover:tracking-wide
                "
                            >
                                {service.title}
                            </h2>

                            {/* Service Description */}
                            <p
                                className="
                  text-sm md:text-base
                  font-inter font-normal
                  text-gray-500
                  tracking-normal-apple
                  transition-colors duration-300
                  group-hover:text-gray-700
                  mb-4
                "
                            >
                                {service.description}
                            </p>

                            {/* Service Hook */}
                            <p
                                className="
                  text-xs md:text-sm
                  font-inter font-medium
                  text-gray-900
                  tracking-wide
                  italic
                  transition-all duration-300
                  group-hover:text-gray-700
                "
                            >
                                {service.hook}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Gallery Button */}
                <div className={`
                    mt-20 flex justify-center transition-all duration-1000 ease-out delay-[1000ms]
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}>
                    <button
                        onClick={() => setIsGalleryOpen(true)}
                        className="
                            group
                            inline-flex items-center justify-center gap-3
                            px-8 py-4 
                            bg-gray-900 text-white
                            rounded-full
                            font-inter font-medium tracking-wide text-sm md:text-base
                            shadow-md hover:shadow-2xl
                            hover:bg-black hover:-translate-y-1
                            transition-all duration-300 ease-out
                        "
                    >
                        <span>Ver Nuestro Trabajo</span>
                        <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>

                {/* Gallery Modal */}
                <GalleryModal 
                    isOpen={isGalleryOpen} 
                    onClose={() => setIsGalleryOpen(false)} 
                />
            </div>

            {/* Subtle Background Elements - More minimal */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
            absolute top-1/3 left-1/4 w-[500px] h-[500px]
            bg-gradient-to-br from-gray-50 to-transparent
            rounded-full blur-3xl
            transition-opacity duration-2000 ease-out delay-500
            ${isVisible ? 'opacity-30' : 'opacity-0'}
          `}
                />
            </div>
        </div>
    );
}

export default Servicios;
