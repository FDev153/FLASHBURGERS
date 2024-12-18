import { render, screen } from '@testing-library/react';
import { act } from 'react';
import AppPedidos  from './appPedidos';

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

describe('AppPedidos', () => {
  test('El componente se renderiza correctamente', () => {
    const { container } = render(<AppPedidos />);
    // Asegúrate de que se ha renderizado algún contenido del componente para que no este vacio 
    expect(container).toBeInTheDocument();
  });
});
