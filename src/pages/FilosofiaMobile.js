import React, { useState, useEffect } from 'react';

/* ─────────────── Process Phases ─────────────── */
const phases = [
    {
        num: '01',
        title: 'Nos platicas',
        desc: 'Una conversación clara sobre tu operación, tus retos y lo que quieres lograr. Escuchamos antes de proponer nada.',
        details: [
            'Entendemos el giro de tu negocio y cómo trabajas hoy',
            'Definimos juntos el problema real a resolver',
            'Sin tecnicismos: en tus palabras',
        ],
    },
    {
        num: '02',
        title: 'Planificamos',
        desc: 'Diseñamos la estrategia: alcance, tiempos, tecnología y recursos. Todo queda escrito para que no haya sorpresas.',
        details: [
            'Definimos alcance, tiempos y entregables',
            'Elegimos la tecnología adecuada para tu caso',
            'Un plan claro, sin letra pequeña',
        ],
    },
    {
        num: '03',
        title: 'Proponemos',
        desc: 'Te presentamos la solución antes de escribir código: arquitectura, pantallas y cómo se verá funcionando en tu día a día.',
        details: [
            'Arquitectura de la solución explicada simple',
            'Prototipo o propuesta visual para que valides',
            'Presupuesto y cronograma transparentes',
        ],
    },
    {
        num: '04',
        title: 'Desarrollamos',
        desc: 'Construimos la plataforma por etapas. Entregamos avances constantes y ajustamos contigo en cada iteración.',
        details: [
            'Iteraciones cortas con avances visibles',
            'Pruebas y revisiones contigo en cada etapa',
            'Código limpio, probado y documentado',
        ],
    },
    {
        num: '05',
        title: 'Desplegamos',
        desc: 'Publicamos la solución, la probamos en tu entorno real y te entregamos las llaves: documentación, accesos y capacitación.',
        details: [
            'Publicación en producción sin interrupciones',
            'Capacitación para tu equipo',
            'Soporte posterior y mejoras continuas',
        ],
    },
];

/* ─────────────── Expectations ─────────────── */
const expectativas = [
    {
        title: 'Comunicación clara',
        desc: 'Sabes qué pasa en cada fase, sin jerga técnica.',
    },
    {
        title: 'Avances constantes',
        desc: 'No esperas hasta el final: ves resultados desde la primera etapa.',
    },
    {
        title: 'Código tuyo',
        desc: 'Todo el código y documentación te pertenecen al entregar.',
    },
    {
        title: 'Soporte real',
        desc: 'Estamos contigo después del lanzamiento para iterar y mejorar.',
    },
];

