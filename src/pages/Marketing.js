import React from 'react';
import { motion } from 'framer-motion';
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
  IconListNumbers, // Reemplazamos IconSteps por IconListNumbers
  IconPencilBolt,
  IconReportAnalytics,
  IconRocket,
  IconBrandAdobe,
  IconBrandMeta,
  IconVideo,
  IconPalette, // Añadir este icono en lugar de IconBrandIllustrator
} from '@tabler/icons-react';
import Cellphone1 from '../images/cellphone1.svg';
import Cellphone2 from '../images/cellphone2.svg';
import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import logo3 from '../assets/logo3.svg';
import logo4 from '../assets/logo4.svg';
import logo5 from '../assets/logo5.svg';
import { openEmailClient, emailTemplates } from '../utils/emailHelpers';

export default function Marketing() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.1 }
    },
    viewport: { once: true }
  };

  const CTAButton = ({ text, onClick }) => (
    <motion.button
      className="bg-gradient-to-r from-gray-700 to-white text-black px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-white/20 transition-shadow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
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
      {/* Primera sección */}
      <motion.section className="h-screen flex flex-col items-center justify-center gap-8">
        <motion.h1 
          className="text-6xl font-bold text-center bg-gradient-to-r from-gray-700 to-white text-transparent bg-clip-text"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Solo nos asociamos con los mejores
        </motion.h1>
        <CTAButton 
          text="Cotizar servicios de marketing" 
          onClick={() => handleContactClick('servicios de marketing')}
        />
      </motion.section>

      {/* Segunda sección */}
      <motion.section className="min-h-screen flex flex-col items-center justify-center gap-16 py-20">
        <motion.h2 
          className="text-5xl font-bold text-center bg-gradient-to-r from-gray-700 to-white text-transparent bg-clip-text px-4 max-w-4xl"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Lleva tu negocio a otro nivel con campañas de marketing personalizadas
        </motion.h2>
        <motion.div 
          className="w-full max-w-4xl flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={Cellphone1} alt="Marketing Digital" className="w-[90%] h-auto object-contain" />
        </motion.div>
        <CTAButton 
          text="Cotizar campaña personalizada" 
          onClick={() => handleContactClick('una campaña personalizada')}
        />
      </motion.section>

      {/* Tercera sección */}
      <motion.section 
        className="min-h-screen py-20"
        {...fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-5xl font-bold text-center bg-gradient-to-r from-gray-700 to-white text-transparent bg-clip-text mb-16"
            {...fadeIn}
          >
            Como marcamos la diferencia en tu empresa
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Asesorías de Marketing',
                description: 'Consultoría estratégica personalizada para potenciar tu presencia en el mercado.',
                icon: <IconTarget size={32} stroke={1.5} className="text-white" />
              },
              {
                title: 'Creación de Branding',
                description: 'Desarrollo de identidad visual y valores de marca únicos y memorables.',
                icon: <IconBrandCodesandbox size={32} stroke={1.5} className="text-white" />
              },
              {
                title: 'Manejo de Redes Sociales',
                description: 'Gestión profesional de tus redes sociales para maximizar el engagement.',
                icon: <IconBrandInstagram size={32} stroke={1.5} className="text-white" />
              },
              {
                title: 'Plan de Marketing',
                description: 'Estrategias integrales adaptadas a tus objetivos comerciales.',
                icon: <IconChartPie size={32} stroke={1.5} className="text-white" />
              },
              {
                title: 'Campaña Publicitaria',
                description: 'Diseño e implementación de campañas efectivas en múltiples canales.',
                icon: <IconRocket size={32} stroke={1.5} className="text-white" />
              },
              {
                title: 'Marketing Digital',
                description: 'Estrategias digitales completas para aumentar tu presencia online.',
                icon: <IconDevices size={32} stroke={1.5} className="text-white" />
              },
              {
                title: 'Consultoría de Proyectos',
                description: 'Asesoramiento experto para el éxito de tus proyectos.',
                icon: <IconChartBar size={32} stroke={1.5} className="text-white" />
              },
              {
                title: 'Agentes de Respuesta',
                description: 'Atención inmediata y profesional para tus clientes 24/7.',
                icon: <IconMessages size={32} stroke={1.5} className="text-white" />
              },
              {
                title: 'Creación de Contenido',
                description: 'Contenido original y relevante que conecta con tu audiencia.',
                icon: <IconPencil size={32} stroke={1.5} className="text-white" />
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-xl hover:from-white/10 hover:to-transparent transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2">{service.icon}</div>
                  <div>
                    <h3 className="text-white font-bold mb-2 group-hover:text-[#00DBFF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Cuarta sección - Clientes */}
      <motion.section 
        className="min-h-screen py-20 bg-black/50"
        {...fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Nuestros Clientes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
              <div key={index} className="aspect-square bg-white/5 rounded-lg flex items-center justify-center p-4 hover:bg-white/10 transition-colors">
                <img 
                  src={logo} 
                  alt={`Cliente ${index + 1}`} 
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quinta sección - Video y testimonios */}
      <motion.section 
        className="min-h-screen py-20"
        {...fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="h-[600px] flex items-center justify-center">
            <div className="bg-gray-800 w-[336px] aspect-[9/16] rounded-2xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.instagram.com/reel/DIe6g1FyyXo/embed"
                title="Video destacado de Instagram"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="space-y-8 h-[600px] flex flex-col">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-700 to-white text-transparent bg-clip-text">
              Lo que dicen nuestros clientes
            </h2>
            <div className="grid grid-cols-1 gap-4 flex-1 overflow-y-auto pr-4 custom-scrollbar">
              {[
                {
                  text: "Su equipo ha sido clave en nuestro crecimiento digital. El proceso tomó algo de tiempo, pero los resultados han sido muy buenos. La comunicación siempre fue clara y directa.",
                  author: "PADA México",
                  stars: 4,
                  role: "E-commerce"
                },
                {
                  text: "Apreciamos mucho su paciencia durante la implementación de las estrategias. Al principio estábamos escépticos, pero conforme pasaron las semanas vimos mejoras significativas en nuestras redes.",
                  author: "Psicrescere",
                  stars: 5,
                  role: "Psicología"
                },
                {
                  text: "Buen trabajo en general. Las campañas han funcionado bien aunque algunas tomaron más tiempo del esperado. El equipo siempre está dispuesto a hacer ajustes cuando es necesario.",
                  author: "El Compita",
                  stars: 4,
                  role: "Restaurante"
                },
                {
                  text: "Nos ayudaron a establecer una presencia sólida en redes sociales. Su equipo es profesional y responde rápido. Todavía hay áreas por mejorar, pero estamos satisfechos con el progreso.",
                  author: "Audio Design",
                  stars: 4,
                  role: "Diseño de Audio"
                },
                {
                  text: "El manejo de nuestras redes sociales ha mejorado considerablemente. Han sido muy receptivos a nuestras sugerencias y los resultados son evidentes en nuestras métricas mensuales.",
                  author: "MPS Performance",
                  stars: 5,
                  role: "Marketing Digital"
                }
              ].map(({text, author, stars, role}, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl hover:from-white/15 hover:to-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">
                        {author[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{author}</p>
                      <p className="text-gray-400 text-xs">{role}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-2 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < stars ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 italic text-sm line-clamp-4">
                    "{text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Nueva sección - Proceso de Trabajo */}
      <motion.section className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-gray-700 to-white text-transparent bg-clip-text mb-16">
            Nuestro proceso de trabajo
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    icon: <IconListNumbers size={32} className="text-white" />, // Cambiamos el icono aquí
                    title: "1. Análisis y Estrategia",
                    description: "Estudiamos tu mercado y definimos objetivos claros"
                  },
                  {
                    icon: <IconPencilBolt size={32} className="text-white" />,
                    title: "2. Creación de Contenido",
                    description: "Desarrollamos contenido que conecta con tu audiencia"
                  },
                  {
                    icon: <IconReportAnalytics size={32} className="text-white" />,
                    title: "3. Implementación",
                    description: "Ejecutamos las estrategias en múltiples canales"
                  },
                  {
                    icon: <IconRocket size={32} className="text-white" />,
                    title: "4. Optimización",
                    description: "Mejora continua basada en análisis de datos"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white/5 p-6 rounded-xl">
                    {step.icon}
                    <div>
                      <h3 className="text-white font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <img 
                src={Cellphone2} 
                alt="Proceso de Marketing" 
                className="w-[80%] h-auto"
              />
            </div>
          </div>

          {/* Herramientas y Servicios */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              Tecnologías y Servicios que Utilizamos
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 p-8 rounded-xl text-center hover:bg-white/10 transition-colors">
                <IconBrandGoogle size={48} className="text-white mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Google Analytics</h4>
                <p className="text-gray-400 text-sm">Análisis detallado del comportamiento de usuarios</p>
              </div>

              <div className="bg-white/5 p-8 rounded-xl text-center hover:bg-white/10 transition-colors">
                <IconPalette size={48} className="text-white mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Illustrator</h4>
                <p className="text-gray-400 text-sm">Diseño vectorial profesional para tu marca</p>
              </div>

              <div className="bg-white/5 p-8 rounded-xl text-center hover:bg-white/10 transition-colors">
                <IconBrandMeta size={48} className="text-white mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Meta Business</h4>
                <p className="text-gray-400 text-sm">Gestión integral de redes sociales Meta</p>
              </div>

              <div className="bg-white/5 p-8 rounded-xl text-center hover:bg-white/10 transition-colors">
                <IconBrandAdobe size={48} className="text-white mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Adobe Suite</h4>
                <p className="text-gray-400 text-sm">Suite completa de diseño y edición</p>
              </div>

              <div className="bg-white/5 p-8 rounded-xl text-center hover:bg-white/10 transition-colors">
                <IconVideo size={48} className="text-white mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">CapCut Pro</h4>
                <p className="text-gray-400 text-sm">Edición profesional de video</p>
              </div>

              <div className="bg-white/5 p-8 rounded-xl text-center hover:bg-white/10 transition-colors">
                <IconServer size={48} className="text-white mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">HostGator</h4>
                <p className="text-gray-400 text-sm">Hosting confiable y de alto rendimiento</p>
              </div>

              <div className="bg-white/5 p-8 rounded-xl text-center hover:bg-white/10 transition-colors">
                <IconCode size={48} className="text-white mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Desarrollo Web</h4>
                <p className="text-gray-400 text-sm">Servicio profesional asociado con MindNT</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
          <CTAButton 
            text="Comenzar proyecto" 
            onClick={() => handleContactClick('un nuevo proyecto')}
          />
        </div>
        </div>
      </motion.section>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
