import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContactButton from '../utils/ContactButton';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    const navLink = (path, label) => (
        <Link
            to={path}
            className={[
                'relative text-[14px] font-inter font-medium transition-colors duration-300 tracking-normal-apple',
                'group px-0.5 py-1',
                isActive(path) ? 'text-white' : 'text-gray-300 hover:text-white',
            ].join(' ')}
        >
            {label}
            {/* Underscore animado al hover (estilo Apple) */}
            <span
                className={[
                    'absolute left-0 right-0 -bottom-0.5 h-px origin-center scale-x-0 transition-transform duration-300 ease-out',
                    'bg-white/60 group-hover:scale-x-100',
                    isActive(path) ? 'scale-x-100' : '',
                ].join(' ')}
            />
        </Link>
    );

    return (
        <header
            className={[
                'w-full transition-all duration-500 ease-out',
                'bg-black/60 backdrop-blur-md border-b border-white/10',
            ].join(' ')}
            style={scrolled ? {
                background: 'rgba(10,10,10,0.82)',
                boxShadow: '0 8px 32px -12px rgba(0,0,0,0.8)',
            } : {}}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo - Left Side */}
                    <Link to="/" className="flex items-center opacity-90 hover:opacity-100 transition-opacity duration-300">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/MINDNT_Logo_Horizontal.png`}
                            alt="MindNT"
                            className="h-7 w-auto object-contain"
                        />
                    </Link>

                    {/* Navigation Menu - Right Side */}
                    <nav className="hidden md:flex items-center gap-7">
                        {navLink('/servicios', 'Servicios')}
                        {navLink('/filosofia', 'Metodología')}
                        {navLink('/proyectos', 'Proyectos')}
                        {navLink('/productos', 'Productos')}
                        <ContactButton />
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;