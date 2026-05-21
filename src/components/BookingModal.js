import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ShootingStar from './ShootingStar';

function BookingModal({ isOpen, onClose, initialService = '' }) {
    const [formData, setFormData] = useState({
        nombre: '',
        empresa: '',
        industria: '',
        servicio: initialService,
        fuenteDatos: '',
        objetivo: '',
        horario: '',
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setFormData(prev => ({ ...prev, servicio: initialService }));
            setTimeout(() => setIsVisible(true), 50);
        } else {
            setIsVisible(false);
        }
    }, [isOpen, initialService]);

    if (!isOpen) return null;

    const servicios = [
        'Análisis Histórico de Ventas',
        'Sentimientos en Redes',
        'Extracción de Datos',
        'Visualización de Datos',
        'Estudio personalizado',
    ];

    const fuentes = [
        'Excel / CSV',
        'Base de datos',
        'Redes sociales',
        'ERP / CRM',
        'No tengo datos',
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelect = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleWhatsApp = () => {
        const { nombre, empresa, industria, servicio, fuenteDatos, objetivo, horario } = formData;

        const text =
            `Hola MindNT! Me interesa realizar un estudio de análisis de datos.%0A%0A` +
            `*Nombre:* ${nombre || 'No especificado'}%0A` +
            `*Empresa / Marca:* ${empresa || 'No especificada'}%0A` +
            `*Industria:* ${industria || 'No especificada'}%0A` +
            `*Tipo de análisis:* ${servicio || 'No especificado'}%0A` +
            `*Fuente de datos:* ${fuenteDatos || 'No especificada'}%0A` +
            `*Objetivo del estudio:* ${objetivo || 'No especificado'}%0A` +
            `*Horario preferido:* ${horario || 'No especificado'}`;

        window.open(`https://wa.me/529991778325?text=${text}`, '_blank');
    };

    // Estilos alineados a Google (Inputs compactos para evitar scroll)
    const inputClass =
        'w-full bg-white/10 border border-white/10 rounded-full px-5 py-3 text-white placeholder-gray-400 font-inter text-sm focus:outline-none focus:border-[#034EA2] focus:bg-white/20 transition-colors duration-300';
    
    const labelClass =
        'text-xs font-inter font-medium text-gray-400 mb-2 ml-2 block uppercase tracking-wider';

    return ReactDOM.createPortal(
        <div className={`fixed inset-0 z-[9999] flex justify-center items-center overflow-hidden transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* Fondo negro puro (Takeover completo, no parece un modal superpuesto) */}
            <div className="fixed inset-0 bg-black" />

            <div className="fixed inset-0 pointer-events-none opacity-40">
                <ShootingStar />
            </div>

            {/* Glowing background muy sutil */}
            <div className="fixed inset-0 pointer-events-none flex justify-end items-start overflow-hidden">
                <div className="w-[800px] h-[800px] bg-gradient-to-bl from-[#034EA2]/20 to-transparent rounded-full blur-[120px] opacity-30 translate-x-1/3 -translate-y-1/3" />
            </div>

            {/* Contenedor principal ajustado para no requerir scroll */}
            <div className="relative w-full max-w-[90rem] mx-auto px-6 h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 z-10 pt-20 lg:pt-0">
                
                {/* Botón de Regresar (Alineado al grid de contenido) */}
                <div className="absolute top-6 left-6 lg:top-8 lg:left-6 z-50">
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 text-black hover:bg-gray-200 font-inter font-medium text-xs transition-colors duration-200 bg-white px-4 py-2 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Regresar
                    </button>
                </div>
                
                {/* Columna Izquierda: Mensaje tipo Google Hero */}
                <div className="w-full lg:w-5/12 text-left">
                    <span className="inline-block border border-white/10 bg-white/5 px-3 py-1 rounded-full text-[10px] font-inter font-medium tracking-widest text-gray-400 uppercase mb-4">
                        Solicitud de Estudio
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-inter font-semibold tracking-tight text-white mb-5 leading-[1.1]">
                        Construyamos tu<br />
                        <span className="text-gray-400">estrategia.</span>
                    </h2>
                    <p className="text-sm md:text-base font-inter font-normal text-gray-400 leading-relaxed max-w-lg mb-8">
                        Completa este formulario. Un ingeniero revisará tus requerimientos y fuentes de datos para contactarte con una solución técnica inicial, sin compromisos.
                    </p>

                    <div className="hidden lg:block space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#0f0f0f] border border-white/10 flex items-center justify-center text-white">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            </div>
                            <div>
                                <h4 className="text-xs font-inter font-semibold text-white">Información segura</h4>
                                <p className="text-[10px] font-inter text-gray-500">Tus datos nunca son compartidos.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna Derecha: El Formulario */}
                <div className="w-full lg:w-7/12">
                    <div className="bg-[#0f0f0f]/40 border border-white/10 p-8 rounded-[2rem] flex flex-col gap-6 backdrop-blur-sm">
                        
                        {/* Fila 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className={labelClass}>Nombre completo</label>
                                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ana Pérez" className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Empresa o Marca</label>
                                <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Acme Corp" className={inputClass} />
                            </div>
                        </div>

                        {/* Fila 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className={labelClass}>Industria</label>
                                <input type="text" name="industria" value={formData.industria} onChange={handleChange} placeholder="Retail, Finanzas..." className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Horario de contacto</label>
                                <input type="text" name="horario" value={formData.horario} onChange={handleChange} placeholder="Martes 10:00 AM" className={inputClass} />
                            </div>
                        </div>       

                        {/* Tipo de análisis (Chips redondos Google) */}
                        <div>
                            <label className={labelClass}>Servicio de interés</label>
                            <div className="flex flex-wrap gap-2">
                                {servicios.map((s) => (
                                    <button
                                        key={s}
                                        type="button"
                                        onClick={() => handleSelect('servicio', s)}
                                        className={`
                                            px-4 py-1.5 rounded-full text-xs font-inter font-medium transition-all duration-300 border
                                            ${formData.servicio === s
                                                ? 'bg-[#034EA2] border-[#034EA2] text-white shadow-[0_0_15px_rgba(3,78,162,0.4)]'
                                                : 'bg-white/10 border-white/10 text-gray-200 hover:bg-white/20'
                                            }
                                        `}
                                    >
                                        {formData.servicio === s && (
                                            <svg className="inline-block w-3 h-3 mr-1.5 -mt-0.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Fuentes de datos (Chips redondos Google) */}
                        <div>
                            <label className={labelClass}>Origen de los datos</label>
                            <div className="flex flex-wrap gap-2">
                                {fuentes.map((f) => (
                                    <button
                                        key={f}
                                        type="button"
                                        onClick={() => handleSelect('fuenteDatos', f)}
                                        className={`
                                            px-4 py-1.5 rounded-full text-xs font-inter font-medium transition-all duration-300 border
                                            ${formData.fuenteDatos === f
                                                ? 'bg-[#034EA2] border-[#034EA2] text-white shadow-[0_0_15px_rgba(3,78,162,0.4)]'
                                                : 'bg-white/10 border-white/10 text-gray-200 hover:bg-white/20'
                                            }
                                        `}
                                    >
                                        {formData.fuenteDatos === f && (
                                            <svg className="inline-block w-3 h-3 mr-1.5 -mt-0.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Objetivo */}
                        <div>
                            <label className={labelClass}>Contexto del proyecto</label>
                            <textarea
                                name="objetivo"
                                value={formData.objetivo}
                                onChange={handleChange}
                                placeholder="Describe brevemente el problema que buscas resolver..."
                                className="w-full bg-white/10 border border-white/10 rounded-[2rem] px-5 py-3.5 text-white placeholder-gray-400 font-inter text-sm focus:outline-none focus:border-[#034EA2] focus:bg-white/20 transition-colors duration-300 resize-none min-h-[90px]"
                            />
                        </div>

                        {/* Submit CTA */}
                        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-5">
                            <p className="text-[10px] font-inter text-gray-500 max-w-[280px] leading-relaxed">
                                Serás redirigido a WhatsApp de forma segura para confirmar tu solicitud.
                            </p>
                            <button 
                                onClick={handleWhatsApp}
                                className="w-full md:w-auto bg-[#034EA2] hover:bg-[#023B7A] text-white px-8 py-3 rounded-full font-inter font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(3,78,162,0.3)] hover:shadow-[0_0_30px_rgba(3,78,162,0.5)] flex items-center justify-center gap-2"
                            >
                                Enviar y continuar
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default BookingModal;
