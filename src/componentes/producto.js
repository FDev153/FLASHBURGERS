import React, { useState } from 'react';
import testUtils from 'react-dom/test-utils';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    Button,
} from 'reactstrap';

export default function Producto(props) {
    const [contador, setContador] = useState(1);
    const [ingbien, setIngrebien] = useState([]);
    const [ing, setIng] = useState(false);



    const masomenos = (que) => {
        if (que === 's') {
            setContador(contador + 1); // Incrementar el contador utilizando setContador
        } else if (que === 'r' && contador >= 1) {
            setContador(contador - 1); // Decrementar el contador utilizando setContador
        }
    };
    const click = (id) => {
        if (!ing) {
            setIngrebien(props.ing.filter(v => v.id_producto === id));
            setIng(true);
        } else {

            setIng(false);
            setIngrebien([]);
        }
    }

    let btn =
        <Button
            active
            block
            color="dark"
            onClick={() => click(props.id_pro)}
        >
            ver ingredientes
        </Button>
    if (props.id_cat == 3 || props.id_cat == 5) {
        btn = null;
    }
    let obj = null;

    if (ing) {
        obj = (
            <ul>
                {ingbien.map(v => (
                    <li key={v.id}>{v.nombre}</li>
                ))}
            </ul>
        );
    }

    return (
        <>
            
            <Card id='pro'>
                <CardImg
                    alt="Card image cap"
                    src={`${process.env.PUBLIC_URL}/${props.img}`}
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {props.nombre}
                    </CardTitle>
                    <CardText>
                        {props.des}
                    </CardText>
                    <div>
                        {btn}
                    </div>

                    {obj}
                    <p></p>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {props.precio}€
                    </CardSubtitle>
                    <Button color='danger' onClick={() => masomenos('r')}>-</Button>{contador}<Button color='danger' onClick={() => masomenos('s')}>+</Button>
                    <Button color='info' onClick={() => props.añadire(props.nombre, props.precio, contador, props.id_pro)}>
                        Añadir
                    </Button>
                </CardBody>
            </Card>
        </>
    );
}
