import React from 'react';
import '../styles/paletta.css';  // Importa los estilos específicos para la paleta de colores

const Paleta = () => {
  return (
    <div className="card">
      <div className="wrapper">
        <div className="color black">
          Azul
          <span className="hex">#0444a4</span>
        </div>
        <div className="color eerie-black">
          Azul
          <span className="hex">#047cfc</span>
        </div>
        <div className="color chinese-black">
          Azul
          <span className="hex">#5cccfc</span>
        </div>
        <div className="color night-rider">
          Gris
          <span className="hex">#4c4c4c</span>
        </div>
        <div className="color chinese-white">
          Gris
          <span className="hex">#acacac</span>
        </div>
        <div className="color anti-flash-white">
          Gris
          <span className="hex">#f8fcfc</span>
        </div>
        <div className="color white">
          Blanco
          <span className="hex">#ffffff</span>
        </div>
        <div className="border"><span>Perzonaliza los colores de tu empresa</span></div>
      </div>
    </div>
  );
};

export default Paleta;