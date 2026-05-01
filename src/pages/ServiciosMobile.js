import React, { useEffect, useState } from 'react';
import GalleryModal from '../components/GalleryModal';
import BrandingModal from '../components/BrandingModal';
import DesarrolloModal from '../components/DesarrolloModal';
import MarketingModal from '../components/MarketingModal';
import ShootingStar from '../components/ShootingStar';
import ButtonBlue from '../utils/ButtonBlue';

function ServiciosMobile() {
    const [isVisible, setIsVisible] = useState(false);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [isBrandingOpen, setIsBrandingOpen] = useState(false);
    const [isDesarrolloOpen, setIsDesarrolloOpen] = useState(false);
    const [isMarketingOpen, setIsMarketingOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const services = [
        {
            title: 'Branding e Identidad',
            description: 'Diseñamos marcas con propósito. Desde el logo hasta el manual de identidad completo.',
            hook: 'Tu marca, lista para dejar huella.',
            delay: 'delay-200',
            openBranding: true
        },
        {
            title: 'Desarrollo Web & UX',
            description: 'Experiencias digitales de alto rendimiento, optimizadas para convertir visitantes.',
            hook: 'Tu presencia, sin límites técnicos.',
            delay: 'delay-300',
            openDesarrollo: true
        },
        {
            title: 'Marketing Estratégico',
            description: 'Campañas inteligentes para maximizar tu visibilidad y retorno de inversión.',
            hook: 'Resultados tangibles, crecimiento.',
            delay: 'delay-400',
            openMarketing: true
        },
        {
            title: 'Fotografía Profesional',
            description: 'Capturamos la esencia de tu negocio con imágenes que comunican profesionalismo.',
            hook: 'Una imagen vale más que mil palabras.',
            delay: 'delay-500',
            openGallery: true
        }
    ];

    return (
        <div className="min-h-screen bg-black px-6 py-24 overflow-x-hidden relative">
            <ShootingStar />
            <div className="max-w-md mx-auto relative z-10">
                
                {/* Header Section */}
                <div 
                    className={`
                        mb-16 flex flex-col items-start
                        transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    <span className="inline-block border border-white/10 bg-white/5 px-4 py-1.5 rounded-full text-[10px] font-inter font-medium tracking-widest text-gray-400 uppercase mb-6">
                        Nuestros Servicios
                    </span>
                    
                    <h1 className="text-4xl font-inter font-light tracking-wide text-white mb-4 leading-tight">
                        Soluciones diseñadas<br />
                        <span className="text-gray-500">para escalar.</span>
                    </h1>
                    <p className="text-sm font-inter font-normal text-gray-400 tracking-normal-apple">
                        Transformamos información en ventaja competitiva.
                    </p>
                </div>

                {/* Services Grid */}
                <div 
                    className={`
                        grid grid-cols-1 gap-px bg-white/5 rounded-3xl overflow-hidden
                        transition-all duration-1000 ease-out delay-200
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                    `}
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-black px-6 py-8 text-left group hover:bg-white/5 transition-colors duration-300"
                        >
                            <h2 className="text-xl font-inter font-medium text-white mb-3">
                                {service.title}
                            </h2>
                            <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed mb-4">
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
                        absolute top-1/4 -right-1/4 w-96 h-96
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

export default ServiciosMobile;
