import React, { useEffect, useState } from 'react';
import BlogModal from '../components/BlogModal';
import blogData from '../data/blogData.json';
import { parseDriveImage } from '../utils/parseDriveImage';

function Blog() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Trigger fade-in animation after component mounts
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const openPost = (post) => setSelectedPost(post);
    const closePost = () => setSelectedPost(null);

    const postsPerPage = 2;
    const totalPages = Math.ceil(blogData.length / postsPerPage);
    const startIndex = currentPage * postsPerPage;
    const currentPosts = blogData.slice(startIndex, startIndex + postsPerPage);

    const changePage = (newPage) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentPage(newPage);
            setIsTransitioning(false);
        }, 400);
    };

    const nextPage = () => {
        if (currentPage < totalPages - 1) changePage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 0) changePage(currentPage - 1);
    };

    return (
        <div className="min-h-screen h-screen bg-white flex items-center justify-center px-6 overflow-hidden relative">

            {/* Main Content Container */}
            <div className="max-w-6xl w-full">

                {/* Page Title */}
                <div className="text-center mb-16">
                    <h1
                        className={`
                            text-3xl md:text-4xl lg:text-5xl
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
                            text-base md:text-lg
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

                {/* Cards Grid Horizontal (2 por página) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4 md:px-12 relative min-h-[480px]">
                    {currentPosts.map((post, index) => (
                        <div
                            key={startIndex + index}
                            onClick={() => openPost(post)}
                            className={`
                                group cursor-pointer flex flex-col
                                bg-white rounded-3xl overflow-hidden
                                border border-gray-100
                                transition-all duration-500 ease-out
                                ${isVisible && !isTransitioning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                            `}
                            style={{ transitionDelay: isVisible && !isTransitioning ? `${index * 150}ms` : '0ms' }}
                        >
                            {/* Imagen de la tarjeta sin sombras */}
                            <div className="w-full h-56 overflow-hidden relative bg-gray-50">
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src={parseDriveImage(post.coverImage)}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* Info de la tarjeta */}
                            <div className="p-6 md:p-8 flex flex-col flex-grow bg-white z-20">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-inter font-medium tracking-normal-apple text-gray-400 uppercase">
                                        {post.topic}
                                    </span>
                                    <span className="text-xs font-inter font-medium tracking-normal-apple text-gray-400">
                                        {post.date}
                                    </span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-inter font-medium tracking-tight-apple text-gray-900 leading-snug group-hover:text-black transition-colors mb-3">
                                    {post.title}
                                </h3>

                                <p className="text-sm font-inter text-gray-500 line-clamp-3 leading-relaxed mb-6">
                                    {post.description.replace(/\/\//g, ' ')}
                                </p>

                                <div className="mt-auto flex items-center gap-2 text-sm font-inter font-medium text-gray-900 transition-colors w-max">
                                    <span>Leer nota</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controles de paginación o puntos */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-8">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <div
                                key={index}
                                className={`
                                    w-2 h-2 rounded-full transition-all duration-300
                                    ${index === currentPage ? 'bg-gray-900 w-6' : 'bg-gray-300'}
                                `}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Flechas Laterales */}
            {currentPage > 0 && (
                <button
                    onClick={prevPage}
                    className="
                        absolute left-4 md:left-12 top-1/2 -translate-y-1/2
                        w-10 h-10 md:w-12 md:h-12
                        rounded-full bg-gray-100 hover:bg-gray-200
                        flex items-center justify-center
                        transition-all duration-300 hover:scale-110 focus:outline-none
                    "
                    aria-label="Anterior"
                >
                    <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
            )}

            {currentPage < totalPages - 1 && (
                <button
                    onClick={nextPage}
                    className="
                        absolute right-4 md:right-12 top-1/2 -translate-y-1/2
                        w-10 h-10 md:w-12 md:h-12
                        rounded-full bg-gray-100 hover:bg-gray-200
                        flex items-center justify-center
                        transition-all duration-300 hover:scale-110 focus:outline-none
                    "
                    aria-label="Siguiente"
                >
                    <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            )}

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div
                    className={`
                        absolute top-1/4 right-1/4 w-[600px] h-[600px]
                        bg-gradient-to-tl from-gray-50 to-transparent 
                        rounded-full blur-3xl
                        transition-opacity duration-2000 ease-out delay-500
                        ${isVisible ? 'opacity-30' : 'opacity-0'}
                    `}
                />
            </div>

            <BlogModal isOpen={!!selectedPost} onClose={closePost} post={selectedPost} />
        </div>
    );
}

export default Blog;
