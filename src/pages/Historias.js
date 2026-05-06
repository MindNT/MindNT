import React, { useEffect, useState } from 'react';
import ShootingStar from '../components/ShootingStar';

function Historias() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger fade-in animation after component mounts
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="min-h-screen bg-black py-20 flex items-center overflow-x-hidden relative">
            <ShootingStar />
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16">
                    
                    {/* Left Column */}
                    <div className="w-full md:w-5/12 shrink-0">
                        <div
                            className={`
                                transition-all duration-1000 ease-out
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                            `}
                        >
                            <span className="inline-block border border-white/10 bg-white/5 px-5 py-1.5 rounded-full text-xs font-inter font-medium tracking-widest text-gray-400 uppercase mb-8">
                                Nuestra Historia
                            </span>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-inter font-light tracking-wide text-white leading-tight mb-6">
                                Diseñamos<br />
                                <span className="text-gray-500">sin límites.</span>
                            </h1>

                            <p className="text-lg md:text-xl font-inter font-normal text-gray-400 leading-relaxed tracking-normal-apple">
                                Todo gran proyecto empieza con un primer paso. Nuestra historia se construye gracias a quienes confiaron en nosotros desde el primer día.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full md:w-7/12 flex flex-col gap-10 md:gap-12">
                        
                        {/* Section 1 */}
                        <div 
                            className={`
                                transition-all duration-1000 ease-out delay-200
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                            `}
                        >
                            <h2 className="text-2xl md:text-3xl font-inter font-light tracking-wide text-white mb-6">
                                El inicio
                            </h2>
                            <p className="text-base md:text-lg font-inter font-normal text-gray-400 leading-relaxed tracking-normal-apple space-y-6">
                                <span className="block">
                                    Comenzamos colaborando en pequeños proyectos, impulsados por el deseo de hacer las cosas diferente. Cada detalle importaba, y volcamos toda nuestra creatividad para demostrar que nuestra visión no tenía fronteras.
                                </span>
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div 
                            className={`
                                transition-all duration-1000 ease-out delay-400
                                border-l border-white/10 pl-8 md:pl-12
                                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
                            `}
                        >
                            <h2 className="text-2xl md:text-3xl font-inter font-light tracking-wide text-white mb-6">
                                La Confianza
                            </h2>
                            <p className="text-base md:text-lg font-inter font-normal text-gray-400 leading-relaxed tracking-normal-apple space-y-6">
                                <span className="block">
                                    Crecimos cuando nuestros primeros clientes apostaron por nosotros. Al superar cada reto, no solo construimos marcas, sino lazos de lealtad. Esa confianza nos convirtió en el estudio que somos hoy.
                                </span>
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div 
                            className={`
                                transition-all duration-1000 ease-out delay-600
                                bg-white/5 rounded-3xl p-6 md:p-10 border border-white/5
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                            `}
                        >
                            <h2 className="text-xl md:text-2xl font-inter font-medium tracking-wide text-white mb-4">
                                Nuestro Compromiso
                            </h2>
                            <p className="text-base font-inter font-normal text-gray-400 leading-relaxed tracking-normal-apple italic">
                                "Nunca olvidamos nuestras raíces. Sabemos lo que cuesta construir algo desde cero. Tu marca no es un número más; es una historia en la que creemos, y nuestra misión es llevarla a su máximo potencial."
                            </p>
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <span className="text-xs font-inter font-medium tracking-widest text-gray-500 uppercase">
                                    — El equipo fundador
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
                        absolute top-1/4 -right-1/4 w-[800px] h-[800px]
                        bg-gradient-to-br from-white/5 to-transparent
                        rounded-full blur-3xl
                        transition-opacity duration-2000 ease-out delay-500
                        ${isVisible ? 'opacity-50' : 'opacity-0'}
                    `}
                />
            </div>
        </div>
    );
}

export default Historias;
