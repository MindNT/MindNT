import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import BookingModalMobile from '../components/BookingModalMobile';

/* ─────────────── SVG Icons ─────────────── */
const IconCode = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

const IconZap = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
);

const IconStore = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l1-4h16l1 4" />
        <path d="M3 9v10a1 1 0 001 1h16a1 1 0 001-1V9" />
        <path d="M9 21V13h6v8" />
    </svg>
);

const IconDashboard = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
);

/* ─────────────── Service Data ─────────────── */
const services = [
    {
        id: 'desarrollo-web',
        icon: <IconCode />,
        badge: 'Sitios y aplicaciones',
        title: 'Desarrollo Web',
        description: 'Diseñamos y construimos sitios y aplicaciones web a la medida de tu operación, desde una página corporativa hasta sistemas completos con panel de administración.',
        features: [
            'Landing pages y sitios corporativos rápidos y optimizados',
            'Aplicaciones web con panel de administración propio',
            'Diseño responsivo que se adapta a cualquier dispositivo',
            'Optimización de SEO técnico y velocidad de carga',
        ],
        delay: 0,
    },
    {
        id: 'automatizaciones',
        icon: <IconZap />,
        badge: 'Procesos que trabajan solos',
        title: 'Automatizaciones',
        description: 'Identificamos tareas repetitivas dentro de tu operación y las convertimos en flujos automáticos, para que tu equipo deje de hacer lo que una máquina hace mejor.',
        features: [
            'Flujos de trabajo automáticos entre tus herramientas',
            'Sincronización de datos entre sistemas que hoy no se hablan',
            'Envios de notificaciones y correos automáticos',
            'Reportes generados sin intervención manual',
        ],
        delay: 100,
    },
    {
        id: 'ecommerce',
        icon: <IconStore />,
        badge: 'Tiendas en línea',
        title: 'eCommerce',
        description: 'Construimos tiendas en línea completas: catálogo, carrito, pagos y envíos integrados en una sola plataforma que se adapta a tu marca y a cómo vendes.',
        features: [
            'Catálogo de productos administrable desde un panel',
            'Carrito de compras con pasarela de pagos segura',
            'Seguimiento de pedidos y gestión de envíos',
            'Integración con inventario y facturación',
        ],
        delay: 200,
    },
    {
        id: 'plataformas',
        icon: <IconDashboard />,
        badge: 'Software a la medida',
        title: 'Plataformas',
        description: 'Desarrollamos plataformas digitales a medida: sistemas internos de gestión, portales para clientes y software que estructura toda tu operación en un solo lugar.',
        features: [
            'Sistemas internos de gestión y control de operación',
            'Portales para clientes, proveedores y usuarios finales',
            'Roles, permisos y registro de actividad por usuario',
            'Arquitectura escalable, documentada y segura',
        ],
        delay: 300,
    },
];

function ServiciosMobile() {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="min-h-screen overflow-x-hidden relative flex flex-col px-6 pt-36 pb-16">
            <div className="max-w-md mx-auto w-full relative z-10 flex flex-col">

                {/* ── Header ── */}
                <div className="text-center mb-12">
                    {/* Eyebrow */}
                    <span
                        className={`
                            inline-flex items-center border px-3 py-1 rounded-full mb-4
                            bg-logo-sky/10 border-logo-sky/30 text-logo-sky
                            text-[10px] font-inter font-medium uppercase tracking-widest
                            transition-all duration-1000 ease-out
                            ${isVisible ? 'opacity-100' : 'opacity-0'}
                        `}
                    >
                        Nuestros servicios
                    </span>

                    <h1 className="text-3xl font-inter font-semibold tracking-tight-apple text-white leading-tight mb-3 transition-all duration-1000 ease-out delay-100">
                        <span className={isVisible ? 'opacity-100' : 'opacity-0'}>
                            ¿Qué podemos hacer por ti?
                        </span>
                    </h1>
                    <p className="text-sm font-inter font-normal text-gray-400 mb-7 transition-all duration-1000 ease-out delay-200">
                        <span className={isVisible ? 'opacity-100' : 'opacity-0'}>
                            Conoce a detalle en qué consiste cada servicio y cómo puede aplicarse a la operación de tu negocio.
                        </span>
                    </p>

                    <button
                        onClick={() => { setSelectedService('Otro'); setIsModalOpen(true); }}
                        className="
                            group inline-flex items-center gap-2 mx-auto px-6 py-2.5 bg-logo-blue text-white
                            text-[13px] font-inter font-semibold rounded-full
                            hover:bg-[#003a80]
                            shadow-[0_12px_40px_-10px_rgba(0,76,160,0.7)]
                            active:scale-[0.97]
                            transition-all duration-300 ease-out
                        "
                    >
                        Cuéntanos de tu proyecto
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* ── Cards Stack ── */}
                <div className="flex flex-col gap-10 w-full">
                    {services.map((svc) => (
                        <ServiceCard
                            key={svc.id}
                            icon={svc.icon}
                            badge={svc.badge}
                            title={svc.title}
                            description={svc.description}
                            features={svc.features}
                            delay={svc.delay}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>

            <BookingModalMobile isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialService={selectedService} />

            {/* Background glows */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
                        absolute top-1/4 -right-1/4 w-96 h-96
                        bg-gradient-to-br from-[#034EA2]/20 to-transparent
                        rounded-full blur-3xl
                        transition-opacity duration-2000 ease-out delay-500
                        ${isVisible ? 'opacity-30' : 'opacity-0'}
                    `}
                />
            </div>
        </div>
    );
}

export default ServiciosMobile;