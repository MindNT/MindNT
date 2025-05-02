import { Link } from 'react-router-dom';
import webImage from '../images/computadora.svg';
import ProductBox from '../components/ProductBoxes';
import v360Icon from '../images/v360.svg';
import v360comments from '../images/V360comments.svg';
import nexxusIcon from '../images/nexxus.svg';
import nexxuscreen from '../images/Nexxuscreen.svg';
import TarjetaPresentacion from '../images/TarjetaPresentacion.svg';
import { IconWorld, IconPalette, IconChartBar, IconNotes, IconShield, IconHelp, IconClick } from '@tabler/icons-react';
import { openEmailClient, emailTemplates } from '../utils/emailHelpers';

export default function HomeMobile() {
    const handleEmailRequest = (template) => {
        const { subject, body } = emailTemplates[template]();
        openEmailClient(subject, body);
    };

    return (
        <div 
            className="w-full flex flex-col items-center"
            style={{
                background: 'linear-gradient(180deg, #051527 0%, #06182C 50%, #003979 100%)'
            }}
        >
            {/* Hero Section */}
            <div className="min-h-screen w-full flex items-center justify-center px-6">
                <h1 
                    className="text-white text-center font-bold text-4xl leading-tight"
                    style={{ maxWidth: '800px' }}
                >
                    SIMPLIFICANDO NEGOCIOS, POTENCIANDO EL FUTURO
                </h1>
            </div>
            
            {/* Utilidades Section */}
            <div className="w-full px-6 py-24 flex flex-col items-center">
                <h1 
                    className="text-center mb-16 max-w-[500px]"
                    style={{
                        fontFamily: 'Inter',
                        fontWeight: 700,
                        fontSize: '32px',
                        lineHeight: '1.3',
                        color: '#FFFFFF'
                    }}
                >
                    Conoce nuestras utilidades con{' '}
                    <span 
                        style={{
                            background: 'linear-gradient(to left, #FFFFFF 0%, #2C9CB0 50%, #1473FB 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Inteligencia Artificial
                    </span>
                </h1>

                <div className="w-full max-w-[500px] space-y-12">
                    <div className="mb-8">
                        <Link to="/nexxus">
                            <ProductBox 
                                title="Resuelve dudas en segundos con IA"
                                description="Un agente personalizable para cualquier situación en tu empresa."
                                icon={<img src={nexxusIcon} alt="Nexxus" className="w-16 h-16" />}
                            />
                        </Link>
                    </div>

                    <div className="mb-8">
                        <Link to="/v360">
                            <ProductBox 
                                title="Analiza la competencia con IA"
                                description="Un reporte detallado para conocer a que se enfrenta tu negocio dentro del mercado."
                                icon={<img src={v360Icon} alt="V360" className="w-16 h-16" />}
                            />
                        </Link>
                    </div>
                </div>

                <button 
                    className="mt-16 mx-auto px-8 py-3 rounded-[50px] text-white font-inter flex items-center gap-2"
                    onClick={() => handleEmailRequest('generalDemo')}
                    style={{
                        background: 'linear-gradient(to right, #207DF8 0%, #134A92 100%)',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: 500,
                    }}
                >
                    Solicitar demo
                    
                </button>
            </div>

            {/* V360 Analysis Section */}
            <div className="w-full px-6 py-24 flex flex-col items-center">
                <h2 
                    className="text-center text-3xl font-bold mb-16 max-w-[500px]"
                    style={{
                        background: 'linear-gradient(to left, #FFFFFF 0%, #2C9CB0 50%, #1473FB 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Que no se te escape ni un detalle
                    de tu negocio y la competencia
                </h2>

                <div className="w-full max-w-[500px] space-y-12">
                    <img src={v360Icon} alt="V360" className="w-16 h-16 mb-4"/>
                    <h3 className="text-white text-xl font-bold mb-3">
                        Análisis Competitivo con IA
                    </h3>
                    <p className="text-[#B4B3B3] text-base">
                        Obtén un reporte detallado de tu competencia con solo ingresar la ubicación de tu negocio. V360 analiza y procesa datos utilizando IA para brindarte insights valiosos.
                    </p>
                    
                    <div className="space-y-4">
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
                    </div>

                    <Link 
                        to="/v360" 
                        className="block text-[#00DBFF] hover:underline mb-4"
                    >
                        Conocer más sobre nuestro reporte
                    </Link>

                    <img 
                        src={v360comments} 
                        alt="V360 Analysis" 
                        className="w-full h-auto mt-8"
                    />

                    <button 
                        className="px-8 py-3 rounded-[50px] text-white font-inter w-full"
                        onClick={() => handleEmailRequest('v360Demo')}
                        style={{
                            background: 'linear-gradient(to right, #207DF8 0%, #134A92 100%)',
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontWeight: 500,
                        }}
                    >
                        Solicitar demo
                        
                    </button>
                </div>
            </div>

            {/* Desarrollo Web Section */}
            <div className="w-full px-6 py-24 flex flex-col items-center">
                <div className="w-full max-w-[500px] space-y-8">
                    <h1 
                        className="mb-8 text-3xl font-bold text-white"
                        style={{
                            fontFamily: 'Inter',
                            background: 'linear-gradient(to left, #FFFFFF 0%, #2C9CB0 50%, #1473FB 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Desarrollo Web Profesional
                    </h1>
                    <p className="mb-8 text-[#B4B3B3] text-base">
                        Ahorra tiempo y dinero con nuestra herramienta de diseño y creación de páginas web para hoteles. 
                        Podrás elegir entre una gran variedad de plantillas personalizables ¡son muy fáciles de usar!
                    </p>
                    <img src={webImage} alt="Web Development" className="w-full h-auto mb-8"/>
                    <button 
                        className="px-8 py-3 rounded-[50px] text-white font-inter w-full"
                        onClick={() => handleEmailRequest('webDevelopment')}
                        style={{
                            background: 'linear-gradient(to right, #207DF8 0%, #134A92 100%)',
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontWeight: 500,
                        }}
                    >
                        Cotizar Página Web
                    </button>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="w-full px-6 py-24 flex flex-col items-center">
                <h2 
                    className="text-center text-3xl font-bold mb-16 max-w-[500px]"
                    style={{
                        background: 'linear-gradient(to left, #FFFFFF 0%, #2C9CB0 50%, #1473FB 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Conoce nuestros beneficios únicos
                </h2>
                <div className="w-full max-w-[500px] space-y-12">
                    {/* Benefits items */}
                    <div className="flex items-start gap-4">
                        <IconWorld className="w-8 h-8 text-white flex-shrink-0" stroke={1.5} />
                        <div>
                            <h3 className="text-white text-lg font-bold mb-2">Hosting Premium</h3>
                            <p className="text-[#B4B3B3] text-sm">Alojamiento de alta velocidad con SSL incluido y soporte técnico 24/7.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <IconPalette className="w-8 h-8 text-white flex-shrink-0" stroke={1.5} />
                        <div>
                            <h3 className="text-white text-lg font-bold mb-2">Diseño Personalizado</h3>
                            <p className="text-[#B4B3B3] text-sm">Creamos diseños a la medida para que tu sitio web sea único y se adapte a tus necesidades.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <IconShield className="w-8 h-8 text-white flex-shrink-0" stroke={1.5} />
                        <div>
                            <h3 className="text-white text-lg font-bold mb-2">Seguridad Garantizada</h3>
                            <p className="text-[#B4B3B3] text-sm">Contamos con los más altos estándares de seguridad para proteger tu información y la de tus clientes.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <IconHelp className="w-8 h-8 text-white flex-shrink-0" stroke={1.5} />
                        <div>
                            <h3 className="text-white text-lg font-bold mb-2">Soporte Técnico 24/7</h3>
                            <p className="text-[#B4B3B3] text-sm">Nuestro equipo de expertos está disponible todo el tiempo para ayudarte con cualquier inconveniente.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Web Features & Nexxus Section */}
            <div className="w-full px-6 py-24 flex flex-col items-center">
                <h2 
                    className="text-center text-3xl font-bold mb-16 max-w-[500px]"
                    style={{
                        background: 'linear-gradient(to left, #FFFFFF 0%, #2C9CB0 50%, #1473FB 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Haz tu página web más atractiva y productiva
                </h2>

                <div className="w-full max-w-[500px] space-y-12">
                    <div className="mb-8">
                        <h3 className="text-white text-xl font-bold mb-3">Integración flexible y accesible</h3>
                        <p className="text-[#B4B3B3]">Integra a Nexxus directamente en tu sitio web o implementa acceso rápido mediante códigos QR.</p>
                    </div>

                    <img 
                        src={nexxuscreen} 
                        alt="Nexxus Screen Interface" 
                        className="w-full h-auto mb-8"
                    />

                    <div className="pt-8 border-t border-[#1E3D68]">
                        <h3 className="text-white text-xl font-bold mb-4">
                            Usa a Nexxus como tu mejor agente de ventas
                        </h3>
                        <img 
                            src={nexxusIcon} 
                            alt="Nexxus" 
                            className="w-16 h-16 mb-3" 
                        />
                        <Link 
                            to="/nexxus" 
                            className="text-[#00DBFF] hover:underline text-base inline-flex items-center gap-2 mb-6"
                        >
                            Conoce a nuestro agente de ventas
                            <IconClick size={16} stroke={1.5} />
                        </Link>
                        
                        <button 
                            className="px-8 py-3 rounded-[50px] text-white font-inter w-full mt-4"
                            onClick={() => handleEmailRequest('nexxusDemo')}
                            style={{
                                background: 'linear-gradient(to right, #207DF8 0%, #134A92 100%)',
                                fontFamily: 'Inter',
                                fontSize: '16px',
                                fontWeight: 500,
                            }}
                        >
                            Solicitar demo
                            
                        </button>
                    </div>
                </div>
            </div>

            {/* Additional Tools Section */}
            <div className="w-full px-6 py-24 flex flex-col items-center">
                <h2 
                    className="text-center text-3xl font-bold mb-16 max-w-[500px]"
                    style={{
                        background: 'linear-gradient(to left, #FFFFFF 0%, #2C9CB0 50%, #1473FB 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Una página web con herramientas integradas
                </h2>

                <img 
                    src={TarjetaPresentacion} 
                    alt="Tarjeta de Presentación Digital" 
                    className="w-full h-auto mb-8"
                />

                <div className="w-full max-w-[500px] space-y-12">
                    <div>
                        <h3 className="text-white text-xl font-bold mb-3">
                            Menú Digital QR
                        </h3>
                        <p className="text-[#B4B3B3] text-base">
                            Digitaliza tu menú con acceso vía QR o URL. Una solución moderna y eficiente para restaurantes.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-white text-xl font-bold mb-3">
                            Tarjeta de Presentación Digital
                        </h3>
                        <p className="text-[#B4B3B3] text-base">
                            Comparte tu información profesional de manera elegante a través de QR o URL.
                        </p>
                    </div>

                    <button 
                        className="px-8 py-3 rounded-[50px] text-white font-inter w-full"
                        onClick={() => handleEmailRequest('additionalTools')}
                        style={{
                            background: 'linear-gradient(to right, #207DF8 0%, #134A92 100%)',
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontWeight: 500,
                        }}
                    >
                        Ver herramientas adicionales
                    </button>
                </div>
            </div>
        </div>
    );
}
