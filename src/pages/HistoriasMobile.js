import React, { useEffect, useState } from 'react';
import ShootingStar from '../components/ShootingStar';

function HistoriasMobile() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="min-h-screen bg-black px-6 py-20 flex flex-col justify-center overflow-x-hidden relative">
            <ShootingStar />
            <div className="max-w-md mx-auto relative z-10 w-full">
                {/* Header Section */}
                <div 
                    className={`
                        mb-10
                        transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    <span className="inline-block border border-white/10 bg-white/5 px-4 py-1.5 rounded-full text-xs font-inter font-medium tracking-widest text-gray-400 uppercase mb-6">
                        Nuestra Historia
                    </span>
                    
                    <h1 className="text-4xl font-inter font-light tracking-wide text-white leading-tight mb-6">
                        Diseñamos<br />
                        <span className="text-gray-500">sin límites.</span>
                    </h1>

                    <p className="text-base font-inter font-normal text-gray-400 leading-relaxed tracking-normal-apple">
                        Todo gran proyecto empieza con un primer paso. Nuestra historia se construye gracias a quienes confiaron en nosotros desde el primer día.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-10">
                    {/* Section 1 */}
                    <div 
                        className={`
                            transition-all duration-1000 ease-out delay-200
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        <h2 className="text-xl font-inter font-light tracking-wide text-white mb-4">
                            El inicio
                        </h2>
                        <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed tracking-normal-apple space-y-4">
                            <span className="block">
                                Comenzamos colaborando en pequeños proyectos, impulsados por el deseo de hacer las cosas diferente. Volcamos nuestra creatividad en cada detalle.
                            </span>
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div 
                        className={`
                            transition-all duration-1000 ease-out delay-400
                            border-l-2 border-white/10 pl-6
                            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
                        `}
                    >
                        <h2 className="text-xl font-inter font-light tracking-wide text-white mb-4">
                            La Confianza
                        </h2>
                        <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed tracking-normal-apple space-y-4">
                            <span className="block">
                                Crecimos cuando nuestros primeros clientes apostaron por nosotros. Esa confianza inicial nos convirtió en el estudio que somos hoy.
                            </span>
                        </p>
                    </div>

                    {/* Section 3 */}
                    <div 
                        className={`
                            transition-all duration-1000 ease-out delay-600
                            bg-white/5 rounded-2xl p-6 border border-white/5
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        <h2 className="text-lg font-inter font-medium tracking-wide text-white mb-3">
                            Nuestro Compromiso
                        </h2>
                        <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed tracking-normal-apple italic">
                            "Nunca olvidamos nuestras raíces. Tu marca es una historia en la que creemos, y nuestra misión es llevarla a su máximo potencial."
                        </p>
                        <div className="mt-6 pt-4 border-t border-white/10">
                            <span className="text-xs font-inter font-medium tracking-widest text-gray-500 uppercase">
                                — Equipo fundador
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
                        absolute top-1/4 -right-1/2 w-96 h-96
                        bg-gradient-to-br from-white/5 to-transparent
                        rounded-full blur-3xl
                        transition-opacity duration-2000 ease-out delay-500
                        ${isVisible ? 'opacity-40' : 'opacity-0'}
                    `}
                />
            </div>
        </div>
    );
}

export default HistoriasMobile;
