//Menu de la pagina principal
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './menu.css';

const Navbar = ({ toggleRealizarPedido }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambia el estado de visibilidad
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="logo-nombre">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo"/>
        </div>
        <span>Flash Burger</span>
      </div>

      <button className="navbar-toggler"type="button" aria-expanded={isOpen} aria-label="Toggle navigation" onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a
              className="btn btn-outline-light btn-floating m-1"
              role="button"
              onClick={toggleRealizarPedido}
            >
              HACER PEDIDO
            </a>
          </li>
          <li className="nav-item">
            <a href="#sobrenosotros" className="nav-link">
              SOBRE NOSOTROS
            </a>
          </li>
          <li className="nav-item">
            <a href="#dondeencontrarnos" className="nav-link">
              DONDE ENCONTRARNOS
            </a>
          </li>
          <li className="nav-item">
            <a href="#contactanos" className="nav-link">
              CONTACTO
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;