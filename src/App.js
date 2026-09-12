import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import Footer from './components/Footer';
import FooterMobile from './components/FooterMobile';
import BackgroundNet from './components/BackgroundNet';

// Desktop Pages
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import CasosDeUso from './pages/CasosDeUso';
import Productos from './pages/Productos';
import Plataformas from './pages/Plataformas';
import Filosofia from './pages/Filosofia';
import Blog from './pages/Blog';
import Conceptos from './pages/Conceptos';
import DataPrivacy from './pages/DataPrivacy';
import Terms from './pages/Terms';

// Mobile Pages
import InicioMobile from './pages/InicioMobile';
import ServiciosMobile from './pages/ServiciosMobile';
import CasosDeUsoMobile from './pages/CasosDeUsoMobile';
import ProductosMobile from './pages/ProductosMobile';
import PlataformasMobile from './pages/PlataformasMobile';
import FilosofiaMobile from './pages/FilosofiaMobile';
import BlogMobile from './pages/BlogMobile';
import ConceptosMobile from './pages/ConceptosMobile';
import DataPrivacyMobile from './pages/DataPrivacyMobile';
import TermsMobile from './pages/TermsMobile';

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
      <div className="min-h-screen bg-black relative">
        {/* Unified background waves: anchored to the bottom of the viewport */}
        <BackgroundNet fixed />

        <div className="fixed top-0 left-0 right-0 z-40">
          {isMobile ? <HeaderMobile /> : <Header />}
        </div>

        {/* Page content (scrolls naturally with the document, footer at the end) */}
        <div className="relative">
          <Routes>
            <Route path="/" element={isMobile ? <InicioMobile /> : <Inicio />} />
            <Route path="/servicios" element={isMobile ? <ServiciosMobile /> : <Servicios />} />
            <Route path="/casos-de-uso" element={isMobile ? <CasosDeUsoMobile /> : <CasosDeUso />} />
            <Route path="/proyectos" element={isMobile ? <CasosDeUsoMobile /> : <CasosDeUso />} />
            <Route path="/productos" element={isMobile ? <ProductosMobile /> : <Productos />} />
            <Route path="/plataformas" element={isMobile ? <PlataformasMobile /> : <Plataformas />} />
            <Route path="/filosofia" element={isMobile ? <FilosofiaMobile /> : <Filosofia />} />
            <Route path="/blog" element={isMobile ? <BlogMobile /> : <Blog />} />
            <Route path="/conceptos" element={isMobile ? <ConceptosMobile /> : <Conceptos />} />
            <Route path="/privacidad" element={isMobile ? <DataPrivacyMobile /> : <DataPrivacy />} />
            <Route path="/terminos" element={isMobile ? <TermsMobile /> : <Terms />} />
          </Routes>

          {isMobile ? <FooterMobile /> : <Footer />}
        </div>
      </div>
    </Router>
  );
}

export default App;