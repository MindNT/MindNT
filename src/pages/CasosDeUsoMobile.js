import React, { useEffect, useState } from 'react';
import { IconShoppingCart, IconWorld, IconExternalLink } from '@tabler/icons-react';

/* ─────────────── Delivered Projects ─────────────── */
const proyectos = [
    {
        id: 'kikoi',
        tipo: 'Ecommerce',
        cliente: 'Cafetería',
        url: 'https://mindnt.github.io/KiKOI-webpage/',
        icon: <IconShoppingCart size={12} stroke={2} />,
        descripcion: 'Tienda en línea con catálogo de productos, carrito de compras y pedidos directos para una cafetería.',
    },
    {
        id: 'hp-contadores',
        tipo: 'Página web',
        cliente: 'Despacho contable',
        url: 'https://hpcontadores.com.mx/',
        icon: <IconWorld size={12} stroke={2} />,
        descripcion: 'Sitio corporativo que presenta los servicios del despacho, proyecta confianza y canaliza nuevos clientes.',
    },
    {
        id: 'pepes',
        tipo: 'Ecommerce',
        cliente: 'Accesorios para Aves',
        url: 'https://pepestoys.com/',
        icon: <IconShoppingCart size={12} stroke={2} />,
        descripcion: 'Tienda en línea especializada en accesorios para aves, con catálogo visual y compra directa para sus clientes.',
    },
];

/* ─────────────── Page ─────────────── */
function CasosDeUsoMobile() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="min-h-[100dvh] pt-28 pb-16 overflow-x-hidden relative flex flex-col justify-start">
            <div className="w-full max-w-md mx-auto px-6 relative z-10 flex flex-col">

                {/* ── Header ── */}
                <div
                    className={`
                        text-center mb-10
                        transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    <span className="inline-block border border-logo-sky/30 bg-logo-sky/10 px-4 py-1.5 rounded-full text-[10px] font-inter font-medium tracking-widest text-logo-sky uppercase mb-5">
                        Proyectos entregados
                    </span>

                    <h1 className="text-3xl font-inter font-semibold tracking-tight-apple text-white leading-tight mb-3">
                        Sitios que ya están en el aire.
                    </h1>

                    <p className="text-sm font-inter font-normal text-gray-300 leading-relaxed">
                        Trabajos de desarrollo web entregados y funcionando para clientes reales. Visita cada uno y mira el resultado.
                    </p>
                </div>

                {/* ── Projects Stack ── */}
                <div className="flex flex-col gap-6 w-full">
                    {proyectos.map((proyecto, idx) => (
                        <a
                            key={proyecto.id}
                            href={proyecto.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                group block bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden
                                hover:border-white/25 hover:bg-white/[0.05]
                                hover:-translate-y-1
                                hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)]
                                transition-all duration-500 ease-out
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                            `}
                            style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
                        >
                            {/* Browser bar */}
                            <div className="border-b border-white/10 bg-white/[0.04] px-4 py-3 flex items-center gap-3">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-white/15" />
                                    <span className="w-2 h-2 rounded-full bg-white/15" />
                                    <span className="w-2 h-2 rounded-full bg-white/15" />
                                </div>
                                <span className="flex-1 text-[10px] font-inter text-gray-500 truncate">
                                    {proyecto.url.replace('https://', '').replace(/\/$/, '')}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <span className="inline-flex items-center gap-1.5 bg-logo-blue text-white text-[10px] font-inter font-medium uppercase tracking-wider px-2.5 py-1 rounded-full mb-3">
                                    {proyecto.icon}
                                    {proyecto.tipo}
                                </span>

                                <h3 className="text-base font-inter font-semibold text-white mb-1.5">
                                    {proyecto.cliente}
                                </h3>

                                <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed mb-4">
                                    {proyecto.descripcion}
                                </p>

                                <div className="inline-flex items-center gap-2 bg-white text-logo-blue px-4 py-2.5 rounded-full text-[13px] font-inter font-semibold hover:bg-gray-100 shadow-[0_10px_30px_-12px_rgba(255,255,255,0.3)] group-hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 ease-out">
                                    Visitar sitio
                                    <IconExternalLink size={13} stroke={2.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Background glows */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
                        absolute top-1/4 -right-1/4 w-96 h-96
                        bg-gradient-to-br from-logo-blue/20 to-transparent
                        rounded-full blur-3xl
                        transition-opacity duration-2000 ease-out delay-500
                        ${isVisible ? 'opacity-30' : 'opacity-0'}
                    `}
                />
            </div>
        </div>
    );
}

export default CasosDeUsoMobile;