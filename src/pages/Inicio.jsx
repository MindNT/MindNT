import React, { useState } from 'react';
import GlassContainer from '../utils/glasscontainer';
import Button1 from '../utils/button1';
import Button2 from '../utils/button2';
import Button3 from '../utils/button3';
import LogoCarousel from '../components/LogoCarousel';
import Comparative from '../components/Comparative';
import Cotizador from '../components/Cotizador';
import ChatbotContainer from '../components/ChatbotContainer';
import AuxiliarConteiner from '../components/AuxiliarConteiner';
import Badged from '../components/Badged';
import Footer from '../components/Footer';
import ModalProject from '../components/ModalProject';
import ModalLlamada from '../components/ModalLlamada';
import Chat from '../components/Chat';
import ChatWidget from '../components/ChatWidget';

const Inicio = () => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isHighlighting, setIsHighlighting] = useState(false);
  
  // URL del endpoint del chat - puedes cambiar esta URL
  const chatApiEndpoint = 'https://tu-api-endpoint.com/chat';

  const openProjectModal = () => setIsProjectModalOpen(true);
  const closeProjectModal = () => setIsProjectModalOpen(false);
  
  const openCallModal = () => setIsCallModalOpen(true);
  const closeCallModal = () => setIsCallModalOpen(false);

  const openChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);

  const openWhatsApp = () => {
    window.open('https://wa.me/529993661475', '_blank');
  };

  const openWhatsAppDemo = () => {
    const mensaje = `¡Hola! 👋

Estoy interesado en solicitar una **demo de Nexxus**, su agente de inteligencia artificial.

Me gustaría conocer más sobre:
🤖 Cómo funciona Nexxus
💰 Precio mensual ($350)
🔧 Proceso de integración
📊 Características y personalización

¿Podrían agendar una demostración?

¡Gracias!`;
    
    const mensajeCodificado = encodeURIComponent(mensaje);
    const whatsappURL = `https://wa.me/529993661475?text=${mensajeCodificado}`;
    window.open(whatsappURL, '_blank');
  };

  const showNexxusWidget = () => {
    const widget = document.getElementById('nexxus-widget');
    if (widget) {
      // Show highlighting overlay
      setIsHighlighting(true);
      
      // Scroll to widget
      widget.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const logos = [
    '/images/logo1.png',
    '/images/logo2.png',
    '/images/logo3.png',
    '/images/logo4.png',
    '/images/logo5.png',
    '/images/logo6.png',
    '/images/logo7.png',
    '/images/logo8.png',
    '/images/logo9.png',
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 mt-10">
      {/* Hero Section */}
      <div id="inicio" className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 tracking-tight-apple text-white">
          Bienvenido a MindNT
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl font-light tracking-normal-apple text-white/60">
          Desarrollo web innovador y soluciones digitales
        </h2>
      </div>
      {/* Glass Container with Image */}
      <div className="mt-20">
        <GlassContainer 
          imageSrc="/images/img1.png" 
          imageSrc2="/images/img2.png" 
          alt="Imagen principal" 
          alt2="Imagen secundaria" 
          className="w-full max-w-5xl" 
        />
      </div>
      {/* Button Section */}
      <div className="mt-20">
        <button onClick={openProjectModal}>
          <Button1 text="Cotizar Proyecto" />
        </button>
      </div>
      <div className="mt-4 text-gray-300 text-center font-light tracking-normal-apple">
        Platicanos tu proyecto y te cotizamos en menos de 24 horas.
      </div>
      {/* New Section: How We Work */}
      <div id="nosotros" className="mt-20 text-center max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-white tracking-tight leading-tight">Cómo Trabajamos</h2>
          <p className="text-lg md:text-xl font-light text-white/60 max-w-3xl mx-auto leading-relaxed tracking-normal-apple">
            Nuestro proceso de desarrollo web sigue un enfoque estructurado y colaborativo para garantizar resultados de alta calidad.
          </p>
        </div>
        
        {/* Process Flow Container */}
        <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/[0.06] rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/10 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-black/[0.01] rounded-3xl"></div>
          
          {/* Process Steps */}
          <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {/* Step 1: Analizamos */}
            <div className="group relative">
              <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-white/[0.15] hover:shadow-xl hover:shadow-white/5 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img src="/icons/analizamos.svg" alt="Analizamos" className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white/90 mb-3 tracking-tight">Analizamos</h3>
                    <p className="text-sm font-light text-white/60 leading-relaxed">
                      Evaluamos tus requerimientos, objetivos y público objetivo para definir el alcance del proyecto.
                    </p>
                  </div>
                  <div className="mt-4 w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-60"></div>
                </div>
              </div>
              {/* Connector line - hidden on mobile */}
              <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>

            {/* Step 2: Diseñamos */}
            <div className="group relative">
              <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-white/[0.15] hover:shadow-xl hover:shadow-white/5 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img src="/icons/diseñamos.svg" alt="Diseñamos" className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white/90 mb-3 tracking-tight">Diseñamos</h3>
                    <p className="text-sm font-light text-white/60 leading-relaxed">
                      Creamos wireframes y diseños visuales atractivos que reflejen tu marca y mejoren la experiencia del usuario.
                    </p>
                  </div>
                  <div className="mt-4 w-8 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-60"></div>
                </div>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>

            {/* Step 3: Programamos */}
            <div className="group relative">
              <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-white/[0.15] hover:shadow-xl hover:shadow-white/5 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img src="/icons/programamos.svg" alt="Programamos" className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white/90 mb-3 tracking-tight">Programamos</h3>
                    <p className="text-sm font-light text-white/60 leading-relaxed">
                      Desarrollamos el código utilizando tecnologías modernas y mejores prácticas para asegurar funcionalidad y rendimiento.
                    </p>
                  </div>
                  <div className="mt-4 w-8 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-60"></div>
                </div>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>

            {/* Step 4: Testeamos */}
            <div className="group relative">
              <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-white/[0.15] hover:shadow-xl hover:shadow-white/5 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img src="/icons/testeamos.svg" alt="Testeamos" className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white/90 mb-3 tracking-tight">Testeamos</h3>
                    <p className="text-sm font-light text-white/60 leading-relaxed">
                      Realizamos pruebas exhaustivas para identificar y corregir errores, garantizando estabilidad y seguridad.
                    </p>
                  </div>
                  <div className="mt-4 w-8 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-60"></div>
                </div>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>

            {/* Step 5: Entregamos */}
            <div className="group relative">
              <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-white/[0.15] hover:shadow-xl hover:shadow-white/5 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img src="/icons/entregamos.svg" alt="Entregamos" className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white/90 mb-3 tracking-tight">Entregamos</h3>
                    <p className="text-sm font-light text-white/60 leading-relaxed">
                      Lanzamos el proyecto y proporcionamos soporte continuo para asegurar su éxito a largo plazo.
                    </p>
                  </div>
                  <div className="mt-4 w-8 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-semibold mt-16 mb-8 text-center tracking-tight-apple text-white">Clientes que Confían en Nosotros</h3>
      <LogoCarousel logos={logos} />
      {/* New Section: What Makes Us Different */}
      <div className="mt-20 text-center px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 tracking-tight-apple text-white">Qué nos hace diferentes</h2>
        <p className="text-lg md:text-xl font-light mb-12 max-w-4xl mx-auto tracking-normal-apple leading-relaxed text-white/60">
          En MindNT, nos distinguimos por ofrecer soluciones personalizadas y de alta calidad. A diferencia de otros, priorizamos tu satisfacción con precios competitivos, tiempos de entrega rápidos y el uso de tecnologías de vanguardia, asegurando que cada proyecto sea único y adaptado a tus necesidades específicas.
        </p>
        <Comparative 
          leftList={[
            "Precio competitivo",
            "Tiempo de desarrollo rápido",
            "Profesionalismo garantizado",
            "Tecnologías modernas",
            "No usamos plantillas"
          ]}
          rightList={[
            "Precio alto",
            "Tiempo lento",
            "Falta de profesionalismo",
            "Tecnologías obsoletas",
            "Usan plantillas genéricas"
          ]}
        />
                </div>
        <div className="mt-8 flex justify-center">
          <button onClick={openCallModal}>
            <Button1 text="Agendar llamada" />
          </button>
        </div>
        <div className="mt-4 text-gray-300 text-center font-light tracking-normal-apple text-white/60">
          Agenda una llamada para discutir tu proyecto y resolver todas tus dudas.
        </div>
      </div>
      {/* New Section: Services */}
      <div id="servicios" className="mt-20 text-center px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 tracking-tight-apple text-white">Nuestros Servicios</h2>
        <p className="text-lg md:text-xl font-light mb-12 max-w-4xl mx-auto tracking-normal-apple leading-relaxed text-white/60">
          Ofrecemos soluciones digitales completas y personalizadas para impulsar tu negocio al siguiente nivel.
        </p>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <img src="/icons/design-ui-ux.svg" alt="Landing Page" className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-medium text-white mb-2 tracking-tight-apple">Landing Page</h4>
                <p className="text-sm text-gray-300 font-light tracking-normal-apple">Páginas de aterrizaje efectivas para captar leads y conversiones.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <img src="/icons/automatizaciones.svg" alt="Automatizaciones" className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-medium text-white mb-2 tracking-tight-apple">Automatizaciones</h4>
                <p className="text-sm text-gray-300 font-light tracking-normal-apple">Soluciones automatizadas para optimizar procesos y aumentar eficiencia.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <img src="/icons/desarrollo-web.svg" alt="Páginas Web Corporativas" className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-medium text-white mb-2 tracking-tight-apple">Web Corporativas</h4>
                <p className="text-sm text-gray-300 font-light tracking-normal-apple">Sitios web profesionales que representan tu marca y servicios.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <img src="/icons/plataformas.svg" alt="E-commerce" className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-medium text-white mb-2 tracking-tight-apple">E-commerce</h4>
                <p className="text-sm text-gray-300 font-light tracking-normal-apple">Tiendas en línea completas con integración de pagos y gestión de inventario.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 md:col-span-2">
                <img src="/icons/bots.svg" alt="SEO y Marketing Digital" className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-medium text-white mb-2 tracking-tight-apple">SEO y Marketing Digital</h4>
                <p className="text-sm text-gray-300 font-light tracking-normal-apple">Optimización para motores de búsqueda y estrategias de marketing online.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <Cotizador onOpenProjectModal={openProjectModal} />
            </div>
          </div>
        </div>
      </div>
      {/* New Section: Our AI - Nexxus */}
      <div id="nexxus" className="mt-20 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 tracking-tight-apple text-white">Conoce a nuestro agente Nexxus</h2>
        <p className="text-lg md:text-xl font-light mb-12 tracking-normal-apple leading-relaxed text-white/60">
          Descubre Nexxus, nuestra inteligencia artificial avanzada que automatiza la prospección para tus clientes en tu sitio web. Es personalizable de contexto y mucho más, integrable en todos tus sitios web para soporte técnico y prospección eficiente. Agrega Nexxus a tu sitio por solo $350 mensuales.
        </p>
        <div className="flex justify-center mb-8">
          <button onClick={openWhatsAppDemo}>
            <Button1 text="Solicitar Demo" />
          </button>
        </div>
        <ChatbotContainer />
        <div className="mt-8">
          <Badged />
        </div>
      </div>
      
      {/* Closing Section */}
      <div className="mt-20 text-center px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 tracking-tight-apple text-white">¡Tu futuro digital comienza aquí!</h2>
        <p className="text-lg md:text-xl font-light mb-12 max-w-4xl mx-auto tracking-normal-apple leading-relaxed text-white/60">
          En MindNT, nos comprometemos a ofrecerte soluciones innovadoras y personalizadas que impulsen tu negocio. Estamos listos para escucharte y convertir tus ideas en realidad. ¡Contáctanos hoy y da el primer paso hacia el éxito!
        </p>
      </div>
      
      {/* New Section: Urgent Project */}
      <div id="urgente" className="mt-20">
        <AuxiliarConteiner 
          onOpenCallModal={openCallModal}
          onOpenWhatsApp={openWhatsApp}
        />
      </div>
      
            
      <Footer onOpenCallModal={openCallModal} />
      
      {/* Modales */}
      <ModalProject 
        isOpen={isProjectModalOpen} 
        onClose={closeProjectModal} 
      />
      <ModalLlamada 
        isOpen={isCallModalOpen} 
        onClose={closeCallModal} 
      />
      
      {/* Chat Widget y Chat Modal */}
      <ChatWidget onClick={openChat} />
      <Chat 
        isOpen={isChatOpen} 
        onClose={closeChat} 
        apiEndpoint={chatApiEndpoint}
      />
      
      {/* Spotlight Overlay */}
      {isHighlighting && (
        <div 
          className="fixed inset-0 z-50 cursor-pointer transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle 80px at calc(100vw - 72px) calc(100vh - 72px), transparent 0%, transparent 30%, rgba(0,0,0,0.85) 60%)`
          }}
          onClick={() => setIsHighlighting(false)}
          onTouchStart={() => setIsHighlighting(false)}
        />
      )}
      
    </>
  );
};

export default Inicio;