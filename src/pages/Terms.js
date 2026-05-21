import React, { useEffect, useState } from 'react';

function Terms() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="h-full w-full overflow-y-auto bg-black relative scroll-smooth">
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-b from-[#034EA2]/20 to-transparent rounded-full blur-[120px] opacity-30" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-t from-white/5 to-transparent rounded-full blur-[100px] opacity-20" />
            </div>

            <div className="max-w-[70rem] mx-auto px-6 pt-32 pb-24 relative z-10">
                <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full text-[10px] font-inter font-medium tracking-widest text-gray-400 uppercase mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#034EA2]"></span>
                        Legal & Compliance
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-semibold tracking-tight text-white leading-tight mb-4">
                        Términos de <span className="text-gray-500">Servicio.</span>
                    </h1>
                    <p className="text-sm md:text-base font-inter font-normal text-gray-400 max-w-2xl mb-12">
                        Reglas claras y procesos transparentes. Conoce los lineamientos técnicos y comerciales para el uso de nuestras plataformas de análisis.
                    </p>
                </div>

                <div className={`bg-[#0f0f0f]/60 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-md transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4">
                        <span className="text-xs font-inter font-medium text-gray-500 uppercase tracking-wider">Documento Oficial</span>
                        <span className="text-xs font-inter font-medium text-[#6aaff0] bg-[#034EA2]/20 px-3 py-1 rounded-full border border-[#034EA2]/30">
                            Actualizado: {new Date().toLocaleDateString('es-MX')}
                        </span>
                    </div>

                    <div className="text-gray-400 font-inter text-sm leading-relaxed space-y-10">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-3">
                                <span className="text-[#034EA2] text-sm">01.</span> Objeto del Servicio
                            </h2>
                            <p className="mb-4">MindNT provee servicios de ingeniería de datos, integraciones de software y desarrollo de plataformas de análisis (dashboards). Nos comprometemos a extraer, transformar y cargar (ETL) tu información basándonos en los requerimientos acordados en el alcance inicial del proyecto.</p>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-3">
                                <span className="text-[#034EA2] text-sm">02.</span> Responsabilidades del Cliente
                            </h2>
                            <p className="mb-4">Para garantizar el éxito del proyecto, como cliente te comprometes a:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"></div>
                                    <span>Proporcionar acceso oportuno y funcional a las fuentes de datos necesarias (APIs, bases de datos, credenciales).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"></div>
                                    <span>Garantizar que posees los derechos legales y consentimientos necesarios sobre cualquier dato que nos entregues para su procesamiento.</span>
                                </li>
                            </ul>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-3">
                                <span className="text-[#034EA2] text-sm">03.</span> Pagos y Facturación
                            </h2>
                            <p className="mb-4">A menos que se acuerde una póliza de soporte continuo, operamos bajo nuestro <strong>Sistema de 3 Pagos</strong> vinculado a los hitos del proyecto:</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#034EA2] flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Pago Inicial (Anticipo):</strong> Requerido para iniciar la auditoría y arquitectura de la solución.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#034EA2] flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Pago Intermedio:</strong> Al aprobar la estructura de la base de datos y/o modelos predictivos.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#034EA2] flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Pago Final:</strong> A la entrega total, despliegue del dashboard y capacitación de tu equipo.</span>
                                </li>
                            </ul>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-3">
                                <span className="text-[#034EA2] text-sm">04.</span> Propiedad Intelectual
                            </h2>
                            <p className="mb-4">Una vez liquidado el 100% del proyecto, los modelos de datos generados y los dashboards personalizados te pertenecen en su totalidad. Sin embargo, MindNT conserva los derechos de propiedad intelectual sobre los frameworks internos, scripts genéricos de automatización y metodologías preexistentes utilizadas para desarrollar la solución.</p>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-3">
                                <span className="text-[#034EA2] text-sm">05.</span> Limitación de Responsabilidad
                            </h2>
                            <p className="mb-4">Nuestros dashboards y modelos predictivos son herramientas de apoyo diseñadas para visualizar métricas con alta precisión. No obstante, las decisiones comerciales, financieras o estratégicas que tu empresa tome basándose en dichos reportes son responsabilidad exclusiva tuya. MindNT no se hace responsable por pérdidas directas o indirectas derivadas de la interpretación o uso de la información procesada.</p>
                            <div className="bg-[#034EA2]/10 border-l-2 border-[#034EA2] p-4 rounded-r-lg text-gray-300">
                                Las caídas del servicio provocadas por fallas en las APIs de terceros (tus fuentes de datos o proveedores externos) están fuera de nuestra jurisdicción, aunque te brindaremos soporte para reconectarlas.
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terms;
