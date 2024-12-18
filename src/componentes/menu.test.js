import { render, screen } from '@testing-library/react';
import { act } from 'react';
import Menu from './menu';

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
const mockCategoria = jest.fn();
const mockGenerar = jest.fn();
const mockMenuelegir = jest.fn();
const mockMenu = [
  { id_categoria: 1, nombre: 'Entrantes', img: 'entrantes.png' },
  { id_categoria: 2, nombre: 'Hamburguesas', img: 'hamburguesas.png' },
];

describe('Menu', () => {
  test('renderiza el título Flash Burger y las categorías', () => {
    render(
      <Menu
        categoria={mockCategoria}
        generar={mockGenerar}
        menuelegir={mockMenuelegir}
        menu={mockMenu}
      />
    );

    // Verificar si el título "Flash Burger" se encuentra en el documento
    const titulos = screen.getAllByText(/Flash Burger/i);
    expect(titulos.length).toBeGreaterThan(0); // Asegurarse de que al menos uno de los elementos sea encontrado

    // Verificar si las categorías "Entrantes" y "Hamburguesas" se encuentran en el documento
    mockMenu.forEach((item) => {
      const categoria = screen.getAllByText(item.nombre);
      expect(categoria.length).toBeGreaterThan(0); // Asegurarse de que al menos uno de los elementos sea encontrado
    });
  });
});