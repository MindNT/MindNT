import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import ContactButton from '../utils/ContactButton';

function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo - Left Side (only show when NOT on homepage) */}
                    {!isHomePage && (
                        <Link to="/" className="flex items-center">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/Logohorizontal.png`}
                                alt="MindNT"
                                className="h-8 w-auto object-contain"
                            />
                        </Link>
                    )}

                    {/* Navigation Menu - Right Side */}
                    <nav className={`hidden md:flex items-center space-x-8 ${isHomePage ? 'ml-auto' : ''}`}>
                        <Link
                            to="/servicios"
                            className="
                text-sm font-inter font-medium text-gray-700
                hover:text-gray-900
                transition-colors duration-200
                tracking-normal-apple
              "
                        >
                            Servicios
                        </Link>
                        <Link
                            to="/plataformas"
                            className="
                text-sm font-inter font-medium text-gray-700
                hover:text-gray-900
                transition-colors duration-200
                tracking-normal-apple
              "
                        >
                            Plataformas
                        </Link>
                        <Link
                            to="/historias"
                            className="
                text-sm font-inter font-medium text-gray-700
                hover:text-gray-900
                transition-colors duration-200
                tracking-normal-apple
              "
                        >
                            Historias
                        </Link>
                        <Link
                            to="/filosofia"
                            className="
                text-sm font-inter font-medium text-gray-700
                hover:text-gray-900
                transition-colors duration-200
                tracking-normal-apple
              "
                        >
                            Metodología
                        </Link>
                        <Link
                            to="/blog"
                            className="
                text-sm font-inter font-medium text-gray-700
                hover:text-gray-900
                transition-colors duration-200
                tracking-normal-apple
              "
                        >
                            Blog
                        </Link>

                        {/* Contact Button */}
                        <ContactButton />
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
