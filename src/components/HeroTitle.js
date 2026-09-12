import React from 'react';

/**
 * HeroTitle — Título del hero con reveal palabra por palabra.
 *
 * Cada palabra aparece con fade + deslizamiento suave en secuencia,
 * estilo Apple: limpio y profesional.
 *
 * Props:
 *  @param {string}  text   - El título completo.
 *  @param {boolean} animate- Cuando es true arranca el reveal.
 *  @param {number}  delay  - Delay base (ms) antes de la primera palabra.
 *  @param {number}  stagger- ms entre palabras. Default 130.
 */
function HeroTitle({ text = '', animate = false, delay = 0, stagger = 130, className = '' }) {
    const words = text.split(' ');

    return (
        <h1 className={`font-inter font-semibold tracking-tight-apple text-white leading-[1.05] ${className}`}>
            {words.map((word, i) => (
                <span
                    key={i}
                    className={[
                        'inline-block transition-all duration-700 ease-out',
                        'will-change-transform will-change-opacity will-change-filter',
                    ].join(' ')}
                    style={{
                        transitionDelay: `${delay + i * stagger}ms`,
                        opacity: animate ? 1 : 0,
                        transform: animate ? 'translateY(0)' : 'translateY(18px)',
                        filter: animate ? 'blur(0)' : 'blur(6px)',
                    }}
                >
                    {word}
                    {i < words.length - 1 && '\u00A0'}
                </span>
            ))}
        </h1>
    );
}

export default HeroTitle;