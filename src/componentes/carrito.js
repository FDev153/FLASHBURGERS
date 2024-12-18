// Se muestra el carrito de los productos que se vayan a comprar con sus respectivas cantidades y precios
import React, { useState } from 'react';
import { Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import "../App.css";

export default function Carrito(props) {
  const [nombre, setNombre] = useState('');
  const [tele, setTele] = useState('');
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [num, setNum] = useState(false);
  const [pedido, setPedido] = useState(0);
  const [direccion, setDireccion] = useState('');


  const realizarpedido = () => {
    if (num === true && tele.length === 9 && nombre.length > 0) {
      setNestedModal(!nestedModal);
      toggle();
      toggleNested();
      props.click(nombre, tele, direccion, pedido);
      limpiarCamposYCerrarModales();
    }
  };

  const toggle = () => setModal(!modal);
  const toggleNested = () => setNestedModal(!nestedModal);

  const limpiarCamposYCerrarModales = () => {
    setNombre('');
    setTele('');
    setDireccion('');
    setPedido(0);
    setNum(false);
    setModal(false);
    setNestedModal(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'nom') {
      if (!isNaN(value) === false) setNombre(value);
    } else if (name === 'direccion') {
      setDireccion(value);
    } else if (name === 'tele') {
      if (!isNaN(value)) {
        setTele(value);
        setNum(true);
      }
    }
  };

  const handleOptionChange = (event) => {
    setPedido(parseInt(event.target.value, 10));
  };

  let obj =
    props.mostrar.length > 0 ? (
      <ul>
        {props.mostrar.map((v) => (
          <li key={v.id_producto}>
            {v.nombre}, precio: {v.precio} € cantidad: {v.cantidad}
            <button
              onClick={() => props.borrar(v)}
              className="rounded-pill property btn btn-danger"
              style={{
                padding: '5px 5px',
                height: '25px',
                marginLeft: '4px'
              }}
            >
              <img
                className="normal"
                style={{ width: '16px', height: '16px', marginBottom: '18px' }}
                src={`${process.env.PUBLIC_URL}/${'bxs-trash.svg'}`}
              />
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <p>Cesta vacía</p>
    );

  return (
    <div className='boton-cesta'>
      <Button color="light" onClick={toggle}>
        <div className='boton-global'>
          <img
            className="normal"
            src={`${process.env.PUBLIC_URL}/${'bx-shopping-bag.svg'}`}
          />
          <span className="badge bg-danger rounded-pill" typeof="button">
            {props.canT}
          </span>
        </div>
      </Button>
      <Modal isOpen={modal} toggle={toggle} zIndex={1100} >
        <ModalHeader toggle={toggle} className='color-red'>Compra:</ModalHeader>
        <ModalBody>{obj}</ModalBody>
        <ModalFooter>
          <Label>Total: {props.total}€</Label>
          <Button
            color="info"
            onClick={toggleNested}
            disabled={props.mostrar.length === 0}
          >
            Pagar
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Modal isOpen={nestedModal} toggle={toggleNested} zIndex={1101}>
            <ModalHeader>Datos Cliente</ModalHeader>
            <ModalBody>
              <div className="form-check form-check-inline">
                <Input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="0"
                  onChange={handleOptionChange}
                  checked={pedido === 0}
                />
                <Label className="form-check-label" htmlFor="flexRadioDefault1">
                  Recoger en local
                </Label>
              </div>
              <div className="form-check form-check-inline">
                <Input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="1"
                  onChange={handleOptionChange}
                  checked={pedido === 1}
                />
                <Label className="form-check-label" htmlFor="flexRadioDefault2">
                  Enviar a casa
                </Label>
              </div>
              <div>
                <Label>Nombre:</Label>
                <Input
                  name="nom"
                  bsSize="sm"
                  onChange={handleChange}
                  value={nombre}
                // invalid={nombre === ''}
                />
                <Label>Teléfono:</Label>
                <Input
                  name="tele"
                  bsSize="sm"
                  onChange={handleChange}
                  maxLength={9}
                  value={tele}
                // invalid={tele.length < 9}
                />
              </div>
              {pedido === 1 && (
                <div>
                  <Label>Direccion:</Label>
                  <Input
                    name="direccion"
                    bsSize="sm"
                    onChange={handleChange}
                    maxLength={30}
                    value={direccion}
                  />
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={realizarpedido} disabled={tele < 9 && nombre === '' || tele < 9 || nombre === ''}>
                Finalizar pedido
              </Button>{' '}
              <Button color="secondary" onClick={toggleNested}>
                Cerrar
              </Button>
            </ModalFooter>
          </Modal>
        </ModalFooter>
      </Modal>
    </div>
  );
}
