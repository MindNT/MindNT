import React, { useEffect, useState } from 'react';
import BlogModal from '../components/BlogModal';
import blogData from '../data/blogData.json';
import { parseDriveImage } from '../utils/parseDriveImage';

function BlogMobile() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white overflow-hidden relative pt-24">
            {/* Contenedor estático para Título (fijo arriba) */}
            <div className="w-full px-6 flex-shrink-0">
                {/* Page Title */}
                <div className="text-center mb-8">
                    <h1
                        className={`
                            text-3xl
                            font-inter font-light
                            tracking-wide
                            text-gray-900
                            mb-3
                            transition-all duration-1000 ease-out
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        Blog
                    </h1>
                    <p
                        className={`
                            text-base
                            font-inter font-normal
                            text-gray-600
                            tracking-normal-apple
                            transition-all duration-1000 ease-out delay-100
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                    >
                        Explora nuestras reflexiones y descubrimientos diarios.
                    </p>
                </div>
            </div>

            {/* Cards Carousel (Desplazamiento horizontal) */}
            <div className="w-full flex-grow overflow-x-auto pb-12 snap-x snap-mandatory flex items-center hide-scroll">
                <div className="flex gap-6 w-max px-6">
                    {blogData.map((post, index) => (
                        <div
                            key={post.id}
                            onClick={() => setSelectedPost(post)}
                            className={`
                                w-[300px] shrink-0 snap-center
                                flex flex-col cursor-pointer
                                bg-white rounded-3xl overflow-hidden
                                border border-gray-100
                                transition-all duration-700 ease-out
                                active:scale-95
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                            `}
                            style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
                        >
                            {/* Imagen de la tarjeta */}
                            <div className="w-full h-48 overflow-hidden relative bg-gray-50">
                                <img
                                    src={parseDriveImage(post.coverImage)}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 ease-out"
                                />
                            </div>

                            {/* Info de la tarjeta */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-3 text-gray-400">
                                    <span className="text-xs font-inter font-medium tracking-normal-apple uppercase">
                                        {post.topic}
                                    </span>
                                </div>
                                <h3 className="text-xl font-inter font-medium tracking-tight-apple text-gray-900 leading-snug mb-3">
                                    {post.title}
                                </h3>
                                <p className="text-sm font-inter text-gray-500 line-clamp-2 leading-relaxed mb-6">
                                    {post.description.replace(/\/\//g, ' ')}
                                </p>

                                <div className="mt-auto flex items-center justify-between text-xs font-inter font-medium text-gray-900 tracking-normal-apple border-t border-gray-50 pt-4">
                                    <span>{post.date}</span>
                                    <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
                                        <span>Leer nota</span>
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
                        absolute top-1/3 left-1/4 w-80 h-80
                        bg-gradient-to-br from-gray-50 to-transparent 
                        rounded-full blur-3xl
                        transition-opacity duration-2000 ease-out delay-500
                        ${isVisible ? 'opacity-30' : 'opacity-0'}
                    `}
                />
            </div>

            <style>{`
                /* Ocultar scrollbar visualmente pero mantener la capacidad de scroll */
                .hide-scroll::-webkit-scrollbar {
                    display: none;
                }
                .hide-scroll {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none;    /* Firefox */
                }
            `}</style>

            <BlogModal isOpen={!!selectedPost} onClose={() => setSelectedPost(null)} post={selectedPost} />
        </div>
    );
}

export default BlogMobile;
