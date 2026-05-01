import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ButtonBlue from '../utils/ButtonBlue';
import ShootingStar from './ShootingStar';

function BookingModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        nombre: '',
        servicio: '',
        proyecto: '',
        descripcion: '',
        horario: '',
        estado: '',
        pais: ''
    });

    if (!isOpen) return null;

    const servicios = [
        'Branding',
        'Desarrollo Web & UX',
        'Marketing',
        'Fotografía',
        'Otro'
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleServiceSelect = (servicio) => {
        setFormData({ ...formData, servicio });
    };

    const handleWhatsApp = () => {
        const { nombre, servicio, proyecto, descripcion, horario, estado, pais } = formData;
        
        // Formatear el mensaje para WhatsApp
        const text = `Hola MindNT! Me gustaría iniciar un proyecto con ustedes.%0A%0A*Nombre / Empresa:* ${nombre || 'No especificado'}%0A*Ubicación:* ${estado || 'Estado no especificado'}, ${pais || 'País no especificado'}%0A*Horario de llamada:* ${horario || 'No especificado'}%0A*Servicio de interés:* ${servicio || 'No especificado'}%0A*Nombre del proyecto:* ${proyecto || 'No especificado'}%0A*Requerimientos:* ${descripcion || 'No especificados'}`;
        
        window.open(`https://wa.me/529991778325?text=${text}`, '_blank');
    };

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[9999] flex items-start lg:items-center justify-center p-6 pt-24 lg:pt-6 overflow-y-auto overflow-x-hidden">
            {/* Fondo negro base */}
            <div className="fixed inset-0 bg-black transition-opacity"></div>
            
            {/* Estrellas Fugaces de Fondo */}
            <div className="fixed inset-0 pointer-events-none opacity-50">
                <ShootingStar />
            </div>

            {/* Botón de regresar */}
            <button
                onClick={onClose}
                className="
                    fixed top-6 left-6 md:top-10 md:left-10
                    flex items-center gap-2.5
                    text-gray-400 hover:text-white 
                    font-inter font-medium tracking-normal-apple text-sm md:text-base
                    transition-all duration-300 ease-out
                    hover:-translate-x-2 focus:outline-none z-50
                "
                aria-label="Regresar"
            >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Regresar
            </button>

            {/* Contenedor Principal (Más horizontal en PC, Vertical en móvil) */}
            <div className="relative w-full max-w-6xl bg-transparent animate-fadeInUp flex flex-col xl:flex-row items-start xl:items-center justify-between gap-12 pb-24 lg:py-10 z-10">
                
                {/* Columna Izquierda: Encabezado */}
                <div className="w-full xl:w-5/12 text-left relative z-0 px-2 md:px-0">
                    <span className="inline-block border border-white/10 bg-white/5 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-inter font-medium tracking-widest text-gray-400 uppercase mb-6">
                        Inicia tu proyecto
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-light tracking-wide text-white mb-6 leading-tight">
                        Cuéntanos sobre<br className="hidden md:block"/>
                        <span className="text-gray-500">tu visión.</span>
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg font-inter font-normal tracking-normal-apple text-gray-400 leading-relaxed max-w-xl">
                        Completa este breve formulario con los detalles de tu proyecto. Nos comunicaremos contigo a la brevedad para agendar la llamada en tu horario preferido.
                    </p>
                </div>

                {/* Columna Derecha: Formulario (Grid horizontal) */}
                <div className="w-full xl:w-7/12 flex flex-col gap-8 relative z-10 px-2 md:px-0">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Columna Interna 1 */}
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col group">
                                <label className="text-xs font-inter font-medium tracking-widest text-gray-500 uppercase mb-2">Nombre / Empresa</label>
                                <input 
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    placeholder="Escribe tu nombre o marca"
                                    className="bg-transparent border-b border-white/20 text-white placeholder-white/20 font-inter text-sm md:text-base py-3 focus:outline-none focus:border-white transition-colors w-full"
                                />
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-1 flex flex-col group">
                                    <label className="text-xs font-inter font-medium tracking-widest text-gray-500 uppercase mb-2">Estado</label>
                                    <input 
                                        type="text"
                                        name="estado"
                                        value={formData.estado}
                                        onChange={handleChange}
                                        placeholder="Ej. Yucatán"
                                        className="bg-transparent border-b border-white/20 text-white placeholder-white/20 font-inter text-sm md:text-base py-3 focus:outline-none focus:border-white transition-colors w-full"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col group">
                                    <label className="text-xs font-inter font-medium tracking-widest text-gray-500 uppercase mb-2">País</label>
                                    <input 
                                        type="text"
                                        name="pais"
                                        value={formData.pais}
                                        onChange={handleChange}
                                        placeholder="Ej. México"
                                        className="bg-transparent border-b border-white/20 text-white placeholder-white/20 font-inter text-sm md:text-base py-3 focus:outline-none focus:border-white transition-colors w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col group">
                                <label className="text-xs font-inter font-medium tracking-widest text-gray-500 uppercase mb-2">Horario de preferencia</label>
                                <input 
                                    type="text"
                                    name="horario"
                                    value={formData.horario}
                                    onChange={handleChange}
                                    placeholder="Ej. Lunes por la tarde (4pm - 6pm)"
                                    className="bg-transparent border-b border-white/20 text-white placeholder-white/20 font-inter text-sm md:text-base py-3 focus:outline-none focus:border-white transition-colors w-full"
                                />
                            </div>

                            <div className="flex flex-col group">
                                <label className="text-xs font-inter font-medium tracking-widest text-gray-500 uppercase mb-2">Nombre del Proyecto</label>
                                <input 
                                    type="text"
                                    name="proyecto"
                                    value={formData.proyecto}
                                    onChange={handleChange}
                                    placeholder="Ej. Tienda online minimalista"
                                    className="bg-transparent border-b border-white/20 text-white placeholder-white/20 font-inter text-sm md:text-base py-3 focus:outline-none focus:border-white transition-colors w-full"
                                />
                            </div>
                        </div>

                        {/* Columna Interna 2 */}
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col group">
                                <label className="text-xs font-inter font-medium tracking-widest text-gray-500 uppercase mb-4">Servicio principal</label>
                                <div className="flex flex-wrap gap-2">
                                    {servicios.map((srv) => (
                                        <button
                                            key={srv}
                                            type="button"
                                            onClick={() => handleServiceSelect(srv)}
                                            className={`
                                                px-4 py-2 rounded-full text-[10px] md:text-xs font-inter font-medium tracking-widest uppercase transition-all duration-300
                                                ${formData.servicio === srv 
                                                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                                                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                                                }
                                            `}
                                        >
                                            {srv}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col group h-full">
                                <label className="text-xs font-inter font-medium tracking-widest text-gray-500 uppercase mb-2">Descripción y Requerimientos</label>
                                <textarea 
                                    name="descripcion"
                                    value={formData.descripcion}
                                    onChange={handleChange}
                                    placeholder="Cuéntanos sobre tu visión..."
                                    className="bg-transparent border-b border-white/20 text-white placeholder-white/20 font-inter text-sm md:text-base py-3 focus:outline-none focus:border-white transition-colors w-full resize-none leading-relaxed flex-1 min-h-[100px]"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-4 flex justify-start md:justify-end">
                        <ButtonBlue onClick={handleWhatsApp}>
                            Enviar mensaje
                        </ButtonBlue>
                    </div>
                </div>
            </div>
            
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </div>,
        document.body
    );
}

export default BookingModal;
