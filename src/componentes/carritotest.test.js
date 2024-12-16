import { render, screen } from '@testing-library/react';
import { act } from 'react'; 
import Carrito from './carrito';

describe('Carrito', () => {

  test('El total es 0 cuando el carrito está vacío', () => {
    const carritoVacio = [];
    const borrar = jest.fn();
    const total = 0;
    const canT = 0;
    const click = jest.fn();

    render(
      <Carrito 
        mostrar={carritoVacio} 
        borrar={borrar} 
        total={total} 
        canT={canT} 
        click={click} 
      />
    );
 
    // Verificar que el total se muestre como 0
    const totalValueElement = screen.getByText(/0/i);
    expect(totalValueElement).toBeInTheDocument();
  });

});
