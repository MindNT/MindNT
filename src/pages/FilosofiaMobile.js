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

function FilosofiaMobile() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="min-h-[100dvh] bg-black pt-28 pb-16 overflow-x-hidden relative flex flex-col justify-start">
            <ShootingStar />
            
            <div className="px-6 relative z-10 flex-shrink-0 mb-10 w-full max-w-md mx-auto">
                {/* Header Section */}
                <div 
                    className={`
                        transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    <span className="inline-block border border-white/10 bg-white/5 px-4 py-1.5 rounded-full text-[10px] font-inter font-medium tracking-widest text-gray-400 uppercase mb-6">
                        Flujo de Trabajo
                    </span>
                    
                    <h1 className="text-3xl md:text-4xl font-inter font-semibold tracking-tight text-white leading-tight mb-4">
                        Transparencia total.<br />
                        <span className="text-gray-500">Resultados predecibles.</span>
                    </h1>

                    <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed mb-8">
                        Diseñamos un ciclo de vida del dato donde tienes visibilidad absoluta en cada etapa del reporte. Sin cajas negras.
                    </p>

                    {/* Sistema de 3 pagos card (Google Style for mobile) */}
                    <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#034EA2] rounded-full blur-[40px] opacity-20"></div>
                        
                        <h3 className="text-base font-inter font-semibold text-white mb-3 flex items-center gap-3 relative z-10">
                            <div className="w-8 h-8 rounded-lg bg-[#034EA2] flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            Sistema de 3 Pagos
                        </h3>
                        <p className="text-xs sm:text-sm font-inter font-normal text-gray-400 leading-relaxed relative z-10">
                            Hemos diseñado un esquema vinculado a los hitos de este flujo. Avanzamos juntos: pagas conforme superamos cada etapa técnica y recibes el reporte funcional.
                        </p>
                    </div>
                </div>
            </div>

            {/* Vertical Timeline */}
            <div 
                className={`
                    w-full relative z-10 max-w-md mx-auto
                    transition-all duration-1000 ease-out delay-300
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
            >
                <div className="flex flex-col gap-4 px-6 pb-12 w-full">
                    {steps.map((step, idx) => (
                        <div 
                            key={idx}
                            className="w-full bg-[#0f0f0f] border border-white/10 rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden"
                        >
                            {/* Giant background number */}
                            <div className="absolute -top-4 -right-2 text-[80px] font-inter font-bold text-white/[0.03] tracking-tighter pointer-events-none select-none">
                                {step.num}
                            </div>
                            
                            <div className="relative z-10">
                                <div className="text-[10px] font-inter font-semibold tracking-widest text-[#034EA2] mb-2 uppercase">
                                    Fase {step.num}
                                </div>
                                <h3 className="text-lg font-inter font-semibold text-white mb-2">
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

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
                        absolute top-1/3 -right-1/4 w-96 h-96
                        bg-gradient-to-br from-[#034EA2]/20 to-transparent
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
