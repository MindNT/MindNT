import React from 'react';

/**
 * GraphBar — Gráfica de barras verticales delgadas con animación de llenado.
 *
 * Barras blancas redondeadas que crecen de abajo hacia arriba.
 * Sin fondo de pista: donde no hay data simplemente no se dibuja barra.
 *
 * Props:
 *  @param {number[]} values - Alturas de 0 a 100 por barra.
 *  @param {number}   height  - Altura del contenedor (px). Default 120.
 *  @param {boolean}  animate - Cuando es true, las barras crecen con efecto escalonado.
 *  @param {number}   delay   - Delay base (ms) antes de iniciar la animación.
 *  @param {number}   stagger - Delay adicional por barra (ms). Default 90.
 */
function GraphBar({
    values = [],
    height = 120,
    animate = false,
    delay = 0,
    stagger = 90,
}) {
    return (
        <div className="flex items-end justify-center w-full gap-4 sm:gap-5" style={{ height }}>
            {values.map((value, i) => {
                const clamped = Math.max(0, Math.min(100, value));
                const filled = animate && clamped > 0;
                return (
                    <div key={i} className="w-3 h-full flex items-end">
                        <div
                            className="w-full rounded-full bg-white transition-all duration-1000 ease-out"
                            style={{
                                height: filled ? `${clamped}%` : '0%',
                                transitionDelay: `${delay + i * stagger}ms`,
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default GraphBar;
