// Lista de productos y funcion de añadir producto
import React, { useEffect, useState } from 'react';
import { CardGroup } from 'reactstrap';
import Producto from './producto';


export default function Catalogo(props) {
  const [t, setT] = useState('')

  useEffect(() => {
    props.productos();
  }, []);
  useEffect(() => {
    props.ingredientes();
  }, []);

  const listabuena = props.producto.filter(v => v.id_categoria == props.id)

  const añadiraqui = (nombre, precio, contador, id) => {
    if (nombre != '' && precio != '' && contador != 0) {
      props.añadir(nombre, precio, contador, id)
    }
  }

  let titulo = <h1 className='titulo'>Entrantes</h1>

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
  useEffect(() => {
    switch (props.id) {
      case 1:
        setT("Entrantes");
        break;
      case 2:
        setT("Hamburguesas");
        break;
      case 3:
        setT("Bebidas");
        break;
      case 4:
        setT("Postres");
        break;
      case 5:
        setT("Salsas");
        break;
      default:
        setT('');
        break;
    }
  }, [props.id]);
  return (
    <div className='catalogo-comida'>
      <div>
        {titulo}
      </div>
      <CardGroup className='lista-productos'>

        {listabuena.map(v => (
          <Producto
            titulo={t}
            id_cat={v.id_categoria}
            id_pro={v.id_producto}
            nombre={v.nombre}
            img={v.imagen}
            des={v.descripcion}
            precio={v.precio}
            ing={props.ingrediente}
            añadir={(n, p, c, id) => añadiraqui(n, p, c, id)}
          />
        ))}
      </CardGroup>
    </div>

  );
}
