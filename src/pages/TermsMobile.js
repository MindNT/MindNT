import React, { useEffect, useState } from 'react';

function TermsMobile() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="h-full w-full overflow-y-auto relative scroll-smooth">
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-gradient-to-b from-[#034EA2]/20 to-transparent rounded-full blur-[100px] opacity-30" />
            </div>

            <div className="px-6 pt-28 pb-32 relative z-10">
                <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <span className="inline-block border border-logo-sky/30 bg-logo-sky/10 px-4 py-1.5 rounded-full text-[10px] font-inter font-medium tracking-widest text-logo-sky uppercase mb-5">
                        Legal y Cumplimiento
                    </span>
                    <h1 className="text-3xl md:text-4xl font-inter font-semibold tracking-tight text-white leading-tight mb-4">
                        Términos de <span className="text-gray-500">Servicio.</span>
                    </h1>
                    <p className="text-sm font-inter font-normal text-gray-400 mb-8">
                        Reglas claras y procesos transparentes para contratar nuestros servicios digitales.
                    </p>
                </div>

                <div className={`bg-[#0f0f0f]/80 border border-white/10 p-6 rounded-[2rem] backdrop-blur-md transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <div className="flex flex-col gap-2 border-b border-white/10 pb-5 mb-6">
                        <span className="text-[10px] font-inter font-medium text-gray-500 uppercase tracking-wider">Documento Oficial</span>
                        <span className="text-[10px] font-inter font-medium text-white bg-logo-blue px-3 py-1 rounded-full w-fit">
                            Actualizado: {new Date().toLocaleDateString('es-MX')}
                        </span>
                    </div>

                    <div className="text-gray-400 font-inter text-sm leading-relaxed space-y-8">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-lg text-white font-semibold mb-3 flex items-center gap-2">
                                <span className="text-logo-sky text-xs">01.</span> Objeto del Servicio
                            </h2>
                            <p className="mb-3">Creamos soluciones digitales a la medida:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Desarrollo Web:</strong> Sitios y aplicaciones a la medida.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Automatizaciones:</strong> Flujos automáticos y sincronización entre herramientas.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">eCommerce:</strong> Tiendas en línea con catálogo, carrito y pagos.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Plataformas:</strong> Sistemas y portales digitales a la medida.</span>
                                </li>
                            </ul>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-lg text-white font-semibold mb-3 flex items-center gap-2">
                                <span className="text-logo-sky text-xs">02.</span> Tus Responsabilidades
                            </h2>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"></div>
                                    <span>Proporcionar contenidos, imágenes y accesos oportunos para el proyecto.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"></div>
                                    <span>Garantizar que posees los derechos legales sobre los materiales que entregas.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"></div>
                                    <span>Aprobar los entregables dentro de los tiempos acordados.</span>
                                </li>
                            </ul>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-lg text-white font-semibold mb-3 flex items-center gap-2">
                                <span className="text-logo-sky text-xs">03.</span> Pagos y Facturación
                            </h2>
                            <p className="mb-4">Los proyectos se facturan bajo nuestro <strong>Sistema de 3 Pagos</strong>:</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Anticipo:</strong> Para iniciar el diagnóstico y propuesta.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Intermedio:</strong> Al aprobar el diseño y las integraciones.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Final:</strong> A la entrega, despliegue y capacitación.</span>
                                </li>
                            </ul>
                            <p className="text-gray-500">Los servicios de mantenimiento, hosting o actualizaciones se facturan por separado.</p>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-lg text-white font-semibold mb-3 flex items-center gap-2">
                                <span className="text-logo-sky text-xs">04.</span> Propiedad Intelectual
                            </h2>
                            <p className="mb-4">Una vez liquidado el proyecto, los sitios, aplicaciones y diseños te pertenecen. MindNT conserva los derechos de sus frameworks internos y componentes genéricos.</p>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-lg text-white font-semibold mb-3 flex items-center gap-2">
                                <span className="text-logo-sky text-xs">05.</span> Limitación de Responsabilidad
                            </h2>
                            <p className="mb-4">Las decisiones que tu empresa tome con base en tus plataformas son tu responsabilidad exclusiva.</p>
                            <div className="bg-logo-blue/10 border-l-2 border-logo-blue p-4 rounded-r-lg text-gray-300 text-xs">
                                Las fallas de proveedores externos (hosting, dominios, pasarelas de pago) están fuera de nuestra jurisdicción, aunque te brindaremos soporte.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TermsMobile;