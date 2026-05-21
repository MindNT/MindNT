import React, { useState, useEffect } from 'react';
import ShootingStar from '../components/ShootingStar';

const concepts = [
    {
        id: 'big-data',
        title: 'Big Data',
        description: 'Imagina todos los clics, ventas, interacciones y registros que tu empresa genera cada segundo. Eso es el Big Data: un océano gigantesco de información estructurada y desestructurada. El verdadero reto no radica en cómo guardar todos estos datos, sino en tener la capacidad analítica para extraer valor de ellos. Quien logra entender su Big Data, predice tendencias y toma decisiones basadas en la realidad, no en la intuición.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
        )
    },
    {
        id: 'machine-learning',
        title: 'Machine Learning',
        description: 'Es la ciencia de enseñar a las computadoras a aprender por sí mismas. En lugar de darles reglas estrictas de programación (ej. "si pasa X, haz Y"), les damos miles de ejemplos históricos. El sistema analiza esos ejemplos y "aprende" a identificar patrones y predecir resultados futuros. Es la tecnología detrás de las recomendaciones de Netflix, la detección de fraudes bancarios y el análisis predictivo de ventas.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
        )
    },
    {
        id: 'nlp',
        title: 'Procesamiento de Lenguaje',
        description: 'Es la capacidad de las máquinas para leer, entender e interpretar el lenguaje humano. Piensa en tener un equipo de miles de analistas leyendo cada correo, reseña o ticket de soporte al mismo tiempo. El NLP extrae el sentimiento (si el cliente está feliz o frustrado), clasifica los problemas automáticamente y te revela lo que la gente realmente piensa de tu marca leyendo "entre líneas" a escala masiva.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
        )
    },
    {
        id: 'etl',
        title: 'Pipelines ETL',
        description: 'Es la "plomería" vital de la Inteligencia Artificial y el análisis de datos. Consiste en un sistema automatizado que Extrae datos crudos de diferentes fuentes (tu tienda online, tu CRM, tus Excel), los Transforma (limpiando errores, formatos raros y duplicados), y los Carga listos y pulidos en una base central. Sin un buen ETL, tus reportes estarían llenos de información incorrecta.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
        )
    },
    {
        id: 'data-warehouse',
        title: 'Data Warehouse',
        description: 'Es el archivo maestro hiper-organizado de tu empresa. A diferencia de tener la información regada en cientos de archivos dispersos, un Data Warehouse (Almacén de Datos) centraliza toda la información histórica en un solo lugar. Está diseñado y optimizado específicamente para hacer análisis rápidos y complejos, permitiendo que tus dashboards carguen en segundos en lugar de horas.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="1" x2="9" y2="4"></line>
                <line x1="15" y1="1" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="23"></line>
                <line x1="15" y1="20" x2="15" y2="23"></line>
                <line x1="20" y1="9" x2="23" y2="9"></line>
                <line x1="20" y1="14" x2="23" y2="14"></line>
                <line x1="1" y1="9" x2="4" y2="9"></line>
                <line x1="1" y1="14" x2="4" y2="14"></line>
            </svg>
        )
    },
    {
        id: 'api',
        title: 'API de Integración',
        description: 'Piensa en una API como un mesero en un restaurante. Tú (un sistema) le das tu orden al mesero (la API), este va a la cocina (otro sistema) y te trae tu comida (los datos). Es el protocolo de comunicación que permite que softwares distintos (como tu facturación y tu tienda en línea) puedan "hablar" entre sí y compartir información de manera silenciosa y automática, sin intervención humana.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
        )
    },
    {
        id: 'cloud',
        title: 'Cloud Computing',
        description: 'Es la renta de poder de cómputo y almacenamiento a través de internet. En lugar de comprar, mantener y enfriar servidores físicos carísimos en tu oficina que se vuelven obsoletos rápidamente, la nube te da capacidad casi infinita bajo demanda. Solo pagas por lo que usas, permitiendo que tu empresa escale y sea respaldada por la seguridad de gigantes como Google o Amazon.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
            </svg>
        )
    },
    {
        id: 'dashboard',
        title: 'Dashboards',
        description: 'Es la capa visual donde los números complejos se traducen a decisiones ejecutivas claras. Un dashboard es un tablero de control interactivo que se actualiza en tiempo real. Te permite ver la "salud" de tu negocio en un solo vistazo, revelando anomalías críticas, indicadores de rendimiento (KPIs) y tendencias de ventas sin que tengas que descifrar una sola tabla aburrida de Excel.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
        )
    }
];

function ConceptosMobile() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeId, setActiveId] = useState(concepts[0].id);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="min-h-screen bg-black relative flex flex-col items-center pt-24 pb-12">
            <ShootingStar />

            <div className="w-full px-6 relative z-10 flex flex-col">
                
                {/* Header Tipográfico */}
                <div 
                    className={`
                        mb-12
                        transition-opacity duration-1000 ease-out
                        ${isVisible ? 'opacity-100' : 'opacity-0'}
                    `}
                >
                    <div className="inline-flex items-center gap-2 border border-white/10 bg-white px-4 py-1.5 rounded-full text-[10px] font-inter font-semibold uppercase tracking-widest text-black mb-6">
                        Glosario MindNT
                    </div>
                    <h1 className="text-3xl md:text-4xl font-inter font-semibold tracking-tight text-white leading-tight mb-4">
                        El lenguaje de los <br/><span className="text-white">datos</span>.
                    </h1>
                </div>

                {/* Lista Tipográfica Limpia */}
                <div className="w-full flex flex-col border-t border-white/10">
                    {concepts.map((concept, index) => {
                        const isActive = activeId === concept.id;
                        return (
                            <div 
                                key={concept.id}
                                onClick={() => setActiveId(isActive ? null : concept.id)}
                                className={`
                                    flex flex-col border-b border-white/10 py-5 px-4 rounded-xl transition-all duration-300 ease-out overflow-hidden cursor-pointer group
                                    ${isActive ? 'bg-white/10 border-transparent mb-2' : ''}
                                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                                `}
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`transition-colors duration-200 font-inter tracking-tight ${isActive ? 'text-lg text-white font-semibold' : 'text-base text-gray-500 font-medium group-hover:text-gray-300'}`}>
                                        {concept.title}
                                    </span>
                                </div>
                                
                                <div className={`transition-all duration-200 ${isActive ? 'max-h-96 opacity-100 mt-5' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-lg bg-[#034EA2] text-white flex items-center justify-center shrink-0">
                                            <div className="w-5 h-5">
                                                {concept.icon}
                                            </div>
                                        </div>
                                        <p className="text-sm font-inter text-gray-400 leading-relaxed font-light pr-2">
                                            {concept.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#034EA2]/10 via-white/5 to-transparent rounded-full blur-3xl opacity-50" />
            </div>
        </div>
    );
}

export default ConceptosMobile;
