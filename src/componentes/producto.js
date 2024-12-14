import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Button,
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle
} from 'reactstrap';

export default function Producto(props) {
    const [contador, setContador] = useState(1);
    const [ingbien, setIngrebien] = useState([]);
    const [ing, setIng] = useState(false);
    const [titulo, setTitulo] = useState(props.titulo)
    const [open, setOpen] = useState('0');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    useEffect(() => {
        if (props.titulo !== titulo) {
            setTitulo(props.titulo);
            setContador(1);
            setOpen('0')
            setIngrebien([])
            setIng(false)
        }
    }, [props.titulo]);


    console.log(titulo)

    const masomenos = (que) => {
        if (que === 's') {
            setContador(contador + 1);
        } else if (que === 'r' && contador >= 1) {
            setContador(contador - 1);
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
    };

    let acordeon =
        <Accordion open={open} toggle={toggle}>
            <AccordionItem>
                <AccordionHeader targetId="1" onClick={() => click(props.id_pro)}>Ver ingledientes</AccordionHeader>
                <AccordionBody accordionId="1">
                    <ul>
                        {ingbien.map((v) => (
                            <li key={v.id}>{v.nombre}</li>
                        ))}
                    </ul>
                </AccordionBody>
            </AccordionItem>
        </Accordion>


    if (props.id_cat === 3 || props.id_cat === 5) {
        acordeon = null;
    }


    return (
        <div className='ventana-producto'>

            <Card>
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
                        {acordeon}
                    </div>
                    <div className='botoneracard'>
                        <div className='cantidadesbotonera'>
                            <Button  onClick={() => masomenos('r')} className="botoncantidad" >-</Button>
                            {contador}
                            <Button  onClick={() => masomenos('s')} className="botoncantidad">+</Button>
                        </div>
                        <CardSubtitle
                        className="mb-2 text-muted card-precio"
                        tag="h6"
                    >
                        {props.precio}€
                    </CardSubtitle>
                        <Button className='blanco' onClick={() => props.añadir(props.nombre, props.precio, contador, props.id_pro)} >
                            Añadir
                        </Button>
                    </div>

                </CardBody>
            </Card>
        </div>
    );
}
