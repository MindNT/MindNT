import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ShootingStar from './ShootingStar';

function BookingModalMobile({ isOpen, onClose, initialService = '' }) {
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
            document.body.style.overflow = 'hidden';
            setTimeout(() => setIsVisible(true), 50);
        } else {
            document.body.style.overflow = 'unset';
            setIsVisible(false);
        }
        return () => { document.body.style.overflow = 'unset'; };
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

    const inputClass =
        'w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-500 font-inter text-sm focus:outline-none focus:border-[#034EA2] focus:bg-white/10 transition-colors duration-300';
    
    const labelClass =
        'text-[11px] font-inter font-medium text-gray-400 mb-2 ml-1 block uppercase tracking-wider';

    return ReactDOM.createPortal(
        <div className={`fixed inset-0 z-[9999] overflow-y-auto overflow-x-hidden bg-black transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            
            <div className="fixed inset-0 pointer-events-none opacity-30">
                <ShootingStar />
            </div>

            <div className="fixed top-0 right-0 pointer-events-none">
                <div className="w-[400px] h-[400px] bg-gradient-to-bl from-[#034EA2]/30 to-transparent rounded-full blur-[100px] opacity-40 translate-x-1/3 -translate-y-1/3" />
            </div>

            {/* Top Bar for Back Button */}
            <div className="sticky top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center">
                <button
                    onClick={onClose}
                    className="flex items-center gap-2 text-white hover:text-gray-300 font-inter font-medium text-sm transition-colors duration-200"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Regresar
                </button>
            </div>

            {/* Contenedor principal con padding para scroll */}
            <div className="relative w-full max-w-md mx-auto px-6 pt-8 pb-16 flex flex-col gap-8 z-10">
                
                <div className="text-left">
                    <span className="inline-block border border-white/10 bg-white/5 px-3 py-1 rounded-full text-[10px] font-inter font-medium tracking-widest text-gray-400 uppercase mb-4">
                        Solicitud de Estudio
                    </span>
                    <h2 className="text-4xl font-inter font-semibold tracking-tight text-white mb-4 leading-tight">
                        Construyamos tu<br />
                        <span className="text-gray-400">estrategia.</span>
                    </h2>
                    <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed">
                        Completa este formulario y un ingeniero de datos revisará tus requerimientos para contactarte con una propuesta.
                    </p>
                </div>

                {/* Formulario */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-5">
                        <div>
                            <label className={labelClass}>Nombre completo</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ej. Ana Pérez" className={inputClass} />
                        </div>
                        <div>
                            <label className={labelClass}>Empresa o Marca</label>
                            <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Ej. Acme Corp" className={inputClass} />
                        </div>
                        <div>
                            <label className={labelClass}>Industria</label>
                            <input type="text" name="industria" value={formData.industria} onChange={handleChange} placeholder="Ej. Retail, Finanzas..." className={inputClass} />
                        </div>
                        <div>
                            <label className={labelClass}>Horario de contacto</label>
                            <input type="text" name="horario" value={formData.horario} onChange={handleChange} placeholder="Ej. Martes 10:00 AM" className={inputClass} />
                        </div>
                    </div>       

                    <div>
                        <label className={labelClass}>Servicio de interés</label>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {servicios.map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    onClick={() => handleSelect('servicio', s)}
                                    className={`
                                        px-3 py-2 rounded-xl text-xs font-inter font-medium transition-all duration-300 border
                                        ${formData.servicio === s
                                            ? 'bg-[#034EA2] border-[#034EA2] text-white shadow-[0_0_15px_rgba(3,78,162,0.4)]'
                                            : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                                        }
                                    `}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className={labelClass}>Origen de los datos</label>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {fuentes.map((f) => (
                                <button
                                    key={f}
                                    type="button"
                                    onClick={() => handleSelect('fuenteDatos', f)}
                                    className={`
                                        px-3 py-2 rounded-xl text-xs font-inter font-medium transition-all duration-300 border
                                        ${formData.fuenteDatos === f
                                            ? 'bg-[#034EA2] border-[#034EA2] text-white shadow-[0_0_15px_rgba(3,78,162,0.4)]'
                                            : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                                        }
                                    `}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className={labelClass}>Contexto del proyecto</label>
                        <textarea
                            name="objetivo"
                            value={formData.objetivo}
                            onChange={handleChange}
                            placeholder="Describe brevemente el problema que buscas resolver..."
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-500 font-inter text-sm focus:outline-none focus:border-[#034EA2] focus:bg-white/10 transition-colors duration-300 resize-none min-h-[100px]"
                        />
                    </div>

                    <div className="pt-6 border-t border-white/10 mt-2 flex flex-col gap-4 items-center">
                        <button 
                            onClick={handleWhatsApp}
                            className="w-full bg-[#034EA2] text-white px-6 py-4 rounded-full font-inter font-semibold text-sm transition-all shadow-[0_0_20px_rgba(3,78,162,0.3)] active:scale-95 flex items-center justify-center gap-2"
                        >
                            Enviar por WhatsApp
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                        <p className="text-[10px] font-inter text-gray-500 text-center px-4 leading-relaxed">
                            Al enviar serás redirigido a WhatsApp. Tus datos no son guardados en bases públicas.
                        </p>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default BookingModalMobile;
