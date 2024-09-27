import React from 'react';
import mindntLogo from '../assets/logos/Mindnt-logo.png';
import '../styles/global.css';  // Usa los estilos globales aquí

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={mindntLogo} alt="MindNT Logo" style={{ maxWidth: '1000px', height: 'auto' }}/>  {/* Utiliza la imagen importada */}
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/integraciones">Integraciones</a></li>
          {/*<li><a href="/plataforma">plataforma</a></li>*/}
          {/*<li><a href="/blog">Blog</a></li>*/}
        </ul>
        <button className="btn-contact" onClick={() => window.location.href='https://tu-url.com'}>Plataforma</button>
      </nav>
    </header>
  );
};

export default Header;