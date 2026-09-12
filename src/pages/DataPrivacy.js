import React, { useEffect, useState } from 'react';

function DataPrivacy() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

return (
        <div className="h-full w-full overflow-y-auto relative scroll-smooth">
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-b from-[#034EA2]/20 to-transparent rounded-full blur-[120px] opacity-30" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-t from-white/5 to-transparent rounded-full blur-[100px] opacity-20" />
            </div>

            <div className="max-w-[70rem] mx-auto px-6 pt-32 pb-24 relative z-10">
                {/* Header Section */}
                <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block border border-logo-sky/30 bg-logo-sky/10 px-4 py-1.5 rounded-full text-[10px] font-inter font-medium tracking-widest text-logo-sky uppercase mb-6">
                        Legal y Cumplimiento
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-semibold tracking-tight text-white leading-tight mb-4">
                        Privacidad de <span className="text-gray-500">Datos.</span>
                    </h1>
                    <p className="text-sm md:text-base font-inter font-normal text-gray-400 max-w-2xl mb-12">
                        En MindNT construimos confianza desde el código. Nuestro compromiso es garantizar la seguridad, integridad y confidencialidad absoluta de tu información.
                    </p>
                </div>

                {/* Content Document Card */}
                <div className={`bg-[#0f0f0f]/60 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-md transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4">
                        <span className="text-xs font-inter font-medium text-gray-500 uppercase tracking-wider">Documento Oficial</span>
                        <span className="text-xs font-inter font-medium text-white bg-logo-blue px-3 py-1 rounded-full">
                            Actualizado: {new Date().toLocaleDateString('es-MX')}
                        </span>
                    </div>

                    <div className="text-gray-400 font-inter text-sm leading-relaxed space-y-10">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-3">
                                <span className="text-logo-sky text-sm">01.</span> Información que Recopilamos
                            </h2>
                            <p className="mb-4">Recopilamos únicamente la información necesaria para prestar nuestros servicios de desarrollo web, automatizaciones, eCommerce y plataformas:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Información de Contacto:</strong> Nombre, empresa, correo electrónico y número de teléfono proporcionados a través de nuestros formularios, la agendación de citas o los canales de comunicación.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Datos de Proyecto:</strong> Información y accesos que nos proporcionas explícitamente para diseñar, desarrollar o integrar los servicios contratados (contenidos, imágenes, credenciales de integración, catálogos, entre otros).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Datos de Uso:</strong> Información sobre cómo interactúas con nuestro sitio web y las plataformas que desarrollamos para ti.</span>
                                </li>
                            </ul>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-3">
                                <span className="text-logo-sky text-sm">02.</span> Uso de la Información
                            </h2>
                            <p className="mb-4">Utilizamos la información recopilada exclusivamente para los siguientes propósitos:</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"></div>
                                    <span>Ejecutar los servicios contratados (desarrollo web, automatizaciones, eCommerce o plataformas).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"></div>
                                    <span>Mantener, optimizar y asegurar las plataformas e integraciones de tu empresa.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"></div>
                                    <span>Comunicarnos contigo sobre el estado de tu proyecto, facturación y soporte técnico.</span>
                                </li>
                            </ul>
                            <div className="bg-logo-blue/10 border-l-2 border-logo-blue p-4 rounded-r-lg text-gray-300">
                                <strong>MindNT NUNCA venderá, alquilará ni comercializará tus datos ni los de tus clientes a terceros.</strong> Toda la información de tu negocio te pertenece única y exclusivamente a ti.
                            </div>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-3">
                                <span className="text-logo-sky text-sm">03.</span> Protección y Seguridad
                            </h2>
                            <p className="mb-4">La seguridad de tu información es nuestra máxima prioridad. Implementamos medidas técnicas y organizativas rigurosas, que incluyen:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Encriptación:</strong> Las comunicaciones y el acceso a tus plataformas se protegen mediante protocolos seguros (SSL/TLS), y los datos sensibles en reposo están protegidos con estándares de la industria.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Acceso Restringido:</strong> Solo los profesionales directamente involucrados en tu proyecto tienen acceso a la información, operando bajo estrictos acuerdos de confidencialidad (NDA).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Aislamiento de Entornos:</strong> La información de cada cliente se administra en entornos separados para evitar cualquier contaminación cruzada.</span>
                                </li>
                            </ul>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-3">
                                <span className="text-logo-sky text-sm">04.</span> Retención y Eliminación
                            </h2>
                            <p>Conservamos la información de contacto mientras mantengamos una relación comercial. Los datos y contenidos utilizados para desarrollar tus proyectos se almacenan únicamente durante el tiempo necesario para cumplir con el servicio o el mantenimiento contratado. Si decides terminar el servicio, eliminaremos de forma segura toda la información en nuestros servidores en un plazo máximo de 30 días tras tu solicitud, entregándote un respaldo del proyecto si así lo requieres.</p>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-3">
                                <span className="text-logo-sky text-sm">05.</span> Compartir con Terceros
                            </h2>
                            <p>No compartimos tu información con terceros, salvo con proveedores de infraestructura que utilizamos de manera estrictamente necesaria para alojar y operar las plataformas (como servicios de hosting y dominios) o con pasarelas de pago al procesar transacciones de tu eCommerce. Estos proveedores actúan únicamente como procesadores de datos bajo nuestras instrucciones directas y están sujetos a las más altas obligaciones de seguridad.</p>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-3">
                                <span className="text-logo-sky text-sm">06.</span> Tus Derechos
                            </h2>
                            <p>Tienes el control total sobre tu información. Tienes derecho a acceder, rectificar, limitar o solicitar la eliminación de tu información en cualquier momento. Para ejercer estos derechos, o si tienes alguna pregunta sobre esta política, contáctanos directamente a través de nuestros canales oficiales o nuestro número de WhatsApp de soporte.</p>
                        </section>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataPrivacy;