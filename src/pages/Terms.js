import React, { useEffect, useState } from 'react';

function Terms() {
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
                <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block border border-logo-sky/30 bg-logo-sky/10 px-4 py-1.5 rounded-full text-[10px] font-inter font-medium tracking-widest text-logo-sky uppercase mb-6">
                        Legal y Cumplimiento
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-semibold tracking-tight text-white leading-tight mb-4">
                        Términos de <span className="text-gray-500">Servicio.</span>
                    </h1>
                    <p className="text-sm md:text-base font-inter font-normal text-gray-400 max-w-2xl mb-12">
                        Reglas claras y procesos transparentes. Conoce los lineamientos técnicos y comerciales para contratar y usar nuestros servicios digitales.
                    </p>
                </div>

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
                                <span className="text-logo-sky text-sm">01.</span> Objeto del Servicio
                            </h2>
                            <p className="mb-4">MindNT diseñará, desarrollará e implementará soluciones digitales a la medida de tu negocio en las siguientes categorías:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Desarrollo Web:</strong> Sitios y aplicaciones web a la medida, con panel de administración, diseño responsivo y optimización de SEO y velocidad.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Automatizaciones:</strong> Flujos automáticos y sincronización entre las herramientas de tu operación para eliminar tareas repetitivas.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">eCommerce:</strong> Tiendas en línea completas con catálogo, carrito, pasarela de pagos, envíos e integraciones.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Plataformas:</strong> Sistemas y portales digitales a la medida que estructuran tu operación en un solo lugar.</span>
                                </li>
                            </ul>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-3">
                                <span className="text-logo-sky text-sm">02.</span> Responsabilidades del Cliente
                            </h2>
                            <p className="mb-4">Para garantizar el éxito del proyecto, como cliente te comprometes a:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"></div>
                                    <span>Proporcionar de manera oportuna los contenidos, textos, imágenes, marcas y accesos necesarios para el desarrollo del proyecto.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"></div>
                                    <span>Garantizar que posees los derechos legales sobre los materiales y datos de terceros que nos entregues para incorporarlos a tus plataformas.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"></div>
                                    <span>Revisar y aprobar los entregables dentro de los tiempos acordados para no retrasar el calendario del proyecto.</span>
                                </li>
                            </ul>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-3">
                                <span className="text-logo-sky text-sm">03.</span> Pagos y Facturación
                            </h2>
                            <p className="mb-4">Salvo que se acuerde un plan distinto, los proyectos se facturan bajo nuestro <strong>Sistema de 3 Pagos</strong> vinculado a los hitos del proyecto:</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Pago Inicial (Anticipo):</strong> Requerido para iniciar el diagnóstico, la propuesta y la arquitectura de la solución.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Pago Intermedio:</strong> Al aprobar el diseño de la plataforma y/o la estructura de las integraciones.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Pago Final:</strong> A la entrega, despliegue y capacitación de tu equipo.</span>
                                </li>
                            </ul>
                            <p className="text-gray-500">Los servicios de mantenimiento, hosting, dominios o actualizaciones continuas se cotizan y facturan por separado, bajo el acuerdo que corresponda.</p>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-3">
                                <span className="text-logo-sky text-sm">04.</span> Propiedad Intelectual
                            </h2>
                            <p className="mb-4">Una vez liquidado el 100% del proyecto, los sitios, aplicaciones, plataformas y diseños personalizados desarrollados para ti te pertenecen en su totalidad. Sin embargo, MindNT conserva los derechos de propiedad intelectual sobre sus frameworks internos, librerías, componentes genéricos y metodologías preexistentes utilizadas para desarrollar la solución.</p>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-3">
                                <span className="text-logo-sky text-sm">05.</span> Limitación de Responsabilidad
                            </h2>
                            <p className="mb-4">Hacemos tu desarrollo con los más altos estándares de calidad y buenas prácticas. No obstante, las decisiones comerciales, financieras o de operación que tomes con base en tus plataformas son responsabilidad exclusiva tuya. MindNT no se hace responsable por pérdidas directas o indirectas derivadas del mal uso de las plataformas entregadas, de modificaciones realizadas por terceros sin nuestro consentimiento, o de la interpretación de la información que administres en tus sistemas.</p>
                            <div className="bg-logo-blue/10 border-l-2 border-logo-blue p-4 rounded-r-lg text-gray-300">
                                Las caídas o fallas provocadas por proveedores de terceros (hosting, dominios, pasarelas de pago u otras plataformas externas) están fuera de nuestra jurisdicción, aunque te brindaremos soporte para restablecer la operación.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terms;