import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShootingStar from '../components/ShootingStar';

function InicioMobile() {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="h-[100dvh] bg-black overflow-hidden relative flex flex-col justify-center items-center px-6">
            <ShootingStar />
            
            {/* Main Content Container */}
            <div className="max-w-md w-full relative z-10">
                <div className="text-center flex flex-col items-center">
                    
                    {/* Logo (Replacing Announcement Badge) */}
                    <div 
                        className={`
                            transition-all duration-1000 ease-out flex justify-center
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        `}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/Logowhitefonts.png`}
                            alt="MindNT"
                            className="h-10 w-auto object-contain mb-8"
                        />
                    </div>

                    {/* Main Slogan (Google Product Style) */}
                    <h1
                        className={`
                            text-4xl
                            font-inter font-semibold
                            tracking-tight
                            text-white
                            leading-[1.1]
                            mb-5
                            transition-all duration-1000 ease-out delay-100
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        `}
                    >
                        Inteligencia de negocio.<br />
                        <span className="text-gray-500">
                            Impulsada por tus datos.
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        className={`
                            text-sm
                            font-inter font-normal
                            text-gray-400
                            mb-10
                            transition-all duration-1000 ease-out delay-200
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        `}
                    >
                        Toma decisiones estratégicas con nuestra plataforma integral de extracción, análisis predictivo y visualización en tiempo real.
                    </p>

                    {/* CTA Button */}
                    <div
                        className={`
                            flex justify-center
                            transition-all duration-1000 ease-out delay-300
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        `}
                    >
                        <button 
                            onClick={() => navigate('/servicios')}
                            className="bg-white text-black px-6 py-3 rounded-full font-inter font-medium text-sm flex items-center gap-2 hover:bg-gray-200 transition-colors duration-300"
                        >
                            Descubrir servicios
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
                        absolute top-1/4 -left-1/3 w-64 h-64 
                        bg-gradient-to-br from-[#034EA2]/20 to-transparent 
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
        </div>
    );
}

export default InicioMobile;
