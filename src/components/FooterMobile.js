import React from 'react';
import { Link } from 'react-router-dom';

/**
 * FooterMobile — Pie de página compacto estilo Google, versión móvil.
 */
function FooterMobile() {
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
        <footer className="relative z-10 w-full border-t border-white/10 mt-16">
            <div className="max-w-md mx-auto px-6 py-7 flex flex-col items-center gap-5">

                <img
                    src={`${process.env.PUBLIC_URL}/images/MINDNT_Logo_Horizontal.png`}
                    alt="MindNT"
                    className="h-6 w-auto object-contain opacity-70"
                />

                <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1.5">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="text-[13px] font-inter text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <nav className="flex items-center gap-3">
                    {legal.map((link, i) => (
                        <React.Fragment key={link.path}>
                            {i > 0 && <span className="text-white/10">·</span>}
                            <Link
                                to={link.path}
                                className="text-xs font-inter text-gray-500 hover:text-gray-300 transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        </React.Fragment>
                    ))}
                </nav>

                <span className="text-xs font-inter text-gray-500">
                    © {new Date().getFullYear()} MindNT · Mérida, Yucatán
                </span>
            </div>
        </footer>
    );
}

export default FooterMobile;