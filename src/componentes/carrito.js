import React, { useState } from 'react';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';

export default function Carrito(props) {

  const [nombre, setNombre] = useState('');
  const [tele, setTele] = useState('');
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [num, setNum] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => setNestedModal(!nestedModal);
  
  const realizarpedido = () => {
    if (num === true && tele.length === 9 && nombre.length > 0) {
      setNestedModal(!nestedModal);
      toggle();
      toggleNested();
      props.click(nombre, tele);
      limpiarCamposYCerrarModales(); // Limpia campos y cierra modales después de realizar el pedido
    }
  };

  const limpiarCamposYCerrarModales = () => {
    setNombre('');
    setTele('');
    setNum(false);
    setModal(false);
    setNestedModal(false);
  };
  
  let obj =
    props.mostrar.length > 0 ? (
      <ul>
        {props.mostrar.map((v) => (
          <li key={v.id_producto}>
            {v.nombre}, precio: {v.precio} € cantidad: {v.cantidad}
            <button onClick={() => props.borrar(v)} className='cant'>
              <img className='normal' src={`${process.env.PUBLIC_URL}/${'bxs-trash.svg'}`} />
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <p>Cesta vacía</p>
    );
    const handleChange = (event) => {
      const { name, value } = event.target;
      if (name === 'nom') {
        if (!isNaN(value) === false) setNombre(value);
      } else {
        if (!isNaN(value) === true) {
          setTele(value);
          setNum(true);
        }
      }
    };
  
    return (
      <div>
        <Button color='light' onClick={toggle}>
          <img className='normal' src={`${process.env.PUBLIC_URL}/${'bx-shopping-bag.svg'}`} />
          <button className='cant'>{props.canT}</button>
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Compra:</ModalHeader>
          <ModalBody>{obj}</ModalBody>
          <ModalFooter>
            <Label>Total: {props.total}€</Label>
            <Button color='info' onClick={toggleNested} disabled={props.mostrar.length === 0}>
              Pagar
            </Button>
            <Button color='secondary' onClick={toggle}>Cancel</Button>
            <Modal isOpen={nestedModal} toggle={toggleNested}>
              <ModalHeader>Datos Cliente</ModalHeader>
              <ModalBody>
                <Label>Nombre:</Label>
                <Input name='nom' bsSize='sm' onChange={handleChange} value={nombre} />
                <Label>Teléfono:</Label>
                <Input name='tele' bsSize='sm' onChange={handleChange} maxLength={9} value={tele} />
              </ModalBody>
              <ModalFooter>
                <Button color='primary' onClick={realizarpedido}>
                  Finalizar pedido
                </Button>{' '}
                <Button color='secondary' onClick={toggleNested}>
                  Cerrar
                </Button>
              </ModalFooter>
            </Modal>
          </ModalFooter>
        </Modal>
      </div>
    );
  }