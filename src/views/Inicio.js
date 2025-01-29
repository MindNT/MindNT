import React from 'react';
import nexxuslogo from '../assets/logos/Nexxus-logo.svg';
import chatvideo from '../assets/videos/chat.mov';
import chatvideo_1 from '../assets/videos/New_video.mov';
import chatimage from '../assets/images/web_screen.png'; // Importa la imagen SVG
import restaurant from '../assets/images/restaurant-icon_2.svg';
import escuela from '../assets/images/escuela-icon.svg';
import flotilla from '../assets/images/flotilla-icon.svg';
import hospital from '../assets/images/hospital-icon.svg';
import items from '../assets/images/items-icon.svg';
 // Ajusta la ruta según tu estructura de archivos
import platform from '../assets/images/platform-image.png';
import '../styles/inicio.css';  // Estilos específicos para la vista "Inicio"
import Cubos from '../components/Cubos';  // Importa el componente de los cubos
import Paletta from '../components/Paletta';  // Importa el componente de los cubos
import views from '../assets/images/views.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Inicio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert('Por favor, ingresa tu correo electrónico.');
      return;
    }

    // Construir el enlace mailto
    const subject = encodeURIComponent('Solicitud de beta de Nexxus');
    const body = encodeURIComponent(`Quiero ser parte del beta de Nexxus, este es mi correo: ${email}`);
    const mailtoLink = `mailto:mindntlabs@gmail.com?subject=${subject}&body=${body}`;

    // Redirigir al usuario al enlace mailto
    window.location.href = mailtoLink;
  };

  return (
    <div className="inicio">
      <div className="container">
        {/* Primera sección de cubos */}
        <section className="hero">
          <div className="text-content">
            <h1>SOLUCIONES IA <br></br>& WEB APPS</h1>
            <p>En MindNT, diseñamos soluciones enfocadas en la velocidad<br></br> para que tu negocio siempre vaya un paso adelante.</p>
            <br></br>
            {/*<button className="btn-visitanos" onClick={() => window.location.href='https://tu-url.com'}>Visítanos</button>*/}
            <button className="btn-visitanos" onClick={() => window.location.href='https://tu-url.com'}>Plataformas</button>
            <button className="btn-presencia_Digital" onClick={() => window.location.href='https://tu-url.com'}>Presencia Digital</button>
          </div>
          <div className="gif-space">
            <Cubos />
          </div>
        </section>

        

        {/* Sección de features */}
        <section className="features">
          <div className="container">
            <div className="feature">Calidad</div>
            <div className="feature">Velocidad</div>
            <div className="feature">Exactitud</div>
            <div className="feature">Poder</div>
            <div className="feature">Accesibilidad</div>
          </div>
        </section>

        {/* Sección Nexxus */}
        <section className="nexxus-section">
          <div className="nexxus-title">
            <h2>
                Conoce nuestro plan de desarrollo 360°{' '}
              
            </h2>
            <p>
              Nuestra dualida, haceque tus clientes te conozcan de forma {' '}
              <span className="highlight">intuitiva</span> y{' '}
              <span className="highlight">fácil</span>.
            </p>
          </div>

          <div className="nexxus-content">
            <div className="nexxus-column left">
              <Paletta />
            </div>
            <div className="nexxus-column center">
              <video className="nexxus-video" autoPlay loop muted>
                <source src={chatvideo_1} type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
            <div className="nexxus-column right">
              <ul className="nexxus-list" style={{ marginLeft: '40px' }}>
                <li>Integración en una sola línea de código</li>
                <li>Resuelve las dudas de tus clientes en tiempo real</li>
                <li>Proporciona precios y estimaciones</li>
                <li>Información personalizada</li>
                <li>Compatible con todas las tecnologías web</li>
                <li>Soporte las 24/7</li>
              </ul>
            </div>
          </div>

          {/* Formulario de suscripción */}
          <div className="nexxus-subscription">
            <form className="subscription-form" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"
                className="subscription-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-integrar">
                Suscribirme
              </button>
            </form>
          </div>
        </section>

        {/* Duplicado de la Sección Nexxus */}
        <section className="nexxus-section">
          <div className="nexxus-title">
            <h2>
              Te presentamos a{' '}
              <img
                src={nexxuslogo}
                alt="Nexxus Logo"
                style={{ maxWidth: '300px', height: 'auto' }}
              />
            </h2>
            <p>
              Hacemos que tus clientes te conozcan de forma{' '}
              <span className="highlight">intuitiva</span> y{' '}
              <span className="highlight">fácil</span>.
            </p>
          </div>

          <div className="nexxus-content">
            <div className="nexxus-column left">
              <Paletta />
            </div>
            <div className="nexxus-column center">
              <video className="nexxus-video" autoPlay loop muted>
                <source src={chatvideo} type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
            <div className="nexxus-column right">
              <ul className="nexxus-list" style={{ marginLeft: '20px' }}>
                <li>Integración en una sola línea de código</li>
                <li>Resuelve las dudas de tus clientes en tiempo real</li>
                <li>Proporciona precios y estimaciones</li>
                <li>Información personalizada</li>
                <li>Compatible con todas las tecnologías web</li>
                <li>Soporte las 24/7</li>
              </ul>
            </div>
          </div>

          {/* Formulario de suscripción */}
          <div className="nexxus-subscription">
            <form className="subscription-form" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"
                className="subscription-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-integrar">
                Suscribirme
              </button>
            </form>
          </div>
        </section>

        {/* Sección Escudería MindNT */}
        <section className="escuderia-section">
          <h2 className="escuderia-title">Nuestra futura escudería MindNT</h2>
          <p className="escuderia-subtitle">Vuelve más inteligente tu negocio y marca la diferencia</p>

          <div className="escuderia-icons">
            <div className="icon-item">
              <img src={restaurant} alt="Restaurantes" style={{ maxWidth: '125px', height: '125px' }} />
              <p>Restaurantes</p>
            </div>
            <div className="icon-item">
              <img src={hospital} alt="Hospitales" style={{ maxWidth: '125px', height: '125px' }} />
              <p>Hospitales</p>
            </div>
            <div className="icon-item">
              <img src={escuela} alt="Escuelas" style={{ maxWidth: '125px', height: '125px' }} />
              <p>Escuelas</p>
            </div>
            <div className="icon-item">
              <img src={flotilla} alt="Flotillas" style={{ maxWidth: '125px', height: '125px' }} />
              <p>Flotillas</p>
            </div>
            <div className="icon-item">
              <img src={items} alt="Inventarios" style={{ maxWidth: '125px', height: '125px' }} />
              <p>Inventarios</p>
            </div>
          </div>
          <button className="btn-plataforma" onClick={() => navigate('/integraciones')}> Conocer integraciones</button>
          <p className="escuderia-footer"><strong>MindNT</strong>. Es hora de cambiar las reglas</p>
        </section>

        {/* Sección CTA */}
        <section className="cta-section">
          <div className="cta-content">
            <img src={views} alt="GIF" className="cta-gif" style={{ maxWidth: '1000px', height: '600px' }} />
            <p className="cta-subtitle">Experimenta el cambio tú mismo</p>
            <button className="btn-plataforma" onClick={() => window.location.href = '/integraciones'}>Plataforma</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Inicio;