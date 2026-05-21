import React, { useEffect, useState } from 'react';
import ShootingStar from '../components/ShootingStar';

function HistoriasMobile() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="min-h-screen bg-black overflow-x-hidden relative flex flex-col px-6 pt-36 pb-16">
            <ShootingStar />
            
            <div className="max-w-md mx-auto relative z-10 w-full flex flex-col items-center">
                
                {/* 1. Hero Section */}
                <div 
                    className={`
                        text-center mb-12
                        transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    <span className="inline-block border border-white/10 bg-white/5 px-4 py-1.5 rounded-full text-[10px] font-inter font-medium tracking-widest text-gray-400 uppercase mb-6">
                        Conoce al Equipo
                    </span>
                    
                    <h1 className="text-3xl font-inter font-semibold tracking-tight text-white leading-tight mb-4">
                        Talento global.<br />
                        <span className="text-gray-500">
                            Ingeniería sin fronteras.
                        </span>
                    </h1>

                    <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed">
                        Unimos a los mejores Ingenieros de Datos y Desarrolladores Web de Argentina y México para construir la infraestructura digital del mañana.
                    </p>
                </div>

                {/* 2. Core Pillars - Stacked */}
                <div 
                    className={`
                        w-full flex flex-col gap-6 mb-10
                        transition-all duration-1000 ease-out delay-200
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    {/* Pillar 1 */}
                    <div className="flex flex-col p-6 rounded-3xl bg-[#0f0f0f] border border-white/10">
                        <div className="w-10 h-10 rounded-xl bg-white/5 text-gray-300 flex items-center justify-center mb-4">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="7" r="4"></circle>
                                <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-inter font-semibold text-white mb-2 tracking-tight">Talento Humano</h3>
                        <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed">Apasionados por los datos. Nuestro equipo aporta pensamiento crítico y creatividad analítica a cada proyecto.</p>
                    </div>

                    {/* Pillar 2 */}
                    <div className="flex flex-col p-6 rounded-3xl bg-[#0f0f0f] border border-white/10">
                        <div className="w-10 h-10 rounded-xl bg-white/5 text-gray-300 flex items-center justify-center mb-4">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                <polyline points="2 17 12 22 22 17"></polyline>
                                <polyline points="2 12 12 17 22 12"></polyline>
                            </svg>
                        </div>
                        <h3 className="text-xl font-inter font-semibold text-white mb-2 tracking-tight">Nuevas Tecnologías</h3>
                        <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed">Incorporamos herramientas de última generación e IA para garantizar reportes muchísimo más precisos y certeros.</p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="flex flex-col p-6 rounded-3xl bg-[#0f0f0f] border border-white/10">
                        <div className="w-10 h-10 rounded-xl bg-white/5 text-gray-300 flex items-center justify-center mb-4">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-inter font-semibold text-white mb-2 tracking-tight">Colaboración Activa</h3>
                        <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed">Trabajamos hombro a hombro contigo. Entendemos tu negocio a fondo para que cada métrica resuelva un problema real.</p>
                    </div>
                </div>

                {/* 3. Bento Grid - Stacked for mobile */}
                <div 
                    className={`
                        w-full flex flex-col gap-6
                        transition-all duration-1000 ease-out delay-400
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                >
                    {/* Big Card */}
                    <div className="flex flex-col p-8 rounded-3xl bg-[#0f0f0f] border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#034EA2] rounded-full blur-[60px] opacity-15"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-inter font-semibold tracking-tight text-white mb-4">Un equipo híbrido.</h2>
                            <p className="text-sm font-inter font-normal text-gray-400 leading-relaxed">
                                No somos una agencia tradicional. Operamos como un escuadrón técnico de alto rendimiento. Nuestra capacidad de integrar bases de datos complejas nos permite entregar productos de extremo a extremo, fusionando el rigor de ingeniería en <strong>Argentina</strong> con la agilidad y escala de <strong>México</strong>.
                            </p>
                        </div>
                    </div>

                    {/* Small Card 2 */}
                    <div className="flex flex-col p-8 rounded-3xl bg-[#0f0f0f] border border-white/10">
                        <h3 className="text-[10px] font-inter font-semibold tracking-widest text-[#034EA2] uppercase mb-3">Nuestra Filosofía</h3>
                        <p className="text-sm font-inter font-normal text-gray-300 leading-relaxed italic">
                            "Creemos que el código limpio y los datos precisos transforman industrias. Nuestra obsesión no es entregar rápido, es construir con excelencia e impacto."
                        </p>
                        <div className="mt-6 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                            <span className="text-[10px] font-inter font-medium text-gray-500">MindNT Eng</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
                        absolute top-1/4 -right-1/4 w-96 h-96
                        bg-gradient-to-br from-[#034EA2]/20 to-transparent
                        rounded-full blur-3xl
                        transition-opacity duration-2000 ease-out delay-500
                        ${isVisible ? 'opacity-30' : 'opacity-0'}
                    `}
                />
            </div>
        </div>
    );
}

export default HistoriasMobile;
