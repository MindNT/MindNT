import React, { useEffect, useState } from 'react';

function InicioMobile() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="min-h-screen h-screen bg-white flex items-center justify-center px-6 overflow-hidden">
            <div className="max-w-md w-full">
                <div className="text-center space-y-6">
                    {/* Logo - Smaller for mobile */}
                    <div
                        className={`
                            flex justify-center mb-8
                            transition-all duration-1000 ease-out
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/Logohorizontal.png`}
                            alt="MindNT Logo"
                            className="h-14 w-auto object-contain"
                        />
                    </div>

                    {/* Main Slogan - Optimized for mobile */}
                    <h1
                        className={`
                            text-3xl
                            font-inter font-light
                            tracking-wide
                            text-gray-900
                            leading-tight
                            transition-all duration-1000 ease-out delay-200
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        Un negocio, una historia.
                    </h1>

                    {/* Subtitle */}
                    <p
                        className={`
                            text-sm
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

            {/* Subtle Background - Adjusted for mobile */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
                        absolute top-1/4 -left-1/3 w-64 h-64 
                        bg-gradient-to-br from-gray-100 to-transparent 
                        rounded-full blur-3xl
                        transition-opacity duration-2000 ease-out delay-300
                        ${isVisible ? 'opacity-40' : 'opacity-0'}
                    `}
                />
                <div
                    className={`
                        absolute bottom-1/4 -right-1/3 w-64 h-64 
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

export default InicioMobile;
