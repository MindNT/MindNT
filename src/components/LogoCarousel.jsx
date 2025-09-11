import React from 'react';

const LogoCarousel = ({ logos }) => {
  if (logos.length === 0) return null;

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full max-w-7xl mx-auto overflow-hidden py-12">
      {/* Glass container */}
      <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/[0.06] rounded-3xl p-8 shadow-2xl shadow-black/10 overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02] rounded-3xl"></div>
        
        {/* Inner glass effect */}
        <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.04] rounded-2xl p-6 overflow-hidden">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black/20 via-black/10 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black/20 via-black/10 to-transparent z-10 pointer-events-none"></div>
          
          {/* Logo carousel */}
          <div
            className="flex items-center space-x-12 animate-marquee"
            style={{
              animation: 'marquee 30s linear infinite',
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="group flex-shrink-0 relative"
              >
                {/* Logo container with glass effect */}
                <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/[0.15] hover:shadow-xl hover:shadow-white/5 hover:scale-105">
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.01] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <img
                    src={logo}
                    alt={`Cliente ${index + 1}`}
                    className="relative w-24 h-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-500 group-hover:brightness-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;