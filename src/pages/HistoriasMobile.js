import React, { useEffect, useState } from 'react';

function HistoriasMobile() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const projects = [
        {
            client: 'KIKOI',
            title: 'Cafeteria y postres',
            description: 'Desarrollamos una E-commerce para la cafeteria y postres de KIKOI, enfocados en el minimalismo y la experiencia del usuario.',
            url: 'https://mindnt.github.io/KiKOI-webpage/',
            tags: ['E-commerce', 'UX/UI', 'Minimalismo'],
            status: 'completed'
        },
        {
            client: 'HP Contadores',
            title: 'Página web de contadores',
            description: 'Desarrollamos una página web para un despacho de contadores, integrando el diseño visual de su logo y marca para fortalecer su identidad corporativa.',
            url: 'https://hpcontadores.com.mx/',
            tags: ['Design', 'Branding', 'Landing Page'],
            status: 'completed'
        },
        {
            client: 'Pepetoys',
            title: 'Tienda de artículos para aves',
            description: 'Creamos un E-commerce para una tienda especializada en la venta de artículos y accesorios para aves.',
            url: 'https://mindnt.github.io/Pepetoys-website/',
            tags: ['E-commerce', 'UX/UI'],
            status: 'completed'
        },
        {
            client: 'La Juanita',
            title: 'Restaurante de comida rápida',
            description: 'Creamos un E-commerce para la restaurante de comida rápida de La Juanita, enfocados en reducir la carga de trabajo de la empresa con formularios inteligentes para pickup y delivery.',
            url: 'https://mindnt.github.io/La-juanita-website/',
            tags: ['E-commerce', 'UX/UI', 'Formularios'],
            status: 'completed'
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
                        Historias
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
                        Proyectos que transforman negocios
                    </p>
                </div>

                {/* Projects List - Vertical for mobile */}
                <div className="space-y-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`
                                transition-all duration-500 ease-out
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                            `}
                            style={{
                                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                            }}
                        >
                            {/* Subtle line above */}
                            <div className="w-12 h-px bg-gray-300 mb-4" />

                            {/* Client Name */}
                            <h3 className="text-xs font-inter font-medium tracking-normal-apple text-gray-500 uppercase mb-2">
                                {project.client}
                            </h3>

                            {/* Project Title */}
                            <h2 className="text-lg font-inter font-medium tracking-tight-apple text-gray-900 mb-2 flex items-center gap-2 flex-wrap">
                                {project.title}
                                {project.status === 'in-development' && (
                                    <span className="inline-flex items-center gap-1.5 text-xs font-inter font-normal text-gray-700 bg-gray-100 px-2.5 py-1 rounded-full">
                                        <span className="h-2 w-2 rounded-full bg-gray-900"></span>
                                        En desarrollo
                                    </span>
                                )}
                            </h2>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="text-xs font-inter font-normal text-gray-500 px-2 py-1 rounded-full bg-gray-50"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Project Description */}
                            <p className="text-sm font-inter font-normal text-gray-600 leading-relaxed tracking-normal-apple mb-4">
                                {project.description}
                            </p>

                            {/* Visit Button - Only if URL exists */}
                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-gray-900 text-white font-inter font-medium text-xs rounded-full transition-all duration-300 ease-out hover:bg-gray-800"
                                >
                                    Visitar sitio
                                    <svg
                                        className="ml-2 w-3 h-3"
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
                            )}
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

export default HistoriasMobile;
