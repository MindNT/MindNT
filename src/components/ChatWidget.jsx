import React from 'react';

const ChatWidget = ({ onClick }) => {
  return (
    <div id="nexxus-widget" className="fixed bottom-6 right-6 z-40">
      {/* Message bubble */}
      <div className="absolute bottom-full right-4 mb-4 animate-bounce">
        <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 shadow-lg">
          {/* Liquid glass overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.04] pointer-events-none rounded-2xl"></div>
          
          {/* Message text */}
          <span className="relative z-10 text-white text-sm font-medium whitespace-nowrap">
            ¿Necesitas ayuda?
          </span>
          
          {/* Arrow pointing down */}
          <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/20"></div>
          <div className="absolute top-full right-6 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-white/10 translate-y-px"></div>
        </div>
      </div>

      <button
        onClick={onClick}
        className="relative w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group overflow-hidden"
      >
        {/* Nexxus icon filling the circle */}
        <img 
          src="/icons/nexxus.svg" 
          alt="Nexxus" 
          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300 filter drop-shadow-lg" 
        />
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
        
        {/* Hover tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          ¡Hola! ¿En qué puedo ayudarte?
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
        </div>
      </button>
    </div>
  );
};

export default ChatWidget;