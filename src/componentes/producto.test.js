import { render, screen } from '@testing-library/react';
import { act } from 'react';
import Producto  from './producto';

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


// Mocks de las props necesarias
const mockAñadir = jest.fn();
const mockProps = {
  id_cat: 1,
  id_pro: 1,
  nombre: 'Hamburguesa',
  des: 'Deliciosa hamburguesa con queso',
  precio: 5.99,
  img: 'hamburguesa.png',
  titulo: 'Comida',
  ingredientes: [],
  añadir: mockAñadir,
};

describe('Producto', () => {
  test('renderiza el producto con su nombre, descripción y precio', () => {
    render(<Producto {...mockProps} />);

    // Verificar que el nombre, descripción y precio estén en el documento
    expect(screen.getByText(/Hamburguesa/)).toBeInTheDocument();
    expect(screen.getByText(/Deliciosa hamburguesa con queso/)).toBeInTheDocument();
    expect(screen.getByText(/5.99€/)).toBeInTheDocument();
  });

  test('el acordeón de ingredientes no se muestra para ciertas categorías', () => {
    render(<Producto {...mockProps} id_cat={3} />);

    // Verificar que no se renderiza el acordeón
    expect(screen.queryByText('Ver ingredientes')).not.toBeInTheDocument();
  });
});