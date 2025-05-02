import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { openEmailClient, emailTemplates } from '../utils/emailHelpers';
import logo from '../logo.svg';
import CountdownTimer from './CountdownTimer';

export default function NavbarMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [isUtilitiesOpen, setIsUtilitiesOpen] = useState(false);
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

    const handleNavigation = (path, menuName) => {
        navigate(path);
        setActiveMenu(menuName);
        setIsMenuOpen(false);
        setIsUtilitiesOpen(false);
    };

    const handleUtilitiesClick = () => {
        setIsUtilitiesOpen(!isUtilitiesOpen);
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
            <nav className="fixed w-full z-50" style={{ backgroundColor: navBackground }}>
                <div className="px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <img className="h-6 w-auto" src={logo} alt="Logo" />
                            <CountdownTimer />
                        </div>
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
                        <div className="flex flex-col space-y-4">
                            <button 
                                onClick={() => handleNavigation('/', 'inicio')}
                                className={`text-white text-left ${activeMenu === 'inicio' ? 'text-[#00DBFF]' : ''}`}
                            >
                                Inicio
                            </button>
                            <button 
                                onClick={handleUtilitiesClick}
                                className={`text-white text-left ${activeMenu === 'utilidades' ? 'text-[#00DBFF]' : ''}`}
                            >
                                Utilidades {isUtilitiesOpen ? '▼' : '▶'}
                            </button>
                            
                            {/* Utilidades Submenu */}
                            <div className={`${isUtilitiesOpen ? 'block' : 'hidden'} pl-4 space-y-2`}>
                                <button 
                                    onClick={() => handleNavigation('/nexxus', 'utilidades')}
                                    className="text-white text-left block w-full"
                                >
                                    Nexxus Asistente
                                </button>
                                <button 
                                    onClick={() => handleNavigation('/v360', 'utilidades')}
                                    className="text-white text-left block w-full"
                                >
                                    V360
                                </button>
                            </div>

                            <button 
                                onClick={() => {
                                    const section = document.querySelector('#desarrollo-web');
                                    if (location.pathname !== '/') {
                                        handleNavigation('/', 'websites');
                                        setTimeout(() => {
                                            section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }, 300);
                                    } else {
                                        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        setIsMenuOpen(false);
                                    }
                                }}
                                className={`text-white text-left ${activeMenu === 'websites' ? 'text-[#00DBFF]' : ''}`}
                            >
                                Websites
                            </button>
                            <button 
                                onClick={() => handleNavigation('/marketing', 'marketing')}
                                className={`text-white text-left ${activeMenu === 'marketing' ? 'text-[#00DBFF]' : ''}`}
                            >
                                Marketing
                            </button>
                            <button
                                onClick={handleContactClick}
                                className="px-6 py-2 rounded-full text-white w-full text-center"
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
                </div>
            </nav>

            {/* Overlay when menu is open */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    style={{ marginTop: '64px' }}
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </div>
    );
}
