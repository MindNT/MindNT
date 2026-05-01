import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonBlue from '../utils/ButtonBlue';
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
                    
                    {/* Badge */}
                    <div 
                        className={`
                            transition-all duration-1000 ease-out
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        <span className="inline-block border border-white/10 bg-white/5 px-4 py-1.5 rounded-full text-[10px] font-inter font-medium tracking-widest text-gray-400 uppercase mb-8">
                            Agencia Creativa & Tecnológica
                        </span>
                    </div>

                    {/* Logo */}
                    <div
                        className={`
                            flex justify-center mb-8
                            transition-all duration-1000 ease-out delay-100
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/Logohorizontal.png`}
                            alt="MindNT Logo"
                            className="h-10 w-auto object-contain opacity-90"
                        />
                    </div>

                    {/* Main Slogan */}
                    <h1
                        className={`
                            text-4xl
                            font-inter font-light
                            tracking-wide
                            text-white
                            leading-tight
                            mb-5
                            transition-all duration-1000 ease-out delay-200
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        Un negocio, <span className="text-gray-500">una historia.</span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        className={`
                            text-sm
                            font-inter font-normal
                            text-gray-400
                            tracking-normal-apple
                            mb-10
                            transition-all duration-1000 ease-out delay-300
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        Datos, Diseño, Branding y Desarrollo de alto nivel.
                    </p>

                    {/* CTA Button */}
                    <div
                        className={`
                            flex justify-center
                            transition-all duration-1000 ease-out delay-500
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        <ButtonBlue onClick={() => navigate('/servicios')}>
                            Iniciar viaje
                        </ButtonBlue>
                    </div>

                </div>
            </div>

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
                        absolute top-1/4 -left-1/3 w-64 h-64 
                        bg-gradient-to-br from-white/5 to-transparent 
                        rounded-full blur-3xl
                        transition-opacity duration-2000 ease-out delay-300
                        ${isVisible ? 'opacity-30' : 'opacity-0'}
                    `}
                />
                <div
                    className={`
                        absolute bottom-1/4 -right-1/3 w-64 h-64 
                        bg-gradient-to-tl from-white/5 to-transparent 
                        rounded-full blur-3xl
                        transition-opacity duration-2000 ease-out delay-500
                        ${isVisible ? 'opacity-30' : 'opacity-0'}
                    `}
                />
            </div>
        </div>
    );
}

export default InicioMobile;
