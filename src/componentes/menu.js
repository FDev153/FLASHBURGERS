// Menu de la aplicacion maneja tanto el menu hamburguesa como el side bar
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

export default function Menu(props) {
  useEffect(() => {
    props.categoria();
  }, []);

  useEffect(() => {
    props.generar();
  }, []);

  const [numero, setNumero] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  // Función para manejar el clic en los enlaces del menú
  const handleClick = (id) => {
    setNumero(id);
    props.menuelegir(id);
    setMenuVisible(false);
    document.body.classList.remove('menu-abierto');
    document.getElementById('hamburger-icon').classList.remove('open');
  };

  // Función para manejar el clic en el icono del menú hamburguesa
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    if (!menuVisible) {
      document.body.classList.add('menu-abierto');
      document.getElementById('hamburger-icon').classList.add('open');
    } else {
      document.body.classList.remove('menu-abierto');
      document.getElementById('hamburger-icon').classList.remove('open');
    }
  };

  // UseEffect para detectar el redimensionamiento y cerrar el menú en cualquier cambio de tamaño
  useEffect(() => {
    const handleResize = () => {
      setMenuVisible(false);
      document.body.classList.remove('menu-abierto');
      document.getElementById('hamburger-icon').classList.remove('open');
    };

    // Agregar el event listener para el resize
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="menu">
      <div id="hamburger-icon" onClick={toggleMenu}>
        ☰
      </div>
      <div id="menugrande">
        <div className="menu-header text-center mb-4">
          <h2>Flash Burger</h2>
        </div>
        {props.menu.map((v) => (
          <div key={v.id_categoria} id="boton">
            <button
              className="btn btn-light btn-lg w-100 border border-dark"
              onClick={() => handleClick(v.id_categoria)}
            >
              {v.nombre}
              <br />
              <img
                src={`${process.env.PUBLIC_URL}/${v.img}`}
                className="entrante"
                alt={v.nombre}
              />
            </button>
            <br />
          </div>
        ))}
      </div>
      <div id="menupequeño" className={menuVisible ? "show" : ""}>
        <div>
          <h2 className='titulomenu'>Flash Burger</h2>
        </div>
        {props.menu.map((v) => (
          <div key={v.id_categoria} id="boton">
            <button
              className="btn btn-light btn-lg w-100 border border-dark"
              onClick={() => handleClick(v.id_categoria)} // Cierra el menú al hacer clic
            >
              {v.nombre}
              <br />
               <img
                src={`${process.env.PUBLIC_URL}/${v.img}`}
                className="entrante"
                alt={v.nombre}
              />
            </button>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
