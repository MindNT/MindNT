import React, { useEffect, useState } from 'react';
import ShootingStar from '../components/ShootingStar';

const steps = [
    {
        num: '01',
        title: 'Auditoría',
        desc: 'Conectamos nuestras tuberías a tus fuentes de datos de forma segura.'
    },
    {
        num: '02',
        title: 'Ingesta',
        desc: 'Extraemos, limpiamos y normalizamos la información cruda.'
    },
    {
        num: '03',
        title: 'Modelos',
        desc: 'Calculamos las métricas exactas y preparamos los datasets.'
    },
    {
        num: '04',
        title: 'Entrega',
        desc: 'Desplegamos dashboards interactivos con acceso 24/7.'
    },
    {
        num: '05',
        title: 'Evolución',
        desc: 'Ajustamos métricas y optimizamos si tu negocio cambia.'
    }
];

function Filosofia() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="h-screen bg-black overflow-hidden relative flex flex-col justify-center pt-10">
            <ShootingStar />
            <div className="max-w-[85rem] w-full mx-auto px-6 relative z-10 flex flex-col gap-16">
                
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
                    <div 
                        className={`
                            w-full lg:w-1/2
                            transition-all duration-1000 ease-out
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                        `}
                    >
                        <span className="inline-block border border-white/10 bg-white px-4 py-1.5 rounded-full text-[10px] font-inter font-semibold tracking-widest text-black uppercase mb-6">
                            Flujo de Trabajo
                        </span>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-inter font-semibold tracking-tight text-white leading-tight mb-4">
                            Transparencia total.<br />
                            <span className="text-gray-500">Resultados predecibles.</span>
                        </h1>

                        <p className="text-sm md:text-base font-inter font-normal text-gray-400 leading-relaxed max-w-lg">
                            Diseñamos un ciclo de vida del dato donde tienes visibilidad absoluta en cada etapa del reporte. Sin cajas negras.
                        </p>
                    </div>

                    <div 
                        className={`
                            w-full lg:w-5/12
                            transition-all duration-1000 ease-out delay-200
                            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
                        `}
                    >
                        {/* Sistema de 3 pagos card (Google Style) */}
                        <div className="bg-[#0f0f0f] border border-white/10 rounded-[2rem] p-8 hover:border-[#034EA2]/50 transition-colors duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#034EA2] rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                            
                            <h3 className="text-lg font-inter font-semibold text-white mb-3 flex items-center gap-3 relative z-10">
                                <div className="w-8 h-8 rounded-lg bg-[#034EA2] flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                Sistema de 3 Pagos
                            </h3>
                            <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed relative z-10">
                                Hemos diseñado un esquema vinculado a los hitos de este flujo. Avanzamos juntos: pagas conforme superamos cada etapa técnica y recibes el reporte funcional.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Timeline (Google Antigravity Style) */}
                <div className="relative pt-8">
                    {/* Horizontal Line */}
                    <div className="absolute top-[28px] left-0 right-0 h-px bg-white/10 hidden md:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
                        {steps.map((step, idx) => (
                            <div 
                                key={idx}
                                className={`
                                    relative flex flex-col gap-5 group
                                    transition-all duration-1000 ease-out
                                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                                `}
                                style={{ transitionDelay: `${(idx + 3) * 150}ms` }}
                            >
                                {/* Dot */}
                                <div className="hidden md:flex w-14 h-14 rounded-full bg-white/10 border border-white/10 items-center justify-center text-sm font-inter font-semibold text-gray-300 z-10 group-hover:border-[#034EA2] group-hover:bg-white/20 group-hover:text-white transition-colors duration-300 backdrop-blur-sm">
                                    {step.num}
                                </div>

                                {/* Content */}
                                <div>
                                    <div className="md:hidden text-[10px] font-inter font-semibold tracking-widest text-[#034EA2] mb-2 uppercase">
                                        Fase {step.num}
                                    </div>
                                    <h3 className="text-lg font-inter font-semibold text-white mb-2 transition-colors duration-300">
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
                        absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px]
                        bg-gradient-to-tr from-[#034EA2]/10 via-white/5 to-transparent
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
