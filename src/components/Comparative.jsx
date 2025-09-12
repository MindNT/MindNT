import React from 'react';

const Comparative = ({ leftList, rightList }) => {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[480px] w-full max-w-6xl relative group">
      {/* Glass container with refined Apple-inspired liquid glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] backdrop-blur-3xl rounded-[24px] border border-white/[0.2] shadow-[0_20px_60px_rgba(0,0,0,0.15),0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.4)] transition-all duration-500 ease-out group-hover:shadow-[0_32px_80px_rgba(0,0,0,0.2),0_12px_40px_rgba(0,0,0,0.15)]"></div>
      
      {/* Inner subtle highlight */}
      <div className="absolute inset-[1px] rounded-[23px] bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent"></div>
      
      <div className="flex flex-col lg:flex-row w-full relative z-10 overflow-hidden rounded-[24px]">
        {/* Left Side */}
        <div className="flex-1 px-6 lg:px-10 py-8 lg:py-12 flex flex-col justify-center items-center relative group/left">
          {/* Subtle inner border with refined green accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] via-transparent to-transparent rounded-l-[24px] lg:rounded-l-[24px] rounded-t-[24px] lg:rounded-t-none"></div>
          
          <h2 className="text-white/90 text-2xl lg:text-3xl font-light mb-6 lg:mb-10 tracking-[-0.02em] relative z-10 transition-all duration-700 group-hover/left:text-white group-hover/left:scale-[1.02] drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]">Nosotros</h2>
          
          <ul className="list-none p-0 m-0 text-left space-y-3 lg:space-y-4 relative z-10 w-full max-w-sm">
            {leftList.map((item, index) => (
              <li key={index} className="px-6 py-4 bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-white/[0.02] backdrop-blur-sm rounded-xl text-white/85 border border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:bg-gradient-to-r hover:from-white/[0.12] hover:via-white/[0.06] hover:to-white/[0.04] hover:text-white hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:border-white/[0.12] cursor-pointer text-sm font-medium leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Center divider with enhanced glass effect */}
        <div className="w-full h-[1px] lg:w-[1px] lg:h-auto bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-white/30 to-transparent relative">
          <div className="absolute inset-x-4 lg:inset-y-4 lg:inset-x-0 h-[1px] lg:h-auto lg:w-[1px] bg-gradient-to-r lg:bg-gradient-to-b from-white/10 via-white/40 to-white/10 blur-[0.5px]"></div>
        </div>

        {/* Right Side */}
        <div className="flex-1 px-6 lg:px-10 py-8 lg:py-12 flex flex-col justify-center items-center relative group/right">
          {/* Subtle inner border with refined neutral accent */}
          <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/[0.03] via-transparent to-transparent rounded-r-[24px] lg:rounded-r-[24px] rounded-b-[24px] lg:rounded-b-none"></div>
          
          <h2 className="text-white/70 text-2xl lg:text-3xl font-light mb-6 lg:mb-10 tracking-[-0.02em] relative z-10 transition-all duration-700 group-hover/right:text-white/85 group-hover/right:scale-[1.02] drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]">Competencia</h2>
          
          <ul className="list-none p-0 m-0 text-left space-y-3 lg:space-y-4 relative z-10 w-full max-w-sm">
            {rightList.map((item, index) => (
              <li key={index} className="px-6 py-4 bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.01] backdrop-blur-sm rounded-xl text-white/60 border border-white/[0.05] shadow-[0_2px_12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:bg-gradient-to-r hover:from-white/[0.08] hover:via-white/[0.04] hover:to-white/[0.02] hover:text-white/80 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:border-white/[0.08] cursor-pointer text-sm font-medium leading-relaxed">
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