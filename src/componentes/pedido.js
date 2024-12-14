import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

export default function Catalogo(props) {
  

  return (
    <Card>
            <CardBody>
                <CardTitle tag="h5">
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
                <Button color='info' onClick={() => props.añadir(props.nombre, props.precio, contador)}>
                    Añadir
                </Button>
            </CardBody>
        </Card>

  );
}