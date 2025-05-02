import { motion } from 'framer-motion';
import { IconMapSearch, IconReportAnalytics, IconBrain, IconChartBar, IconEye, IconTrendingUp } from '@tabler/icons-react';
import v360Icon from '../images/v360.svg';
import v360comments from '../images/V360comments.svg';
import nexxusIcon from '../images/nexxus.svg';
import nexxusColors from '../images/NexxusColors.svg';
import { openEmailClient, emailTemplates } from '../utils/emailHelpers';

export default function V360() {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, y: 0,
            transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
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
                        src={v360Icon}
                        alt="V360"
                        className="w-32 h-32 mx-auto mb-8"
                        variants={fadeUpVariants}
                    />
                    <motion.h1
                        className="text-6xl font-bold mb-6 text-white"
                        variants={fadeUpVariants}
                    >
                        Análisis Competitivo V360
                    </motion.h1>
                    <motion.p
                        className="text-xl text-[#B4B3B3] max-w-2xl mx-auto mb-12"
                        variants={fadeUpVariants}
                    >
                        Obtén un reporte detallado de tu competencia impulsado por IA. Descubre insights valiosos y toma decisiones informadas para tu negocio.
                    </motion.p>
                    <motion.img
                        src={v360comments}
                        alt="V360 Interface"
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
                        Beneficios Clave
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <IconMapSearch className="w-8 h-8" />,
                                title: "Análisis Geolocalizado",
                                description: "Obtén datos precisos de la competencia en tu área de influencia."
                            },
                            {
                                icon: <IconReportAnalytics className="w-8 h-8" />,
                                title: "Reportes Detallados",
                                description: "Informes completos con métricas clave y análisis comparativo."
                            },
                            {
                                icon: <IconBrain className="w-8 h-8" />,
                                title: "IA Avanzada",
                                description: "Análisis de sentimientos y procesamiento de lenguaje natural."
                            },
                            {
                                icon: <IconChartBar className="w-8 h-8" />,
                                title: "Métricas Competitivas",
                                description: "Evaluación de precios, servicios y satisfacción del cliente."
                            },
                            {
                                icon: <IconEye className="w-8 h-8" />,
                                title: "Insights Estratégicos",
                                description: "Descubre oportunidades y amenazas en tu mercado."
                            },
                            {
                                icon: <IconTrendingUp className="w-8 h-8" />,
                                title: "Tendencias del Mercado",
                                description: "Identifica patrones y tendencias emergentes en tu sector."
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

            {/* How it Works Section */}
            <div className="py-20 px-4 bg-[#0A1C32]">
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
                        ¿Cómo Funciona?
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            variants={fadeUpVariants}
                            className="bg-[#182D45] p-8 rounded-lg text-center relative"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#1473FB] w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                                1
                            </div>
                            <IconMapSearch className="w-16 h-16 mx-auto mb-4 text-[#1473FB]" />
                            <h3 className="text-white text-xl font-bold mb-4">Ingresa tu Ubicación</h3>
                            <p className="text-[#B4B3B3]">
                                Proporciona la dirección de tu negocio para identificar tu área de influencia y competidores relevantes.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeUpVariants}
                            className="bg-[#182D45] p-8 rounded-lg text-center relative"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#1473FB] w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                                2
                            </div>
                            <IconBrain className="w-16 h-16 mx-auto mb-4 text-[#1473FB]" />
                            <h3 className="text-white text-xl font-bold mb-4">Generación del Reporte</h3>
                            <p className="text-[#B4B3B3]">
                                Nuestro sistema analiza miles de datos y reseñas para crear un reporte detallado en minutos.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeUpVariants}
                            className="bg-[#182D45] p-8 rounded-lg text-center relative"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#1473FB] w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                                3
                            </div>
                            <IconChartBar className="w-16 h-16 mx-auto mb-4 text-[#1473FB]" />
                            <h3 className="text-white text-xl font-bold mb-4">Analiza los Resultados</h3>
                            <p className="text-[#B4B3B3]">
                                Explora insights detallados sobre tu competencia, precios, servicios y oportunidades de mejora.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Nexxus Integration Section */}
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
                            <div className="mb-8">
                                <img src={nexxusIcon} alt="Nexxus" className="w-20 h-20" />
                            </div>
                            <p className="text-[#B4B3B3] mb-8 text-lg">
                                Nuestro agente de IA especializado en el análisis del mercado y procesamiento de lenguaje natural. La tecnología detrás de nuestros insights más precisos.
                            </p>
                            <ul className="space-y-4 text-[#B4B3B3] mb-8">
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
                                className="inline-flex items-center text-[#1473FB] hover:text-[#2C9CB0] transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                Conoce más sobre nuestro agente
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
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
                        Obtén tu reporte personalizado
                    </motion.h2>
                    <motion.p
                        className="text-[#B4B3B3] mb-8 text-lg"
                        variants={fadeUpVariants}
                    >
                        Descubre cómo se compara tu negocio con la competencia y encuentra oportunidades de mejora.
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
