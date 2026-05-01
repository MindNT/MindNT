import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonBlue from '../utils/ButtonBlue';
import ShootingStar from '../components/ShootingStar';

function Inicio() {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Trigger fade-in animation after component mounts
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="h-screen bg-black overflow-hidden relative flex flex-col justify-center items-center px-6">
            <ShootingStar />
            
            {/* Main Content Container */}
            <div className="max-w-4xl w-full relative z-10">
                <div className="text-center flex flex-col items-center">
                    
                    {/* Badge */}
                    <div 
                        className={`
                            transition-all duration-1000 ease-out
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        <span className="inline-block border border-white/10 bg-white/5 px-6 py-2 rounded-full text-xs font-inter font-medium tracking-widest text-gray-400 uppercase mb-10">
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
                            src={`${process.env.PUBLIC_URL}/images/Logowhitefonts.png`}
                            alt="MindNT Logo"
                            className="h-14 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>

                    {/* Main Slogan */}
                    <h1
                        className={`
                            text-5xl md:text-7xl lg:text-8xl
                            font-inter font-light
                            tracking-wide
                            text-white
                            leading-tight
                            mb-6
                            transition-all duration-1000 ease-out delay-200
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        Un negocio, <span className="text-gray-500">una historia.</span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        className={`
                            text-base md:text-lg lg:text-xl
                            font-inter font-normal
                            text-gray-400
                            tracking-normal-apple
                            max-w-2xl mx-auto
                            mb-12
                            transition-all duration-1000 ease-out delay-300
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        Datos, Diseño, Branding y Desarrollo de alto nivel para posicionar tu marca en el ecosistema digital.
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
                        absolute top-1/4 -left-1/4 w-[800px] h-[800px] 
                        bg-gradient-to-br from-white/5 to-transparent 
                        rounded-full blur-3xl
                        transition-opacity duration-2000 ease-out delay-300
                        ${isVisible ? 'opacity-30' : 'opacity-0'}
                    `}
                />
                <div
                    className={`
                        absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] 
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

export default Inicio;