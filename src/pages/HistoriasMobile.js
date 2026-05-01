import React, { useEffect, useState } from 'react';
import ShootingStar from '../components/ShootingStar';

function HistoriasMobile() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="min-h-screen bg-black px-6 py-24 overflow-x-hidden relative">
            <ShootingStar />
            <div className="max-w-md mx-auto relative z-10">
                {/* Header Section */}
                <div 
                    className={`
                        mb-16
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
                        Nacimos de la necesidad de romper los esquemas corporativos. Valoramos la lealtad, la pasión y el coraje de quienes deciden emprender.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-16">
                    {/* Section 1 */}
                    <div 
                        className={`
                            transition-all duration-1000 ease-out delay-200
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        <h2 className="text-xl font-inter font-light tracking-wide text-white mb-4">
                            Pasantes con visión
                        </h2>
                        <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed tracking-normal-apple space-y-4">
                            <span className="block mb-4">
                                MindNT no nació en una sala de juntas. Nos fundamos uniendo a una serie de pasantes que, en el mundo laboral, se sentían incómodos y limitados.
                            </span>
                            <span className="block">
                                Sabíamos que podíamos ofrecer más si nos daban la libertad de crear sin ataduras. Así decidimos crear nuestro propio espacio.
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
                            Lealtad y Pasión
                        </h2>
                        <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed tracking-normal-apple space-y-4">
                            <span className="block mb-4">
                                Valoramos profundamente la pasión que las personas le ponen a sus negocios. Sabemos lo que cuesta construir algo desde cero.
                            </span>
                            <span className="block">
                                Por eso no usamos plantillas genéricas. Cada diseño y plataforma es única, pensada específicamente para reflejar el alma del negocio de nuestros clientes.
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
                            Nuestro compromiso
                        </h2>
                        <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed tracking-normal-apple italic">
                            "Tu marca no es un número más. Es una historia en la que creemos, y nuestra misión es darle las herramientas para que el mundo la escuche fuerte y claro."
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
