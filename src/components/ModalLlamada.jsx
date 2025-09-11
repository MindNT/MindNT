import React, { useState } from 'react';

const ModalLlamada = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    fechaPreferida: '',
    horaPreferida: '',
    zonaHoraria: '',
    tipoConsulta: '',
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
    
    // Formatear mensaje para WhatsApp
    const mensaje = `*SOLICITUD DE LLAMADA AGENDADA*

👤 *Información de contacto:*
• Nombre: ${formData.nombre}
• Email: ${formData.email}
• Teléfono: ${formData.telefono}
• Empresa: ${formData.empresa}

📅 *Detalles de la llamada:*
• Fecha preferida: ${formData.fechaPreferida}
• Hora preferida: ${formData.horaPreferida}
• Zona horaria: ${formData.zonaHoraria}
• Tipo de consulta: ${formData.tipoConsulta}

📝 *Descripción:*
${formData.descripcion}

*Por favor confirma la disponibilidad para esta fecha y hora.*`;

    // Codificar mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    const whatsappURL = `https://wa.me/529993661475?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Limpiar formulario y cerrar modal
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      empresa: '',
      fechaPreferida: '',
      horaPreferida: '',
      zonaHoraria: '',
      tipoConsulta: '',
      descripcion: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay con blur */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Liquid Glass Card */}
        <div className="relative bg-white/[0.08] backdrop-blur-3xl border border-white/[0.12] rounded-3xl p-8 shadow-2xl shadow-black/25 overflow-hidden">
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.02] rounded-3xl" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            type="button"
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/[0.15] flex items-center justify-center text-white/70 hover:text-white/90 hover:bg-white/[0.12] transition-all duration-300 group z-20"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="relative">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="text-3xl font-light mb-3 text-white/95 tracking-tight">Agendar llamada</h2>
              <p className="text-white/60 font-light text-lg">Programa una llamada para discutir tu proyecto</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Información personal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium tracking-wide">Nombre completo</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.15] rounded-2xl px-5 py-4 text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/25 focus:border-white/30 transition-all duration-300 font-light"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium tracking-wide">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.15] rounded-2xl px-5 py-4 text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/25 focus:border-white/30 transition-all duration-300 font-light"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium tracking-wide">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.15] rounded-2xl px-5 py-4 text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/25 focus:border-white/30 transition-all duration-300 font-light"
                    placeholder="+52 999 123 4567"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium tracking-wide">Empresa</label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="w-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.15] rounded-2xl px-5 py-4 text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/25 focus:border-white/30 transition-all duration-300 font-light"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              {/* Detalles de la llamada */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium tracking-wide">Fecha preferida</label>
                  <input
                    type="date"
                    name="fechaPreferida"
                    value={formData.fechaPreferida}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.15] rounded-2xl px-5 py-4 text-white/90 focus:outline-none focus:ring-2 focus:ring-white/25 focus:border-white/30 transition-all duration-300 font-light"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium tracking-wide">Hora preferida</label>
                  <select
                    name="horaPreferida"
                    value={formData.horaPreferida}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.15] rounded-2xl px-5 py-4 text-white/90 focus:outline-none focus:ring-2 focus:ring-white/25 focus:border-white/30 transition-all duration-300 font-light"
                  >
                    <option value="">Selecciona hora</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                    <option value="18:00">06:00 PM</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium tracking-wide">Zona horaria</label>
                  <select
                    name="zonaHoraria"
                    value={formData.zonaHoraria}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.15] rounded-2xl px-5 py-4 text-white/90 focus:outline-none focus:ring-2 focus:ring-white/25 focus:border-white/30 transition-all duration-300 font-light"
                  >
                    <option value="">Selecciona zona</option>
                    <option value="CST (México)">CST (México)</option>
                    <option value="EST (Estados Unidos)">EST (Estados Unidos)</option>
                    <option value="PST (Costa Oeste)">PST (Costa Oeste)</option>
                    <option value="GMT (España)">GMT (España)</option>
                    <option value="Otra">Otra</option>
                  </select>
                </div>
              </div>

              {/* Tipo de consulta */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium tracking-wide">Tipo de consulta</label>
                <select
                  name="tipoConsulta"
                  value={formData.tipoConsulta}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.15] rounded-2xl px-5 py-4 text-white/90 focus:outline-none focus:ring-2 focus:ring-white/25 focus:border-white/30 transition-all duration-300 font-light"
                >
                  <option value="">Selecciona el tipo de consulta</option>
                  <option value="Proyecto nuevo">Proyecto nuevo</option>
                  <option value="Rediseño de sitio web">Rediseño de sitio web</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Aplicación móvil">Aplicación móvil</option>
                  <option value="Consultoría">Consultoría</option>
                  <option value="Soporte técnico">Soporte técnico</option>
                  <option value="Integración Nexxus AI">Integración Nexxus AI</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              {/* Descripción */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium tracking-wide">Descripción del proyecto</label>
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.15] rounded-2xl px-5 py-4 text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/25 focus:border-white/30 transition-all duration-300 font-light resize-none"
                  placeholder="Describe brevemente tu proyecto o las dudas que quieres resolver en la llamada..."
                />
              </div>

              {/* Submit button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl px-8 py-4 text-white/90 font-medium hover:from-blue-500/30 hover:to-blue-600/30 hover:border-blue-400/50 transition-all duration-300 shadow-lg shadow-blue-500/10 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Agendar llamada
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLlamada;