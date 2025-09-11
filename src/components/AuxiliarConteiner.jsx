import React, { useState } from 'react';
import Button1 from '../utils/button1';
import Button2 from '../utils/button2';
import Button3 from '../utils/button3';

const AuxiliarConteiner = ({ onOpenCallModal, onOpenWhatsApp }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    descripcion: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mensaje = `🚨 *PROYECTO URGENTE* 🚨

👤 *Información de contacto:*
• Nombre: ${formData.nombre}
• Email: ${formData.email}

📋 *Descripción del proyecto:*
${formData.descripcion}

⚡ *ALTA PRIORIDAD* - Requiere atención inmediata`;

    const mensajeCodificado = encodeURIComponent(mensaje);
    const whatsappURL = `https://wa.me/529993661475?text=${mensajeCodificado}`;
    
    window.open(whatsappURL, '_blank');
    
    // Limpiar formulario
    setFormData({
      nombre: '',
      email: '',
      descripcion: ''
    });
  };
  return (
    <div className="relative bg-white/[0.05] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-8 max-w-6xl mx-auto shadow-2xl shadow-black/20 overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-black/[0.02] rounded-3xl"></div>
      
      {/* Inner glass effect */}
      <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 text-left">
            <h2 className="text-4xl font-light mb-6 text-white/95 tracking-tight leading-tight">¿Proyecto Urgente?</h2>
            <p className="text-lg mb-8 text-white/70 font-light leading-relaxed max-w-md">Si tienes un proyecto que te urge muchísimo, agenda una llamada inmediata con nosotros. Esta sección es solo para casos de alta prioridad.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={onOpenCallModal}>
                <Button1 text="Agendar Llamada" />
              </button>
              <button onClick={onOpenWhatsApp}>
                <Button2 text="WhatsApp" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  placeholder="Nombre"
                  required
                  className="w-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.12] rounded-2xl px-5 py-4 text-white/90 placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/25 transition-all duration-300 font-light"
                />
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.12] rounded-2xl px-5 py-4 text-white/90 placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/25 transition-all duration-300 font-light"
                />
              </div>
              
              <div className="relative">
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  placeholder="Descripción del problema o proyecto"
                  rows="4"
                  required
                  className="w-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.12] rounded-2xl px-5 py-4 text-white/90 placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/25 transition-all duration-300 font-light resize-none"
                />
              </div>
              
              <div className="pt-2">
                <button type="submit">
                  <Button3 text="Enviar" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuxiliarConteiner;