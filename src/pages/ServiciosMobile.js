import React, { useEffect, useState } from 'react';

function ServiciosMobile() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
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
        <div className="min-h-screen bg-white px-6 py-24 overflow-y-auto">
            <div className="max-w-md mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h1
                        className={`
                            text-3xl
                            font-inter font-light
                            tracking-wide
                            text-gray-900
                            mb-3
                            transition-all duration-1000 ease-out
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        Servicios
                    </h1>
                    <p
                        className={`
                            text-base
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

                {/* Services List - Single column for mobile */}
                <div className="space-y-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`
                                text-center
                                transition-all duration-700 ease-out
                                ${service.delay}
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                            `}
                        >
                            {/* Subtle line above */}
                            <div className="w-12 h-px bg-gray-300 mx-auto mb-5" />

                            {/* Service Title */}
                            <h2 className="text-xl font-inter font-medium tracking-tight-apple text-gray-900 mb-2">
                                {service.title}
                            </h2>

                            {/* Service Description */}
                            <p className="text-sm font-inter font-normal text-gray-500 tracking-normal-apple mb-3">
                                {service.description}
                            </p>

                            {/* Service Hook */}
                            <p className="text-xs font-inter font-medium text-gray-900 tracking-wide italic">
                                {service.hook}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
                        absolute top-1/3 left-1/4 w-80 h-80
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

export default ServiciosMobile;
