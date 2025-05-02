import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { openEmailClient, emailTemplates } from '../utils/emailHelpers';
import logo from '../logo.svg';
import CountdownTimer from './CountdownTimer';

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setActiveMenu('inicio');
        } else if (location.pathname === '/marketing') {
            setActiveMenu('marketing');
        } else if (location.pathname === '/nexxus' || location.pathname === '/v360') {
            setActiveMenu('utilidades');
        }
    }, [location.pathname]);

    const navBackground = location.pathname === '/marketing' ? '#000000' : '#051527';
    const overlayBackground = location.pathname === '/marketing' 
        ? 'rgba(0, 0, 0, 0.01)' 
        : 'rgba(255, 255, 255, 0.01)';

    const toggleMenu = (menuName) => {
        setActiveMenu(menuName);
        
        if (menuName === 'inicio') {
            if (location.pathname !== '/') {
                navigate('/');
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            setIsOpen(false);
            return;
        }

        if (menuName === 'websites') {
            const scrollToSection = () => {
                const section = document.querySelector('#desarrollo-web');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            };

            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(scrollToSection, 300);
            } else {
                scrollToSection();
            }
            setIsOpen(false);
            return;
        }

        if (menuName === 'marketing') {
            navigate('/marketing');
            setIsOpen(false);
            return;
        }

        // Only open dropdown for utilidades
        if (menuName === 'utilidades') {
            setIsOpen(!isOpen);
        } else {
            setIsOpen(false);
        }
    };

    const handleContactClick = () => {
        if (location.pathname === '/marketing') {
            const template = emailTemplates.marketingConsultancy();
            openEmailClient(template.subject, template.body, template.isMarketing);
        } else if (location.pathname === '/nexxus') {
            const template = emailTemplates.nexxusDemo();
            openEmailClient(template.subject, template.body);
        } else if (location.pathname === '/v360') {
            const template = emailTemplates.v360Demo();
            openEmailClient(template.subject, template.body);
        } else {
            const template = emailTemplates.generalDemo();
            openEmailClient(template.subject, template.body);
        }
    };

    return (
        <div className="relative">
            <nav className="fixed w-full z-50 transition-all duration-500 ease-in-out" 
                style={{ backgroundColor: navBackground }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="h-8 w-auto" src={logo} alt="Logo" />
                            </div>
                            <CountdownTimer />
                        </div>
                        
                        <div className="hidden md:flex items-center space-x-8">
                            <div className="relative">
                                <button onClick={() => toggleMenu('inicio')} className="text-white hover:text-gray-300">
                                    Inicio
                                    {activeMenu === 'inicio' && (
                                        <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#00DBFF] shadow-[0px_0px_10px_rgba(160,237,255,0.5)]" />
                                    )}
                                </button>
                            </div>
                            <div className="relative">
                                <button onClick={() => toggleMenu('utilidades')} className="text-white hover:text-gray-300">
                                    Utilidades
                                    {activeMenu === 'utilidades' && (
                                        <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#00DBFF] shadow-[0px_0px_10px_rgba(160,237,255,0.5)]" />
                                    )}
                                </button>
                            </div>
                            <div className="relative">
                                <button onClick={() => toggleMenu('websites')} className="text-white hover:text-gray-300">
                                    Websites
                                    {activeMenu === 'websites' && (
                                        <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#00DBFF] shadow-[0px_0px_10px_rgba(160,237,255,0.5)]" />
                                    )}
                                </button>
                            </div>
                            <div className="relative">
                                <button onClick={() => toggleMenu('marketing')} className="text-white hover:text-gray-300">
                                    Marketing
                                    {activeMenu === 'marketing' && (
                                        <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#00DBFF] shadow-[0px_0px_10px_rgba(160,237,255,0.5)]" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={handleContactClick}
                            className={`px-10 py-2 rounded-full text-white transition-all duration-300 ${
                                location.pathname === '/marketing'
                                ? 'hover:opacity-80'
                                : 'hover:opacity-80'
                            }`}
                            style={{
                                backgroundImage: location.pathname === '/marketing'
                                    ? 'linear-gradient(91.47deg, #111111 0%, #333333 100%)'
                                    : 'linear-gradient(to right, #207DF8 0%, #134A92 100%)',
                                boxShadow: location.pathname === '/marketing'
                                    ? '0px 0px 25px rgba(0, 0, 0, 0.25)'
                                    : '0px 0px 25px rgba(0, 102, 255, 0.25)'
                            }}
                        >
                            Contactar
                        </button>
                    </div>
                </div>
            </nav>

            {/* Solo mostrar dropdown para Utilidades */}
            {activeMenu === 'utilidades' && (
                <div
                    className={`fixed w-full transition-all duration-500 ease-in-out ${
                        isOpen ? 'h-[430px] opacity-100' : 'h-0 opacity-0'
                    } overflow-hidden`}
                    style={{ 
                        backgroundColor: navBackground, 
                        zIndex: 40,
                        transition: 'all 0.5s ease-in-out'
                    }}
                >
                    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-all duration-500 ease-in-out h-[100%] ${
                        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}>
                        <div className="text-white h-[90%]">
                            <h2 className="text-2xl font-bold mb-4">{activeMenu.toUpperCase()}</h2>
                            
                            
                            {/* Contenido de la opción Utilidades */}
                            {activeMenu === 'utilidades' && (
                                <div className="grid grid-cols-3 gap-8 h-full h-[100%]">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="pl-5">
                                            <h1 className="text-left font-bold">Utilidades</h1>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <ul className="list-none pl-5">
                                            <li 
                                                className="text-left my-2 font-bold cursor-pointer hover:text-[#00DBFF] transition-colors"
                                                onClick={() => {
                                                    navigate('/nexxus');
                                                    setActiveMenu(null);
                                                    setIsOpen(false);
                                                }}
                                            >
                                                Nexxus Asistente 
                                            </li>
                                            <li 
                                                className="text-left my-2 font-bold cursor-pointer hover:text-[#00DBFF] transition-colors"
                                                onClick={() => {
                                                    navigate('/v360');
                                                    setActiveMenu(null);
                                                    setIsOpen(false);
                                                }}
                                            >
                                                V360
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className="text-center font-bold my-3">Contacto</h1>
                                        <ul className="list-none pl-5">
                                            <li className="text-left my-2"> Facebook </li>
                                            <li className="text-left my-2"> Instagram </li>
                                            <li className="text-left my-2"> LinkedIn </li>
                                        </ul>
                                    </div>
                                </div>
                            )}


                            {/* Contenido de la opción Plataformas */}
                            {activeMenu === 'plataformas' && (
                                <div className="grid grid-cols-3 gap-8 h-full h-[100%]">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="pl-5">
                                            <h1 className="text-left font-bold">Plataformas</h1>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <ul className="list-none pl-5">
                                            <li className="text-left my-2 font-bold "> MindNT Restaurants </li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className="text-center font-bold my-3">Contacto</h1>
                                        <ul className="list-none pl-5">
                                            <li className="text-left my-2"> Facebook </li>
                                            <li className="text-left my-2"> Instagram </li>
                                            <li className="text-left my-2"> LinkedIn </li>
                                        </ul>
                                    </div>
                                </div>
                            )}


                        </div>
                    </div>
                </div>
            )}

            {/* Blur overlay con transición suave */}
            <div
                className={`fixed inset-0 transition-all duration-500 ease-in-out ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                style={{
                    backgroundColor: overlayBackground,
                    backdropFilter: 'blur(25px)',
                    zIndex: 30,
                    marginTop: '430px',
                    transitionProperty: 'opacity, visibility, background-color',
                    transition: 'all 0.5s ease-in-out'
                }}
            />
        </div>
    );
}
