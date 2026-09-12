import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ButtonBlue from '../utils/ButtonBlue';
import BookingModalMobile from './BookingModalMobile';

function HeaderMobile() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Cierra el menú si cambia la ruta (navegación por el menú)
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const menuItems = [
        { name: 'Servicios', path: '/servicios' },
        { name: 'Metodología', path: '/filosofia' },
        { name: 'Proyectos', path: '/proyectos' },
        { name: 'Productos', path: '/productos' }
    ];

    return (
        <>
            <header
                className={[
                    'w-full bg-black/60 backdrop-blur-md border-b border-white/10',
                    'transition-all duration-500 ease-out',
                ].join(' ')}
                style={scrolled ? {
                    background: 'rgba(10,10,10,0.82)',
                    boxShadow: '0 8px 32px -12px rgba(0,0,0,0.8)',
                } : {}}
            >
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo - Left Side */}
                        <Link to="/" className="flex items-center">
                            <img
                                    src={`${process.env.PUBLIC_URL}/images/MINDNT_Logo_Horizontal.png`}
                                alt="MindNT"
                                    className="h-8 w-auto object-contain"
                            />
                        </Link>

                        {/* Right Side: Contact Button + Menu Button */}
                        <div className="flex items-center gap-3">
                            {/* Contact Button */}
                            <ButtonBlue
                                onClick={() => setIsBookingOpen(true)}
                                className="whitespace-nowrap text-[11px] px-3 py-1.5 sm:text-sm sm:px-4 sm:py-2"
                            >
                                Quiero cotizar
                            </ButtonBlue>

                            {/* Hamburger Menu Button */}
                            <button
                                onClick={toggleMenu}
                                className="
                                    p-2 text-gray-300 hover:text-white transition-all duration-300
                                    active:scale-90
                                "
                                aria-label="Menu"
                            >
                                <span className="relative block w-6 h-6">
                                    <span
                                        className={[
                                            'absolute left-0 top-[5px] h-[1.5px] w-6 bg-current',
                                            'transition-all duration-300 ease-out',
                                            isMenuOpen ? 'top-[11px] rotate-45' : '',
                                        ].join(' ')}
                                    />
                                    <span
                                        className={[
                                            'absolute left-0 top-[11px] h-[1.5px] w-6 bg-current',
                                            'transition-all duration-300 ease-out',
                                            isMenuOpen ? 'opacity-0' : '',
                                        ].join(' ')}
                                    />
                                    <span
                                        className={[
                                            'absolute left-0 top-[17px] h-[1.5px] w-6 bg-current',
                                            'transition-all duration-300 ease-out',
                                            isMenuOpen ? 'top-[11px] -rotate-45' : '',
                                        ].join(' ')}
                                    />
                                </span>
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
                        {menuItems.map((item, i) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={closeMenu}
                                className={`
                                    text-base font-inter font-normal text-gray-300
                                    hover:text-white
                                    px-4 py-3
                                    transition-all duration-300 ease-out
                                    border-b border-white/10 last:border-b-0
                                    ${location.pathname === item.path ? 'text-white font-medium' : ''}
                                `}
                                style={{
                                    transitionDelay: isMenuOpen ? `${80 + i * 45}ms` : '0ms',
                                    opacity: isMenuOpen ? 1 : 0,
                                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-6px)',
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Overlay */}
            <div
                className={`
                    fixed inset-0 bg-black/20 z-20 top-[65px]
                    transition-opacity duration-300 ease-out
                    ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `}
                onClick={closeMenu}
            />
            <BookingModalMobile isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </>
    );
}

export default HeaderMobile;
