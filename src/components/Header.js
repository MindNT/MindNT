import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import ContactButton from '../utils/ContactButton';

function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <header className="w-full bg-black/60 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo - Left Side (only show when NOT on homepage) */}
                    {!isHomePage && (
                        <Link to="/" className="flex items-center">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/Logowhitefonts.png`}
                                alt="MindNT"
                                className="h-8 w-auto object-contain"
                            />
                        </Link>
                    )}

                    {/* Navigation Menu - Right Side */}
                    <nav className={`hidden md:flex items-center space-x-8 ${isHomePage ? 'ml-auto' : ''}`}>
                        <Link
                            to="/servicios"
                            className="text-sm font-inter font-medium text-gray-300 hover:text-white transition-colors duration-200 tracking-normal-apple"
                        >
                            Precio
                        </Link>
                        <Link
                            to="/filosofia"
                            className="text-sm font-inter font-medium text-gray-300 hover:text-white transition-colors duration-200 tracking-normal-apple"
                        >
                            Metodología
                        </Link>
                        <Link
                            to="/historias"
                            className="text-sm font-inter font-medium text-gray-300 hover:text-white transition-colors duration-200 tracking-normal-apple"
                        >
                            Nosotros
                        </Link>
                        <Link
                            to="/conceptos"
                            className="text-sm font-inter font-medium text-gray-300 hover:text-white transition-colors duration-200 tracking-normal-apple"
                        >
                            Glosario
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
