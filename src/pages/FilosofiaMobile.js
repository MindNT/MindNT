import React, { useEffect, useState } from 'react';

function MetodologiaMobile() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const phases = [
        { id: 1, name: 'Claridad antes que ruido', delay: 'delay-100' },
        { id: 2, name: 'Diseño con propósito', delay: 'delay-150' },
        { id: 3, name: 'Tecnología al servicio del negocio', delay: 'delay-200' },
        { id: 4, name: 'Relaciones de largo plazo', delay: 'delay-250' },
        { id: 5, name: 'Resultados medibles', delay: 'delay-300' },
        { id: 6, name: 'Identidad con distinción', delay: 'delay-350' },
        { id: 7, name: 'Crecimiento constante', delay: 'delay-400' },
        { id: 8, name: 'Compromiso total', delay: 'delay-450' }
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
                        Filosofía
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
                        Lo que creemos define cómo trabajamos.
                    </p>
                </div>

                {/* Vertical Timeline for mobile */}
                <div className="relative pl-8">
                    {/* Vertical Line */}
                    <div
                        className={`
                            absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200
                            transition-all duration-1000 ease-out delay-200
                            ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
                        `}
                        style={{ transformOrigin: 'top' }}
                    />

                    {/* Phases */}
                    <div className="space-y-8">
                        {phases.map((phase) => (
                            <div
                                key={phase.id}
                                className={`
                                    relative
                                    transition-all duration-700 ease-out
                                    ${phase.delay}
                                    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                                `}
                            >
                                {/* Dot */}
                                <div className="absolute -left-[30px] top-1">
                                    <div className="w-4 h-4 rounded-full bg-gray-900 ring-4 ring-white"></div>
                                </div>

                                {/* Content */}
                                <div>
                                    {/* Phase Number */}
                                    <div className="text-xs font-inter font-medium text-gray-400 mb-1">
                                        {String(phase.id).padStart(2, '0')}
                                    </div>

                                    {/* Phase Name */}
                                    <p className="text-sm font-inter font-normal text-gray-700 leading-snug tracking-normal-apple">
                                        {phase.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
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

export default MetodologiaMobile;
