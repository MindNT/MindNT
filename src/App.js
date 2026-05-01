import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import SocialNetworks from './components/SocialNetworks';
import ShootingStar from './components/ShootingStar';

// Desktop Pages
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Plataformas from './pages/Plataformas';
import Historias from './pages/Historias';
import Filosofia from './pages/Filosofia';
import Blog from './pages/Blog';

// Mobile Pages
import InicioMobile from './pages/InicioMobile';
import ServiciosMobile from './pages/ServiciosMobile';
import PlataformasMobile from './pages/PlataformasMobile';
import HistoriasMobile from './pages/HistoriasMobile';
import FilosofiaMobile from './pages/FilosofiaMobile';
import BlogMobile from './pages/BlogMobile';

// Custom hook to detect screen size
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if screen is mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is Tailwind's md breakpoint
    };

    // Check on mount
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
}

function App() {
  const isMobile = useIsMobile();

  return (
    <Router>
      <div className="min-h-screen h-screen bg-black overflow-hidden relative">
        {/* Global shooting star effect */}
        <ShootingStar />

        <div className="absolute top-0 left-0 right-0 z-40">
          {isMobile ? <HeaderMobile /> : <Header />}
        </div>

        {/* Different overflow behavior for mobile vs desktop */}
        <div className={isMobile ? "h-screen overflow-y-auto" : "h-screen overflow-hidden"}>
          <Routes>
            <Route path="/" element={isMobile ? <InicioMobile /> : <Inicio />} />
            <Route path="/servicios" element={isMobile ? <ServiciosMobile /> : <Servicios />} />
            <Route path="/plataformas" element={isMobile ? <PlataformasMobile /> : <Plataformas />} />
            <Route path="/historias" element={isMobile ? <HistoriasMobile /> : <Historias />} />
            <Route path="/filosofia" element={isMobile ? <FilosofiaMobile /> : <Filosofia />} />
            <Route path="/blog" element={isMobile ? <BlogMobile /> : <Blog />} />
          </Routes>
        </div>

        <SocialNetworks />
      </div>
    </Router>
  );
}

export default App;