import React from 'react';

/**
 * ServiceCard — Tarjeta de paquete de servicio para MindNT (Estilo Apple: glass, elevación y micro-interacciones).
 *
 * Props:
 *  @param {React.ReactNode} icon        - Icono SVG del servicio
 *  @param {string}          badge       - Chip de sector/enfoque sobre el título (ej. "Comercios y agencias")
 *  @param {string}          title       - Nombre obvio del plan (ej. "Para empresas en Excel")
 *  @param {string}          subtitle    - Nombre técnico bajo el título (ej. "MindNT Sheets-to-Cloud")
 *  @param {string}          description - Descripción breve
 *  @param {string[]}        features    - Lista de características incluidas
 *  @param {string}          ctaText     - Texto del botón principal
 *  @param {function}        onGetPlan   - Handler del botón principal
 *  @param {function}        onDetails   - Handler del botón "¿Cómo funciona?"
 *  @param {boolean}         bestseller  - Muestra badge flotante y diseño destacado
 *  @param {number}          delay       - Delay de animación en ms
 *  @param {boolean}         isVisible   - Controla la animación de entrada
 */
function ServiceCard({
    icon,
    badge,
    title,
    subtitle,
    description,
    features = [],
    ctaText = 'Cotización gratis',
    onGetPlan,
    onDetails,
    delay = 0,
    isVisible = false,
}) {
    return (
        <div
            className={`
                group
                relative flex flex-col rounded-3xl p-6 md:p-8 border
                border-white/10 bg-white/[0.03] backdrop-blur-sm
                hover:border-white/25 hover:bg-white/[0.05]
                hover:shadow-[0_24px_70px_-30px_rgba(0,0,0,0.8)]
                hover:-translate-y-1.5
                transition-all duration-500 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Icon + Title */}
            <div className="mb-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white mb-3 bg-logo-blue shadow-[0_10px_30px_-10px_rgba(0,76,160,0.8)] group-hover:scale-105 transition-transform duration-500 ease-out">
                    {icon}
                </div>
                {badge && (
                    <span
                        className={`
                            inline-flex items-center border text-[10px] font-inter font-medium uppercase tracking-wider px-2.5 py-1 rounded-full mb-2
                            bg-logo-sky/10 border-logo-sky/30 text-logo-sky
                        `}
                    >
                        {badge}
                    </span>
                )}
                <h3 className="text-xl font-inter font-semibold text-white leading-snug md:min-h-[3.5rem]">
                    {title}
                </h3>
                {subtitle && (
                    <span className="text-xs font-inter font-normal text-gray-500 block mt-1">
                        {subtitle}
                    </span>
                )}
            </div>

            {/* Description */}
            <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed min-h-[3.75rem]">
                {description}
            </p>

            {/* Actions (only rendered when a handler is provided) */}
            {(onGetPlan || onDetails) && (
                <div className="mt-auto pt-4">
                    {onGetPlan && (
                        <button
                            onClick={onGetPlan}
                            className="
                                w-full py-2 rounded-full text-[13px] font-inter font-semibold transition-all duration-300 mb-1.5
                                bg-logo-sky text-logo-blue hover:bg-white
                                hover:shadow-[0_10px_30px_-10px_rgba(172,211,255,0.5)]
                                active:scale-[0.97]
                            "
                        >
                            {ctaText}
                        </button>
                    )}

                    {onDetails && (
                        <button
                            onClick={onDetails}
                            className="group/details
                                w-full py-1.5 rounded-full text-xs font-inter font-medium text-gray-400
                                hover:text-white transition-colors duration-300
                                flex items-center justify-center gap-1.5
                            "
                        >
                            ¿Cómo funciona?
                            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/details:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    )}
                </div>
            )}

            {/* Divider */}
            <div className="border-t border-white/10 my-4" />

            {/* Features List */}
            <ul className="flex flex-col gap-2 flex-1">
                {features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-inter text-gray-300">
                        <svg
                            className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-logo-sky`}
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="leading-snug">{feat}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ServiceCard;
