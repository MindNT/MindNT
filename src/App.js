import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import NavbarMobile from './components/navbarMobile';
import Footer from './components/Footer';
import Home from './pages/Inicio';
import HomeMobile from './pages/InicioMobile';
import Nexxus from './pages/Nexxus';
import NexxusMobile from './pages/NexxusMobile';
import V360 from './pages/V360';
import V360Mobile from './pages/V360Mobile';
import Marketing from './pages/Marketing';
import MarketingMobile from './pages/MarketingMobile';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

function AppContent() {
  const location = useLocation();
  const isMarketing = location.pathname === '/marketing';
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      {isMobile ? <NavbarMobile /> : <Navbar />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={isMobile ? <HomeMobile /> : <Home />} />
          <Route path="/marketing" element={isMobile ? <MarketingMobile /> : <Marketing />} />
          <Route path="/nexxus" element={isMobile ? <NexxusMobile /> : <Nexxus />} />
          <Route path="/v360" element={isMobile ? <V360Mobile /> : <V360 />} />
        </Routes>
      </div>
      <Footer section={isMarketing ? 'marketing' : 'mindnt'} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
