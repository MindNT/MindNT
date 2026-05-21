import React, { useEffect, useState } from 'react';
import ShootingStar from '../components/ShootingStar';
import ServiceCard from '../components/ServiceCard';
import BookingModalMobile from '../components/BookingModalMobile';

/* ─────────────── SVG Icons ─────────────── */
const IconChart = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
);

const IconSentiment = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
);

const IconExtract = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
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
        id: 'historico-ventas',
        icon: <IconChart />,
        title: 'Análisis Histórico de Ventas',
        pricePrefix: 'Desde',
        priceAmount: '$2,900',
        priceSuffix: 'MXN / proyecto',
        description: 'Descubre patrones ocultos en tus ventas pasadas.',
        features: [
            'Limpieza y normalización de datos',
            'Detección de tendencias y estacionalidades',
            'Segmentación de clientes y productos',
            'Reportes ejecutivos',
        ],
        bestseller: true,
        delay: 0,
    },
    {
        id: 'sentimientos-redes',
        icon: <IconSentiment />,
        title: 'Sentimientos en Redes',
        pricePrefix: 'Desde',
        priceAmount: '$4,900',
        priceSuffix: 'MXN / proyecto',
        description: 'Sabe exactamente qué dice el mundo de tu marca.',
        features: [
            'Monitoreo de menciones multiplataforma',
            'Clasificación de sentimiento automática',
            'Detección de crisis y temas virales',
            'Dashboard de reputación en vivo',
        ],
        bestseller: false,
        delay: 100,
    },
    {
        id: 'extraccion-datos',
        icon: <IconExtract />,
        title: 'Extracción de Datos',
        pricePrefix: 'Desde',
        priceAmount: '$7,900',
        priceSuffix: 'MXN / proyecto',
        description: 'Recolecta datos a gran escala desde cualquier fuente.',
        features: [
            'Web scraping a gran escala',
            'Integración con APIs y ERP',
            'ETL automatizado y calendarizado',
            'Almacenamiento en la nube',
        ],
        bestseller: false,
        delay: 200,
    },
    {
        id: 'visualizacion',
        icon: <IconDashboard />,
        title: 'Visualización de Datos',
        pricePrefix: 'Desde',
        priceAmount: '$5,900',
        priceSuffix: 'MXN / proyecto',
        description: 'Dashboards que convierten números en decisiones.',
        features: [
            'Dashboards interactivos personalizados',
            'Filtros en tiempo real y drill-down',
            'Acceso multiusuario con roles',
            'Exportación a PDF y Excel',
        ],
        bestseller: false,
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
        <div className="min-h-screen bg-black overflow-x-hidden relative flex flex-col px-6 pt-36 pb-16">
            <ShootingStar />

            <div className="max-w-md mx-auto w-full relative z-10 flex flex-col">
                
                {/* ── Header ── */}
                <div
                    className={`
                        text-center mb-12
                        transition-opacity duration-1000 ease-out
                        ${isVisible ? 'opacity-100' : 'opacity-0'}
                    `}
                >
                    <h1 className="text-3xl font-inter font-semibold tracking-tight text-white leading-tight mb-3">
                        Elige el plan perfecto para ti.
                    </h1>
                    <p className="text-sm font-inter font-normal text-gray-400 mb-6">
                        Transforma tus datos en ventajas competitivas. Solicita un estudio hoy y comienza a escalar.
                    </p>

                    <button
                        onClick={() => { setSelectedService('Estudio personalizado'); setIsModalOpen(true); }}
                        className="inline-flex items-center gap-2 mx-auto px-5 py-2.5 bg-white text-black text-[13px] font-inter font-semibold rounded-full shadow-[0_0_24px_rgba(255,255,255,0.15)] hover:scale-105 transition-all duration-300"
                    >
                        Estudio más especializado
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                            title={svc.title}
                            pricePrefix={svc.pricePrefix}
                            priceAmount={svc.priceAmount}
                            priceSuffix={svc.priceSuffix}
                            description={svc.description}
                            features={svc.features}
                            bestseller={svc.bestseller}
                            delay={svc.delay}
                            isVisible={isVisible}
                            onGetPlan={() => { setSelectedService(svc.title); setIsModalOpen(true); }}
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
