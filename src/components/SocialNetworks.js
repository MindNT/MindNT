import React from 'react';
import { Link } from 'react-router-dom';

function SocialNetworks() {
    const policies = [
        {
            name: 'Privacidad de Datos',
            path: '/privacidad',
        },
        {
            name: 'Términos de Servicio',
            path: '/terminos',
        }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {policies.map((policy, index) => (
                <Link
                    key={policy.name}
                    to={policy.path}
                    className="
                        px-5 py-2
                        bg-[#0f0f0f]/80
                        backdrop-blur-md
                        border border-white/10
                        rounded-full
                        text-xs font-inter font-medium text-gray-400
                        transition-all duration-300 ease-out
                        hover:bg-white/10
                        hover:text-white
                        hover:border-white/30
                        shadow-lg
                        -rotate-45 origin-right
                    "
                    style={{
                        animationDelay: `${index * 150}ms`,
                        animation: 'fadeInUp 0.5s ease-out forwards',
                        opacity: 0
                    }}
                >
                    {policy.name}
                </Link>
            ))}

            <style>{`
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(10px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
            `}</style>
        </div>
    );
}

export default SocialNetworks;
