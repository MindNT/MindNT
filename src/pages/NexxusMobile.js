import { IconBrain, IconMessageDots, IconChartBar, IconSettings, IconCloudComputing, IconShield } from '@tabler/icons-react';
import { openEmailClient, emailTemplates } from '../utils/emailHelpers';
import nexxusIcon from '../images/nexxus.svg';
import nexxuscreen from '../images/Nexxuscreen.svg';
import nexxusColors from '../images/NexxusColors.svg';

export default function NexxusMobile() {
    const handleEmailClick = () => {
        const { subject, body } = emailTemplates.nexxusDemo();
        openEmailClient(subject, body);
    };

    return (
        <div className="w-full" style={{
            background: 'linear-gradient(180deg, #051527 0%, #06182C 50%, #003979 100%)'
        }}>
            {/* Hero Section */}
            <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
                <div className="text-center">
                    <img
                        src={nexxusIcon}
                        alt="Nexxus"
                        className="w-24 h-24 mx-auto mb-6"
                    />
                    <h1 className="text-4xl font-bold mb-4 text-white">
                        Conoce a Nexxus
                    </h1>
                    <p className="text-lg text-[#B4B3B3] max-w-2xl mx-auto mb-8">
                        Tu asistente virtual impulsado por IA, diseñado para transformar la interacción con tus clientes y optimizar tus operaciones comerciales.
                    </p>
                    <img
                        src={nexxuscreen}
                        alt="Nexxus Interface"
                        className="w-full max-w-sm mx-auto"
                    />
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16 px-4">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10"
                        style={{
                            background: 'linear-gradient(to left, #FFFFFF 0%, #2C9CB0 50%, #1473FB 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                        Características Principales
                    </h2>

                    <div className="space-y-4">
                        {[
                            {
                                icon: <IconBrain className="w-6 h-6" />,
                                title: "IA Avanzada",
                                description: "Procesamiento de lenguaje natural para entender y responder consultas de manera precisa."
                            },
                            {
                                icon: <IconMessageDots className="w-6 h-6" />,
                                title: "Conversaciones Naturales",
                                description: "Interacciones fluidas y contextuales que simulan conversaciones humanas reales."
                            },
                            {
                                icon: <IconChartBar className="w-6 h-6" />,
                                title: "Análisis de Datos",
                                description: "Seguimiento y análisis de interacciones para mejorar el servicio continuamente."
                            },
                            {
                                icon: <IconSettings className="w-6 h-6" />,
                                title: "Personalización Total",
                                description: "Adaptable a tu marca y necesidades específicas de negocio."
                            },
                            {
                                icon: <IconCloudComputing className="w-6 h-6" />,
                                title: "Integración Cloud",
                                description: "Implementación sencilla en la nube para acceso 24/7."
                            },
                            {
                                icon: <IconShield className="w-6 h-6" />,
                                title: "Seguridad Avanzada",
                                description: "Protección de datos y privacidad garantizada en todas las interacciones."
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-[#182D45] p-4 rounded-lg"
                            >
                                <div className="text-[#1473FB] mb-3">
                                    {feature.icon}
                                </div>
                                <h3 className="text-white text-lg font-bold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-[#B4B3B3] text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Capabilities Section */}
            <div className="py-16 px-4 bg-[#0A1C32]">
                <div className="max-w-xl mx-auto">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-white">
                                Adaptable a tu marca y necesidades
                            </h2>
                            <ul className="space-y-3 text-[#B4B3B3] text-sm">
                                <li className="flex items-start">
                                    <span className="text-[#1473FB] mr-2">•</span>
                                    Respuestas en menos de 1 minuto con un lenguaje natural y fluido
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#1473FB] mr-2">•</span>
                                    Personalización completa del perfil y base de conocimientos
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#1473FB] mr-2">•</span>
                                    Fácil integración mediante QR, URL o iframe
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#1473FB] mr-2">•</span>
                                    Adaptable a múltiples personalidades y estilos de comunicación
                                </li>
                            </ul>
                        </div>
                        <img
                            src={nexxusColors}
                            alt="Nexxus Personalización"
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 px-4">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 text-white">
                        ¿Listo para revolucionar tu servicio al cliente?
                    </h2>
                    <p className="text-[#B4B3B3] mb-6 text-sm">
                        Únete a las empresas que ya están aprovechando el poder de la IA para mejorar su atención al cliente.
                    </p>
                    <button
                        className="px-6 py-3 rounded-[50px] text-white font-inter"
                        style={{
                            background: 'linear-gradient(to right, #207DF8 0%, #134A92 100%)',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontWeight: 500,
                        }}
                        onClick={handleEmailClick}
                    >
                        Solicitar Demo
                    </button>
                </div>
            </div>
        </div>
    );
}
