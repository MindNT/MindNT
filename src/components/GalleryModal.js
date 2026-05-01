import React from 'react';
import ReactDOM from 'react-dom';

function GalleryModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const images = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "505160859_10236157085284202_2772329379792117640_n.jpg",
        "518364112_10171766572085024_5593564169126300167_n.jpg"
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
                            Fotografía Profesional
                        </span>
                    </div>

                    {/* Título Principal */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-inter font-light tracking-wide text-white mb-6 leading-tight">
                        Creatividad e Impacto.
                    </h2>

                    {/* Subtítulo */}
                    <p className="text-base md:text-xl font-inter font-normal tracking-normal-apple text-gray-400 max-w-2xl mx-auto mb-16">
                        Cada marca tiene una historia única que merece ser documentada con precisión y arte. Trabajamos con <strong className="text-white font-medium">Abel Castro</strong>, fotógrafo profesional con experiencia en producciones de alto perfil — asegurando que el profesionalismo hable a través de cada imagen.
                    </p>

                    {/* ── Pilares ──────────────────────────────────────────────── */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden mb-20">
                        {[
                            {
                                label: '01',
                                title: 'Narrativa Visual',
                                body: 'Cada sesión cuenta una historia. Planificamos cada toma para que la imagen transmita exactamente la esencia y los valores de tu marca.'
                            },
                            {
                                label: '02',
                                title: 'Calidad Técnica',
                                body: 'Equipo profesional, iluminación controlada y postproducción de alto nivel para resultados que destacan en cualquier plataforma.'
                            },
                            {
                                label: '03',
                                title: 'Impacto Comercial',
                                body: 'Las imágenes correctas aumentan la confianza del cliente, mejoran la conversión y elevan la percepción de tu marca al instante.'
                            }
                        ].map((pillar) => (
                            <div key={pillar.label} className="bg-black px-8 py-10 text-left group hover:bg-white/5 transition-colors duration-300">
                                <span className="block text-xs font-inter font-medium text-gray-600 tracking-widest uppercase mb-4">{pillar.label}</span>
                                <h3 className="text-lg md:text-xl font-inter font-medium text-white mb-3 group-hover:tracking-wide transition-all duration-300">{pillar.title}</h3>
                                <p className="text-sm md:text-base font-inter font-normal text-gray-400 leading-relaxed">{pillar.body}</p>
                            </div>
                        ))}
                    </div>

                    {/* ── Galería ───────────────────────────────────────────────── */}
                    <div className="flex flex-col items-center mb-10">
                        <span className="border border-white/10 bg-white/5 px-5 py-1.5 rounded-full text-xs font-inter font-medium text-gray-500 uppercase tracking-widest mb-10">
                            Nuestro trabajo
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full mb-20">
                        {images.map((image, idx) => (
                            <div
                                key={idx}
                                className="w-full aspect-[4/5] bg-white/5 rounded-3xl overflow-hidden shadow-2xl relative group"
                            >
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/gallery/${image}`}
                                    alt={`Trabajo ${idx + 1}`}
                                    className="relative z-10 w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-0"
                                    onLoad={(e) => { e.target.style.opacity = 1; }}
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* ── Cierre ───────────────────────────────────────────────── */}
                    <div className="border-t border-white/5 pt-16 pb-4 max-w-2xl mx-auto">
                        <p className="text-base md:text-lg font-inter font-light text-gray-400 leading-relaxed italic">
                            "El profesionalismo no se declara. Se demuestra en cada imagen."
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

export default GalleryModal;
