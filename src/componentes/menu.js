import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';


export default function Menu(props) {
  useEffect(() => {
    props.categoria();
  }, []);



  const [numero, setNumero] = useState('');

  const handleClick = (id) => {
    setNumero(id);
    props.menuelegir(id);
  };

  return (
    <div>
      <Navbar className="menu" id="menu">
        <h2 href="/">Flash Burger</h2>
        <div id="menu2"> 
          {props.menu.map(v => (
            <div key={v.id_categoria} id='boton'>
              <Button
                block
                color="dark"
                outline
                size="lg"
                className='btnmenu'
                onClick={() => handleClick(v.id_categoria)} 
              >
                {v.nombre} <br />
                <img src={`${process.env.PUBLIC_URL}/${v.img}`} className="entrante"/>
              </Button>
              <br />
            </div>
          ))}
        </div>
      </Navbar>
    </div>
  );
}
