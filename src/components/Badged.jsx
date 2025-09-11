import React from 'react';

const Badged = () => {
  const badges = [
    'Soporte tecnico',
    'Multidioma',
    '24/7',
    'Respuestas en menos de 1 segundo',
    'Prospeccion',
    'Naturalidad'
  ];

  return (
    <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto overflow-hidden relative shadow-2xl shadow-black/20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-3xl opacity-50" />
      
      <div className="relative flex flex-wrap gap-3 justify-center">
        {badges.map((badge, index) => (
          <span
            key={index}
            className="group relative inline-flex items-center px-5 py-3 rounded-2xl font-medium text-sm tracking-tight transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-default bg-white/[0.08] backdrop-blur-sm border border-white/[0.15] text-white/95 shadow-lg shadow-black/10"
          >
            {/* Inner glow effect on hover */}
            <div className="absolute inset-0 bg-white/[0.05] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative w-4 h-4 mr-3 flex-shrink-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full shadow-lg shadow-emerald-500/30">
              <img 
                src="/icons/check.svg" 
                alt="check" 
                className="w-3 h-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 brightness-0 invert" 
              />
            </div>
            <span className="relative font-light">{badge}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Badged;