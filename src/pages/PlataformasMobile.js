import React, { useEffect, useState } from 'react';

function PlataformasMobile() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const platforms = [
        {
            name: 'GoBite',
            icon: `${process.env.PUBLIC_URL}/images/GoBite.png`,
            description: 'Plataforma de delivery',
            status: 'En desarrollo',
            delay: 'delay-200'
        }
    ];

    return (
        <div className="min-h-screen bg-white px-6 py-24 overflow-y-auto">
            <div className="max-w-md mx-auto">
                {/* Page Title */}
                <div className="text-center mb-12">
                    <h1
                        className={`
                            text-3xl
                            font-inter font-light
                            tracking-wide
                            text-gray-900
                            mb-3
                            transition-all duration-1000 ease-out
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        Plataformas
                    </h1>
                    <p
                        className={`
                            text-base
                            font-inter font-normal
                            text-gray-600
                            tracking-normal-apple
                            transition-all duration-1000 ease-out delay-100
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        Nuestro ecosistema digital
                    </p>
                </div>

                {/* Platforms - Vertical layout for mobile */}
                <div className="space-y-12">
                    {platforms.map((platform, index) => (
                        <div
                            key={index}
                            className={`
                                text-center
                                transition-all duration-700 ease-out
                                ${platform.delay}
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                            `}
                        >
                            {/* Icon Container */}
                            <div className="w-28 h-28 mx-auto mb-5 flex items-center justify-center">
                                {platform.icon.startsWith('/') ? (
                                    <img
                                        src={platform.icon}
                                        alt={platform.name}
                                        className="w-20 h-20 object-contain"
                                    />
                                ) : (
                                    <div className="text-6xl">
                                        {platform.icon}
                                    </div>
                                )}
                            </div>

                            {/* Platform Name */}
                            <h2 className="text-xl font-inter font-medium tracking-tight-apple text-gray-900 mb-3">
                                {platform.name}
                            </h2>

                            {/* Platform Status Badge */}
                            {platform.status === 'En desarrollo' ? (
                                <span className="inline-flex items-center gap-1.5 text-xs font-inter font-normal text-gray-700 bg-gray-100 px-2.5 py-1 rounded-full">
                                    <span className="h-2 w-2 rounded-full bg-gray-900"></span>
                                    En desarrollo
                                </span>
                            ) : (
                                <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs font-inter font-normal text-gray-600 tracking-normal-apple">
                                    {platform.status}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
                        absolute top-1/3 left-1/4 w-80 h-80
                        bg-gradient-to-br from-gray-50 to-transparent 
                        rounded-full blur-3xl
                        transition-opacity duration-2000 ease-out delay-500
                        ${isVisible ? 'opacity-30' : 'opacity-0'}
                    `}
                />
            </div>
        </div>
    );
}

export default PlataformasMobile;
