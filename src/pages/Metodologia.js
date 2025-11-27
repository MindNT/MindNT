import React, { useEffect, useState } from 'react';

function Metodologia() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger fade-in animation after component mounts
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const phases = [
        { id: 1, name: 'Contacto en frío', delay: 'delay-100' },
        { id: 2, name: 'Llamada de entendimiento', delay: 'delay-200' },
        { id: 3, name: 'Entrega de pre-diseño', delay: 'delay-300' },
        { id: 4, name: 'Modificaciones', delay: 'delay-400' },
        { id: 5, name: 'Inicio de desarrollo y seguimiento', delay: 'delay-500' },
        { id: 6, name: 'Entrega de desarrollo', delay: 'delay-600' },
        { id: 7, name: 'Modificaciones', delay: 'delay-700' },
        { id: 8, name: 'Despliegue', delay: 'delay-800' }
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
              mb-3
              transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
                    >
                        Metodología
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
                        Nuestro proceso de trabajo paso a paso
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Horizontal Line */}
                    <div
                        className={`
              absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2
              transition-all duration-1000 ease-out delay-200
              ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
            `}
                    />

                    {/* Phases Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {phases.map((phase, index) => (
                            <div
                                key={phase.id}
                                className={`
                  flex flex-col items-center
                  transition-all duration-700 ease-out
                  ${phase.delay}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                            >
                                {/* Dot */}
                                <div className="relative z-10 mb-4">
                                    <div className="w-4 h-4 rounded-full bg-gray-900 ring-4 ring-white"></div>
                                </div>

                                {/* Phase Number */}
                                <div
                                    className="
                    text-xs
                    font-inter font-medium
                    text-gray-400
                    mb-2
                  "
                                >
                                    {String(phase.id).padStart(2, '0')}
                                </div>

                                {/* Phase Name */}
                                <p
                                    className="
                    text-xs md:text-sm
                    font-inter font-normal
                    text-gray-700
                    text-center
                    leading-snug
                    tracking-normal-apple
                  "
                                >
                                    {phase.name}
                                </p>
                            </div>
                        ))}
                    </div>
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

export default Metodologia;
