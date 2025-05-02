import { motion } from 'framer-motion';
import { IconBrain, IconMessageDots, IconChartBar, IconSettings, IconCloudComputing, IconShield } from '@tabler/icons-react';
import { openEmailClient, emailTemplates } from '../utils/emailHelpers';
import nexxusIcon from '../images/nexxus.svg';
import nexxuscreen from '../images/Nexxuscreen.svg';
import nexxusColors from '../images/NexxusColors.svg';

export default function Nexxus() {
    const fadeUpVariants = {
        hidden: { 
            opacity: 0,
            y: 30
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const handleEmailClick = () => {
        const { subject, body } = emailTemplates.nexxusDemo();
        openEmailClient(subject, body);
    };

    return (
        <div className="w-full" style={{
            background: 'linear-gradient(180deg, #051527 0%, #06182C 50%, #003979 100%)'
        }}>
            {/* Hero Section */}
            <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-32">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="text-center"
                >
                    <motion.img
                        src={nexxusIcon}
                        alt="Nexxus"
                        className="w-32 h-32 mx-auto mb-8"
                        variants={fadeUpVariants}
                    />
                    <motion.h1
                        className="text-6xl font-bold mb-6 text-white"
                        variants={fadeUpVariants}
                    >
                        Conoce a Nexxus
                    </motion.h1>
                    <motion.p
                        className="text-xl text-[#B4B3B3] max-w-2xl mx-auto mb-12"
                        variants={fadeUpVariants}
                    >
                        Tu asistente virtual impulsado por IA, diseñado para transformar la interacción con tus clientes y optimizar tus operaciones comerciales.
                    </motion.p>
                    <motion.img
                        src={nexxuscreen}
                        alt="Nexxus Interface"
                        className="w-full max-w-3xl mx-auto"
                        variants={fadeUpVariants}
                    />
                </motion.div>
            </div>

            {/* Features Section */}
            <div className="py-20 px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="max-w-7xl mx-auto"
                >
                    <motion.h2
                        className="text-4xl font-bold text-center mb-16"
                        variants={fadeUpVariants}
                        style={{
                            background: 'linear-gradient(to left, #FFFFFF 0%, #2C9CB0 50%, #1473FB 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Características Principales
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <IconBrain className="w-8 h-8" />,
                                title: "IA Avanzada",
                                description: "Procesamiento de lenguaje natural para entender y responder consultas de manera precisa."
                            },
                            {
                                icon: <IconMessageDots className="w-8 h-8" />,
                                title: "Conversaciones Naturales",
                                description: "Interacciones fluidas y contextuales que simulan conversaciones humanas reales."
                            },
                            {
                                icon: <IconChartBar className="w-8 h-8" />,
                                title: "Análisis de Datos",
                                description: "Seguimiento y análisis de interacciones para mejorar el servicio continuamente."
                            },
                            {
                                icon: <IconSettings className="w-8 h-8" />,
                                title: "Personalización Total",
                                description: "Adaptable a tu marca y necesidades específicas de negocio."
                            },
                            {
                                icon: <IconCloudComputing className="w-8 h-8" />,
                                title: "Integración Cloud",
                                description: "Implementación sencilla en la nube para acceso 24/7."
                            },
                            {
                                icon: <IconShield className="w-8 h-8" />,
                                title: "Seguridad Avanzada",
                                description: "Protección de datos y privacidad garantizada en todas las interacciones."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUpVariants}
                                className="bg-[#182D45] p-6 rounded-lg"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="text-[#1473FB] mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-white text-xl font-bold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-[#B4B3B3]">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Capabilities Section */}
            <div className="py-20 px-4 bg-[#0A1C32]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="max-w-7xl mx-auto"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div variants={fadeUpVariants}>
                            <h2 className="text-4xl font-bold mb-6 text-white">
                                Adaptable a tu marca y necesidades
                            </h2>
                            <ul className="space-y-4 text-[#B4B3B3]">
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
                        </motion.div>
                        <motion.div variants={fadeUpVariants}>
                            <img
                                src={nexxusColors}
                                alt="Nexxus Personalización"
                                className="w-full rounded-lg"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* CTA Section */}
            <div className="py-20 px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="max-w-3xl mx-auto text-center"
                >
                    <motion.h2
                        className="text-4xl font-bold mb-6 text-white"
                        variants={fadeUpVariants}
                    >
                        ¿Listo para revolucionar tu servicio al cliente?
                    </motion.h2>
                    <motion.p
                        className="text-[#B4B3B3] mb-8 text-lg"
                        variants={fadeUpVariants}
                    >
                        Únete a las empresas que ya están aprovechando el poder de la IA para mejorar su atención al cliente.
                    </motion.p>
                    <motion.button
                        variants={fadeUpVariants}
                        className="px-8 py-3 rounded-[50px] text-white font-inter"
                        style={{
                            background: 'linear-gradient(to right, #207DF8 0%, #134A92 100%)',
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontWeight: 500,
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleEmailClick}
                    >
                        Solicitar Demo
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}
