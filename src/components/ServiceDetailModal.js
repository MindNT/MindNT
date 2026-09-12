import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

/**
 * ServiceDetailModal — Modal informativo con el resumen visual de un servicio.
 *
 * Muestra: el problema que resuelve, el flujo de trabajo paso a paso
 * (iconos conectados por líneas) y el resultado final.
 *
 * Props:
 *  @param {boolean}  isOpen  - Controla la visibilidad del modal
 *  @param {function} onClose - Handler para cerrar
 *  @param {object}   service - { tagline, title, problem, flow, result }
 *                             flow: [{ icon, label, desc }]
 */

/* ─────────────── Flow Icons ─────────────── */
const flowIcons = {
    file: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    ),
    gear: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    db: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3-3.582 3-8 3-8-1.343-8-3zm0 0v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7m-16 5c0 1.657 3.582 3 8 3s8-1.343 8-3" />
        </svg>
    ),
    etl: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
    ),
    layers: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 2L2 7l10 5 10-5-10-5zm-10 10l10 5 10-5m-20 5l10 5 10-5" />
        </svg>
    ),
    cloud: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
        </svg>
    ),
    store: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 9l1-4h16l1 4M3 9v10a1 1 0 001 1h16a1 1 0 001-1V9M3 9h18M9 20v-6h6v6" />
        </svg>
    ),
    dashboard: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 3h7v7H3V3zm11 0h7v4h-7V3zM3 14h7v7H3v-7zm11 3h7v4h-7v-4z" />
        </svg>
    ),
    globe: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
            <line x1="2" y1="12" x2="22" y2="12" strokeWidth="1.8" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
    ),
    box: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
        </svg>
    ),
    chart: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    ),
    target: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="6" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="2" strokeWidth="1.8" />
        </svg>
    ),
};

function ServiceDetailModal({ isOpen, onClose, service }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setIsVisible(true), 50);
        } else {
            setIsVisible(false);
        }
    }, [isOpen]);

    if (!isOpen || !service) return null;

    return ReactDOM.createPortal(
        <div
            className={`
                fixed inset-0 z-[9999] flex justify-center items-center p-4
                transition-opacity duration-500
                ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Panel */}
            <div
                className={`
                    relative w-full max-w-lg max-h-[85vh] overflow-y-auto
                    bg-[#0f0f0f] border border-white/10 rounded-[2rem] p-6 md:p-8
                    shadow-[0_0_60px_rgba(3,78,162,0.2)]
                    transition-all duration-500 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}
                `}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Glow decorativo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#034EA2] rounded-full blur-[60px] opacity-10 pointer-events-none" />

                {/* Close button */}
                <button
                    onClick={onClose}
                    aria-label="Cerrar"
                    className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white transition-colors duration-200 z-10"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6 pr-8">
                    <div className="w-11 h-11 rounded-xl bg-[#034EA2] flex items-center justify-center text-white shrink-0">
                        {flowIcons[service.headerIcon]}
                    </div>
                    <div>
                        {service.tagline && (
                            <span className="text-[10px] font-inter font-semibold uppercase tracking-widest text-[#6aaff0] block mb-0.5">
                                {service.tagline}
                            </span>
                        )}
                        <h3 className="text-xl font-inter font-semibold text-white leading-snug">
                            {service.title}
                        </h3>
                        {service.subtitle && (
                            <span className="text-xs font-inter font-normal text-gray-500 block mt-0.5">
                                {service.subtitle}
                            </span>
                        )}
                    </div>
                </div>

                {/* Problema */}
                <div className="mb-6">
                    <span className="text-[10px] font-inter font-medium text-gray-500 uppercase tracking-wider block mb-2">
                        El problema
                    </span>
                    <p className="text-sm font-inter font-normal text-gray-300 leading-relaxed border-l-2 border-white/10 pl-4 italic">
                        {service.problem}
                    </p>
                </div>

                {/* Flujo visual */}
                <div className="mb-6">
                    <span className="text-[10px] font-inter font-medium text-gray-500 uppercase tracking-wider block mb-4">
                        Cómo funciona
                    </span>
                    <div className="relative">
                        {/* Línea vertical conectando los pasos */}
                        <div className="absolute left-[17px] top-4 bottom-4 w-px bg-gradient-to-b from-[#034EA2]/50 via-white/10 to-[#034EA2]/50" />

                        <div className="flex flex-col gap-5">
                            {(service.flow || []).map((step, i) => (
                                <div key={i} className="flex items-start gap-4 relative z-10">
                                    <div className="w-9 h-9 rounded-full bg-[#0f0f0f] border border-[#034EA2]/40 flex items-center justify-center text-[#6aaff0] shrink-0">
                                        {flowIcons[step.icon]}
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="text-sm font-inter font-semibold text-white leading-snug">
                                            {step.label}
                                        </h4>
                                        <p className="text-xs font-inter font-normal text-gray-400 leading-relaxed mt-0.5">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Resultado */}
                <div className="bg-[#034EA2]/10 border border-[#034EA2]/30 rounded-2xl p-4 mb-6 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#034EA2] flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-xs font-inter font-semibold text-white uppercase tracking-wider mb-1">
                            El resultado
                        </h4>
                        <p className="text-sm font-inter font-normal text-gray-300 leading-relaxed">
                            {service.result}
                        </p>
                    </div>
                </div>

                {/* Nota de cotización */}
                <p className="text-[11px] font-inter text-gray-500 text-center leading-relaxed">
                    Cotización gratis y sin compromiso: cuéntanos qué necesitas y te decimos hasta dónde podemos llevarlo.
                </p>
            </div>
        </div>,
        document.body
    );
}

export default ServiceDetailModal;
