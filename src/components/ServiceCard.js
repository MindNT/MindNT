import React from 'react';

/**
 * ServiceCard — Tarjeta de paquete de servicio para MindNT (Estilo Google Cloud).
 *
 * Props:
 *  @param {React.ReactNode} icon        - Icono SVG del servicio
 *  @param {string}          title       - Nombre del paquete
 *  @param {string}          pricePrefix - Prefijo (ej. "Desde")
 *  @param {string}          priceAmount - Monto (ej. "$2,900")
 *  @param {string}          priceSuffix - Sufijo (ej. "MXN / proyecto")
 *  @param {string}          description - Descripción breve
 *  @param {string[]}        features    - Lista de características incluidas
 *  @param {function}        onGetPlan   - Handler del botón
 *  @param {boolean}         bestseller  - Muestra badge flotante y diseño destacado
 *  @param {number}          delay       - Delay de animación en ms
 *  @param {boolean}         isVisible   - Controla la animación de entrada
 */
function ServiceCard({
    icon,
    title,
    pricePrefix,
    priceAmount,
    priceSuffix,
    description,
    features = [],
    onGetPlan,
    bestseller = false,
    delay = 0,
    isVisible = false,
}) {
    return (
        <div
            className={`
                relative flex flex-col rounded-3xl p-5 md:p-6
                border
                ${bestseller
                    ? 'border-[#034EA2]/30 bg-gradient-to-b from-[#034EA2]/10 to-[#0f0f0f] shadow-[0_8px_32px_rgba(3,78,162,0.1)]'
                    : 'border-white/10 bg-[#0f0f0f]'
                }
                transition-all duration-500 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Floating Badge for Bestseller */}
            {bestseller && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#034EA2] text-white text-[9px] font-inter font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#6aaff0]/30 shadow-[0_0_12px_rgba(3,78,162,0.5)]">
                        Estudio Recomendado
                    </span>
                </div>
            )}

            {/* Icon + Title */}
            <div className="mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${bestseller ? 'bg-[#034EA2] text-white' : 'bg-white/5 text-gray-300'
                    }`}>
                    {icon}
                </div>
                <h3 className="text-xl font-inter font-semibold text-white leading-snug">
                    {title}
                </h3>
            </div>

            {/* Price Zone (Google Style: Huge Amount but compact) */}
            <div className="mb-3 flex flex-col justify-end min-h-[4rem]">
                <span className="text-[10px] font-inter text-gray-500 uppercase tracking-wider block mb-0.5">
                    {pricePrefix}
                </span>
                <div className="flex items-baseline gap-1">
                    <span className="text-3xl xl:text-4xl font-inter font-bold text-white tracking-tight leading-none">
                        {priceAmount}
                    </span>
                </div>
                <span className="text-xs font-inter text-gray-400 block mt-1">
                    {priceSuffix}
                </span>
            </div>

            {/* Description */}
            <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed line-clamp-2 min-h-[2.5rem] mb-4">
                {description}
            </p>

            {/* CTA Button */}
            <button
                onClick={onGetPlan}
                className={`
                    w-full py-2 rounded-full text-[13px] font-inter font-semibold transition-all duration-300 mb-5
                    ${bestseller
                        ? 'bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                        : 'bg-white/10 border border-white/10 text-white hover:bg-white/20'
                    }
                `}
            >
                Solicitar estudio
            </button>

            {/* Divider */}
            <div className="border-t border-white/10 mb-4" />

            {/* Features List */}
            <ul className="flex flex-col gap-2 flex-1">
                {features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-inter text-gray-300">
                        <svg
                            className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${bestseller ? 'text-[#6aaff0]' : 'text-gray-500'}`}
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
