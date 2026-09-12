import React, { useEffect, useRef } from 'react';

/**
 * BackgroundNet – malla de olas de mar en la parte baja de la página.
 *
 * - Se monta detrás del contenido, absoluto dentro de su contenedor relative.
 * - Malla densa de puntitos grises y muy sutiles, solo en la zona inferior.
 * - Las filas ondulan como olas que van perdiendo intensidad y tamaño hacia
 *   arriba hasta desaparecer. Cerca del mouse el oleaje «crece».
 * - Sin gradientes ni azules: negro, blanco y grises apenas visibles.
 * - No captura clics (pointer-events-none): solo escucha el mouse desde window.
 */
function BackgroundNet({ fixed = false }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let animationId;
        const mouse = { x: -9999, y: -9999 };

        const onMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const resize = () => {
            const w = fixed ? window.innerWidth : canvas.parentElement.clientWidth;
            const h = fixed ? window.innerHeight : canvas.parentElement.clientHeight;
            if (!w || !h) return;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = Math.floor(w * dpr);
            canvas.height = Math.floor(h * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        function draw(t) {
            const w = fixed ? window.innerWidth : canvas.parentElement.clientWidth;
            const h = fixed ? window.innerHeight : canvas.parentElement.clientHeight;
            if (!w || !h) return;
            ctx.clearRect(0, 0, w, h);

            const isMobile = w < 768;
            const spacing = isMobile ? 9 : 12;
            const dotR = isMobile ? 1.0 : 1.3;
            const t0 = t * 0.001;
            const MOUSE_RANGE = 200;

            // Banda de olas: solo la parte baja de la página
            const band = isMobile ? 300 : 440;
            const stepY = isMobile ? 15 : 19;
            const rows = Math.floor(Math.min(band, h) / stepY);
            const bottomY = h - 8;

            for (let i = 0; i < rows; i++) {
                const yBase = bottomY - i * stepY;

                // Las filas superiores se desvanecen hasta desaparecer
                const fade = Math.pow(1 - i / rows, 1.5);
                if (fade <= 0.04) continue;

                // Las olas más altas son más pequeñas y calmadas
                const ampRow = (1 - i / rows) * (isMobile ? 20 : 30) + 4;
                const mouseScale = fade;

                for (let x = spacing; x < w; x += spacing) {
                    // Onda larga de mar que corre por las filas
                    const wave =
                        0.5 +
                        0.3 * Math.sin(t0 * 0.9 + x * 0.004 + i * 0.15) +
                        0.2 * Math.sin(t0 * 1.6 + x * 0.009 - i * 0.08);

                    // Rizos cerca del mouse
                    const dx = x - mouse.x;
                    const dy = yBase - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const boost = Math.exp(-(dist * dist) / (2 * MOUSE_RANGE * MOUSE_RANGE));
                    const mouseLift = boost * (isMobile ? 14 : 22) * mouseScale;

                    const lift = (wave - 0.5) * 2 * ampRow + mouseLift;
                    const py = yBase + lift;

                    // Grises apagados, apenas notables
                    const norm = (lift + ampRow + 1) / (2 * ampRow + 2);
                    const gray = 140 + 60 * Math.min(1, Math.max(0, norm));
                    const alpha = (0.05 + 0.25 * norm) * fade;

                    ctx.beginPath();
                    ctx.arc(x, py, dotR, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${gray.toFixed(0)},${gray.toFixed(0)},${gray.toFixed(0)},${alpha.toFixed(3)})`;
                    ctx.fill();
                }
            }
        }

        function tick(now) {
            draw(now || 0);
            animationId = requestAnimationFrame(tick);
        }

        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', onMove);
        animationId = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`${fixed ? 'fixed inset-0' : 'absolute inset-0'} w-full h-full pointer-events-none`}
            style={{ zIndex: 0 }}
        />
    );
}

export default BackgroundNet;