import React, { useState } from 'react';

const ModalProject = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    tipoProyecto: '',
    presupuesto: '',
    descripcion: '',
    fechaLimite: ''
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
    const mensaje = `*NUEVA SOLICITUD DE PROYECTO*

👤 *Información de contacto:*
• Nombre: ${formData.nombre}
• Email: ${formData.email}
• Teléfono: ${formData.telefono}
• Empresa: ${formData.empresa}

🎯 *Detalles del proyecto:*
• Tipo de proyecto: ${formData.tipoProyecto}
• Presupuesto estimado: ${formData.presupuesto}
• Fecha límite: ${formData.fechaLimite}

📝 *Descripción:*
${formData.descripcion}`;

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
      tipoProyecto: '',
      presupuesto: '',
      descripcion: '',
      fechaLimite: ''
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
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
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
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/[0.15] flex items-center justify-center text-white/70 hover:text-white/90 hover:bg-white/[0.12] transition-all duration-300 group z-10"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light mb-3 text-white/95 tracking-tight">Cuéntanos sobre tu proyecto</h2>
              <p className="text-white/60 font-light text-lg">Completa la información para que podamos ayudarte mejor</p>
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

              {/* Detalles del proyecto */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium tracking-wide">Tipo de proyecto</label>
                  <select
                    name="tipoProyecto"
                    value={formData.tipoProyecto}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.15] rounded-2xl px-5 py-4 text-white/90 focus:outline-none focus:ring-2 focus:ring-white/25 focus:border-white/30 transition-all duration-300 font-light"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Página Web">Página Web</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Aplicación Móvil">Aplicación Móvil</option>
                    <option value="Sistema Web">Sistema Web</option>
                    <option value="Consultoría">Consultoría</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium tracking-wide">Presupuesto estimado</label>
                  <select
                    name="presupuesto"
                    value={formData.presupuesto}
                    onChange={handleInputChange}
                    className="w-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.15] rounded-2xl px-5 py-4 text-white/90 focus:outline-none focus:ring-2 focus:ring-white/25 focus:border-white/30 transition-all duration-300 font-light"
                  >
                    <option value="">Selecciona rango</option>
                    <option value="$5,000 - $15,000 MXN">$5,000 - $15,000 MXN</option>
                    <option value="$15,000 - $30,000 MXN">$15,000 - $30,000 MXN</option>
                    <option value="$30,000 - $50,000 MXN">$30,000 - $50,000 MXN</option>
                    <option value="$50,000+ MXN">$50,000+ MXN</option>
                    <option value="Por definir">Por definir</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium tracking-wide">Fecha límite</label>
                  <input
                    type="date"
                    name="fechaLimite"
                    value={formData.fechaLimite}
                    onChange={handleInputChange}
                    className="w-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.15] rounded-2xl px-5 py-4 text-white/90 focus:outline-none focus:ring-2 focus:ring-white/25 focus:border-white/30 transition-all duration-300 font-light"
                  />
                </div>
              </div>

              {/* Descripción */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium tracking-wide">Descripción del proyecto</label>
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.15] rounded-2xl px-5 py-4 text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/25 focus:border-white/30 transition-all duration-300 font-light resize-none"
                  placeholder="Describe tu proyecto, objetivos, funcionalidades específicas, etc..."
                />
              </div>

              {/* Submit button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-white/[0.15] to-white/[0.08] backdrop-blur-sm border border-white/[0.2] rounded-2xl px-8 py-4 text-white/90 font-medium hover:from-white/[0.2] hover:to-white/[0.12] hover:border-white/[0.3] transition-all duration-300 shadow-lg shadow-black/10 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Enviar a WhatsApp
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;