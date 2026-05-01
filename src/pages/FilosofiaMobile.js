import React, { useEffect, useState } from 'react';
import ShootingStar from '../components/ShootingStar';

function FilosofiaMobile() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const steps = [
        {
            num: '01',
            title: 'Llamada Inicial',
            desc: 'Entendemos el ADN de tu negocio, tus objetivos y retos. No asumimos, escuchamos.'
        },
        {
            num: '02',
            title: 'Planeación',
            desc: 'Trazamos la arquitectura del proyecto y establecemos la estrategia creativa.'
        },
        {
            num: '03',
            title: 'Desarrollo',
            desc: 'Nuestro equipo ejecuta el diseño y desarrollo construyendo piezas a la medida.'
        },
        {
            num: '04',
            title: 'Evaluación',
            desc: 'Presentamos avances, probamos calidad y pulimos cada detalle antes de lanzar.'
        },
        {
            num: '05',
            title: 'Entrega',
            desc: 'Te entregamos el proyecto funcional, listo para generar resultados reales.'
        }
    ];

    return (
        <div className="min-h-[100dvh] bg-black pt-24 pb-12 overflow-x-hidden relative flex flex-col justify-center">
            <ShootingStar />
            <div className="px-6 relative z-10 flex-shrink-0 mb-6">
                {/* Header Section */}
                <div 
                    className={`
                        transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    <span className="inline-block border border-white/10 bg-white/5 px-3 py-1 rounded-full text-[10px] font-inter font-medium tracking-widest text-gray-400 uppercase mb-4">
                        Filosofía y Metodología
                    </span>
                    
                    <h1 className="text-3xl font-inter font-light tracking-wide text-white leading-tight mb-4">
                        Un proceso<br />
                        <span className="text-gray-500">transparente.</span>
                    </h1>

                    {/* Sistema de 3 pagos card */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                        <h3 className="text-sm font-inter font-medium text-white mb-2 flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Sistema de 3 Pagos
                        </h3>
                        <p className="text-xs font-inter font-normal text-gray-400 leading-relaxed">
                            Esquema de tres pagos vinculados a hitos de resultados. Avanzamos juntos: pagas conforme ves el progreso.
                        </p>
                    </div>
                </div>
            </div>

            {/* Vertical Timeline */}
            <div 
                className={`
                    w-full relative z-10 mt-2
                    transition-all duration-1000 ease-out delay-300
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
            >
                <div className="flex flex-col gap-4 px-6 pb-12 w-full">
                    {steps.map((step, idx) => (
                        <div 
                            key={idx}
                            className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-center relative"
                        >
                            <div className="absolute top-6 left-6 text-5xl font-inter font-bold text-white/5 tracking-tighter pointer-events-none">
                                {step.num}
                            </div>
                            <div className="relative z-10 pl-2">
                                <div className="text-[10px] font-inter font-medium tracking-widest text-gray-500 mb-2 uppercase">
                                    Paso {step.num}
                                </div>
                                <h3 className="text-lg font-inter font-medium text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-xs font-inter font-normal text-gray-400 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
                        absolute top-1/2 -right-1/4 w-96 h-96
                        bg-gradient-to-br from-white/5 to-transparent
                        rounded-full blur-3xl
                        transition-opacity duration-2000 ease-out delay-500
                        ${isVisible ? 'opacity-40' : 'opacity-0'}
                    `}
                />
            </div>
            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}

export default FilosofiaMobile;
