import React from 'react';
import ReactDOM from 'react-dom';
import { parseDriveImage } from '../utils/parseDriveImage';

function BlogModal({ isOpen, onClose, post }) {
    if (!isOpen || !post) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[9999] flex items-start justify-center p-6 h-screen overflow-y-auto">
            {/* Fondo completamente negro */}
            <div 
                className="fixed inset-0 bg-black transition-opacity"
            ></div>

            {/* Botón de regresar (Esquina superior izquierda - fijo en pantalla) */}
            <button
                onClick={onClose}
                className="
                    fixed top-6 left-6 md:top-10 md:left-10
                    flex items-center gap-2.5
                    text-gray-400 hover:text-white 
                    font-inter font-medium tracking-normal-apple text-sm md:text-base
                    transition-all duration-300 ease-out
                    hover:-translate-x-2 focus:outline-none z-50
                "
                aria-label="Regresar al listado"
            >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Regresar
            </button>

            {/* Contenido principal (Espaciado desde arriba para no chocar con el botón) */}
            <div className="relative w-full max-w-4xl bg-black animate-fadeInUp mt-24 mb-24 flex flex-col items-center">
                
                <div className="w-full text-center relative z-0 px-4 md:px-8">
                    {/* Meta info superior */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs md:text-sm font-inter font-medium tracking-normal-apple text-gray-500 uppercase mb-8">
                        <span className="bg-gray-900 px-4 py-2 rounded-full">{post.topic}</span>
                        <div className="flex items-center gap-3">
                            <span>{post.date}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                            <span>{post.time}</span>
                        </div>
                    </div>

                    {/* Título Principal */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-inter font-light tracking-wide text-white mb-10 leading-tight">
                        {post.title}
                    </h2>
                    
                    {/* Imagen de portada */}
                    <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-12 shadow-2xl">
                        <img 
                            src={parseDriveImage(post.coverImage)} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>

                    {/* Descripción amplia con soporte para saltos de línea (//) */}
                    <div className="text-base md:text-xl font-inter font-normal tracking-normal-apple text-gray-300 leading-relaxed max-w-3xl mx-auto mb-16 text-left space-y-6 md:space-y-8">
                        {post.description.split('//').map((paragraph, idx) => (
                            <p key={idx}>{paragraph.trim()}</p>
                        ))}
                    </div>
                </div>
            </div>
            
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </div>,
        document.body
    );
}

export default BlogModal;
