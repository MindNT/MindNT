import React, { useState } from 'react';
import Button1 from '../utils/button1';
import Button3 from '../utils/button3';

const Cotizador = ({ onOpenProjectModal }) => {
  const options = [
    { name: 'Landing Page', time: '1 semana', hours: 20 },
    { name: 'Automatizaciones', time: '2 semanas', hours: 40 },
    { name: 'Web Corporativa', time: '2 semanas y media', hours: 50 }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = options[selectedIndex];
  const cost = selected.hours * 156.30;

  return (
    <div className="relative max-w-lg group">
      {/* Glass container with enhanced liquid glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-black/[0.08] backdrop-blur-2xl rounded-[32px] border border-white/[0.15] shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-700 group-hover:shadow-[0_16px_64px_rgba(0,0,0,0.4)]"></div>
      
      {/* Inner glow effect */}
      <div className="absolute inset-[1px] rounded-[31px] bg-gradient-to-br from-white/[0.03] to-transparent"></div>
      
      <div className="relative z-10 p-8 text-white/90">
        <h3 className="text-2xl font-semibold mb-8 text-center text-white/95 tracking-wide drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]">Proyectos Populares</h3>
        
        {/* Options tabs with glass effect */}
        <div className="flex gap-2 mb-8">
          {options.map((opt, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex-1 py-3 px-4 rounded-2xl border transition-all duration-500 backdrop-blur-sm font-medium text-sm ${
                selectedIndex === index
                  ? 'bg-gradient-to-r from-cyan-500/[0.25] to-teal-500/[0.25] border-cyan-400/[0.3] text-white shadow-[0_4px_16px_rgba(6,182,212,0.2)] scale-105'
                  : 'bg-white/[0.05] border-white/[0.1] text-white/75 hover:bg-white/[0.08] hover:border-white/[0.15] hover:text-white/90 hover:scale-102'
              }`}
            >
              {opt.name}
            </button>
          ))}
        </div>
        
        {/* Details card with enhanced glass effect */}
        <div className="bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-sm rounded-3xl p-6 border border-white/[0.1] shadow-[0_4px_16px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-500 hover:bg-gradient-to-br hover:from-white/[0.08] hover:to-white/[0.04] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
          <h4 className="text-xl font-semibold mb-4 text-white/95 tracking-wide">{selected.name}</h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center py-2 px-4 bg-white/[0.03] rounded-xl border border-white/[0.05]">
              <span className="font-medium text-white/80">Tiempo estimado:</span> 
              <span className="text-white/95 font-semibold">{selected.time}</span>
            </div>
            <div className="flex justify-between items-center py-2 px-4 bg-white/[0.03] rounded-xl border border-white/[0.05]">
              <span className="font-medium text-white/80">Horas:</span> 
              <span className="text-white/95 font-semibold">{selected.hours}</span>
            </div>
            <div className="flex justify-between items-center py-2 px-4 bg-gradient-to-r from-emerald-500/[0.08] to-green-500/[0.08] rounded-xl border border-emerald-400/[0.15]">
              <span className="font-medium text-white/80">Costo estimado:</span> 
              <span className="text-emerald-200 font-bold text-lg drop-shadow-[0_1px_4px_rgba(16,185,129,0.3)]">${cost.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        {/* Buttons section */}
        <div className="flex justify-center gap-4 mt-8">
          <button onClick={onOpenProjectModal}>
            <Button1 text="Cotizar Proyecto" />
          </button>
          <Button3 text="Agente" />
        </div>
        
        {/* Info text with enhanced styling */}
        <p className="text-cyan-200/80 text-sm mt-6 text-center leading-relaxed backdrop-blur-sm py-2 px-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
          Deja que nuestro agente Nexxus te ayude con la cotización de algún proyecto o contáctanos directamente.
        </p>
      </div>
    </div>
  );
};

export default Cotizador;