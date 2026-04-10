import React, { useEffect, useState } from 'react';

function Plataformas() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger fade-in animation after component mounts
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const platforms = [
        {
            name: 'GoBite',
            icon: `${process.env.PUBLIC_URL}/images/GoBite.png`,
            description: 'Plataforma de delivery',
            status: 'En desarrollo',
            color: 'from-blue-50 to-blue-100',
            delay: 'delay-200'
        }
    ];


    return (
        <div className="min-h-screen h-screen bg-white flex items-center justify-center px-6 overflow-hidden">
            {/* Main Content Container */}
            <div className="max-w-4xl w-full">
                {/* Page Title */}
                <div className="text-center mb-16">
                    <h1
                        className={`
              text-3xl md:text-4xl lg:text-5xl
              font-inter font-light
              tracking-wide
              text-gray-900
              mb-4
              transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
                    >
                        Plataformas
                    </h1>
                    <p
                        className={`
              text-base md:text-lg
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

                {/* Platforms Grid - iOS Style */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
                    {platforms.map((platform, index) => (
                        <div
                            key={index}
                            className={`
                group
                text-center
                transition-all duration-700 ease-out
                ${platform.delay}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
                        >
                            {/* iOS-Style Icon Container */}
                            <div
                                className={`
                  w-32 h-32 md:w-40 md:h-40
                  mx-auto
                  mb-6
                  flex items-center justify-center
                  transition-all duration-500 ease-out
                  group-hover:scale-105
                `}
                            >
                                {/* Icon - Image or Emoji */}
                                {platform.icon.startsWith('/') ? (
                                    <img
                                        src={platform.icon}
                                        alt={platform.name}
                                        className="w-20 h-20 md:w-24 md:h-24 object-contain"
                                    />
                                ) : (
                                    <div className="text-6xl md:text-7xl">
                                        {platform.icon}
                                    </div>
                                )}
                            </div>

                            {/* Platform Name */}
                            <h2
                                className="
                  text-xl md:text-2xl
                  font-inter font-medium
                  tracking-tight-apple
                  text-gray-900
                  mb-3
                  transition-all duration-300
                  text-center
                "
                            >
                                {platform.name}
                            </h2>

                            {/* Platform Status Badge */}
                            {platform.status === 'En desarrollo' ? (
                                <span
                                    className="
                    inline-flex items-center gap-1.5
                    text-xs
                    font-inter font-normal
                    text-gray-700
                    bg-gray-100
                    px-2.5 py-1
                    rounded-full
                  "
                                >
                                    {/* Dot indicator */}
                                    <span className="h-2 w-2 rounded-full bg-gray-900"></span>
                                    En desarrollo
                                </span>
                            ) : (
                                <div
                                    className="
                    inline-block
                    px-3 py-1
                    rounded-full
                    bg-gray-100
                    text-xs
                    font-inter font-normal
                    text-gray-600
                    tracking-normal-apple
                    transition-all duration-300
                    group-hover:bg-gray-200
                  "
                                >
                                    {platform.status}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
            absolute top-1/3 left-1/4 w-[500px] h-[500px]
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

export default Plataformas;
