import React, { useEffect, useState } from 'react';
import { IconArrowRight, IconReceipt } from '@tabler/icons-react';

/* ─────────────── Productos ───────────────
   image: ruta dentro de public/ — null = placeholder    */
const productos = [
    {
        id: 'nebula',
        name: 'Nebula',
        tagline: 'POS · Punto de venta',
        desc: 'El punto de venta de MindNT. Abre y vende: sin instalaciones ni curvas de aprendizaje, con tu negocio siempre en vivo.',
        image: '/images/Nebula_Poster.png',
        placeholderIcon: <IconReceipt size={44} stroke={1.5} className="text-white" />,
        badgeText: 'Fase beta',
        cta: 'Quiero ser parte del beta',
        whatsapp: 'Hola MindNT! Quiero ser parte del beta de Nebula punto de venta.',
    },
];

function Productos() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="min-h-screen relative pt-32 pb-24">
            <div className="max-w-5xl w-full mx-auto px-6 relative z-10 flex flex-col gap-14">

                {/* Top Section */}
                <div
                    className={`
                        max-w-2xl
                        transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                    `}
                >
                    <span className="inline-block border border-logo-sky/30 bg-logo-sky/10 px-4 py-1.5 rounded-full text-[10px] font-inter font-semibold tracking-widest text-logo-sky uppercase mb-6">
                        Productos
                    </span>

                    <h1 className="text-4xl md:text-5xl font-inter font-semibold tracking-tight-apple text-white leading-tight">
                        Nuestros productos.
                    </h1>

                    <p className="text-sm md:text-base font-inter font-normal text-gray-400 leading-relaxed mt-4 max-w-lg">
                        Son desarrollos privados de MindNT, construidos con tecnología propia
                        diseñada y creada por nuestro equipo.
                    </p>
                </div>

                {/* Products — tarjetas compactas, cover cuadrada */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start max-w-3xl mx-auto w-full">
                    {productos.map((producto, idx) => (
                        <div
                            key={producto.id}
                            className={`
                                group bg-white/[0.03] border border-white/10 rounded-[1.5rem] overflow-hidden
                                hover:border-white/25 hover:-translate-y-0.5
                                transition-all duration-500 ease-out
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                            `}
                            style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
                        >
                            {/* Hero cover — proporción vertical: las imagenes (flyers) cubren todo */}
                            <div className="relative aspect-[3/4] w-full">
                                {producto.image ? (
                                    <img
                                        src={`${process.env.PUBLIC_URL}${producto.image}`}
                                        alt={producto.name}
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-2xl bg-logo-blue flex items-center justify-center text-white">
                                            {producto.placeholderIcon}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* CTA — el poster ya trae toda la información */}
                            <div className="p-5">
                                <a
                                    href={`https://wa.me/529991778325?text=${encodeURIComponent(producto.whatsapp)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/cta inline-flex items-center justify-center gap-2 w-full rounded-full px-6 py-3.5 text-sm font-inter font-semibold bg-logo-blue text-white hover:bg-[#003a80] active:scale-[0.97] transition-all duration-300 ease-out"
                                >
                                    {producto.cta}
                                    <IconArrowRight size={16} stroke={2.5} className="transition-transform duration-300 group-hover/cta:translate-x-1" />
                                </a>

                                <p className="text-xs font-inter font-normal text-gray-500 mt-3 text-center">
                                    Te enviaremos la información por WhatsApp.
                                </p>
                            </div>
                        </div>
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
                        absolute bottom-0 right-0 w-[700px] h-[700px]
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

export default Productos;