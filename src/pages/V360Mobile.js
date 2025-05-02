import { motion } from 'framer-motion';
import { IconMapSearch, IconReportAnalytics, IconBrain, IconChartBar, IconEye, IconTrendingUp } from '@tabler/icons-react';
import v360Icon from '../images/v360.svg';
import v360comments from '../images/V360comments.svg';
import nexxusIcon from '../images/nexxus.svg';
import nexxusColors from '../images/NexxusColors.svg';
import { openEmailClient, emailTemplates } from '../utils/emailHelpers';

export default function V360Mobile() {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, y: 0,
            transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    return (
        <div className="w-full" style={{
            background: 'linear-gradient(180deg, #051527 0%, #06182C 50%, #003979 100%)'
        }}>
            {/* Hero Section */}
            <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="text-center"
                >
                    <motion.img
                        src={v360Icon}
                        alt="V360"
                        className="w-24 h-24 mx-auto mb-6"
                        variants={fadeUpVariants}
                    />
                    <motion.h1
                        className="text-4xl font-bold mb-4 text-white px-2"
                        variants={fadeUpVariants}
                    >
                        Análisis Competitivo V360
                    </motion.h1>
                    <motion.p
                        className="text-lg text-[#B4B3B3] mx-auto mb-8 px-4"
                        variants={fadeUpVariants}
                    >
                        Obtén un reporte detallado de tu competencia impulsado por IA. Descubre insights valiosos y toma decisiones informadas para tu negocio.
                    </motion.p>
                    <motion.img
                        src={v360comments}
                        alt="V360 Interface"
                        className="w-full px-4"
                        variants={fadeUpVariants}
                    />
                </motion.div>
            </div>

            {/* Features Section */}
            <div className="py-16 px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-3xl font-bold text-center mb-12"
                        variants={fadeUpVariants}
                        style={{
                            background: 'linear-gradient(to left, #FFFFFF 0%, #2C9CB0 50%, #1473FB 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Beneficios Clave
                    </motion.h2>

                    <div className="space-y-4">
                        {[
                            {
                                icon: <IconMapSearch className="w-6 h-6" />,
                                title: "Análisis Geolocalizado",
                                description: "Obtén datos precisos de la competencia en tu área de influencia."
                            },
                            {
                                icon: <IconReportAnalytics className="w-6 h-6" />,
                                title: "Reportes Detallados",
                                description: "Informes completos con métricas clave y análisis comparativo."
                            },
                            {
                                icon: <IconBrain className="w-6 h-6" />,
                                title: "IA Avanzada",
                                description: "Análisis de sentimientos y procesamiento de lenguaje natural."
                            },
                            {
                                icon: <IconChartBar className="w-6 h-6" />,
                                title: "Métricas Competitivas",
                                description: "Evaluación de precios, servicios y satisfacción del cliente."
                            },
                            {
                                icon: <IconEye className="w-6 h-6" />,
                                title: "Insights Estratégicos",
                                description: "Descubre oportunidades y amenazas en tu mercado."
                            },
                            {
                                icon: <IconTrendingUp className="w-6 h-6" />,
                                title: "Tendencias del Mercado",
                                description: "Identifica patrones y tendencias emergentes en tu sector."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUpVariants}
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
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* How it Works Section */}
            <div className="py-16 px-4 bg-[#0A1C32]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-3xl font-bold text-center mb-12"
                        variants={fadeUpVariants}
                        style={{
                            background: 'linear-gradient(to left, #FFFFFF 0%, #2C9CB0 50%, #1473FB 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        ¿Cómo Funciona?
                    </motion.h2>

                    <div className="space-y-12">
                        {[
                            {
                                step: 1,
                                icon: <IconMapSearch className="w-12 h-12" />,
                                title: "Ingresa tu Ubicación",
                                description: "Proporciona la dirección de tu negocio para identificar tu área de influencia y competidores relevantes."
                            },
                            {
                                step: 2,
                                icon: <IconBrain className="w-12 h-12" />,
                                title: "Generación del Reporte",
                                description: "Nuestro sistema analiza miles de datos y reseñas para crear un reporte detallado en minutos."
                            },
                            {
                                step: 3,
                                icon: <IconChartBar className="w-12 h-12" />,
                                title: "Analiza los Resultados",
                                description: "Explora insights detallados sobre tu competencia, precios, servicios y oportunidades de mejora."
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUpVariants}
                                className="bg-[#182D45] p-6 rounded-lg relative pt-8"
                            >
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#1473FB] w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white">
                                    {step.step}
                                </div>
                                <div className="text-[#1473FB] flex justify-center mb-4">
                                    {step.icon}
                                </div>
                                <h3 className="text-white text-xl font-bold mb-3 text-center">
                                    {step.title}
                                </h3>
                                <p className="text-[#B4B3B3] text-center">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Nexxus Integration Section */}
            <div className="py-16 px-4 bg-[#0A1C32]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="space-y-8"
                >
                    <motion.div variants={fadeUpVariants}>
                        <div className="mb-6">
                            <img src={nexxusIcon} alt="Nexxus" className="w-16 h-16" />
                        </div>
                        <p className="text-[#B4B3B3] mb-6 text-base">
                            Nuestro agente de IA especializado en el análisis del mercado y procesamiento de lenguaje natural. La tecnología detrás de nuestros insights más precisos.
                        </p>
                        <ul className="space-y-3 text-[#B4B3B3] mb-6 text-sm">
                            <li className="flex items-start">
                                <span className="text-[#1473FB] mr-2">•</span>
                                Procesamiento avanzado de lenguaje natural
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#1473FB] mr-2">•</span>
                                Análisis contextual inteligente
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#1473FB] mr-2">•</span>
                                Aprendizaje continuo y adaptativo
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#1473FB] mr-2">•</span>
                                Capacidad multilingüe
                            </li>
                        </ul>
                        <motion.a
                            href="/nexxus"
                            className="inline-flex items-center text-[#1473FB] hover:text-[#2C9CB0] transition-colors text-sm"
                            whileHover={{ x: 5 }}
                        >
                            Conoce más sobre nuestro agente
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </motion.a>
                    </motion.div>
                    <motion.div variants={fadeUpVariants}>
                        <img
                            src={nexxusColors}
                            alt="Nexxus AI Analysis"
                            className="w-full rounded-lg"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* CTA Section */}
            <div className="py-16 px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="text-center"
                >
                    <motion.h2
                        className="text-3xl font-bold mb-4 text-white px-2"
                        variants={fadeUpVariants}
                    >
                        Obtén tu reporte personalizado
                    </motion.h2>
                    <motion.p
                        className="text-[#B4B3B3] mb-6 text-base px-4"
                        variants={fadeUpVariants}
                    >
                        Descubre cómo se compara tu negocio con la competencia y encuentra oportunidades de mejora.
                    </motion.p>
                    <motion.button
                        variants={fadeUpVariants}
                        className="px-6 py-3 rounded-[50px] text-white"
                        style={{
                            background: 'linear-gradient(to right, #207DF8 0%, #134A92 100%)',
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontWeight: 500,
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const { subject, body } = emailTemplates.v360Demo();
                            openEmailClient(subject, body);
                        }}
                    >
                        Solicitar Reporte
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}
