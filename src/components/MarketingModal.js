import React from 'react';
import ReactDOM from 'react-dom';

function MarketingModal({ isOpen, onClose }) {
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
                            Marketing Estratégico
                        </span>
                    </div>

                    {/* Título Principal */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-inter font-light tracking-wide text-white mb-6 leading-tight">
                        Más visibilidad.<br className="hidden md:block" /> Mejores resultados.
                    </h2>

                    {/* Subtítulo */}
                    <p className="text-base md:text-xl font-inter font-normal tracking-normal-apple text-gray-400 max-w-2xl mx-auto mb-20">
                        No ejecutamos campañas al azar. Construimos estrategias basadas en datos, diseñadas para maximizar tu retorno y hacer crecer tu negocio de forma constante y medible.
                    </p>

                    {/* ── Pillares ─────────────────────────────────────────────── */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden mb-24">
                        {[
                            {
                                label: '01',
                                title: 'Estrategia',
                                body: 'Antes de invertir un peso, analizamos tu mercado, competencia y audiencia. Cada decisión está respaldada por datos, no por suposiciones.'
                            },
                            {
                                label: '02',
                                title: 'Ejecución',
                                body: 'Desde campañas en redes sociales y Google Ads hasta email marketing y contenido orgánico — ejecutamos con precisión y creatividad en cada canal.'
                            },
                            {
                                label: '03',
                                title: 'Medición',
                                body: 'Todo se mide. Reportes claros, KPIs definidos desde el inicio y optimización continua para que cada inversión trabaje más duro con el tiempo.'
                            }
                        ].map((pillar) => (
                            <div key={pillar.label} className="bg-black px-8 py-10 text-left group hover:bg-white/5 transition-colors duration-300">
                                <span className="block text-xs font-inter font-medium text-gray-600 tracking-widest uppercase mb-4">{pillar.label}</span>
                                <h3 className="text-lg md:text-xl font-inter font-medium text-white mb-3 group-hover:tracking-wide transition-all duration-300">{pillar.title}</h3>
                                <p className="text-sm md:text-base font-inter font-normal text-gray-400 leading-relaxed">{pillar.body}</p>
                            </div>
                        ))}
                    </div>

                    {/* ── Imagen ───────────────────────────────────────────────── */}
                    <div className="w-full mb-20">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/MarketingDiagram.png`}
                            alt="Marketing Estratégico MindNT"
                            className="w-full max-w-3xl mx-auto h-auto object-contain opacity-0 transition-opacity duration-700"
                            onLoad={(e) => { e.target.style.opacity = 1; }}
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                    </div>

                    {/* ── Qué incluye ──────────────────────────────────────────── */}
                    <div className="flex flex-col items-center mb-6">
                        <span className="border border-white/10 bg-white/5 px-5 py-1.5 rounded-full text-xs font-inter font-medium text-gray-500 uppercase tracking-widest mb-10">
                            Qué incluye
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden mb-24">
                        {[
                            {
                                icon: '◎',
                                title: 'Gestión de Redes Sociales',
                                body: 'Creación de contenido, calendarización, publicación y monitoreo en Instagram, Facebook, LinkedIn y más. Presencia constante, voz coherente.'
                            },
                            {
                                icon: '◎',
                                title: 'Publicidad de Pago (Ads)',
                                body: 'Campañas en Meta Ads y Google Ads optimizadas para conversión. Segmentación precisa, A/B testing y ajuste constante para el mejor CPA posible.'
                            },
                            {
                                icon: '◎',
                                title: 'Posicionamiento SEO',
                                body: 'Estrategia de contenido y optimización técnica para que tu negocio aparezca cuando tus clientes te buscan — sin pagar por cada clic.'
                            },
                            {
                                icon: '◎',
                                title: 'Reportes y Análisis',
                                body: 'Dashboards claros con métricas que importan: alcance, conversiones, costo por adquisición y ROI. Sin datos confusos, sin excusas.'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-black px-8 py-10 text-left group hover:bg-white/5 transition-colors duration-300">
                                <span className="block text-xs font-inter font-medium text-gray-600 tracking-widest uppercase mb-4">{item.icon}</span>
                                <h3 className="text-lg md:text-xl font-inter font-medium text-white mb-3 group-hover:tracking-wide transition-all duration-300">{item.title}</h3>
                                <p className="text-sm md:text-base font-inter font-normal text-gray-400 leading-relaxed">{item.body}</p>
                            </div>
                        ))}
                    </div>

                    {/* ── Cierre ───────────────────────────────────────────────── */}
                    <div className="border-t border-white/5 pt-16 pb-4 max-w-2xl mx-auto">
                        <p className="text-base md:text-lg font-inter font-light text-gray-400 leading-relaxed italic">
                            "El marketing sin estrategia es solo ruido. Con la estrategia correcta, cada peso invertido trabaja para ti las 24 horas."
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

export default MarketingModal;
