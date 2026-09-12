import React, { useEffect, useRef, useState } from 'react';

/**
 * PlatformTerminal — Ventana de terminal que escribe un texto con efecto typing.
 *
 * Props:
 *  @param {string}  text    - Texto que se escribe caracter por caracter.
 *  @param {boolean} animate - Cuando es true, empieza a escribir.
 *  @param {number}  delay   - Delay (ms) antes de empezar.
 *  @param {number}  speed   - ms por carácter. Default 45.
 *  @param {boolean} compact - Versión reducida para móvil.
 */
function PlatformTerminal({ text = '', animate = false, delay = 0, speed = 45, compact = false }) {
    const [chars, setChars] = useState(0);
    const startedRef = useRef(false);

    useEffect(() => {
        if (!animate) return;
        startedRef.current = true;
        setChars(0);
    }, [animate]);

    useEffect(() => {
        if (!animate || !startedRef.current) return;
        const start = setTimeout(() => {
            const timer = setInterval(() => {
                setChars((c) => {
                    if (c >= text.length) {
                        clearInterval(timer);
                        return c;
                    }
                    return c + 1;
                });
            }, speed);
        }, delay);
        return () => clearTimeout(start);
    }, [animate, delay, speed, text.length]);

    const done = chars >= text.length;

    return (
        <div
            className={[
                'text-left w-full rounded-2xl overflow-hidden',
                'bg-[#0f0f0f]/70 border border-white/10 backdrop-blur-md',
                'flex flex-col',
            ].join(' ')}
        >
            {/* Barra de título de la ventana */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-logo-sky/60" />
                <span className="ml-3 font-mono text-[10px] text-gray-500">mindnt — build</span>
            </div>

            {/* Línea de la terminal con typing */}
            <div
                className={[
                    'px-5 py-5 flex items-center justify-center',
                    'font-mono font-medium leading-snug',
                    'text-white text-[15px] md:text-lg',
                    compact ? 'text-sm' : '',
                ].join(' ')}
            >
                <span className="text-logo-sky/80 select-none mr-2">&gt;</span>
                <span className="whitespace-pre-wrap">{text.slice(0, chars)}</span>
                {!done && (
                    <span className="inline-block w-2 h-[1.1em] align-middle bg-white/80 ml-1 animate-pulse" />
                )}
            </div>
        </div>
    );
}

export default PlatformTerminal;