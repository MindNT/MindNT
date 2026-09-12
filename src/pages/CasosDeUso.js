import React, { useEffect, useState } from 'react';
import { IconShoppingCart, IconWorld, IconExternalLink } from '@tabler/icons-react';

/* ─────────────── Delivered Projects ─────────────── */
const proyectos = [
    {
        id: 'kikoi',
        tipo: 'Ecommerce',
        cliente: 'Cafetería',
        url: 'https://mindnt.github.io/KiKOI-webpage/',
        icon: <IconShoppingCart size={14} stroke={2} />,
        descripcion: 'Tienda en línea con catálogo de productos, carrito de compras y pedidos directos para una cafetería.',
    },
    {
        id: 'hp-contadores',
        tipo: 'Página web',
        cliente: 'Despacho contable',
        url: 'https://hpcontadores.com.mx/',
        icon: <IconWorld size={14} stroke={2} />,
        descripcion: 'Sitio corporativo que presenta los servicios del despacho, proyecta confianza y canaliza nuevos clientes.',
    },
    {
        id: 'pepes',
        tipo: 'Ecommerce',
        cliente: 'Accesorios para Aves',
        url: 'https://pepestoys.com/',
        icon: <IconShoppingCart size={14} stroke={2} />,
        descripcion: 'Tienda en línea especializada en accesorios para aves, con catálogo visual y compra directa para sus clientes.',
    },
];

/* ─────────────── Page ─────────────── */
function CasosDeUso() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="min-h-screen relative pt-32 pb-24">
            <div className="max-w-7xl w-full mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* ── Header ── */}
                <div
                    className={`
                        text-center mb-14 max-w-2xl
                        transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                    `}
                >
                    <span className="inline-block border border-logo-sky/30 bg-logo-sky/10 px-4 py-1.5 rounded-full text-[10px] font-inter font-semibold tracking-widest text-logo-sky uppercase mb-6">
                        Proyectos entregados
                    </span>

                    <h1 className="text-4xl md:text-5xl font-inter font-semibold tracking-tight-apple text-white leading-tight mb-4">
                        Sitios que ya están en el aire.
                    </h1>

                    <p className="text-sm md:text-base font-inter font-normal text-gray-300 leading-relaxed max-w-xl mx-auto">
                        Trabajos de desarrollo web entregados y funcionando para clientes reales. Visita cada uno y mira el resultado.
                    </p>
                </div>

                {/* ── Projects Grid ── */}
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
                    {proyectos.map((proyecto, idx) => (
                        <a
                            key={proyecto.id}
                            href={proyecto.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                group block bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden
                                hover:border-white/25 hover:bg-white/[0.05]
                                hover:-translate-y-1.5
                                hover:shadow-[0_24px_70px_-30px_rgba(0,0,0,0.8)]
                                transition-all duration-500 ease-out
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                            `}
                            style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
                        >
                            {/* Browser bar */}
                            <div className="border-b border-white/10 bg-white/[0.04] px-5 py-3 flex items-center gap-3">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                                </div>
                                <span className="flex-1 text-[10px] font-inter text-gray-500 truncate">
                                    {proyecto.url.replace('https://', '').replace(/\/$/, '')}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <span className="inline-flex items-center gap-1.5 bg-logo-blue text-white text-[10px] font-inter font-medium uppercase tracking-wider px-2.5 py-1 rounded-full mb-4">
                                    {proyecto.icon}
                                    {proyecto.tipo}
                                </span>

                                <h3 className="text-lg font-inter font-semibold text-white mb-2">
                                    {proyecto.cliente}
                                </h3>

                                <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed min-h-[3.75rem]">
                                    {proyecto.descripcion}
                                </p>

                                <div className="mt-5 inline-flex items-center gap-2 bg-white text-logo-blue px-5 py-2.5 rounded-full text-[13px] font-inter font-semibold hover:bg-gray-100 shadow-[0_10px_30px_-12px_rgba(255,255,255,0.3)] group-hover:shadow-[0_14px_40px_-12px_rgba(255,255,255,0.4)] group-hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 ease-out">
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
                        absolute top-1/3 left-1/4 w-[900px] h-[900px]
                        bg-gradient-to-br from-white/5 to-transparent
                        rounded-full blur-3xl
                        transition-opacity duration-1000 ease-out delay-500
                        ${isVisible ? 'opacity-30' : 'opacity-0'}
                    `}
                />
                <div
                    className={`
                        absolute bottom-0 right-0 w-[600px] h-[600px]
                        bg-gradient-to-tl from-logo-blue/10 to-transparent
                        rounded-full blur-3xl
                        transition-opacity duration-1000 ease-out delay-700
                        ${isVisible ? 'opacity-40' : 'opacity-0'}
                    `}
                />
            </div>
        </div>
    );
}

export default CasosDeUso;