import React from 'react';
import mindntLogo from '../assets/logos/Mindnt-logo-v2.svg';
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
          <li><a href="/Desarrollo Web">Desarrollo Web</a></li>
          <li><a href="/Marketing">Marketing</a></li>
          <li><a href="/Plataforma">Plataformas</a></li>
          {/*<li><a href="/plataforma">plataforma</a></li>*/}
          {/*<li><a href="/blog">Blog</a></li>*/}
        </ul>
        <button className="btn-contact" onClick={() => window.location.href='https://tu-url.com'}>Contacto</button>
      </nav>
    </header>
  );
};

export default Header;