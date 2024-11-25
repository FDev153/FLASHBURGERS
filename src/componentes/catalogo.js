import React, { useState, useEffect } from 'react';
import { CardGroup } from 'reactstrap';
import Producto from './producto';


export default function Catalogo(props) {

  useEffect(() => {
    props.productos();
  }, []);
  useEffect(() => {
    props.ingredientes();
  }, []);

  const listabuena = props.producto.filter(v => v.id_categoria == props.id)

  const añadiraqui = (nombre, precio, contador, id) => {
    if (nombre != '' && precio != '' && contador != 0) {
      props.añadire(nombre, precio, contador, id)
    }
  }

  let titulo = <></>
  switch (props.id) {
    case 1:
      titulo = <h1 className='titulo'>Entrantes</h1>
      break;
    case 2:
      titulo = <h1 className='titulo'>Hamburgesas</h1>
      break;
    case 3:
      titulo = <h1 className='titulo'>Bebidas</h1>
      break;
    case 4:
      titulo = <h1 className='titulo'>Postres</h1>
      break;
    case 5:
      titulo = <h1 className='titulo'>Salsas</h1>
      break;

    default:
      break;
  }
  return (
    <>
     {titulo}
      <CardGroup id='grupo'>
      
        {listabuena.map(v => (
          <Producto
            id_cat={v.id_categoria}
            id_pro={v.id_producto}
            nombre={v.nombre}
            img={v.imagen}
            des={v.descripcion}
            precio={v.precio}
            ing={props.ingrediente}
            añadire={(n, p, c, id) => añadiraqui(n, p, c, id)}
          />
        ))}
      </CardGroup>
    </>

  );
}
