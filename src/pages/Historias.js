import React, { useEffect, useState } from 'react';

function Historias() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Trigger fade-in animation after component mounts
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const projects = [
        {
            client: 'KIKOI',
            title: 'Cafeteria y postres',
            description: 'Desarrollamos una E-commerce para la cafeteria y postres de KIKOI, enfocados en el minimalismo y la experiencia del usuario.',
            url: 'https://mindnt.github.io/KiKOI-webpage/',
            tags: ['E-commerce', 'UX/UI', 'Minimalismo'],
            status: 'completed' // 'completed' or 'in-development'
        },
        {
            client: 'La Juanita',
            title: 'Restaurante de comida rápida',
            description: 'Creamos un E-commerce para la restaurante de comida rápida de La Juanita, enfocados en reducir la carga de trabajo de la empresa con formularios inteligentes para pickup y delivery.',
            url: 'https://mindnt.github.io/La-juanita-website/',
            tags: ['E-commerce', 'UX/UI', 'Formularios inteligentes', 'Display Manager'],
            status: 'completed'
        },
        {
            client: 'Pepetoys',
            title: 'Tienda de juguetes para aves',
            description: 'Desarrollamos una E-commerce para la tienda de juguetes para aves, enfocados en el simplismo y la atraccion visual con los productos.',
            url: '',
            tags: ['E-commerce', 'UX/UI', 'Simplismo', 'Display Manager'],
            status: 'in-development'
        },
        {
            client: 'Consultora de contadores',
            title: 'Web corporativa',
            description: 'Desarrollamos el branding de la consultora de contadores, pensando en brindar una presentación profesional y agradable para los clientes.',
            url: '',
            tags: ['Web Corporativa', 'UX/UI', 'Branding', 'Marketing'],
            status: 'in-development'
        },
        {
            client: 'Thermo Energy',
            title: 'Empresa corporativa de climas para camiones',
            description: 'Desarrollamos el sitio web corporativo de la empresa Thermo Energy, enfocados en brindar una presentación profesional y agradable para los clientes.',
            url: 'https://thermoenergymx.com/',
            tags: ['Web Corporativa', 'UX/UI', 'Minimalismo'],
            status: 'completed'
        }
    ];

    const projectsPerPage = 2;
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const startIndex = currentPage * projectsPerPage;
    const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

    const changePage = (newPage) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentPage(newPage);
            setIsTransitioning(false);
        }, 400);
    };

    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            changePage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            changePage(currentPage - 1);
        }
    };

    return (
        <div className="min-h-screen h-screen bg-white flex items-center justify-center px-6 overflow-hidden relative">
            {/* Main Content Container */}
            <div className="max-w-5xl w-full">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h1
                        className={`
              text-3xl md:text-4xl lg:text-5xl
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
              text-base md:text-lg
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

                {/* Projects Grid - 2 at a time */}
                <div className="space-y-10">
                    {currentProjects.map((project, index) => (
                        <div
                            key={startIndex + index}
                            className={`
                group
                transition-all duration-500 ease-out
                ${isVisible && !isTransitioning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
                            style={{
                                transitionDelay: isVisible && !isTransitioning ? `${index * 150}ms` : '0ms'
                            }}
                        >
                            {/* Subtle line above */}
                            <div
                                className="
                  w-12 h-px
                  bg-gray-300
                  mb-4
                  transition-all duration-500
                  group-hover:w-16
                  group-hover:bg-gray-900
                "
                            />

                            {/* Client Name and Tags */}
                            <div className="flex items-center justify-between mb-2">
                                <h3
                                    className="
                    text-xs md:text-sm
                    font-inter font-medium
                    tracking-normal-apple
                    text-gray-500
                    uppercase
                  "
                                >
                                    {project.client}
                                </h3>

                                {/* Tags */}
                                <div className="flex gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="
                        text-xs
                        font-inter font-normal
                        text-gray-500
                        px-2 py-1
                        rounded-full
                        bg-gray-50
                      "
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Project Title */}
                            <h2
                                className="
                  text-xl md:text-2xl
                  font-inter font-medium
                  tracking-tight-apple
                  text-gray-900
                  mb-3
                  transition-all duration-300
                  flex items-center gap-3
                "
                            >
                                {project.title}
                                {project.status === 'in-development' && (
                                    <span
                                        className="
                      inline-flex items-center gap-1.5
                      text-xs
                      font-inter font-normal
                      text-gray-700
                      bg-gray-100
                      px-2.5 py-1
                      rounded-full
                    "
                                    >
                                        {/* Dot indicator */}
                                        <span className="h-2 w-2 rounded-full bg-gray-900"></span>
                                        En desarrollo
                                    </span>
                                )}
                            </h2>

                            {/* Project Description */}
                            <p
                                className="
                  text-sm md:text-base
                  font-inter font-normal
                  text-gray-600
                  leading-relaxed
                  tracking-normal-apple
                  mb-4
                  transition-colors duration-300
                  group-hover:text-gray-700
                "
                            >
                                {project.description}
                            </p>

                            {/* Visit Button */}
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  inline-flex items-center
                  px-5 py-2.5
                  bg-gray-900
                  text-white
                  font-inter font-medium
                  text-xs md:text-sm
                  rounded-full
                  transition-all duration-300 ease-out
                  hover:bg-gray-800
                  hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
                "
                            >
                                Visitar sitio
                                <svg
                                    className="ml-2 w-3 h-3 md:w-4 md:h-4"
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
                    ))}
                </div>

                {/* Pagination Indicator */}
                <div className="flex justify-center items-center gap-2 mt-10">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <div
                            key={index}
                            className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${index === currentPage ? 'bg-gray-900 w-6' : 'bg-gray-300'}
              `}
                        />
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            {/* Previous Button - Left Side */}
            {currentPage > 0 && (
                <button
                    onClick={prevPage}
                    className="
            absolute left-4 md:left-8 top-1/2 -translate-y-1/2
            w-10 h-10 md:w-12 md:h-12
            rounded-full
            bg-gray-100
            hover:bg-gray-200
            flex items-center justify-center
            transition-all duration-300
            hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-gray-400
          "
                    aria-label="Anterior"
                >
                    <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-gray-900"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
            )}

            {/* Next Button - Right Side */}
            {currentPage < totalPages - 1 && (
                <button
                    onClick={nextPage}
                    className="
            absolute right-4 md:right-8 top-1/2 -translate-y-1/2
            w-10 h-10 md:w-12 md:h-12
            rounded-full
            bg-gray-100
            hover:bg-gray-200
            flex items-center justify-center
            transition-all duration-300
            hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-gray-400
          "
                    aria-label="Siguiente"
                >
                    <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-gray-900"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            )}

            {/* Subtle Background Elements */}
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

export default Historias;
