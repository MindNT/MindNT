import React from 'react';

const Comparative = ({ leftList, rightList }) => {
  return (
    <div className="flex h-96 w-full max-w-7xl relative group">
      {/* Glass container with enhanced liquid glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-black/[0.08] backdrop-blur-2xl rounded-[32px] border border-white/[0.15] shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-700 group-hover:shadow-[0_16px_64px_rgba(0,0,0,0.4)]"></div>
      
      {/* Inner glow effect */}
      <div className="absolute inset-[1px] rounded-[31px] bg-gradient-to-br from-white/[0.03] to-transparent"></div>
      
      <div className="flex w-full relative z-10 overflow-hidden rounded-[32px]">
        {/* Left Side */}
        <div className="flex-1 p-8 flex flex-col justify-center items-center relative group/left">
          {/* Subtle inner border with green tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.05] via-white/[0.02] to-transparent rounded-l-[32px]"></div>
          
          <h2 className="text-emerald-100 text-2xl font-semibold mb-6 tracking-wide relative z-10 transition-all duration-500 group-hover/left:text-emerald-50 group-hover/left:scale-105 drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]">Nosotros</h2>
          
          <ul className="list-none p-0 m-0 text-center space-y-3 relative z-10">
            {leftList.map((item, index) => (
              <li key={index} className="px-4 py-3 bg-gradient-to-r from-emerald-500/[0.12] via-white/[0.06] to-emerald-400/[0.08] backdrop-blur-sm rounded-2xl text-emerald-50 border border-emerald-400/[0.15] shadow-[0_4px_16px_rgba(16,185,129,0.15)] transition-all duration-400 hover:bg-gradient-to-r hover:from-emerald-400/[0.18] hover:via-white/[0.08] hover:to-emerald-300/[0.12] hover:text-white hover:scale-105 hover:shadow-[0_8px_24px_rgba(16,185,129,0.25)] hover:border-emerald-300/[0.25] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Center divider with enhanced glass effect */}
        <div className="w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent relative">
          <div className="absolute inset-y-4 w-[1px] bg-gradient-to-b from-white/10 via-white/40 to-white/10 blur-[0.5px]"></div>
        </div>

        {/* Right Side */}
        <div className="flex-1 p-8 flex flex-col justify-center items-center relative group/right">
          {/* Subtle inner border with red tint */}
          <div className="absolute inset-0 bg-gradient-to-bl from-red-500/[0.05] via-white/[0.02] to-transparent rounded-r-[32px]"></div>
          
          <h2 className="text-red-100 text-2xl font-semibold mb-6 tracking-wide relative z-10 transition-all duration-500 group-hover/right:text-red-50 group-hover/right:scale-105 drop-shadow-[0_2px_8px_rgba(239,68,68,0.3)]">Competencia</h2>
          
          <ul className="list-none p-0 m-0 text-center space-y-3 relative z-10">
            {rightList.map((item, index) => (
              <li key={index} className="px-4 py-3 bg-gradient-to-l from-red-500/[0.12] via-white/[0.06] to-red-400/[0.08] backdrop-blur-sm rounded-2xl text-red-50 border border-red-400/[0.15] shadow-[0_4px_16px_rgba(239,68,68,0.15)] transition-all duration-400 hover:bg-gradient-to-l hover:from-red-400/[0.18] hover:via-white/[0.08] hover:to-red-300/[0.12] hover:text-white hover:scale-105 hover:shadow-[0_8px_24px_rgba(239,68,68,0.25)] hover:border-red-300/[0.25] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comparative;