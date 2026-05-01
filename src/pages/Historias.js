import React, { useEffect, useState } from 'react';
import ShootingStar from '../components/ShootingStar';

function Historias() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger fade-in animation after component mounts
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="min-h-screen bg-black pt-24 pb-32 overflow-x-hidden relative">
            <ShootingStar />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-24">
                    
                    {/* Left Column - Sticky Heading */}
                    <div className="w-full md:w-5/12 md:sticky md:top-32 shrink-0">
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
                                Nacimos de la necesidad de romper los esquemas corporativos tradicionales. Valoramos la lealtad, la pasión y el coraje de quienes deciden emprender.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Scrolling Content */}
                    <div className="w-full md:w-7/12 flex flex-col gap-24 pt-4 md:pt-32 pb-32">
                        
                        {/* Section 1 */}
                        <div 
                            className={`
                                transition-all duration-1000 ease-out delay-200
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                            `}
                        >
                            <h2 className="text-2xl md:text-3xl font-inter font-light tracking-wide text-white mb-6">
                                El inicio: Pasantes con visión
                            </h2>
                            <p className="text-base md:text-lg font-inter font-normal text-gray-400 leading-relaxed tracking-normal-apple space-y-6">
                                <span className="block mb-4">
                                    MindNT no nació en una sala de juntas. Nos fundamos uniendo a una serie de pasantes que, en el mundo laboral corporativo, se sentían incómodos y limitados.
                                </span>
                                <span className="block">
                                    Las agencias tradicionales priorizaban procesos rígidos sobre la creatividad real. Nosotros sabíamos que podíamos ofrecer más si nos daban la libertad de crear sin ataduras. Así decidimos crear nuestro propio espacio.
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
                                Lealtad y Pasión
                            </h2>
                            <p className="text-base md:text-lg font-inter font-normal text-gray-400 leading-relaxed tracking-normal-apple space-y-6">
                                <span className="block mb-4">
                                    Valoramos profundamente la lealtad y la pasión que las personas le ponen a sus emprendimientos y negocios. Sabemos lo que cuesta construir algo desde cero.
                                </span>
                                <span className="block">
                                    Es por eso que no ofrecemos plantillas genéricas ni soluciones rápidas. Cada diseño, cada plataforma y cada estrategia que desarrollamos es única, pensada específicamente para reflejar el alma del negocio de nuestros clientes.
                                </span>
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div 
                            className={`
                                transition-all duration-1000 ease-out delay-600
                                bg-white/5 rounded-3xl p-8 md:p-12 border border-white/5
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                            `}
                        >
                            <h2 className="text-xl md:text-2xl font-inter font-medium tracking-wide text-white mb-4">
                                Nuestro compromiso
                            </h2>
                            <p className="text-base font-inter font-normal text-gray-400 leading-relaxed tracking-normal-apple italic">
                                "En MindNT, tu marca no es un número más en nuestro portafolio. Es una historia en la que creemos, y nuestra misión es darle las herramientas visuales y tecnológicas para que el mundo la escuche fuerte y claro."
                            </p>
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <span className="text-xs font-inter font-medium tracking-widest text-gray-500 uppercase">
                                    — El equipo fundador de MindNT
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
