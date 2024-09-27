import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './views/Inicio';
import Integraciones from './views/Integraciones';
import Plataforma from './views/Plataforma';
import Blog from './views/Blog';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/integraciones" element={<Integraciones />} />
        {/*<Route path="/plataforma" element={<Plataforma />} />*/}
        {/*<Route path="/blog" element={<Blog />} />*/}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;