function FilosofiaMobile() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const handleWhatsApp = () => {
        const text = 'Hola MindNT, me gustaría platicarles mi problemática y saber cómo pueden ayudarme.';
        window.open(`https://wa.me/529991778325?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="min-h-[100dvh] pt-28 pb-16 overflow-x-hidden relative flex flex-col justify-start">

            {/* ── Header ── */}
            <div className="px-6 relative z-10 flex-shrink-0 mb-10 w-full max-w-md mx-auto">
                <div
                    className={`
                        transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    <span className="inline-block border border-logo-sky/30 bg-logo-sky/10 px-4 py-1.5 rounded-full text-[10px] font-inter font-medium tracking-widest text-logo-sky uppercase mb-6">
                        Nuestro proceso
                    </span>

                    <h1 className="text-3xl md:text-4xl font-inter font-semibold tracking-tight-apple text-white leading-tight mb-4">
                        De tu problema, a tu plataforma.<br />
                        <span className="text-gray-500">Sin vueltas, con resultados.</span>
                    </h1>

                    <p className="text-sm font-inter font-normal text-gray-300 leading-relaxed">
                        Cada proyecto empieza con una plática y termina con una plataforma funcionando. Así trabajamos de inicio a fin: simple, claro y enfocado en lo que importa.
                    </p>

                    <div className="flex flex-col items-start gap-3 mt-6">
                        <button
                            onClick={handleWhatsApp}
                            className="
                                group inline-flex items-center gap-2.5 bg-white text-logo-blue px-5 py-3
                                rounded-full text-[13px] font-inter font-semibold
                                hover:bg-gray-100
                                shadow-[0_12px_40px_-12px_rgba(255,255,255,0.35)]
                                active:scale-[0.97]
                                transition-all duration-300 ease-out
                            "
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Contactar con un Asesor MindNT
                        </button>
                        <p className="text-[11px] font-inter font-normal text-gray-400 leading-relaxed max-w-[260px] text-left">
                            Te responderá una persona real por WhatsApp para escuchar tu problemática.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Vertical Timeline ── */}
            <div
                className={`
                    w-full relative z-10 max-w-md mx-auto
                    transition-all duration-1000 ease-out delay-300
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
            >
                <p className="text-[11px] font-inter font-semibold tracking-widest text-gray-500 uppercase px-6 pb-4">
                    El camino de tu proyecto
                </p>
                <div className="flex flex-col gap-4 px-6 w-full">
                    {phases.map((phase, idx) => (
                        <div
                            key={idx}
                            className="
                                group w-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-6
                                flex flex-col justify-center relative overflow-hidden
                                hover:border-white/25 hover:bg-white/[0.05]
                                hover:-translate-y-1
                                hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)]
                                transition-all duration-500 ease-out
                            "
                        >
                            {/* Giant background number */}
                            <div className="absolute -top-4 -right-2 text-[80px] font-inter font-bold text-white/[0.03] tracking-tighter pointer-events-none select-none">
                                {phase.num}
                            </div>

                            <div className="relative z-10">
                                <div className="text-[10px] font-inter font-semibold tracking-widest text-logo-sky mb-2 uppercase">
                                    Fase {phase.num}
                                </div>
                                <h3 className="text-base font-inter font-semibold text-white mb-2">
                                    {phase.title}
                                </h3>
                                <p className="text-sm font-inter font-normal text-gray-300 leading-relaxed mb-4">
                                    {phase.desc}
                                </p>
                                <ul className="flex flex-col gap-1.5">
                                    {phase.details.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-xs font-inter text-gray-400">
                                            <svg className="w-3 h-3 mt-0.5 flex-shrink-0 text-logo-sky" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span className="leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── What to Expect ── */}
            <div
                className={`
                    w-full relative z-10 max-w-md mx-auto mt-14
                    transition-all duration-1000 ease-out delay-400
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
            >
                <p className="text-[11px] font-inter font-semibold tracking-widest text-gray-500 uppercase px-6 pb-3">
                    Qué puedes esperar
                </p>
                <h2 className="text-2xl font-inter font-semibold tracking-tight-apple text-white leading-tight px-6 pb-6">
                    Así trabajamos contigo.
                </h2>

                <div className="grid grid-cols-2 gap-3 px-6 w-full">
                    {expectativas.map((exp, idx) => (
                        <div
                            key={idx}
                            className="
                                group bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-4
                                hover:border-white/25 hover:bg-white/[0.05]
                                hover:-translate-y-0.5
                                transition-all duration-500 ease-out
                            "
                        >
                            <h3 className="text-xs font-inter font-semibold text-white mb-1.5">{exp.title}</h3>
                            <p className="text-xs font-inter font-normal text-gray-400 leading-relaxed">{exp.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Closing ── */}
            <div
                className={`
                    text-center px-6 mt-14 w-full max-w-md mx-auto relative z-10
                    transition-opacity duration-1000 ease-out delay-500
                    ${isVisible ? 'opacity-100' : 'opacity-0'}
                `}
            >
                <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed">
                    El primer paso siempre es una plática. Cuéntanos qué necesitas y nos encargamos del resto.
                </p>
            </div>

            {/* Background glow */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
                        absolute top-1/3 -right-1/4 w-96 h-96
                        bg-gradient-to-br from-logo-blue/20 to-transparent
                        rounded-full blur-3xl
                        transition-opacity duration-2000 ease-out delay-500
                        ${isVisible ? 'opacity-40' : 'opacity-0'}
                    `}
                />
            </div>
        </div>
    );
}

export default FilosofiaMobile;