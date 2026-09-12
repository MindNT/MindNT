import React, { useEffect, useState } from 'react';

function DataPrivacyMobile() {
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
                {/* Header Section */}
                <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <span className="inline-block border border-logo-sky/30 bg-logo-sky/10 px-4 py-1.5 rounded-full text-[10px] font-inter font-medium tracking-widest text-logo-sky uppercase mb-5">
                        Legal y Cumplimiento
                    </span>
                    <h1 className="text-3xl md:text-4xl font-inter font-semibold tracking-tight text-white leading-tight mb-4">
                        Privacidad de <span className="text-gray-500">Datos.</span>
                    </h1>
                    <p className="text-sm font-inter font-normal text-gray-400 mb-8">
                        En MindNT construimos confianza desde el código. Garantizamos la seguridad e integridad absoluta de tu información.
                    </p>
                </div>

                {/* Content Document Card */}
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
                                <span className="text-logo-sky text-xs">01.</span> Información
                            </h2>
                            <p className="mb-3">Recopilamos lo necesario para prestar nuestros servicios de desarrollo web, automatizaciones, eCommerce y plataformas.</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Contacto:</strong> Nombre, empresa, correo y teléfono.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Datos de Proyecto:</strong> Contenidos y accesos que nos proporcionas para desarrollar e integrar tus plataformas.</span>
                                </li>
                            </ul>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-lg text-white font-semibold mb-3 flex items-center gap-2">
                                <span className="text-logo-sky text-xs">02.</span> Uso
                            </h2>
                            <p className="mb-4">Para ejecutar los servicios contratados, mantener tus plataformas y comunicarnos contigo sobre tu proyecto.</p>
                            <div className="bg-logo-blue/10 border-l-2 border-logo-blue p-4 rounded-r-lg text-gray-300 text-xs">
                                <strong>NUNCA venderemos ni comercializaremos tus datos.</strong> Te pertenecen única y exclusivamente a ti.
                            </div>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-lg text-white font-semibold mb-3 flex items-center gap-2">
                                <span className="text-logo-sky text-xs">03.</span> Seguridad
                            </h2>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Encriptación:</strong> Comunicaciones seguras (SSL/TLS) y datos protegidos.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-logo-blue flex-shrink-0"></div>
                                    <span><strong className="text-gray-200">Aislamiento:</strong> Entornos separados para cada cliente.</span>
                                </li>
                            </ul>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-lg text-white font-semibold mb-3 flex items-center gap-2">
                                <span className="text-logo-sky text-xs">04.</span> Retención
                            </h2>
                            <p>Eliminaremos de forma segura la información en un plazo máximo de 30 días tras finalizar el servicio, entregándote un respaldo si lo solicitas.</p>
                        </section>

                        <div className="w-full h-px bg-white/5"></div>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-lg text-white font-semibold mb-3 flex items-center gap-2">
                                <span className="text-logo-sky text-xs">05.</span> Derechos
                            </h2>
                            <p>Tienes el control total sobre tu información. Puedes solicitar su acceso, corrección o eliminación en cualquier momento por nuestros canales oficiales.</p>
                        </section>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataPrivacyMobile;