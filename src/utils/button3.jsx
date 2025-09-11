import React from 'react';

const Button3 = ({ text, iconSrc, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black backdrop-blur-md text-white border border-white/50 rounded-lg py-3 px-6 min-w-[150px] h-[44px] text-[14px] cursor-pointer transition-all duration-300 ease-in-out shadow-lg flex items-center justify-center gap-2 hover:bg-black/50 hover:shadow-xl"
      {...props}
    >
      {iconSrc && <img src={iconSrc} alt="icon" className="h-5 w-5" />}
      {text}
    </button>
  );
};

export default Button3;