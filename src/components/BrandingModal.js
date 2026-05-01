import React from 'react';
import ReactDOM from 'react-dom';

function BrandingModal({ isOpen, onClose }) {
    if (!isOpen) return null;

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
                            Branding e Identidad
                        </span>
                    </div>

                    {/* Título Principal */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-inter font-light tracking-wide text-white mb-6 leading-tight">
                        Tu marca, construida<br className="hidden md:block" /> para perdurar.
                    </h2>

                    {/* Subtítulo */}
                    <p className="text-base md:text-xl font-inter font-normal tracking-normal-apple text-gray-400 max-w-2xl mx-auto mb-20">
                        Una identidad de marca no es solo un logo. Es el lenguaje visual y estratégico que comunica quiénes son, qué defienden y por qué merecen ser la primera opción.
                    </p>

                    {/* ── Sección: Qué es Branding ─────────────────────────────── */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden mb-24">
                        {[
                            {
                                label: '01',
                                title: 'Propósito',
                                body: 'Definimos el núcleo de tu marca: su misión, visión y los valores que guían cada decisión creativa. Sin propósito claro, no hay identidad coherente.'
                            },
                            {
                                label: '02',
                                title: 'Percepción',
                                body: 'Diseñamos cada elemento visual —logotipo, paleta, tipografía, iconografía— para que tu audiencia te perciba exactamente como quieres que te vean.'
                            },
                            {
                                label: '03',
                                title: 'Consistencia',
                                body: 'Documentamos tu sistema de identidad en un Brand Book completo: la guía que asegura que tu marca hable con una sola voz en todos los canales.'
                            }
                        ].map((pillar) => (
                            <div key={pillar.label} className="bg-black px-8 py-10 text-left group hover:bg-white/5 transition-colors duration-300">
                                <span className="block text-xs font-inter font-medium text-gray-600 tracking-widest uppercase mb-4">{pillar.label}</span>
                                <h3 className="text-lg md:text-xl font-inter font-medium text-white mb-3 group-hover:tracking-wide transition-all duration-300">{pillar.title}</h3>
                                <p className="text-sm md:text-base font-inter font-normal text-gray-400 leading-relaxed">{pillar.body}</p>
                            </div>
                        ))}
                    </div>

                    {/* ── Caso de uso: HP Contadores ───────────────────────────── */}
                    <div className="flex flex-col items-center mb-6">
                        <span className="border border-white/10 bg-white/5 px-5 py-1.5 rounded-full text-xs font-inter font-medium text-gray-500 uppercase tracking-widest mb-10">
                            Caso de uso
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 text-left">
                        {/* Texto */}
                        <div className="order-2 lg:order-1">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-inter font-light text-white mb-6 leading-snug">
                                HP Contadores —<br />
                                <span className="text-gray-400">De despacho local a<br />referente de confianza.</span>
                            </h3>

                            <div className="space-y-5 text-sm md:text-base font-inter font-normal text-gray-400 leading-relaxed tracking-normal-apple">
                                <p>
                                    HP Contadores llegó a nosotros con una realidad común entre despachos contables: excelente servicio, pero invisible visualmente. Su identidad no comunicaba la solidez y experiencia que sus clientes ya conocían.
                                </p>
                                <p>
                                    Desarrollamos un sistema de identidad completo: un logotipo que transmite rigor y modernidad, una paleta cromática que evoca confianza institucional, y una tipografía que equilibra autoridad y accesibilidad.
                                </p>
                                <p>
                                    El resultado no fue solo un logo nuevo. Fue una marca capaz de competir con las firmas más grandes de la región, con la calidez de un despacho familiar.
                                </p>
                            </div>

                            {/* Métricas */}
                            <div className="mt-10 grid grid-cols-3 gap-6">
                                {[
                                    { value: '100%', label: 'Identidad rediseñada' },
                                    { value: 'Brand', label: 'Book entregado' },
                                    { value: '1', label: 'Voz, un estilo' },
                                ].map((stat) => (
                                    <div key={stat.label} className="border-t border-white/10 pt-4">
                                        <p className="text-xl md:text-2xl font-inter font-light text-white mb-1">{stat.value}</p>
                                        <p className="text-xs font-inter font-medium text-gray-500 uppercase tracking-widest">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Imagen del Logo Diagram */}
                        <div className="order-1 lg:order-2 flex items-center justify-center">
                            <div className="relative w-full max-w-lg">
                                <div className="relative bg-transparent rounded-3xl overflow-hidden p-8 md:p-12">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/LogoDiagram.png`}
                                        alt="HP Contadores - Sistema de Identidad"
                                        className="w-full h-auto object-contain opacity-0 transition-opacity duration-700"
                                        onLoad={(e) => { e.target.style.opacity = 1; }}
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Cierre ───────────────────────────────────────────────── */}
                    <div className="border-t border-white/5 pt-16 pb-4 max-w-2xl mx-auto">
                        <p className="text-base md:text-lg font-inter font-light text-gray-400 leading-relaxed italic">
                            "Una marca memorable no se construye de un día para otro. Se construye con intención, consistencia y una historia que vale la pena contar."
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

export default BrandingModal;
