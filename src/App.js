import './App.css';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './componentes/menu';
import Carrito from './componentes/carrito';
import Logo from './componentes/logo';
import { Component, useEffect } from 'react';
import Tostada from './componentes/toast';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import Catalogo from './componentes/catalogo.js';
import { PHPBORRAR, PHPESTADO, PHPSENTENCIAS, PHPTODOSPEDIDOS, PHPVER } from './conf/Datos.js';
import { PHPCATEGORIA } from './conf/Datos.js';
import { PHPEDIDOS } from './conf/Datos.js';
import { PHPINGREDIENTES } from './conf/Datos.js';
import { PHPINSERTARPRO } from './conf/Datos.js';






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
      lp: false,
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
      todospedidos: [],
      estadopedido: [],

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

  //esto es una alerta con un plugin que llama a la ventana cuando finaliza la compra y te da la opcion de cancelar el pedido o ver los detalles del pedido
  SweetAlert2(id, datos) {

    Swal.fire({
      title: "Pedido realizado con éxito!",
      text: "La cocina empezará a preparar su pedido.",
      imageUrl: "https://i.gifer.com/ZXFj.gif",
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: "Custom image",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Ver mi pedido",
      cancelButtonText: "Cancelar pedido",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let nombre = '';
        let telefono = '';
        let productos = '';
        let precio = '';
        let estado = '';
        let idp = '';
        console.log(datos.map(y => y))
        datos.map(t => {
          nombre = t.nombre;
          telefono = t.telefono;
          productos += `<li>${t.producto_nombre} : ${t.cantidad}</li>`;
          precio = t.precio;
          estado = t.estado;
          idp = t.id_pedido;
        });

        Swal.fire({
          title: "Numero de pedido: " + idp,
          imageUrl: "https://i.gifer.com/TwuB.gif",
          imageWidth: 400,
          imageHeight: 300,
          html: `<p>Estado del pedido <strong>${estado}</strong></p>
                 <p>Nombre: ${nombre}</p>
                 <p>Teléfono: ${telefono}</p>
                 <p>Productos<ul> ${productos} </ul></p>
                 <p>Precio: ${precio} €</p>`,
          icon: "info"
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log(id.ult_id);
        this.cancelarpedido(id.ult_id); // Llama a la función para cancelar el pedido
        Swal.fire({
          title: "Pedido cancelado",
          text: "Tu pedido ha sido cancelado con éxito.",
          icon: "success"
        });
      }
    });
  }


  //aqui guardo el numero del menu que usare para el switch
  changeMenu(item) {
    let l = item
    console.log(item)
    this.setState({ menuItem: l, logo: false, lp: true })
  }

  //aqui me traigo el json de las categorias
  categorias() {
    axios.get(PHPCATEGORIA)
      .then(response => {
        let l = response.data
        this.setState({ categoria: l });

      })

  }


  añadirLista = (nombre, precio, cantidad, id_pro) => {
    const produIndex = this.state.carrito.findIndex(item => item.nombre === nombre);
    toast.success('Producto añadido con éxito');

    if (produIndex !== -1) {
      // Producto ya existe en el carrito
      this.setState(prevState => {
        const nuevaCantidad = prevState.carrito[produIndex].cantidad + cantidad;
        const nuevoPrecio = precio * nuevaCantidad;

        return {
          carrito: prevState.carrito.map((item, index) => {
            if (index === produIndex) {
              return { ...item, precio: nuevoPrecio, cantidad: nuevaCantidad };
            }
            return item;
          }),
          precioTotal: prevState.precioTotal + (precio * cantidad),
          cantidadTotal: prevState.cantidadTotal + cantidad
        };
      }, () => {
        console.log('Carrito actualizado:', this.state.carrito); // Asegurando que se imprima el estado actualizado
      });
    } else {
      // Producto no existe en el carrito, añadir nuevo
      const precioProducto = precio * cantidad;
      this.setState(prevState => ({
        carrito: [...prevState.carrito, { id_producto: id_pro, nombre: nombre, precio: precioProducto, cantidad: cantidad }],
        precioTotal: prevState.precioTotal + precioProducto,
        cantidadTotal: prevState.cantidadTotal + cantidad
      }), () => {
        console.log('Carrito actualizado:', this.state.carrito); // Asegurando que se imprima el estado actualizado
      });
    }
  }

  //aqui borraremos el item de la lista de carrito
  borrar(item) {
    const cantidadBorrar = item.cantidad;
    const precioBorrar = item.precio;

    this.setState(prevState => ({
      carrito: prevState.carrito.filter(v => v !== item),
      precioTotal: prevState.precioTotal - precioBorrar,
      cantidadTotal: prevState.cantidadTotal - cantidadBorrar
    }));
  }

  //aqui llamaremos a las funciones crearpedio y cambieremos los estados y vaciaremos todas las variables de estado para un nuevo pedido
  realizarpedido = (n, t) => {
    this.crearpedio(n, t, this.state.precioTotal, this.state.carrito);
    this.setState({ logo: true, carrito: [], cantidadTotal: 0, precioTotal: 0, show: false, lp: false });
  }



  render() {
    let obj = <Logo />;
    let bt = <></>;
    if (!this.state.logo) {
      obj = <><Catalogo
        productos={() => this.productos()}
        ingrediente={this.state.ingredientes}
        ingredientes={() => this.ingredientes()}
        id={this.state.menuItem}
        producto={this.state.productos}
        añadire={(nombre, precio, cantidad, id_pro) => this.añadirLista(nombre, precio, cantidad, id_pro)}

      /></>;
    }

    return (
      <div className='App vh-100 bg-dark' >
        <Menu
          categoria={() => this.categorias()}
          menu={this.state.categoria}
          menuelegir={(item) => this.changeMenu(item)}
          menuItem={this.state.menuItem}
        
        />
        <div id='logocentrar' className='vh-100 contenido'>
          {obj}
          {bt}
        </div>
        <Tostada />
        <Carrito
          mostrar={this.state.carrito}
          borrar={(lista) => this.borrar(lista)}
          total={this.state.precioTotal}
          canT={this.state.cantidadTotal}
          click={(n, t) => this.realizarpedido(n, t)}
        />
      </div>

    );
  }

}

export default App;