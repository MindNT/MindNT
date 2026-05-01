import React, { useEffect, useState } from 'react';
import GalleryModal from '../components/GalleryModal';
import BrandingModal from '../components/BrandingModal';
import DesarrolloModal from '../components/DesarrolloModal';
import MarketingModal from '../components/MarketingModal';
import ShootingStar from '../components/ShootingStar';
import ButtonBlue from '../utils/ButtonBlue';

function Servicios() {
    const [isVisible, setIsVisible] = useState(false);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [isBrandingOpen, setIsBrandingOpen] = useState(false);
    const [isDesarrolloOpen, setIsDesarrolloOpen] = useState(false);
    const [isMarketingOpen, setIsMarketingOpen] = useState(false);

    useEffect(() => {
        // Trigger fade-in animation after component mounts
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const services = [
        {
            title: 'Branding e Identidad',
            description: 'Diseñamos marcas con propósito. Desde la concepción del logo hasta el manual de identidad visual completo.',
            hook: 'Tu marca, lista para dejar huella.',
            delay: 'delay-200',
            openBranding: true
        },
        {
            title: 'Desarrollo Web & UX',
            description: 'Diseñamos experiencias digitales de alto rendimiento, optimizadas para convertir visitantes en clientes.',
            hook: 'Tu presencia digital, sin límites técnicos.',
            delay: 'delay-400',
            openDesarrollo: true
        },
        {
            title: 'Marketing Estratégico',
            description: 'Campañas inteligentes basadas en datos para maximizar tu visibilidad y el retorno de tu inversión.',
            hook: 'Resultados tangibles, crecimiento constante.',
            delay: 'delay-600',
            openMarketing: true
        },
        {
            title: 'Fotografía Profesional',
            description: 'Capturamos la esencia de tu negocio con imágenes de alta calidad que comunican profesionalismo.',
            hook: 'Una imagen vale más que mil palabras.',
            delay: 'delay-800',
            openGallery: true
        }
    ];

    return (
        <div className="h-screen bg-black overflow-hidden relative flex flex-col justify-center pt-16">
            <ShootingStar />
            <div className="max-w-7xl w-full mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                
                {/* Left Column - Header Section */}
                <div className="w-full lg:w-5/12 text-left">
                    <div
                        className={`
                            transition-all duration-1000 ease-out flex flex-col items-start
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        <span className="inline-block border border-white/10 bg-white/5 px-6 py-2 rounded-full text-xs font-inter font-medium tracking-widest text-gray-400 uppercase mb-8">
                            Nuestros Servicios
                        </span>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-light tracking-wide text-white mb-6 leading-tight">
                            Soluciones diseñadas<br />
                            <span className="text-gray-500">para escalar.</span>
                        </h1>
                        <p className="text-base md:text-lg font-inter font-normal text-gray-400 tracking-normal-apple">
                            Transformamos información en ventaja competitiva, construyendo herramientas sólidas para el crecimiento de tu marca.
                        </p>
                    </div>
                </div>

                {/* Right Column - Services Grid 2x2 */}
                <div 
                    className={`
                        w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden
                        transition-all duration-1000 ease-out delay-200
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                    `}
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-black px-8 py-10 lg:px-10 lg:py-12 text-left group hover:bg-white/5 transition-colors duration-300 relative flex flex-col"
                        >
                            <h2 className="text-xl lg:text-2xl font-inter font-medium text-white mb-3 group-hover:tracking-wide transition-all duration-300">
                                {service.title}
                            </h2>
                            <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed mb-4 flex-1">
                                {service.description}
                            </p>
                            <p className="text-xs font-inter font-normal text-gray-500 italic mb-6">
                                {service.hook}
                            </p>

                            <ButtonBlue
                                onClick={
                                    service.openGallery ? () => setIsGalleryOpen(true)
                                    : service.openBranding ? () => setIsBrandingOpen(true)
                                    : service.openDesarrollo ? () => setIsDesarrolloOpen(true)
                                    : service.openMarketing ? () => setIsMarketingOpen(true)
                                    : undefined
                                }
                            >
                                Conocer más
                            </ButtonBlue>
                        </div>
                    ))}
                </div>

                {/* Modals */}
                <GalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
                <BrandingModal isOpen={isBrandingOpen} onClose={() => setIsBrandingOpen(false)} />
                <DesarrolloModal isOpen={isDesarrolloOpen} onClose={() => setIsDesarrolloOpen(false)} />
                <MarketingModal isOpen={isMarketingOpen} onClose={() => setIsMarketingOpen(false)} />
            </div>

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
                        absolute top-1/3 left-1/4 w-[800px] h-[800px]
                        bg-gradient-to-br from-white/5 to-transparent
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
