import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppPedidos from './componentes/appPedidos.js';
import IndexApp from './componenteIndex/indexApp.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realizarpedido: true // Estado para controlar si se debe mostrar el botón "HACER PEDIDO"
    };
  }

  // Método para cambiar el estado y realizar el pedido
  toggleRealizarPedido = () => {
    this.setState(prevState => ({ realizarpedido: !prevState.realizarpedido }));
  }

  render() {
    const { realizarpedido } = this.state;  // Obtenemos el estado
    let bt = <></>;

    // Condición para mostrar diferentes componentes según el estado
    if (!realizarpedido) {
      bt = <AppPedidos />;
    } else {
      bt = <IndexApp
        realizarpedido={realizarpedido}
        toggleRealizarPedido={this.toggleRealizarPedido}
      />;
    }

    return (
      <div className='main'>
        {bt}
      </div>
    );
  }
}

export default App;
