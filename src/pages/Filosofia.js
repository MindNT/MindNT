import React, { useEffect, useState } from 'react';
import ShootingStar from '../components/ShootingStar';

function Filosofia() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const steps = [
        {
            num: '01',
            title: 'Llamada Inicial',
            desc: 'Entender el ADN de tu negocio, tus objetivos y retos. No asumimos, escuchamos.'
        },
        {
            num: '02',
            title: 'Planeación',
            desc: 'Trazamos la arquitectura del proyecto, tiempos y la estrategia a seguir.'
        },
        {
            num: '03',
            title: 'Desarrollo',
            desc: 'Nuestro equipo ejecuta el diseño visual y desarrollo construyendo a la medida.'
        },
        {
            num: '04',
            title: 'Evaluación',
            desc: 'Presentamos avances, probamos calidad y aplicamos tus comentarios.'
        },
        {
            num: '05',
            title: 'Entrega',
            desc: 'Lanzamiento oficial. Te entregamos el proyecto completo y funcional.'
        }
    ];

    return (
        <div className="h-screen bg-black overflow-hidden relative flex flex-col justify-center pt-16">
            <ShootingStar />
            <div className="max-w-7xl w-full mx-auto px-6 relative z-10 flex flex-col gap-16">
                
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
                    <div 
                        className={`
                            w-full lg:w-1/2
                            transition-all duration-1000 ease-out
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                        `}
                    >
                        <span className="inline-block border border-white/10 bg-white/5 px-4 py-1.5 rounded-full text-xs font-inter font-medium tracking-widest text-gray-400 uppercase mb-6">
                            Filosofía y Metodología
                        </span>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-light tracking-wide text-white leading-tight mb-4">
                            Un proceso<br />
                            <span className="text-gray-500">transparente.</span>
                        </h1>

                        <p className="text-base md:text-lg font-inter font-normal text-gray-400 leading-relaxed tracking-normal-apple max-w-lg">
                            No creemos en cajas negras. Creemos en procesos claros donde tú tienes el control y la visibilidad de lo que estamos construyendo.
                        </p>
                    </div>

                    <div 
                        className={`
                            w-full lg:w-5/12
                            transition-all duration-1000 ease-out delay-200
                            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
                        `}
                    >
                        {/* Sistema de 3 pagos card */}
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300">
                            <h3 className="text-lg font-inter font-medium text-white mb-3 flex items-center gap-3">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Sistema de 3 Pagos
                            </h3>
                            <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed">
                                Hemos diseñado un esquema de tres pagos vinculados a hitos de resultados. Avanzamos juntos: pagas conforme ves el progreso de nuestro trabajo. Sin sorpresas.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Timeline */}
                <div className="relative pt-8">
                    {/* Horizontal Line */}
                    <div className="absolute top-[28px] left-0 right-0 h-px bg-white/10 hidden md:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
                        {steps.map((step, idx) => (
                            <div 
                                key={idx}
                                className={`
                                    relative flex flex-col gap-6
                                    transition-all duration-1000 ease-out
                                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                                `}
                                style={{ transitionDelay: `${(idx + 3) * 150}ms` }}
                            >
                                {/* Dot */}
                                <div className="hidden md:flex w-14 h-14 rounded-full bg-black border border-white/20 items-center justify-center text-sm font-inter font-medium text-gray-400 z-10 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                                    {step.num}
                                </div>

                                {/* Content */}
                                <div>
                                    <div className="md:hidden text-xs font-inter font-medium tracking-widest text-gray-600 mb-2 uppercase">
                                        Paso {step.num}
                                    </div>
                                    <h3 className="text-lg font-inter font-medium text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
                        absolute top-1/4 left-1/4 w-[600px] h-[600px]
                        bg-gradient-to-tr from-white/5 to-transparent
                        rounded-full blur-3xl
                        transition-opacity duration-2000 ease-out delay-500
                        ${isVisible ? 'opacity-40' : 'opacity-0'}
                    `}
                />
            </div>
        </div>
    );
}

export default Filosofia;
