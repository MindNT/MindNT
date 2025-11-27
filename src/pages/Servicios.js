import React, { useEffect, useState } from 'react';

function Servicios() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger fade-in animation after component mounts
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const services = [
        {
            title: 'Desarrollo web',
            description: 'Creamos experiencias digitales excepcionales',
            delay: 'delay-200'
        },
        {
            title: 'Branding',
            description: 'Construimos identidades memorables',
            delay: 'delay-400'
        },
        {
            title: 'Marketing',
            description: 'Impulsamos tu presencia digital',
            delay: 'delay-600'
        },
        {
            title: 'Automatizaciones',
            description: 'Optimizamos tus procesos',
            delay: 'delay-[800ms]'
        }
    ];

    return (
        <div className="min-h-screen h-screen bg-white flex items-center justify-center px-6 overflow-hidden">
            {/* Main Content Container */}
            <div className="max-w-6xl w-full">
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
                        Servicios
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
                        Transformamos ideas en soluciones
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`
                group
                text-center
                transition-all duration-700 ease-out
                ${service.delay}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
                        >
                            {/* Subtle line above */}
                            <div
                                className="
                  w-12 h-px
                  bg-gray-300
                  mx-auto
                  mb-6
                  group-hover:w-16
                  group-hover:bg-gray-900
                  transition-all duration-500
                "
                            />

                            {/* Service Title */}
                            <h2
                                className="
                  text-xl md:text-2xl
                  font-inter font-medium
                  tracking-tight-apple
                  text-gray-900
                  mb-3
                  transition-all duration-300
                  group-hover:tracking-wide
                "
                            >
                                {service.title}
                            </h2>

                            {/* Service Description */}
                            <p
                                className="
                  text-sm md:text-base
                  font-inter font-normal
                  text-gray-500
                  tracking-normal-apple
                  transition-colors duration-300
                  group-hover:text-gray-700
                "
                            >
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle Background Elements - More minimal */}
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

export default Servicios;
