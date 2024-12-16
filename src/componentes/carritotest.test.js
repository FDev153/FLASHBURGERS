import { render, screen } from '@testing-library/react';
import { act } from 'react';
import Carrito from './carrito';

// Desactivar las advertencias de deprecación de `act` y el error de importación
beforeAll(() => {
  jest.spyOn(global.console, 'error').mockImplementation((message) => {
    if (
      !message.includes('Warning: `ReactDOMTestUtils.act` is deprecated') &&
      !message.includes('Cannot use import statement outside a module')
    ) {
      console.error(message);  // Solo muestra otros errores
    }
  });
});

afterAll(() => {
  console.error.mockRestore(); // Restaurar después de que terminen las pruebas
});

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
