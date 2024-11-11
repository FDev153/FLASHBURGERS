import React, { useState } from 'react';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';

export default function Carrito(props) {

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => setNestedModal(!nestedModal);

  return (
    <div>
      <Button color='light' onClick={toggle}>
        <img className='normal' src={`${process.env.PUBLIC_URL}/${'bx-shopping-bag.svg'}`} />
        <button className='cant'>{props.canT}</button>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Compra:</ModalHeader>
        <ModalBody><Label>Cesta vacía</Label></ModalBody>
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
              <Input name='nom' bsSize='sm'  />
              <Label>Teléfono:</Label>
              <Input name='tele' bsSize='sm' maxLength={9}  />
            </ModalBody>
            <ModalFooter>
              <Button color='primary' >
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
