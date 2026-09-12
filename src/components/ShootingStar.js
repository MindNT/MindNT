import React, { useEffect, useRef } from 'react';

/**
 * ShootingStar – constellation background + white comets.
 *
 * Constellation:
 *  - Fewer stars on mobile vs desktop
 *  - Short connection distance so lines are sparse
 *  - Stars use varied white/gray tones over black background
 *  - Lines are very subtle — only connect very close stars
 *
 * Comets:
 *  - White, falling top-right → bottom-left
 *  - HEAD bright at front, TAIL fades behind
 *  - 8-band spawn history to spread across the screen
 */
function ShootingStar() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let animationId;
        let spawnTimer;
        const comets = [];

        const MAX_COMETS = 2;

        // ── Constellation ─────────────────────────────────────────────────
        let stars = [];

        function buildStars(w, h) {
            const isMobile = w < 768;
            // Fewer stars on mobile to avoid clutter
            const count = isMobile ? 16 : 26;
            // Shorter connection distance on mobile
            const connDist = isMobile ? 60 : 75;
            const minStarDist = 60; // Distancia mínima para que no se encimen

            stars = [];
            let attempts = 0;
            while (stars.length < count && attempts < 1500) {
                attempts++;
                const x = Math.random() * w;
                const y = Math.random() * h;

                // Evitamos que las estrellas se encimen
                const tooClose = stars.some(s => Math.hypot(s.x - x, s.y - y) < minStarDist);
                if (!tooClose) {
                    const grayLevel = Math.floor(180 + Math.random() * 75); // Tonos blancos/grises claros
                    // Vectores de velocidad para movimiento smooth
                    const angle = Math.random() * Math.PI * 2;
                    const speed = 0.04 + Math.random() * 0.08;
                    stars.push({
                        x, y,
                        vx: Math.cos(angle) * speed,
                        vy: Math.sin(angle) * speed,
                        r: isMobile ? 1.2 + Math.random() * 0.9 : 1.5 + Math.random() * 1.2, // Pequeñas y discretas
                        grayLevel,
                        baseOpacity: 0.06 + Math.random() * 0.08, // Muy tenues sobre fondo negro
                        opacity: 0,
                        twinkleSpeed: 0.002 + Math.random() * 0.004,
                        twinkleOffset: Math.random() * Math.PI * 2,
                        connDist,
                    });
                }
            }
        }

        function drawConstellation(frame) {
            ctx.save();

            // Connection lines — only between very close stars, extra faint
            for (let i = 0; i < stars.length; i++) {
                for (let j = i + 1; j < stars.length; j++) {
                    const dx = stars[i].x - stars[j].x;
                    const dy = stars[i].y - stars[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = stars[i].connDist;
                    if (dist < maxDist) {
                        // Fade line based on distance; max alpha kept extremely low
                        const alpha = (1 - dist / maxDist) * 0.12;
                        ctx.beginPath();
                        ctx.moveTo(stars[i].x, stars[i].y);
                        ctx.lineTo(stars[j].x, stars[j].y);
                        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
                        ctx.lineWidth = stars[i].connDist === 60 ? 0.7 : 0.9;
                        ctx.stroke();
                    }
                }
            }

            // Star dots
            for (const s of stars) {
                const twinkle = Math.sin(frame * s.twinkleSpeed + s.twinkleOffset);
                s.opacity = s.baseOpacity + twinkle * s.baseOpacity * 0.3;

                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                // Use the star's own gray level for subtle tonal variety
                ctx.fillStyle = `rgba(${s.grayLevel},${s.grayLevel},${s.grayLevel},${s.opacity})`;
                ctx.fill();
            }

            ctx.restore();
        }

        // ── Comets ────────────────────────────────────────────────────────
        function createComet() {
            const w = canvas.width;
            const h = canvas.height;

            // Aparecer literalmente en cualquier lado de la pantalla
            const startX = Math.random() * w;
            const startY = Math.random() * h;

            // Movimiento hacia abajo-izquierda con ángulos más variados
            const angle = Math.PI * (0.6 + Math.random() * 0.3);
            const speed = 2.2 + Math.random() * 1.3;

            return {
                x: startX,
                y: startY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                tailLength: 120 + Math.random() * 60, // Colas discretas
                lineWidth: 1.2 + Math.random() * 0.8, // Trazos delgados
                maxOpacity: 0.3 + Math.random() * 0.15, // Sutil, sin gritar
                opacity: 0,
                phase: 'in',
                holdFrames: 40 + Math.floor(Math.random() * 30), // Tiempo activo en pantalla
                life: 0,
            };
        }

        function drawComet(c) {
            const norm = Math.hypot(c.vx, c.vy);
            const ux = c.vx / norm;
            const uy = c.vy / norm;

            const tailX = c.x - ux * c.tailLength;
            const tailY = c.y - uy * c.tailLength;

            const grad = ctx.createLinearGradient(tailX, tailY, c.x, c.y);
            grad.addColorStop(0, `rgba(255,255,255,0)`);
            grad.addColorStop(0.55, `rgba(255,255,255,${c.opacity * 0.25})`);
            grad.addColorStop(1, `rgba(255,255,255,${c.opacity})`);

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(tailX, tailY);
            ctx.lineTo(c.x, c.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = c.lineWidth;
            ctx.lineCap = 'round';
            ctx.stroke();
            ctx.restore();
        }

        // ── Main loop ─────────────────────────────────────────────────────
        let frame = 0;

        function tick() {
            frame++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Mover las estrellas constantemente para animación smooth
            for (const s of stars) {
                s.x += s.vx;
                s.y += s.vy;
                // Rebotar suavemente en los bordes
                if (s.x < -20 || s.x > canvas.width + 20) s.vx *= -1;
                if (s.y < -20 || s.y > canvas.height + 20) s.vy *= -1;
            }

            drawConstellation(frame);

            for (let i = comets.length - 1; i >= 0; i--) {
                const c = comets[i];
                c.x += c.vx;
                c.y += c.vy;
                c.life++;

                if (c.phase === 'in') {
                    c.opacity = Math.min(c.opacity + c.maxOpacity / 18, c.maxOpacity);
                    if (c.opacity >= c.maxOpacity) c.phase = 'hold';
                } else if (c.phase === 'hold') {
                    if (c.life >= c.holdFrames) c.phase = 'out';
                } else {
                    c.opacity = Math.max(c.opacity - c.maxOpacity / 30, 0);
                }

                drawComet(c);

                const offScreen =
                    c.x < -c.tailLength - 50 ||
                    c.y > canvas.height + c.tailLength + 50;

                if (offScreen || (c.phase === 'out' && c.opacity <= 0)) {
                    comets.splice(i, 1);
                }
            }

            animationId = requestAnimationFrame(tick);
        }

        function scheduleSpawn() {
            const delay = 7000 + Math.random() * 5000;
            spawnTimer = setTimeout(() => {
                if (comets.length < MAX_COMETS) comets.push(createComet());
                scheduleSpawn();
            }, delay);
        }

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            buildStars(canvas.width, canvas.height);
        };
        resize();
        window.addEventListener('resize', resize);

        setTimeout(() => {
            comets.push(createComet());
            scheduleSpawn();
        }, 1500);

        tick();

        return () => {
            cancelAnimationFrame(animationId);
            clearTimeout(spawnTimer);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
}

export default ShootingStar;
