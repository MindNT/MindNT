import React, { useEffect, useState } from 'react';

function Inicio() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger fade-in animation after component mounts
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="min-h-screen h-screen bg-white flex items-center justify-center px-6 overflow-hidden">
            {/* Main Content Container */}
            <div className="max-w-7xl w-full">
                {/* Hero Section */}
                <div className="text-center space-y-8">
                    {/* Logo */}
                    <div
                        className={`
                            flex justify-center mb-12
                            transition-all duration-1000 ease-out
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logohorizontal.png`}
                            alt="MindNT Logo"
                            className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                        />
                    </div>

                    {/* Main Slogan */}
                    <h1
                        className={`
              text-4xl md:text-6xl lg:text-7xl
              font-inter font-light
              tracking-wide
              text-gray-900
              transition-all duration-1000 ease-out delay-200
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
                    >
                        Un negocio, una historia.
                    </h1>

                    {/* Subtitle */}
                    <p
                        className={`
              text-base md:text-lg
              font-inter font-normal
              text-gray-600
              tracking-normal-apple
              transition-all duration-1000 ease-out delay-300
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
                    >
                        Datos, Diseño, Branding y Desarrollo de alto nivel.
                    </p>

                </div>
            </div>

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                {/* Soft gradient orbs for depth */}
                <div
                    className={`
            absolute top-1/4 -left-1/4 w-96 h-96 
            bg-gradient-to-br from-gray-100 to-transparent 
            rounded-full blur-3xl
            transition-opacity duration-2000 ease-out delay-300
            ${isVisible ? 'opacity-40' : 'opacity-0'}
          `}
                />
                <div
                    className={`
            absolute bottom-1/4 -right-1/4 w-96 h-96 
            bg-gradient-to-tl from-gray-100 to-transparent 
            rounded-full blur-3xl
            transition-opacity duration-2000 ease-out delay-500
            ${isVisible ? 'opacity-40' : 'opacity-0'}
          `}
                />
            </div>
        </div>
    );
}

export default Inicio;