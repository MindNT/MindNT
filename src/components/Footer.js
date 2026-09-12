import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer — Pie de página estilo Google, compacto y fino.
 */
function Footer() {
    const links = [
        { name: 'Servicios', path: '/servicios' },
        { name: 'Metodología', path: '/filosofia' },
        { name: 'Proyectos', path: '/proyectos' },
        { name: 'Productos', path: '/productos' },
    ];

    const legal = [
        { name: 'Privacidad', path: '/privacidad' },
        { name: 'Términos', path: '/terminos' },
    ];

    return (
        <footer className="relative z-10 w-full border-t border-white/10 mt-24">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">

                {/* Logo + Copyright */}
                <div className="flex items-center gap-4">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/MINDNT_Logo_Horizontal.png`}
                        alt="MindNT"
                        className="h-6 w-auto object-contain opacity-70"
                    />
                    <span className="text-xs font-inter text-gray-500 hidden sm:inline">
                        © {new Date().getFullYear()} MindNT
                    </span>
                </div>

                {/* Links */}
                <nav className="flex flex-wrap items-center gap-x-5 gap-y-1">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="text-[13px] font-inter text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <span className="text-white/10 mx-1 hidden sm:inline">·</span>
                    {legal.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="text-[13px] font-inter text-gray-500 hover:text-gray-300 transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Location */}
                <span className="text-[13px] font-inter text-gray-500 hidden md:inline">
                    Mérida, Yucatán
                </span>
            </div>
        </footer>
    );
}

export default Footer;