// Componente principal de la aplicación donde estan la mayorias de funciones y componentes agrupados
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import toast from "react-hot-toast";
import Swal from 'sweetalert2';
import { PHPBORRAR, PHPCATEGORIA, PHPEDIDOS, PHPESTADO, PHPINGREDIENTES, PHPINSERTARPRO, PHPSENTENCIAS, PHPTODOSPEDIDOS, PHPVER } from '../conf/Datos.js';
import Carrito from './carrito';
import Catalogo from './catalogo.js';
import Menu from './menu';
import Tostada from './toast';

class AppPedidos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItem: "1",
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
      Vertodospedidos: [],
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

  

  crearpedio = (nombrecliente, telefonocliente, direccionCliente, pedidoCliente, cantidadTotal, carrito) => {

    axios.post(PHPEDIDOS, JSON.stringify({

      nombrecliente: nombrecliente,
      telefonocliente: telefonocliente,
      direccionCliente: direccionCliente || '',
      pedidoCliente: pedidoCliente,
      cantidadTotal: cantidadTotal,
    }))
      .then(res => {

        let t = res.data;
        this.setState({ id: t })
        this.setState({ id: t }, () => {
          carrito.map(v => {
            this.añadirpro(v.id_producto, t.ult_id, v.cantidad);
          });
          this.verdatospedido(t.ult_id)
          this.todospedidos()

        });

      })


  }


  //aqui con el id_pedido y el id_producto voy añadiendo a la tabla TANIA_pedidos_productos los ids correspondientes
  añadirpro(id_producto, id_pedido, cantidad) {
    axios.post(PHPINSERTARPRO, JSON.stringify({
      id_producto: id_producto,
      id_pedido: id_pedido,
      cantidad: cantidad,
    }))
  }

  //aqui con el id_pedido hago un delete de la tabla TANIA_pedidos y en la TANIA_pedidos_productos
  cancelarpedido(id_pedido) {
    console.log(id_pedido)
    axios.delete(`${PHPBORRAR}?id_pedido=${id_pedido}`);
  }

  //aqui con el id_pedido me traigo el json con los datos del pedido realizado anteriormente
  verdatospedido(id_pedido) {
    axios.post(PHPVER, JSON.stringify({

      id_pedido: id_pedido,

    }))
      .then(res => {

        console.log("DATOS=====>", res.data)
        let t = res.data;

        this.SweetAlert2(id_pedido, t)

      })

  }

  estadopedido = (id_pedido) => {
    axios.put(PHPESTADO, JSON.stringify({ id_pedido: id_pedido }))
      .then(response => {
        // Actualiza directamente el estado de `todospedidos`
        const nuevosPedidos = this.state.todospedidos.map(pedido =>
          pedido.id_pedido === id_pedido ? { ...pedido, estado: response.data.id } : pedido
        );
        this.setState({ todospedidos: nuevosPedidos }, () => {
          // Llama a todospedidos después de que se haya actualizado el estado
          this.todospedidos();
        });
      })
      .catch(error => {
        console.error('Error al actualizar el estado del pedido:', error);
      });
  }

  todospedidos() {
    axios.get(PHPTODOSPEDIDOS)
      .then(response => {
        let nuevosPedidos = response.data;


        this.setState({ todospedidos: nuevosPedidos });
      })
      .catch(error => {
        console.error('Error al obtener todos los pedidos:', error);
      });
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

  //esto es una alerta con un pluggin que llama a la ventana cuando finaliza la compra y te da la opcion de cancelar el pedido o ver los detalles del pedido
  SweetAlert2(id, datos) {

    let nombre = '';
    let telefono = '';
    let productos = '';
    let precio = '';
    let estado = '';
    let idp = '';
    let dire = '';
    let pedi = '';

    datos.map((t) => {
      nombre = t.nombre;
      telefono = t.telefono;
      productos += `<li>${t.producto_nombre} : ${t.cantidad}</li>`;
      precio = t.precio;
      estado = t.estado;
      idp = t.id_pedido;
      dire = t.direccion && t.direccion.trim() !== "" ? t.direccion : "";
      pedi = t.takeaway === '0' ? "Recogida en local" : "Envio a casa";
    });

    Swal.fire({
      title: "Pedido realizado con éxito!",
      text: "Confirme el pedido para continuar.",
      // imageUrl: "https://i.gifer.com/ZXFj.gif",
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: "Custom image",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Confirmar pedido",
      cancelButtonText: "Cancelar pedido",
      reverseButtons: true,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {



        Swal.fire({
          title: "Número de pedido: " + idp,
          imageUrl: "https://i.gifer.com/ZXFj.gif",
          imageWidth: 400,
          imageHeight: 300,
          html: `
            <p>La cocina empezará a preparar su pedido</p>
            <p>Estado del pedido <strong>${estado}</strong></p>
            <p>Nombre: ${nombre}</p>
            <p>Teléfono: ${telefono}</p>
            <p>Productos<ul> ${productos} </ul></p>
            <p>Precio: ${precio} €</p>
         ${dire ? `<p>Dirección: ${dire}</p>` : ""} 
            <p>Pedido: ${pedi} </p>
          `,
          icon: "success",
          allowOutsideClick: false,
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {

        this.cancelarpedido(id);
        Swal.fire({
          title: "Pedido cancelado",
          text: "Tu pedido ha sido cancelado con éxito.",
          icon: "error",
          allowOutsideClick: false,
        });
      }
    });
  }


  //aqui guardo el numero del menu que usare para el switch
  changeMenu(item) {
    let l = item

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
  terminar(id) {
    this.estadopedido(id)

  }
  componentDidMount() {
    axios.get(PHPTODOSPEDIDOS)
      .then(response => {
        const l = response.data;
        console.log("ES ESTO====>", l);
        this.setState({ vertodospedidos: l }); // Actualiza el estado con los pedidos
      })
      .catch(error => {
        console.error("Hubo un error al obtener los pedidos", error);
      });
  }

  //aqui añado los productos al carrito y compruebo si ya estan añadidos antes o no y en caso de estar se le añadiria la cantidad al contador  y al precio , sino se añadira normal 
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
  realizarpedido = (n, t, d, p) => {
    this.crearpedio(n, t, d, p, this.state.precioTotal, this.state.carrito);
    this.setState({ logo: true, carrito: [], cantidadTotal: 0, precioTotal: 0, show: false, lp: false });
  }

  render() {
    return (
      <div className='general'>
        <div className='menu-comida'>
          <Menu
            categoria={() => this.categorias()}
            menu={this.state.categoria}
            menuelegir={(item) => this.changeMenu(item)}
            menuItem={this.state.menuItem}
            generar={() => this.todospedidos()}
          />
        </div>
        <div>
        <Catalogo
        productos={() => this.productos()}
        ingrediente={this.state.ingredientes}
        ingredientes={() => this.ingredientes()}
        id={this.state.menuItem}
        producto={this.state.productos}
        añadir={(nombre, precio, cantidad, id_pro) => this.añadirLista(nombre, precio, cantidad, id_pro)}/>
        </div>
        <Tostada />
        <Carrito
          mostrar={this.state.carrito}
          borrar={(lista) => this.borrar(lista)}
          total={this.state.precioTotal}
          canT={this.state.cantidadTotal}
          click={(n, t, d, p) => this.realizarpedido(n, t, d, p)}
        />
      </div>

    );
  }

}

export default AppPedidos;