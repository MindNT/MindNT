import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SocialNetworks from './components/SocialNetworks';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Plataformas from './pages/Plataformas';
import Historias from './pages/Historias';
import Metodologia from './pages/Metodologia';

function App() {
  return (
    <Router>
      <div className="min-h-screen h-screen bg-white overflow-hidden relative">
        {/* Fixed Header - Absolute positioning */}
        <div className="absolute top-0 left-0 right-0 z-40">
          <Header />
        </div>

        {/* Main Content Area - Full height, centered */}
        <div className="h-screen overflow-hidden">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/plataformas" element={<Plataformas />} />
            <Route path="/historias" element={<Historias />} />
            <Route path="/metodologia" element={<Metodologia />} />
          </Routes>
        </div>

        {/* Floating Social Networks */}
        <SocialNetworks />
      </div>
    </Router>
  );
}

export default App;
