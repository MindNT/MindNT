import React from 'react';
import Footer from '../components/Footer';

const Terminos = () => {
  return (
    <div className="min-h-screen text-white px-4 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight-apple text-white">
            Términos y Condiciones de Servicio
          </h1>
          <div className="text-lg md:text-xl font-light tracking-normal-apple text-white/60 space-y-2">
            <p>Última actualización: 15 de diciembre de 2024</p>
            <p>Contacto: WhatsApp 999 366 1475 | mindntlabs@gmail.com</p>
          </div>
        </div>

        {/* Content Container */}
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/[0.06] rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/10">
          <div className="prose prose-invert max-w-none">
            
            {/* Acceptance of Terms */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">1. Aceptación de los Términos</h2>
              <p className="text-white/80 leading-relaxed mb-4 font-light">
                Al acceder a este sitio web, solicitar cotización, contratar servicios o interactuar con <strong>MindNT</strong> por cualquier medio 
                (incluyendo WhatsApp, correo electrónico o formularios en línea), usted acepta de forma irrevocable los presentes Términos y Condiciones. 
                Si no está de acuerdo con alguno de estos términos, le solicitamos abstenerse de utilizar nuestros servicios.
              </p>
              <p className="text-white/80 leading-relaxed font-light">
                Estos Términos pueden ser modificados en cualquier momento. Las versiones actualizadas se publicarán en esta página. 
                Se considera que el cliente acepta los cambios al continuar utilizando nuestros servicios después de su publicación.
              </p>
            </section>

            {/* Service Description */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">2. Descripción de los Servicios</h2>
              <p className="text-white/80 leading-relaxed mb-4 font-light">
                <strong>MindNT</strong> se dedica al desarrollo, diseño e implementación de soluciones tecnológicas personalizadas, 
                incluyendo pero no limitado a:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 font-light ml-4">
                <li>Desarrollo de sitios y aplicaciones web</li>
                <li>Integración de inteligencia artificial (IA)</li>
                <li>Automatizaciones de procesos</li>
                <li>Desarrollo e implementación de chatbots y asistentes virtuales</li>
                <li>Diseño de interfaces y experiencia de usuario (UI/UX)</li>
                <li>Mantenimiento y soporte técnico</li>
              </ul>
              <p className="text-white/80 leading-relaxed mt-4 font-light">
                Todos los servicios se prestan bajo especificaciones acordadas previamente con el cliente, mediante propuesta, 
                contrato o documento equivalente.
              </p>
            </section>

            {/* Contracting Process */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">3. Proceso de Contratación</h2>
              <div className="space-y-4 text-white/80 font-light">
                <p><strong>3.1.</strong> Toda contratación inicia con una solicitud de información o cotización por parte del cliente.</p>
                <p><strong>3.2.</strong> MindNT emitirá una propuesta técnica y económica detallada, la cual deberá ser aceptada por escrito 
                (vía correo electrónico, WhatsApp o firma digital) para considerarse válida.</p>
                <p><strong>3.3.</strong> La aceptación de la propuesta implica la aceptación de los presentes Términos y Condiciones, 
                así como de cualquier anexo o documento complementario.</p>
              </div>
            </section>

            {/* Payments and Billing */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">4. Pagos y Facturación</h2>
              <div className="space-y-4 text-white/80 font-light">
                <p><strong>4.1.</strong> Los pagos se realizarán conforme a lo establecido en la propuesta aceptada. 
                Los métodos de pago aceptados serán informados en cada caso.</p>
                <p><strong>4.2.</strong> En caso de incumplimiento en los pagos, MindNT se reserva el derecho de suspender los servicios 
                hasta la regularización de la situación.</p>
                <p><strong>4.3.</strong> Los precios no incluyen impuestos, salvo que se indique lo contrario. 
                Todos los impuestos aplicables serán responsabilidad del cliente.</p>
                <p><strong>4.4.</strong> Las facturas se emitirán conforme a la legislación fiscal vigente en México.</p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">5. Propiedad Intelectual</h2>
              <div className="space-y-4 text-white/80 font-light">
                <p><strong>5.1.</strong> Todo el código fuente, diseños, gráficos, estructuras, algoritmos de IA, automatizaciones y elementos 
                creados por MindNT durante la prestación del servicio son de su propiedad intelectual, salvo pacto expreso en contrario.</p>
                <p><strong>5.2.</strong> Al cliente se le otorga una licencia de uso no exclusiva, intransferible y limitada al dominio o entorno 
                contratado, una vez que el proyecto haya sido pagado en su totalidad.</p>
                <p><strong>5.3.</strong> El cliente garantiza que todo material, imagen, texto o contenido proporcionado para el desarrollo del 
                proyecto cuenta con los derechos de uso necesarios. MindNT no asume responsabilidad por infracciones de derechos de autor 
                derivadas de contenido aportado por el cliente.</p>
              </div>
            </section>

            {/* Confidentiality */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">6. Confidencialidad</h2>
              <p className="text-white/80 leading-relaxed font-light">
                Ambas partes se comprometen a mantener la confidencialidad de toda información técnica, comercial o estratégica 
                intercambiada durante la relación contractual. Esta obligación persistirá incluso después de la finalización del contrato.
              </p>
            </section>

            {/* AI and Automation Usage */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">7. Uso de Inteligencia Artificial y Automatizaciones</h2>
              <div className="space-y-4 text-white/80 font-light">
                <p><strong>7.1.</strong> Cuando se implementen soluciones basadas en inteligencia artificial, automatizaciones o bots, 
                el cliente reconoce que estos sistemas pueden requerir ajustes, entrenamiento y supervisión continua para optimizar su desempeño.</p>
                <p><strong>7.2.</strong> MindNT no garantiza resultados absolutos o infalibles derivados del uso de IA, ya que su comportamiento 
                puede depender de variables externas, calidad de los datos de entrada o cambios en las plataformas de terceros.</p>
                <p><strong>7.3.</strong> El cliente se compromete a utilizar las herramientas entregadas de forma ética y conforme a la legislación 
                aplicable, eximiendo a MindNT de responsabilidad por mal uso o aplicaciones no autorizadas.</p>
              </div>
            </section>

            {/* Delivery and Review */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">8. Entrega y Revisión</h2>
              <div className="space-y-4 text-white/80 font-light">
                <p><strong>8.1.</strong> Las entregas se realizarán conforme al cronograma acordado en la propuesta. Cualquier retraso causado 
                por el cliente (falta de información, aprobaciones tardías, cambios de alcance) podrá modificar las fechas de entrega sin 
                responsabilidad para MindNT.</p>
                <p><strong>8.2.</strong> El cliente dispone de un plazo de 7 días hábiles desde la entrega para reportar observaciones o 
                correcciones menores. Transcurrido este plazo, se considerará aceptado el trabajo entregado.</p>
                <p><strong>8.3.</strong> Cambios fuera del alcance original serán cotizados y aprobados por separado.</p>
              </div>
            </section>

            {/* Warranties and Support */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">9. Garantías y Soporte</h2>
              <div className="space-y-4 text-white/80 font-light">
                <p><strong>9.1.</strong> MindNT garantiza que los servicios se prestarán con profesionalismo y conforme a las buenas prácticas del sector.</p>
                <p><strong>9.2.</strong> Se incluye un período de garantía de 30 días naturales posteriores a la entrega final del proyecto, 
                durante el cual se corregirán errores funcionales sin costo adicional.</p>
                <p><strong>9.3.</strong> El soporte técnico posterior al período de garantía se ofrecerá bajo planes de mantenimiento o por contratación adicional.</p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">10. Limitación de Responsabilidad</h2>
              <p className="text-white/80 leading-relaxed mb-4 font-light">
                MindNT no será responsable por:
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2 font-light ml-4 mb-4">
                <li>Daños indirectos, incidentales, especiales o consecuentes derivados del uso o imposibilidad de uso de los servicios.</li>
                <li>Interrupciones en el servicio causadas por fuerza mayor, fallas de infraestructura de terceros, proveedores de hosting o plataformas externas.</li>
                <li>Pérdidas de datos, ingresos o reputación, salvo dolo o negligencia grave comprobada.</li>
              </ul>
              <p className="text-white/80 leading-relaxed font-light">
                La responsabilidad total de MindNT en cualquier reclamación relacionada con los servicios no excederá el monto total 
                pagado por el cliente en los últimos seis meses.
              </p>
            </section>

            {/* Contract Termination */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">11. Terminación del Contrato</h2>
              <p className="text-white/80 leading-relaxed font-light">
                Cualquiera de las partes podrá dar por terminado el contrato con un preaviso de 15 días por escrito, en caso de incumplimiento 
                material de cualquiera de las obligaciones aquí establecidas. En caso de terminación anticipada por parte del cliente, 
                se facturará el trabajo realizado hasta la fecha, más los gastos incurridos.
              </p>
            </section>

            {/* Applicable Law */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">12. Ley Aplicable y Jurisdicción</h2>
              <p className="text-white/80 leading-relaxed font-light">
                Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de los Estados Unidos Mexicanos. 
                Para cualquier controversia derivada de la interpretación o ejecución de este acuerdo, las partes se someterán a los 
                tribunales competentes de la Ciudad de Mérida, Yucatán.
              </p>
            </section>

            {/* Communications */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">13. Comunicaciones</h2>
              <p className="text-white/80 leading-relaxed font-light">
                Todas las comunicaciones oficiales entre las partes se realizarán por correo electrónico o WhatsApp al número proporcionado 
                por el cliente en su registro o propuesta. Se considerará válida la recepción de mensajes en estos canales.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">14. Contacto</h2>
              <p className="text-white/80 leading-relaxed mb-4 font-light">
                Para cualquier consulta relacionada con estos Términos y Condiciones, por favor comuníquese con nosotros:
              </p>
              <div className="space-y-2 text-white/80 font-light">
                <p>WhatsApp: <a href="https://wa.me/529993661475" className="text-white hover:text-white/80 transition-colors">999 366 1475</a></p>
                <p>Email: <a href="mailto:mindntlabs@gmail.com" className="text-white hover:text-white/80 transition-colors">mindntlabs@gmail.com</a></p>
              </div>
            </section>

            {/* Closing Statement */}
            <section className="text-center py-8 border-t border-white/10">
              <p className="text-white/80 font-light text-lg">
                En <strong>MindNT</strong>, construimos relaciones transparentes y duraderas con nuestros clientes.
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

export default Terminos;