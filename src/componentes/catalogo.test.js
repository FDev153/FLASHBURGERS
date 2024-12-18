import { render, screen } from '@testing-library/react';
import { act } from 'react';
import Catalogo from './catalogo';

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

const mockProductos = [
  { id_categoria: 1, id_producto: 1, nombre: 'Producto 1', imagen: '', descripcion: '', precio: 10 },
  { id_categoria: 1, id_producto: 2, nombre: 'Producto 2', imagen: '', descripcion: '', precio: 15 },
];
const mockIngredientes = [{ nombre: 'Lechuga' }, { nombre: 'Tomate' }];
const mockAñadir = jest.fn();
const mockProductosFn = jest.fn();
const mockIngredientesFn = jest.fn();

describe('Catalogo', () => {
  test('renders Catalogo and title based on id', () => {
    render(
      <Catalogo
        productos={mockProductosFn}
        ingredientes={mockIngredientesFn}
        producto={mockProductos}
        ingrediente={mockIngredientes}
        id={1}
        añadir={mockAñadir}
      />
    );

    // Verifica si el título correcto se renderiza
    const tituloElement = screen.getByText(/Entrantes/i);
    expect(tituloElement).toBeInTheDocument();

    // Verifica que los productos se muestren
    mockProductos.forEach((producto) => {
      const productoElement = screen.getByText(producto.nombre);
      expect(productoElement).toBeInTheDocument();
    });
  });
});