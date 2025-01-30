import React from 'react';
import Slider from 'react-slick';  // Importa el carrusel
import '../styles/integraciones.css';  // Importamos el CSS individualizado para este producto
import chatLogo from '../assets/logos/Nexxus-logo.svg';  // Asegúrate de tener la ruta correcta
import banneravion from '../assets/images/avion-banner.svg';  // Asegúrate de tener la ruta correcta
import bannernexxus1 from '../assets/images/nexxus1-banner.svg';  // Asegúrate de tener la ruta correcta
import bannernexxus2 from '../assets/images/nexxus2-banner.svg';  // Asegúrate de tener la ruta correcta
import banneremail from '../assets/images/email-banner.svg';  // Asegúrate de tener la ruta correcta
import bannercomments from '../assets/images/comments-banner.svg';  // Asegúrate de tener la ruta correcta
import bannerdocuments from '../assets/images/documento-banner.svg';  // Asegúrate de tener la ruta correcta
import chatss from '../assets/images/chat.png';  // Asegúrate de tener la imagen del producto
import rcode from '../assets/images/codereact.svg';
import hcode from '../assets/images/codehtml.svg';

import view1 from '../assets/images/view1.svg';
import view2 from '../assets/images/view2.svg';
import view3 from '../assets/images/view3.svg';
import { useEffect } from 'react';


const Integraciones = () => {
  // Configuración del carrusel
  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // El carrusel es infinito
    speed: 500,
    slidesToShow: 5, // Muestra 5 tarjetas por vez
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="integraciones-container">
      {/* Título Principal */}
      <div className="integraciones-title">
        <h1>
          <span className="highlight">Integraciones.</span> La mejor forma de cambiar<br></br> el rumbo de tu empresa.
        </h1>
        <p className="integraciones-subtitle">Échale un vistazo a nuestra familia</p>
        <p className="integraciones-subtitle-grey">Todas las soluciones en una línea de código</p>
      </div>

      {/* Carrusel de las tarjetas */}
      <Slider {...settings} className="integraciones-carousel">
        <div className="integracion-box producto-tarjeta">
          <p className="producto-frase">Un agente diseñado para resolver las dudas de tus clientes.</p>
          <div className="producto-imagen">
            <img src={bannernexxus1} alt="Producto" />
          </div>
        </div>

        <div className="integracion-box">
          <p className="producto-frase">Un agente especializado para platicar sobre destinos.</p>
          <img src={bannernexxus2} alt="avion banner" />
        </div>

        <div className="integracion-box">
          <p className="producto-frase">Un agente especializado para platicar sobre destinos.</p>
          <img src={banneravion} alt="avion banner" />
        </div>

        <div className="integracion-box">
          <p className="producto-frase">Un agente especializado para platicar sobre destinos.</p>
          <img src={banneremail} alt="avion banner" />
        </div>

        <div className="integracion-box">
          <p className="producto-frase">Un agente especializado para platicar sobre destinos.</p>
          <img src={bannercomments} alt="avion banner" />
        </div>

        <div className="integracion-box">
          <p className="producto-frase">Un agente especializado para platicar sobre destinos.</p>
          <img src={bannerdocuments} alt="avion banner" />
        </div>
      </Slider>

      {/* Nueva Sección */}
      <div className="integraciones-second-section">
        <h2 className="second-section-title">Integración en tus webs con el menor esfuerzo</h2>

        <div className="second-section-content">
          {/* Columna Izquierda (SVG del código CSS) */}
          <div className="left-column">
            {/* Componente SVG del código react*/}
            <img src={rcode} alt="react code example" />
          </div>

          {/* Columna Derecha (SVG del código HTML) */}
          <div className="right-column">
            {/* Componente SVG del código HTML*/}
            <img src={hcode} alt="html code example" />
          </div>
        </div>
      </div>


      {/* Nueva Sección */}
      <div className="integraciones-third-section">
        <h2 className="third-section-title">Todo el poder de la IA en un solo lugar</h2>
        <p className="third-section-subtitle">Selecciona, Personaliza, Integra</p>

        {/* Primer bloque */}
        <div className="feature-block">
          {/* SVG a la izquierda */}
          <div className="feature-svg">
            {/* Componente SVG para 'Selecciona' */}
            <img src={view1} alt="Selecciona" />
          </div>
          {/* Texto a la derecha */}
          <div className="feature-text">
            <p>
              <span className="highlight">Selecciona</span> las integraciónes que más se adapten a tus necesidades.
            </p>
          </div>
        </div>

        {/* Segundo bloque (invertido) */}
        <div className="feature-block reverse">
          {/* SVG a la derecha */}
          <div className="feature-svg">
            {/* Componente SVG para 'Personaliza' */}
            <img src={view2} alt="Personaliza" />
          </div>
          {/* Texto a la izquierda */}
          <div className="feature-text">
            <p>
              <span className="highlight">Personaliza</span> tus integraciónes con datos y colores de tu marca.
            </p>
          </div>
        </div>

        {/* Tercer bloque */}
        <div className="feature-block">
          {/* SVG a la izquierda */}
          <div className="feature-svg">
            {/* Componente SVG para 'Integra' */}
            <img src={view3} alt="Integra" />
          </div>
          {/* Texto a la derecha */}
          <div className="feature-text">
            <p>
              <span className="highlight">Integra</span> copiando y pegando el código en tu pagina.
            </p>
          </div>
        </div>

        {/* Frase final */}
        <p className="final-phrase">
          <span className="highlight">Rápido</span>, <span className="highlight">Sencillo</span> y <span className="highlight">Eficiente</span>. Así es mindNT
        </p>
      </div>


    </div>


  );
};

export default Integraciones;