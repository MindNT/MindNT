import React from 'react';
import Footer from '../components/Footer';

const Politica = () => {
  return (
    <div className="min-h-screen text-white px-4 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight-apple text-white">
            Políticas de Privacidad
          </h1>
          <div className="text-lg md:text-xl font-light tracking-normal-apple text-white/60 space-y-2">
            <p>Última actualización: 15 de diciembre de 2024</p>
            <p>Contacto: WhatsApp 999 366 1475 | mindntlabs@gmail.com</p>
          </div>
        </div>

        {/* Content Container */}
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/[0.06] rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/10">
          <div className="prose prose-invert max-w-none">
            
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">1. Introducción</h2>
              <p className="text-white/80 leading-relaxed mb-4 font-light">
                En <strong>MindNT</strong>, nos especializamos en el desarrollo web innovador, integrando inteligencia artificial (IA), 
                automatizaciones, chatbots, diseño web y soluciones tecnológicas personalizadas. Valoramos profundamente tu privacidad 
                y nos comprometemos a proteger tus datos personales con el máximo rigor.
              </p>
              <p className="text-white/80 leading-relaxed font-light">
                Este documento explica cómo recopilamos, usamos, almacenamos y protegemos tu información cuando visitas nuestro sitio web, 
                utilizas nuestros servicios o te comunicas con nosotros.
              </p>
            </section>

            {/* Data Collection */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">2. ¿Qué datos personales recopilamos?</h2>
              <p className="text-white/80 leading-relaxed mb-6 font-light">
                Podemos recopilar los siguientes tipos de información:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-white">a) Datos que tú nos proporcionas:</h3>
                  <ul className="list-disc list-inside text-white/80 space-y-2 font-light ml-4">
                    <li>Nombre completo</li>
                    <li>Correo electrónico</li>
                    <li>Número de teléfono (WhatsApp)</li>
                    <li>Nombre de tu empresa o proyecto</li>
                    <li>Mensajes, requerimientos o briefings enviados por formularios, WhatsApp o correo</li>
                    <li>Información de pago (si aplica, procesada de forma segura a través de pasarelas certificadas)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-white">b) Datos que recopilamos automáticamente:</h3>
                  <ul className="list-disc list-inside text-white/80 space-y-2 font-light ml-4">
                    <li>Dirección IP</li>
                    <li>Tipo de navegador y dispositivo</li>
                    <li>Páginas visitadas en nuestro sitio</li>
                    <li>Tiempo de navegación</li>
                    <li>Cookies y tecnologías similares</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-white">c) Datos generados por IA o automatizaciones:</h3>
                  <p className="text-white/80 leading-relaxed font-light">
                    Si utilizas herramientas o bots desarrollados por nosotros, podemos recopilar interacciones, preferencias o respuestas 
                    para mejorar la experiencia y personalizar servicios. <strong>Nunca compartimos ni vendemos estos datos a terceros 
                    sin tu consentimiento explícito.</strong>
                  </p>
                </div>
              </div>
            </section>

            {/* Data Usage */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">3. ¿Para qué usamos tus datos?</h2>
              <p className="text-white/80 leading-relaxed mb-6 font-light">
                Utilizamos tu información únicamente con los siguientes propósitos:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 font-light ml-4">
                <li>Contactarte y responder a tus consultas</li>
                <li>Enviar presupuestos, propuestas o facturas</li>
                <li>Desarrollar, personalizar y entregar los servicios contratados</li>
                <li>Mejorar nuestros productos, bots e IA mediante análisis de uso (siempre anonimizados cuando sea posible)</li>
                <li>Enviar comunicaciones comerciales (solo si das tu consentimiento)</li>
                <li>Cumplir con obligaciones legales o contractuales</li>
              </ul>
            </section>

            {/* Legal Basis */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">4. Base legal para el tratamiento de datos</h2>
              <p className="text-white/80 leading-relaxed mb-4 font-light">
                Tratamos tus datos bajo una o más de las siguientes bases legales:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 font-light ml-4">
                <li><strong>Consentimiento:</strong> Cuando aceptas recibir comunicaciones o utilizar herramientas con IA.</li>
                <li><strong>Ejecución de contrato:</strong> Para cumplir con los servicios que contratas.</li>
                <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios, prevenir fraudes o analizar el uso del sitio web.</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">5. ¿Con quién compartimos tus datos?</h2>
              <p className="text-white/80 leading-relaxed mb-4 font-light">
                No vendemos, alquilamos ni compartimos tus datos personales con terceros <strong>con fines comerciales</strong>.
              </p>
              <p className="text-white/80 leading-relaxed mb-4 font-light">
                Solo los compartimos cuando sea estrictamente necesario:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 font-light ml-4">
                <li>Con proveedores de servicios (ej. hosting, pasarelas de pago, plataformas de email marketing) que cumplen con altos estándares de seguridad y privacidad.</li>
                <li>Si la ley lo exige o para proteger nuestros derechos legales.</li>
                <li>En caso de fusión o adquisición, con previo aviso y garantizando la continuidad de la protección de tus datos.</li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">6. Uso de Cookies y Tecnologías Similares</h2>
              <p className="text-white/80 leading-relaxed mb-4 font-light">
                Usamos cookies para:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 font-light ml-4">
                <li>Mejorar la experiencia de navegación</li>
                <li>Analizar el tráfico y comportamiento en el sitio</li>
                <li>Personalizar contenido y recordar preferencias</li>
              </ul>
              <p className="text-white/80 leading-relaxed mt-4 font-light">
                Puedes gestionar o desactivar las cookies desde la configuración de tu navegador. Algunas funciones del sitio 
                podrían verse limitadas si las desactivas.
              </p>
            </section>

            {/* International Transfers */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">7. Transferencias internacionales</h2>
              <p className="text-white/80 leading-relaxed font-light">
                Si utilizamos servicios en la nube o plataformas globales (como AWS, Google Cloud, etc.), tus datos podrían 
                almacenarse en servidores fuera de tu país. Garantizamos que estos proveedores cumplen con normativas de protección 
                de datos internacionalmente reconocidas (como el Escudo de Privacidad UE-EE.UU. o cláusulas contractuales estándar).
              </p>
            </section>

            {/* User Rights */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">8. Tus derechos como usuario</h2>
              <p className="text-white/80 leading-relaxed mb-4 font-light">
                Tienes derecho a:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 font-light ml-4">
                <li>Acceder a tus datos personales</li>
                <li>Rectificarlos si están incorrectos</li>
                <li>Solicitar su eliminación (salvo obligaciones legales)</li>
                <li>Limitar u oponerte a su tratamiento</li>
                <li>Solicitar la portabilidad de tus datos</li>
                <li>Revocar tu consentimiento en cualquier momento</li>
                <li>Presentar una queja ante la autoridad de protección de datos de tu país</li>
              </ul>
              <p className="text-white/80 leading-relaxed mt-6 font-light">
                Para ejercer cualquiera de estos derechos, escríbenos a: <strong>mindntlabs@gmail.com</strong> o por WhatsApp al 
                <strong> 999 366 1475</strong>
              </p>
              <p className="text-white/80 leading-relaxed mt-2 font-light">
                Responderemos en un plazo máximo de 30 días.
              </p>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">9. Seguridad de tus datos</h2>
              <p className="text-white/80 leading-relaxed mb-4 font-light">
                Implementamos medidas técnicas y organizativas para proteger tu información contra accesos no autorizados, pérdida, 
                alteración o destrucción. Esto incluye cifrado, firewalls, autenticación de dos factores y auditorías periódicas.
              </p>
              <p className="text-white/80 leading-relaxed font-light">
                Sin embargo, recuerda que ningún sistema es 100% infalible —por eso también te recomendamos mantener tus contraseñas 
                seguras y no compartir información sensible innecesariamente.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">10. Conservación de datos</h2>
              <p className="text-white/80 leading-relaxed font-light">
                Mantendremos tus datos personales solo durante el tiempo necesario para cumplir con los fines descritos en esta política, 
                salvo que la ley exija un plazo mayor (por ejemplo, facturación o contabilidad).
              </p>
            </section>

            {/* Policy Changes */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">11. Cambios en esta política</h2>
              <p className="text-white/80 leading-relaxed mb-4 font-light">
                Podemos actualizar estas políticas ocasionalmente para reflejar cambios en nuestros servicios o en la legislación. 
                Te notificaremos de cambios importantes mediante nuestro sitio web o por correo electrónico.
              </p>
              <p className="text-white/80 leading-relaxed font-light">
                Te recomendamos revisar esta página periódicamente.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">12. Contáctanos</h2>
              <p className="text-white/80 leading-relaxed mb-4 font-light">
                ¿Tienes preguntas sobre tu privacidad? ¡Estamos aquí para ayudarte!
              </p>
              <div className="space-y-2 text-white/80 font-light">
                <p>WhatsApp: <a href="https://wa.me/529993661475" className="text-white hover:text-white/80 transition-colors">999 366 1475</a></p>
                <p>Email: <a href="mailto:mindntlabs@gmail.com" className="text-white hover:text-white/80 transition-colors">mindntlabs@gmail.com</a></p>
              </div>
            </section>

            {/* Closing Statement */}
            <section className="text-center py-8 border-t border-white/10">
              <p className="text-white/80 font-light text-lg">
                En <strong>MindNT</strong>, protegemos lo importante: <strong>tu privacidad.</strong>
              </p>
            </section>

          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Politica;