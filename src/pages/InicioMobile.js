import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconArrowRight } from '@tabler/icons-react';
import HeroTitle from '../components/HeroTitle';

function InicioMobile() {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="h-[100dvh] overflow-hidden relative flex flex-col justify-center items-center px-6">
            {/* Main Content Container */}
            <div className="max-w-md w-full relative z-10">
                <div className="text-center flex flex-col items-center">

                    {/* Main Idea */}
                    <div
                        className={`
                            w-full
                            transition-opacity duration-700 ease-out delay-100
                            ${isVisible ? 'opacity-100' : 'opacity-0'}
                        `}
                    >
                        <HeroTitle
                            text="Creamos plataformas únicas y escalables."
                            animate={isVisible}
                            delay={350}
                            stagger={100}
                            className="text-4xl"
                        />
                    </div>

                    {/* Sub-headline (estilo Apple) */}
                    <p
                        className={`
                            mt-5 text-[15px] font-inter font-normal tracking-normal-apple
                            text-gray-400 max-w-xs leading-relaxed
                            transition-all duration-1000 ease-out delay-500
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        `}
                    >
                        Diseñamos, desarrollamos y escalamos productos digitales a la medida de tu negocio.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className={`
                            flex justify-center items-center gap-3 mt-8
                            transition-all duration-1000 ease-out delay-600
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        `}
                    >
                        <button
                            onClick={() => navigate('/servicios')}
                            className="
                                bg-white text-black px-6 py-2.5 rounded-full font-inter font-medium text-[15px]
                                flex items-center gap-1.5 hover:bg-gray-200 transition-all duration-300
                                shadow-[0_10px_40px_-10px_rgba(255,255,255,0.35)]
                                active:scale-[0.97]
                            "
                        >
                            Servicios
                            <IconArrowRight size={15} stroke={2} />
                        </button>
                        <button
                            onClick={() => navigate('/proyectos')}
                            className="
                                bg-[#034EA2] text-white px-6 py-2.5 rounded-full font-inter font-medium text-[15px]
                                flex items-center gap-1.5 hover:bg-[#02417f] transition-all duration-300
                                shadow-[0_10px_40px_-10px_rgba(3,78,162,0.5)]
                                active:scale-[0.97]
                            "
                        >
                            Proyectos entregados
                            <IconArrowRight size={15} stroke={2} />
                        </button>
                    </div>

                </div>
            </div>

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
                        absolute top-1/4 -left-1/3 w-64 h-64 
                        bg-gradient-to-br from-[#034EA2]/15 to-transparent 
                        rounded-full blur-3xl
                        transition-opacity duration-2000 ease-out delay-300
                        ${isVisible ? 'opacity-50' : 'opacity-0'}
                    `}
                />
                <div
                    className={`
                        absolute bottom-1/4 -right-1/3 w-64 h-64 
                        bg-gradient-to-tl from-white/5 to-transparent 
                        rounded-full blur-3xl
                        transition-opacity duration-2000 ease-out delay-500
                        ${isVisible ? 'opacity-50' : 'opacity-0'}
                    `}
                />
            </div>

            {/* Scroll indicator (estilo Apple) */}
            <div
                className={`
                    absolute bottom-7 left-1/2 -translate-x-1/2 z-10
                    transition-opacity duration-1000 ease-out delay-800
                    ${isVisible ? 'opacity-70' : 'opacity-0'}
                `}
            >
                <svg
                    className="w-5 h-5 text-gray-300 animate-bounce"
                    fill="none" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
                >
                    <path d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
}

export default InicioMobile;
