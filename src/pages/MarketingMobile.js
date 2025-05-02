import React from 'react';
import { 
  IconTarget, 
  IconBrandCodesandbox, 
  IconBrandInstagram, 
  IconChartPie, 
  IconDevices, 
  IconChartBar, 
  IconMessages, 
  IconPencil,
  IconBrandGoogle, 
  IconServer, 
  IconCode,
  IconListNumbers,
  IconPencilBolt,
  IconReportAnalytics,
  IconRocket,
  IconBrandAdobe,
  IconBrandMeta,
  IconVideo,
  IconPalette,
} from '@tabler/icons-react';
import Cellphone1 from '../images/cellphone1.svg';
import Cellphone2 from '../images/cellphone2.svg';
import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import logo3 from '../assets/logo3.svg';
import logo4 from '../assets/logo4.svg';
import logo5 from '../assets/logo5.svg';
import { openEmailClient, emailTemplates } from '../utils/emailHelpers';

export default function MarketingMobile() {
  const CTAButton = ({ text, onClick }) => (
    <button
      className="bg-gradient-to-r from-gray-700 to-white text-black px-6 py-2 rounded-full font-bold w-full"
      onClick={onClick}
    >
      {text}
    </button>
  );

  const handleContactClick = (service) => {
    if (service === 'servicios de marketing') {
      const template = emailTemplates.marketingConsultancy();
      openEmailClient(template.subject, template.body, template.isMarketing);
    } else if (service === 'una campaña personalizada') {
      const template = emailTemplates.marketingCampaign();
      openEmailClient(template.subject, template.body, template.isMarketing);
    } else if (service === 'un nuevo proyecto') {
      const template = emailTemplates.marketingServices('nuevo proyecto');
      openEmailClient(template.subject, template.body, template.isMarketing);
    } else {
      const template = emailTemplates.marketingServices(service);
      openEmailClient(template.subject, template.body, template.isMarketing);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#111111] to-[#222222]">
      {/* Hero Section - ajustado spacing */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center gap-6 px-4 py-12">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-700 to-white text-transparent bg-clip-text">
          Solo nos asociamos con los mejores
        </h1>
        <CTAButton 
          text="Cotizar servicios" 
          onClick={() => handleContactClick('servicios de marketing')}
        />
      </section>

      {/* Campañas Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-700 to-white text-transparent bg-clip-text mb-6">
          Lleva tu negocio a otro nivel con campañas de marketing personalizadas
        </h2>
        <div className="my-8">
          <img src={Cellphone1} alt="Marketing Digital" className="w-full h-auto" />
        </div>
        <CTAButton 
          text="Cotizar campaña" 
          onClick={() => handleContactClick('una campaña personalizada')}
        />
      </section>

      {/* Services Grid - Actualizado con todos los servicios */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-700 to-white text-transparent bg-clip-text mb-8">
          Como marcamos la diferencia en tu empresa
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {[
            {
              title: 'Asesorías de Marketing',
              description: 'Consultoría estratégica personalizada para potenciar tu presencia en el mercado.',
              icon: <IconTarget size={24} stroke={1.5} className="text-white" />
            },
            {
              title: 'Creación de Branding',
              description: 'Desarrollo de identidad visual y valores de marca únicos y memorables.',
              icon: <IconBrandCodesandbox size={24} stroke={1.5} className="text-white" />
            },
            {
              title: 'Gestión de Redes Sociales',
              description: 'Manejo integral de tus redes sociales para aumentar tu alcance y engagement.',
              icon: <IconBrandInstagram size={24} stroke={1.5} className="text-white" />
            },
            {
              title: 'Publicidad Digital',
              description: 'Campañas publicitarias en línea para llegar a tu público objetivo de manera efectiva.',
              icon: <IconChartPie size={24} stroke={1.5} className="text-white" />
            },
            {
              title: 'Desarrollo Web',
              description: 'Creación y optimización de sitios web para mejorar tu presencia en línea.',
              icon: <IconDevices size={24} stroke={1.5} className="text-white" />
            },
            {
              title: 'Email Marketing',
              description: 'Estrategias de email marketing para mantener a tus clientes informados y comprometidos.',
              icon: <IconChartBar size={24} stroke={1.5} className="text-white" />
            },
            {
              title: 'Producción de Contenido',
              description: 'Creación de contenido relevante y de calidad para atraer y retener a tu audiencia.',
              icon: <IconMessages size={24} stroke={1.5} className="text-white" />
            },
            {
              title: 'Diseño Gráfico',
              description: 'Servicios de diseño gráfico para comunicar visualmente tu mensaje de marca.',
              icon: <IconPencil size={24} stroke={1.5} className="text-white" />
            },
            {
              title: 'Consultoría SEO',
              description: 'Optimización para motores de búsqueda para mejorar tu visibilidad en línea.',
              icon: <IconBrandGoogle size={24} stroke={1.5} className="text-white" />
            },
            {
              title: 'Alojamiento Web',
              description: 'Servicios de hosting confiables y seguros para tu sitio web.',
              icon: <IconServer size={24} stroke={1.5} className="text-white" />
            },
            {
              title: 'Desarrollo de Software',
              description: 'Soluciones de software a medida para satisfacer las necesidades específicas de tu negocio.',
              icon: <IconCode size={24} stroke={1.5} className="text-white" />
            },
            {
              title: 'Marketing de Afiliados',
              description: 'Programa de afiliados para aumentar tus ventas a través de terceros.',
              icon: <IconListNumbers size={24} stroke={1.5} className="text-white" />
            },
            {
              title: 'Publicidad en Video',
              description: 'Creación y promoción de contenido de video para captar la atención de tu audiencia.',
              icon: <IconVideo size={24} stroke={1.5} className="text-white" />
            },
            {
              title: 'Diseño de Experiencia de Usuario',
              description: 'Mejoramos la experiencia de usuario en tus plataformas digitales.',
              icon: <IconPalette size={24} stroke={1.5} className="text-white" />
            },
          ].map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white/5 to-transparent p-4 rounded-xl"
            >
              <div className="flex items-start gap-3">
                <div className="p-2">{service.icon}</div>
                <div>
                  <h3 className="text-white font-bold mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section - ajustado para móvil */}
      <section className="py-12 px-4 bg-black/50">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Nuestros Clientes
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
            <div key={index} className="aspect-square bg-white/5 rounded-lg flex items-center justify-center p-4">
              <img 
                src={logo} 
                alt={`Cliente ${index + 1}`} 
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Video y Testimonios Section */}
      <section className="py-12 px-4">
        <div className="mb-12">
          <div className="w-full aspect-[9/16] max-w-[336px] mx-auto bg-gray-800 rounded-2xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.instagram.com/reel/DIe6g1FyyXo/embed"
              title="Video destacado de Instagram"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-700 to-white text-transparent bg-clip-text mb-6">
          Lo que dicen nuestros clientes
        </h2>
        <div className="space-y-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl">
              <IconPencilBolt size={24} className="text-white" />
              <div>
                <h3 className="text-white font-bold mb-1">Nombre Cliente</h3>
                <p className="text-gray-400 text-sm">
                  "Testimonio del cliente sobre el servicio recibido. Palabras de satisfacción y recomendación."
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl">
              <IconReportAnalytics size={24} className="text-white" />
              <div>
                <h3 className="text-white font-bold mb-1">Nombre Cliente</h3>
                <p className="text-gray-400 text-sm">
                  "Testimonio del cliente sobre el servicio recibido. Palabras de satisfacción y recomendación."
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl">
              <IconRocket size={24} className="text-white" />
              <div>
                <h3 className="text-white font-bold mb-1">Nombre Cliente</h3>
                <p className="text-gray-400 text-sm">
                  "Testimonio del cliente sobre el servicio recibido. Palabras de satisfacción y recomendación."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-700 to-white text-transparent bg-clip-text mb-6">
          Nuestro proceso de trabajo
        </h2>
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl">
            <IconListNumbers size={24} className="text-white" />
            <div>
              <h3 className="text-white font-bold mb-1">1. Análisis y Estrategia</h3>
              <p className="text-gray-400 text-sm">Estudiamos tu mercado y definimos objetivos claros</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl">
            <IconPencilBolt size={24} className="text-white" />
            <div>
              <h3 className="text-white font-bold mb-1">2. Creatividad e Innovación</h3>
              <p className="text-gray-400 text-sm">Desarrollamos ideas creativas que conecten con tu audiencia.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl">
            <IconReportAnalytics size={24} className="text-white" />
            <div>
              <h3 className="text-white font-bold mb-1">3. Implementación</h3>
              <p className="text-gray-400 text-sm">Llevamos a cabo las estrategias definidas con los más altos estándares.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl">
            <IconRocket size={24} className="text-white" />
            <div>
              <h3 className="text-white font-bold mb-1">4. Seguimiento y Optimización</h3>
              <p className="text-gray-400 text-sm">Monitoreamos los resultados y optimizamos las campañas para maximizar el ROI.</p>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <img 
            src={Cellphone2} 
            alt="Proceso de Marketing" 
            className="w-full h-auto"
          />
        </div>

        {/* Tools and Services */}
        <h3 className="text-2xl font-bold text-center text-white mb-6">
          Tecnologías y Servicios que Utilizamos
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl">
            <IconBrandAdobe size={24} className="text-white" />
            <div>
              <h3 className="text-white font-bold mb-1">Adobe Creative Suite</h3>
              <p className="text-gray-400 text-sm">Herramientas de diseño gráfico, edición de video y desarrollo web.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl">
            <IconBrandMeta size={24} className="text-white" />
            <div>
              <h3 className="text-white font-bold mb-1">Facebook Business</h3>
              <p className="text-gray-400 text-sm">Plataforma para gestionar anuncios y analizar resultados en Facebook e Instagram.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl">
            <IconServer size={24} className="text-white" />
            <div>
              <h3 className="text-white font-bold mb-1">Google Ads</h3>
              <p className="text-gray-400 text-sm">Publicidad en Google para aumentar la visibilidad y tráfico a tu web.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl">
            <IconCode size={24} className="text-white" />
            <div>
              <h3 className="text-white font-bold mb-1">Google Analytics</h3>
              <p className="text-gray-400 text-sm">Herramienta de análisis web para medir el rendimiento de tu sitio y campañas.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl">
            <IconVideo size={24} className="text-white" />
            <div>
              <h3 className="text-white font-bold mb-1">YouTube</h3>
              <p className="text-gray-400 text-sm">Plataforma para compartir y promocionar videos de tu marca.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl">
            <IconPalette size={24} className="text-white" />
            <div>
              <h3 className="text-white font-bold mb-1">Mailchimp</h3>
              <p className="text-gray-400 text-sm">Servicio de email marketing para gestionar tus campañas de correo.</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <CTAButton 
            text="Comenzar proyecto" 
            onClick={() => handleContactClick('un nuevo proyecto')}
          />
        </div>
      </section>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
