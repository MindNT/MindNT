import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ContactButton from '../utils/ContactButton';

function HeaderMobile() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const menuItems = [
        { name: 'Servicios', path: '/servicios' },
        { name: 'Historia', path: '/historias' },
        { name: 'Metodología', path: '/filosofia' }
    ];

    return (
        <>
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

                        {/* Right Side: Contact Button + Menu Button */}
                        <div className={`flex items-center gap-3 ${isHomePage ? 'ml-auto' : ''}`}>
                            {/* Contact Button */}
                            <ContactButton />

                            {/* Hamburger Menu Button */}
                            <button
                                onClick={toggleMenu}
                                className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
                                aria-label="Menu"
                            >
                                {isMenuOpen ? (
                                    // Close Icon (X)
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                ) : (
                                    // Hamburger Icon
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Dropdown Menu - Clean Jony Ive style */}
            <div
                className={`
                    fixed top-[65px] left-0 right-0 z-30
                    bg-black/80
                    backdrop-blur-md
                    border-b border-white/10
                    transition-all duration-300 ease-out
                    ${isMenuOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }
                `}
            >
                <nav className="max-w-7xl mx-auto px-6 py-2">
                    <div className="flex flex-col">
                        {menuItems.map((item, index) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={closeMenu}
                                className={`
                                    text-base font-inter font-normal text-gray-300
                                    hover:text-white
                                    px-4 py-3
                                    transition-colors duration-200
                                    border-b border-white/10 last:border-b-0
                                    ${location.pathname === item.path ? 'text-white font-medium' : ''}
                                `}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Overlay - Minimal */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/10 z-20 top-[65px] transition-opacity duration-300"
                    onClick={closeMenu}
                />
            )}
        </>
    );
}

export default HeaderMobile;

