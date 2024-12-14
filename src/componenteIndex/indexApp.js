import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './menu'; 
import './menu.css';
import Carrusel from './carrusel';
import SobreNosotros from './sobrenosotros';
import DondeEncontrarnos from './dondeencontrarnos';
import Footer from './footer';

class IndexApp extends Component {
  render() {
    const { realizarpedido, toggleRealizarPedido } = this.props; // Recibimos las props

    return (
      <div style={{ height: '100vh', overflowY: 'auto' }}>
        <Navbar
          realizarpedido={realizarpedido}
          toggleRealizarPedido={toggleRealizarPedido} // Pasamos la función toggle
        />
        <Carrusel />
        <div id="sobrenosotros"><SobreNosotros /></div>
        <div id="dondeencontrarnos"><DondeEncontrarnos /></div>
        <div id="contactanos"><Footer /></div>
      </div>
    );
  }
}

export default IndexApp;
