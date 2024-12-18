import { render, screen } from '@testing-library/react';
import { act } from 'react';
import ListaPedido  from './pedidosver';

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


const mockTerminar = jest.fn();
const mockLista = [
  { id_pedido: 1, estado: 'pendiente' },
  { id_pedido: 2, estado: 'en curso' },
];

describe('ListaPedido', () => {
  test('renderiza la lista de pedidos correctamente', () => {
    render(
      <ListaPedido lista={mockLista} terminar={mockTerminar} />
    );

    // Verificar que los pedidos estén en el documento
    const pedido1 = screen.getByText(/Id del pedido: 1/);
    expect(pedido1).toBeInTheDocument();

    const pedido2 = screen.getByText(/Id del pedido: 2/);
    expect(pedido2).toBeInTheDocument();
  });
});