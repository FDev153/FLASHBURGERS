import './App.css';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './componentes/menu';
import Carrito from './componentes/carrito';
import Logo from './componentes/logo';
import { Component } from 'react';
import axios from 'axios';
import Catalogo from './componentes/catalogo.js';
import { PHPSENTENCIAS } from './conf/Datos.js';
import { PHPCATEGORIA } from './conf/Datos.js';
import { PHPINGREDIENTES } from './conf/Datos.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItem: "",
      productos: [],
      categoria: [],
      logo: true,
      pedido: true,
      carrito: [],
      precioTotal: 0,
      ingredientes: [],
      cantidadTotal: 0,
      show: true,
      telefono: '',
      lp:false,
      id: [],
      swalWithBootstrapButtons: Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      }),
      datospedido: [],
      datosfilt: [],
      todospedidos:[],
      estadopedido:[],

    }
  }

 //aqui me traigo el json de todos los productos
  productos() {
    axios.get(PHPSENTENCIAS)
      .then(response => {
        this.setState({ productos: response.data });

      })
  }

  //aqui me traigo el json de los ingredientes de los productos
  ingredientes() {
    axios.get(PHPINGREDIENTES)
      .then(response => {
        this.setState({ ingredientes: response.data });

      })
  }

//aqui guardo el numero del menu que usare para el switch
  changeMenu(item) {
    let l = item
    this.setState({ menuItem: l, logo: false,lp:true })
  }

  //aqui me traigo el json de las categorias
  categorias() {
    axios.get(PHPCATEGORIA)
      .then(response => {
        let l = response.data
        this.setState({ categoria: l });

      })

  }

  render() {
    let obj = <Logo />;
    let bt=<></>;
    if (!this.state.logo) {
      obj = <><Catalogo
        productos={() => this.productos()}
        ingrediente={this.state.ingredientes}
        ingredientes={() => this.ingredientes()}
        id={this.state.menuItem}
        producto={this.state.productos}
      /></>;
    }
    
    return (
      <div className='App vh-100 bg-dark'>
        <Menu
          categoria={() => this.categorias()}
          menu={this.state.categoria}
          menuelegir={(item) => this.changeMenu(item)}
          menuItem={this.state.menuItem}
        />
        <div id='logocentrar'>
          {obj}
        </div>
        <Carrito
          mostrar={this.state.carrito}
          total={this.state.precioTotal}
          canT={this.state.cantidadTotal}
        />
        
      </div>
    );
  }

}

export default App;
