import React from 'react';
import ReactDOM from 'react-dom';
import ButtonBlue from '../utils/ButtonBlue';

function DesarrolloModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const projects = [
        {
            client: 'KIKOI',
            title: 'Cafetería y Postres',
            description: 'Desarrollamos una E-commerce para la cafetería y postres de KIKOI, enfocados en el minimalismo y la experiencia del usuario.',
            url: 'https://mindnt.github.io/KiKOI-webpage/',
            tags: ['E-commerce', 'UX/UI', 'Minimalismo'],
        },
        {
            client: 'HP Contadores',
            title: 'Despacho Contable',
            description: 'Página web para un despacho de contadores, integrando el diseño visual de su marca para fortalecer su identidad corporativa.',
            url: 'https://hpcontadores.com.mx/',
            tags: ['Design', 'Branding', 'Landing Page'],
        },
        {
            client: 'Pepetoys',
            title: 'Tienda de Artículos para Aves',
            description: 'E-commerce para una tienda especializada en la venta de artículos y accesorios para aves, con catálogo dinámico y carrito de compras.',
            url: 'https://mindnt.github.io/Pepetoys-website/',
            tags: ['E-commerce', 'UX/UI'],
        },
        {
            client: 'La Juanita',
            title: 'Restaurante de Comida Rápida',
            description: 'E-commerce con formularios inteligentes para pickup y delivery, reduciendo la carga operativa del equipo y mejorando la experiencia del cliente.',
            url: 'https://mindnt.github.io/La-juanita-website/',
            tags: ['E-commerce', 'UX/UI', 'Formularios inteligentes', 'Display Manager'],
        }
    ];

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[9999] flex items-start justify-center p-6 h-screen overflow-y-auto">
            {/* Fondo negro */}
            <div className="fixed inset-0 bg-black transition-opacity" />

            {/* Botón Regresar */}
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

            {/* Contenido principal */}
            <div className="relative w-full max-w-6xl bg-black animate-fadeInUp mt-24 mb-24 flex flex-col items-center">
                <div className="w-full text-center relative z-0 px-4 md:px-8">

                    {/* Meta Info */}
                    <div className="flex flex-col items-center justify-center text-xs md:text-sm font-inter font-medium tracking-normal-apple text-gray-500 uppercase mb-8">
                        <span className="border border-white/10 bg-white/5 px-6 py-2 rounded-full">
                            Desarrollo Web &amp; UX
                        </span>
                    </div>

                    {/* Título Principal */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-inter font-light tracking-wide text-white mb-6 leading-tight">
                        Tu negocio, presente<br className="hidden md:block" /> donde importa.
                    </h2>

                    {/* Subtítulo */}
                    <p className="text-base md:text-xl font-inter font-normal tracking-normal-apple text-gray-400 max-w-2xl mx-auto mb-20">
                        Construimos experiencias digitales que no solo se ven bien — convierten visitantes en clientes y reducen la fricción en cada punto de contacto.
                    </p>

                    {/* ── Pillares ───────────────────────────────────────────────── */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden mb-24">
                        {[
                            {
                                label: '01',
                                title: 'Rendimiento',
                                body: 'Cada sitio que construimos está optimizado para carga rápida, accesibilidad y posicionamiento en buscadores desde el primer día.'
                            },
                            {
                                label: '02',
                                title: 'Experiencia',
                                body: 'El UX no es un extra. Es el núcleo. Diseñamos flujos que guían al usuario sin esfuerzo hacia la acción que tú necesitas que tome.'
                            },
                            {
                                label: '03',
                                title: 'Escalabilidad',
                                body: 'Nuestras soluciones crecen contigo. Desde una landing page hasta un e-commerce completo con gestión de pedidos y lógica de negocio.'
                            }
                        ].map((pillar) => (
                            <div key={pillar.label} className="bg-black px-8 py-10 text-left group hover:bg-white/5 transition-colors duration-300">
                                <span className="block text-xs font-inter font-medium text-gray-600 tracking-widest uppercase mb-4">{pillar.label}</span>
                                <h3 className="text-lg md:text-xl font-inter font-medium text-white mb-3 group-hover:tracking-wide transition-all duration-300">{pillar.title}</h3>
                                <p className="text-sm md:text-base font-inter font-normal text-gray-400 leading-relaxed">{pillar.body}</p>
                            </div>
                        ))}
                    </div>

                    {/* ── Proyectos ──────────────────────────────────────────────── */}
                    <div className="flex flex-col items-center mb-6">
                        <span className="border border-white/10 bg-white/5 px-5 py-1.5 rounded-full text-xs font-inter font-medium text-gray-500 uppercase tracking-widest mb-10">
                            Proyectos entregados
                        </span>
                    </div>

                    {/* Imagen opcional */}
                    <div className="w-full mb-16">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/MobileDiagram.png`}
                            alt="Desarrollo Web MindNT"
                            className="w-full max-w-2xl mx-auto h-auto object-contain opacity-0 transition-opacity duration-700"
                            onLoad={(e) => { e.target.style.opacity = 1; }}
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden mb-24">
                        {projects.map((project, idx) => (
                            <div key={idx} className="bg-black px-8 py-10 text-left group hover:bg-white/5 transition-colors duration-300">
                                {/* Cliente */}
                                <span className="block text-xs font-inter font-medium text-gray-600 tracking-widest uppercase mb-4">
                                    {project.client}
                                </span>

                                {/* Título del proyecto */}
                                <h3 className="text-lg md:text-xl font-inter font-medium text-white mb-3 group-hover:tracking-wide transition-all duration-300">
                                    {project.title}
                                </h3>

                                {/* Descripción */}
                                <p className="text-sm md:text-base font-inter font-normal text-gray-400 leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-inter font-medium text-gray-500 border border-white/10 px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ButtonBlue size="sm">
                                        Ver proyecto
                                    </ButtonBlue>
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* ── Cierre ───────────────────────────────────────────────── */}
                    <div className="border-t border-white/5 pt-16 pb-4 max-w-2xl mx-auto">
                        <p className="text-base md:text-lg font-inter font-light text-gray-400 leading-relaxed italic">
                            "Un buen sitio web no es solo un escaparate. Es el vendedor más eficiente que tu negocio puede tener."
                        </p>
                        <p className="mt-4 text-xs font-inter font-medium text-gray-600 uppercase tracking-widest">— Equipo MindNT</p>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </div>,
        document.body
    );
}

export default DesarrolloModal;
