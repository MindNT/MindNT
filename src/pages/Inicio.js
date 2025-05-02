import webImage from '../images/computadora.svg';
import ProductBox from '../components/ProductBoxes';
import v360Icon from '../images/v360.svg';
import v360comments from '../images/V360comments.svg';
import nexxusIcon from '../images/nexxus.svg';
import nexxuscreen from '../images/Nexxuscreen.svg';
import TarjetaPresentacion from '../images/TarjetaPresentacion.svg';
import { IconWorld, IconPalette, IconChartBar, IconNotes, IconShield, IconHelp, IconClick } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { openEmailClient, emailTemplates } from '../utils/emailHelpers';

export default function Home() {
    const titleWords = ["SIMPLIFICANDO", "NEGOCIOS,", "POTENCIANDO", "EL", "FUTURO"];
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.4
            }
        }
    };
    
    const wordVariants = {
        hidden: { 
            opacity: 0, 
            y: 20 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.25, 0.1, 0, 1]
            }
        }
    };

    const fadeUpVariants = {
        hidden: { 
            opacity: 0,
            y: 30
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.25, 0.1, 0, 1]
            }
        }
    };

    const staggerContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.4
            }
        }
    };

    const slideUpVariants = {
        hidden: { 
            opacity: 0,
            y: 60
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.4,
                ease: [0.25, 0.1, 0, 1]
            }
        }
    };

    const imageVariants = {
        hidden: { 
            opacity: 0,
            scale: 0.95
        },
        visible: { 
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.8,
                ease: [0.25, 0.1, 0, 1]
            }
        }
    };

    const benefitsVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.3
            }
        }
    };

    const benefitItemVariants = {
        hidden: { 
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        visible: { 
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: [0.25, 0.1, 0, 1]
            }
        }
    };

    const featureVariants = {
        hidden: { 
            opacity: 0,
            y: 40
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.4,
                ease: [0.25, 0.1, 0, 1]
            }
        }
    };

    const containerFeatureVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.4
            }
        }
    };

    const toolsContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.4
            }
        }
    };

    const toolItemVariants = {
        hidden: { 
            opacity: 0,
            y: 40,
            scale: 0.98
        },
        visible: { 
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 1.4,
                ease: [0.25, 0.1, 0, 1]
            }
        }
    };

    const developmentVariants = {
        hidden: { 
            opacity: 0,
            scale: 0.95
        },
        visible: { 
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                duration: 1.2,
                bounce: 0.2
            }
        }
    };

    const textRevealVariants = {
        hidden: { 
            opacity: 0,
            scale: 0.98
        },
        visible: { 
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                duration: 1,
                bounce: 0.2
            }
        }
    };

    const handleEmailRequest = (template) => {
        const { subject, body } = emailTemplates[template]();
        openEmailClient(subject, body);
    };

    return (
        <div 
            className="w-full"
            style={{
                background: 'linear-gradient(180deg, #051527 0%, #06182C 50%, #003979 100%)'
            }}
        >
            {/* Hero Section */}
            <div className="min-h-screen flex items-center justify-center px-4">
                <motion.h1 
                    className="text-white text-center font-bold text-6xl leading-[64px]"
                    style={{ maxWidth: '800px' }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {titleWords.map((word, index) => (
                        <motion.span
                            key={index}
                            variants={wordVariants}
                            className="inline-block mr-[0.3em]"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>
            </div>
            
            {/* Utilidades Section */}
            <motion.div 
                className="min-h-screen flex flex-col items-center px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainerVariants}
            >
                <motion.h1 
                    className="text-center mt-44 mb-16"
                    variants={fadeUpVariants}
                    style={{
                        maxWidth: '700px',
                        fontFamily: 'Inter',
                        fontWeight: 700,
                        fontSize: '50px',
                        lineHeight: '60px',
                        color: '#FFFFFF'
                    }}
                >
                    <motion.span variants={fadeUpVariants}>
                        Conoce nuestras
                    </motion.span>
                    <br />
                    <motion.span variants={fadeUpVariants} className="block mb-2">
                        utilidades con{' '}
                        <motion.span 
                            variants={fadeUpVariants}
                            className="block mb-2"
                            style={{
                                background: 'linear-gradient(to left, #FFFFFF 0%, #2C9CB0 50%, #1473FB 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                display: 'inline-block'
                            }}
                        >
                            Inteligencia
                        </motion.span>
                    </motion.span>
                    <motion.span 
                        variants={fadeUpVariants}
                        style={{
                            background: 'linear-gradient(to left, #FFFFFF 0%, #2C9CB0 50%, #1473FB 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            display: 'inline-block'
                        }}
                    >
                        Artificial
                    </motion.span>
                </motion.h1>

                <motion.div 
                    className="w-full max-w-7xl flex justify-center"
                    variants={fadeUpVariants}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
                        <motion.div variants={fadeUpVariants}>
                            <Link to="/nexxus">
                                <ProductBox 
                                    title="Resuelve dudas en segundos con IA"
                                    description="Un agente personalizable para cualquier situación en tu empresa."
                                    icon={<img src={nexxusIcon} alt="Nexxus" className="w-24 h-24" />}
                                />
                            </Link>
                        </motion.div>
                        <motion.div variants={fadeUpVariants}>
                            <Link to="/v360">
                                <ProductBox 
                                    title="Analiza la competencia con IA"
                                    description="Un reporte detallado para conocer a que se enfrenta tu negocio dentro del mercado."
                                    icon={<img src={v360Icon} alt="V360" className="w-24 h-24" />}
                                />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.button 
                    variants={fadeUpVariants}
                    onClick={() => handleEmailRequest('generalDemo')}
                    className="mt-24 px-8 py-3 rounded-[50px] text-white font-inter flex items-center gap-2"
                    style={{
                        background: 'linear-gradient(to right, #207DF8 0%, #134A92 100%)',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: 500,
                    }}
                >
                    Solicitar demo
                </motion.button>
            </motion.div>
            
            {/* V360 Analysis Section */}
            <motion.div 
                className="w-full px-4 py-20 mb-32"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerFeatureVariants}
            >
                <motion.h2 
                    variants={featureVariants}
                    className="text-center text-5xl font-bold mb-16 max-w-4xl mx-auto leading-[1.2]"
                    style={{
                        background: 'linear-gradient(to left, #FFFFFF 0%, #2C9CB0 50%, #1473FB 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Que no se te escape ni un detalle
                    <br />
                    de tu negocio y la competencia
                </motion.h2>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                    <motion.div 
                        className="flex-1 flex flex-col justify-center"
                        variants={containerFeatureVariants}
                    >
                        <div className="space-y-8">
                            <motion.div variants={featureVariants}>
                                <motion.img 
                                    src={v360Icon} 
                                    alt="V360" 
                                    className="w-24 h-24 mb-6"
                                />
                                <h3 className="text-white text-2xl font-bold mb-3">
                                    Análisis Competitivo con IA
                                </h3>
                                <p className="text-[#B4B3B3] text-lg mb-6">
                                    Obtén un reporte detallado de tu competencia con solo ingresar la ubicación de tu negocio. V360 analiza y procesa datos utilizando IA para brindarte insights valiosos.
                                </p>
                            </motion.div>
                            
                            <motion.div variants={featureVariants} className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <IconChartBar className="w-6 h-6 text-[#FFFFFF] flex-shrink-0 mt-1" />
                                    <p className="text-[#B4B3B3]">Análisis de sentimientos en comentarios y calificaciones</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <IconNotes className="w-6 h-6 text-[#FFFFFF] flex-shrink-0 mt-1" />
                                    <p className="text-[#B4B3B3]">Resúmenes y traducciones automáticas con IA</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <IconClick className="w-6 h-6 text-[#FFFFFF] flex-shrink-0 mt-1" />
                                    <p className="text-[#B4B3B3]">Identificación de palabras clave y tendencias</p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={fadeUpVariants}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
                            >
                                <Link 
                                    to="/v360" 
                                    className="block text-[#00DBFF] hover:underline mb-4"
                                    style={{ display: 'inline-block' }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Conocer más sobre nuestro reporte
                                </Link>
                            </motion.div>

                            <motion.button 
                                variants={featureVariants}
                                onClick={() => handleEmailRequest('v360Demo')}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                                className="px-8 py-3 rounded-[50px] text-white font-inter w-fit flex items-center gap-2"
                                style={{
                                    background: 'linear-gradient(to right, #207DF8 0%, #134A92 100%)',
                                    fontFamily: 'Inter',
                                    fontSize: '16px',
                                    fontWeight: 500,
                                }}
                            >
                                Solicitar demo
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="flex-1 flex items-center justify-center"
                        variants={imageVariants}
                    >
                        <motion.img 
                            src={v360comments} 
                            alt="V360 Analysis" 
                            className="w-[90%] h-auto"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ 
                                opacity: 1, 
                                scale: 1,
                                transition: {
                                    duration: 1.2,
                                    ease: [0.25, 0.1, 0, 1]
                                }
                            }}
                            viewport={{ once: true }}
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* Desarrollo Web Section */}
            <motion.div 
                id="desarrollo-web"
                className="min-h-screen"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="flex min-h-screen">
                    <motion.div 
                        className="flex-1 flex flex-col justify-center px-8 lg:px-32"
                        variants={developmentVariants}
                    >
                        <motion.h1 
                            className="mb-8 text-5xl font-bold text-white"
                            variants={textRevealVariants}
                            style={{
                                fontFamily: 'Inter',
                                background: 'linear-gradient(to left, #FFFFFF 0%, #2C9CB0 50%, #1473FB 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            <motion.span
                                className="block"
                                variants={textRevealVariants}
                            >
                                Desarrollo Web
                            </motion.span>
                            <motion.span
                                className="block"
                                variants={textRevealVariants}
                            >
                                Profesional
                            </motion.span>
                        </motion.h1>
                        <motion.p 
                            className="mb-12 text-[#B4B3B3] text-lg max-w-xl"
                            variants={textRevealVariants}
                        >
                            Ahorra tiempo y dinero con nuestra herramienta de diseño y creación de páginas web para hoteles. 
                            Podrás elegir entre una gran variedad de plantillas personalizables ¡son muy fáciles de usar!
                        </motion.p>
                        <motion.button 
                            className="px-8 py-3 rounded-[50px] text-white font-inter w-fit"
                            onClick={() => handleEmailRequest('webDevelopment')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            variants={textRevealVariants}
                            style={{
                                background: 'linear-gradient(to right, #207DF8 0%, #134A92 100%)',
                                fontFamily: 'Inter',
                                fontSize: '16px',
                                fontWeight: 500,
                            }}
                        >
                            Cotizar Página Web
                        </motion.button>
                    </motion.div>

                    <motion.div 
                        className="flex-1 relative flex items-center justify-end"
                        variants={imageVariants}
                    >
                        <div className="h-[70%] w-full flex items-center justify-end">
                            <motion.img 
                                src={webImage} 
                                alt="Web Development" 
                                className="h-auto w-[80%] object-contain"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ 
                                    opacity: 1, 
                                    scale: 1,
                                    transition: {
                                        duration: 1.2,
                                        ease: [0.25, 0.1, 0, 1]
                                    }
                                }}
                                viewport={{ once: true }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Benefits Section */}
                <motion.div 
                    className="w-full px-4 py-20 mb-32"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h2 
                        variants={slideUpVariants}
                        className="text-center text-5xl font-bold mb-16"
                        style={{
                            background: 'linear-gradient(to left, #FFFFFF 0%, #2C9CB0 50%, #1473FB 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Conoce nuestros beneficios únicos
                    </motion.h2>
                    <motion.div 
                        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                        variants={benefitsVariants}
                    >
                        {/* Hosting */}
                        <motion.div 
                            className="flex items-start gap-4"
                            variants={benefitItemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                                <IconWorld className="w-8 h-8 text-white" stroke={1.5} />
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-bold mb-2">Hosting Premium</h3>
                                <p className="text-[#B4B3B3]">Alojamiento de alta velocidad con SSL incluido y soporte técnico 24/7.</p>
                            </div>
                        </motion.div>

                        {/* Repetir el mismo patrón para los otros beneficios */}
                        {/* Diseño */}
                        <motion.div 
                            className="flex items-start gap-4"
                            variants={benefitItemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                                <IconPalette className="w-8 h-8 text-white" stroke={1.5} />
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-bold mb-2">Diseño Personalizado</h3>
                                <p className="text-[#B4B3B3]">Diseños únicos y adaptables a tu marca, optimizados para todos los dispositivos.</p>
                            </div>
                        </motion.div>

                        {/* Repetir para SEO, Contenido, Seguridad y Soporte */}
                        {/* SEO */}
                        <motion.div className="flex items-start gap-4"
                            variants={benefitItemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                                <IconChartBar className="w-8 h-8 text-white" stroke={1.5} />
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-bold mb-2">SEO Optimizado</h3>
                                <p className="text-[#B4B3B3]">Posicionamiento en buscadores desde el primer día con las mejores prácticas SEO.</p>
                            </div>
                        </motion.div>

                        {/* Contenido */}
                        <motion.div className="flex items-start gap-4"
                            variants={benefitItemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                                <IconNotes className="w-8 h-8 text-white" stroke={1.5} />
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-bold mb-2">Gestión de Contenido</h3>
                                <p className="text-[#B4B3B3]">Panel administrativo intuitivo para actualizar contenido fácilmente.</p>
                            </div>
                        </motion.div>

                        {/* Seguridad */}
                        <motion.div className="flex items-start gap-4"
                            variants={benefitItemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                                <IconShield className="w-8 h-8 text-white" stroke={1.5} />
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-bold mb-2">Máxima Seguridad</h3>
                                <p className="text-[#B4B3B3]">Protección contra ataques y copias de seguridad automáticas.</p>
                            </div>
                        </motion.div>

                        {/* Soporte */}
                        <motion.div className="flex items-start gap-4"
                            variants={benefitItemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                                <IconHelp className="w-8 h-8 text-white" stroke={1.5} />
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-bold mb-2">Soporte Dedicado</h3>
                                <p className="text-[#B4B3B3]">Atención personalizada y mantenimiento continuo de tu sitio web.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                

                {/* Web Features Section */}
                <motion.div 
                    className="w-full px-4 py-20 mb-32"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerFeatureVariants}
                >
                    <motion.h2 
                        variants={featureVariants}
                        className="text-center text-5xl font-bold mb-16 max-w-4xl mx-auto"
                        style={{
                            background: 'linear-gradient(to left, #FFFFFF 0%, #2C9CB0 50%, #1473FB 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Haz tu página web más
                        <br />
                        atractiva y productiva
                    </motion.h2>

                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                        {/* Left Column - Text and Nexxus */}
                        <motion.div 
                            className="flex-1 flex flex-col"
                            variants={containerFeatureVariants}
                        >
                            <div className="space-y-8">
                                <motion.div variants={featureVariants}>
                                    <h3 className="text-white text-2xl font-bold mb-3">Integración flexible y accesible</h3>
                                    <p className="text-[#B4B3B3]">Integra a Nexxus directamente en tu sitio web o implementa acceso rápido mediante códigos QR. Tus clientes podrán interactuar naturalmente desde cualquier dispositivo.</p>
                                </motion.div>
                                <motion.div variants={featureVariants}>
                                    <h3 className="text-white text-2xl font-bold mb-3">Personalización completa</h3>
                                    <p className="text-[#B4B3B3]">Adapta la apariencia de Nexxus a tu marca con una amplia gama de colores y estilos. Crea una experiencia única y coherente con tu identidad visual.</p>
                                </motion.div>
                                <motion.div variants={featureVariants} className="mb-12">
                                    <h3 className="text-white text-2xl font-bold mb-3">Perfiles de conocimiento a medida</h3>
                                    <p className="text-[#B4B3B3]">Entrena a Nexxus con información específica de tu negocio. Crea perfiles de conocimiento personalizados para responder consultas especializadas de tu industria.</p>
                                </motion.div>

                                <motion.button 
                                    variants={featureVariants}
                                    onClick={() => handleEmailRequest('nexxusDemo')}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                    className="px-8 py-3 rounded-[50px] text-white font-inter w-fit"
                                    style={{
                                        background: 'linear-gradient(to right, #207DF8 0%, #134A92 100%)',
                                        fontFamily: 'Inter',
                                        fontSize: '16px',
                                        fontWeight: 500,
                                    }}
                                >
                                    Solicitar demo
                                </motion.button>
                            </div>

                            {/* Nexxus Section with animations */}
                            <motion.div 
                                className="mt-16 relative"
                                variants={featureVariants}
                            >
                                {/* Gradient divider */}
                                <div 
                                    className="absolute top-0 left-0 w-full h-[1px]"
                                    style={{
                                        background: 'linear-gradient(to right, #1E3D68 0%, #FFFFFF 50%, #1E3D68 100%)',
                                        opacity: 0.3
                                    }}
                                />
                                <div className="pt-8">
                                    <motion.h3 
                                        variants={featureVariants}
                                        className="text-white text-2xl font-bold mb-4"
                                    >
                                        Usa a Nexxus como tu mejor agente de ventas
                                    </motion.h3>
                                    <motion.img 
                                        variants={imageVariants}
                                        src={nexxusIcon} 
                                        alt="Nexxus" 
                                        className="w-24 h-24 mb-3" 
                                    />
                                    <motion.a 
                                        variants={featureVariants}
                                        whileHover={{ scale: 1.05 }}
                                        href="/nexxus" 
                                        className="text-[#00DBFF] hover:underline text-lg inline-flex items-center gap-2"
                                    >
                                        Conoce a nuestro agente de ventas
                                        <IconClick size={16} stroke={1.5} />
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column - Image with animation */}
                        <motion.div 
                            className="flex-1 flex items-center justify-end"
                            variants={imageVariants}
                        >
                            <div className="w-full h-auto">
                                <motion.img 
                                    variants={imageVariants}
                                    src={nexxuscreen} 
                                    alt="Nexxus Screen Interface" 
                                    className="w-[80%] h-auto object-contain ml-auto"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Additional Tools Section */}
                <motion.div 
                    className="w-full px-4 pb-20 mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={toolsContainerVariants}
                >
                    <motion.h2 
                        variants={toolItemVariants}
                        className="text-center text-5xl font-bold mb-32 max-w-4xl mx-auto leading-[1.4]"
                        style={{
                            background: 'linear-gradient(to left, #FFFFFF 0%, #2C9CB0 50%, #1473FB 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Una página web con
                        <br />
                        herramientas integradas
                    </motion.h2>

                    <motion.div 
                        className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-12"
                        variants={toolsContainerVariants}
                    >
                        <motion.div 
                            className="flex-1 flex flex-col justify-center"
                            variants={toolItemVariants}
                        >
                            <div className="space-y-8">
                                <motion.div variants={toolItemVariants}>
                                    <h3 className="text-white text-2xl font-bold mb-3">
                                        Menú Digital QR
                                    </h3>
                                    <p className="text-[#B4B3B3] text-lg">
                                        Digitaliza tu menú con acceso vía QR o URL. Una solución moderna y eficiente para restaurantes que buscan mejorar la experiencia de sus clientes.
                                    </p>
                                </motion.div>
                                
                                <motion.div variants={toolItemVariants}>
                                    <h3 className="text-white text-2xl font-bold mb-3">
                                        Tarjeta de Presentación Digital
                                    </h3>
                                    <p className="text-[#B4B3B3] text-lg">
                                        Comparte tu información profesional de manera elegante a través de QR o URL. Una manera efectiva de conectar con clientes potenciales en redes sociales.
                                    </p>
                                </motion.div>

                                <motion.button 
                                    variants={toolItemVariants}
                                    onClick={() => handleEmailRequest('additionalTools')}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                    className="px-8 py-3 mt-4 rounded-[50px] text-white font-inter w-fit"
                                    style={{
                                        background: 'linear-gradient(to right, #207DF8 0%, #134A92 100%)',
                                        fontFamily: 'Inter',
                                        fontSize: '16px',
                                        fontWeight: 500,
                                    }}
                                >
                                    Cotizar Herramientas
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Left Column - Image */}
                        <motion.div 
                            className="flex-1 flex items-center"
                            variants={imageVariants}
                        >
                            <div className="w-full">
                                <motion.img 
                                    variants={imageVariants}
                                    src={TarjetaPresentacion} 
                                    alt="Tarjeta de Presentación Digital" 
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                
            </motion.div>
        </div>
    );
}