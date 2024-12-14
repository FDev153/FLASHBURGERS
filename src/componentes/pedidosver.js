import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function ListaPedido(props) {

    const listar = (id) => {
        props.terminar(id);
    };

    return (
        <ListGroup className='BOTON'>
            <h2>Clickea un pedido para terminarlo</h2>
            {props.lista.map(v => (
                <ListGroupItem
                    action
                    onClick={() => {
                        if (v.estado !== 'terminado') {
                            listar(v.id_pedido);
                        }
                    }}
                    tag="button"
                    key={v.id_pedido}
                    disabled={v.estado === 'terminado'} // Deshabilita el botón si el estado del pedido es 'terminado'
                >
                    Id del pedido: {v.id_pedido} Estado del pedido: {v.estado}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
}



