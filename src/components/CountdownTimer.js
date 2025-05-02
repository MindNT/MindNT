import { useState, useEffect } from 'react';

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Fecha objetivo (ajusta esto a tu fecha límite de promoción)
        const targetDate = new Date('2025-05-31T23:59:59');

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center text-white text-sm">
            <span className="bg-blue-600 px-3 py-1.5 rounded-md relative animate-pulse-slow
                           shadow-[0_0_15px_rgba(37,99,235,0.5)] 
                           hover:shadow-[0_0_20px_rgba(37,99,235,0.8)]
                           transition-shadow duration-300">
                <span className="countdown-glow absolute inset-0 rounded-md"></span>
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </span>
            <span className="ml-3 text-[#00DBFF] font-semibold animate-bounce-slow">
                30% OFF en desarrollo web
            </span>
        </div>
    );
}

// Agregar estos estilos en tu archivo CSS global o usar styled-components
const styles = `
@keyframes pulse-slow {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.7;
    }
}

@keyframes bounce-slow {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-3px);
    }
}

.animate-pulse-slow {
    animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-bounce-slow {
    animation: bounce-slow 2s infinite;
}

.countdown-glow {
    background: radial-gradient(circle at center, rgba(37,99,235,0.2) 0%, transparent 70%);
    filter: blur(8px);
}
`;

// Insertar los estilos en el documento
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
