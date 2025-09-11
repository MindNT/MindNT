import React from 'react';

const Button1 = ({ text, iconSrc, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white text-black border-none rounded-lg py-3 px-6 min-w-[150px] h-[44px] text-[14px] cursor-pointer transition-all duration-300 ease-in-out shadow-md flex items-center justify-center gap-2 hover:bg-gray-100 hover:shadow-lg"
      {...props}
    >
      {iconSrc && <img src={iconSrc} alt="icon" className="h-5 w-5" />}
      {text}
    </button>
  );
};

export default Button1;