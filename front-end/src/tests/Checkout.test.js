import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkout from '../pages/Checkout';
import renderWithRouter from '../utils/renderWithRouter';

describe('Testando a página Checkout', () => {
  test('Default test', () => {
    const { history } = renderWithRouter(<Checkout />);
    expect(history.location.pathname).toBe('/');
  });

  it('Verifica a página', () => {
    renderWithRouter(<Checkout />);
    expect(screen.getByText('Finalizar Pedido')).toBeInTheDocument();
  });

  it('Verifica se existem dois inputs e um select', () => {
    renderWithRouter(<Checkout />);
    const value = 'test';
    const inputs = screen.getAllByRole('textbox');
    const selects = screen.getAllByRole('combobox');
    inputs.forEach((input) => {
      userEvent.type(input, value);
      expect(input).toBeInTheDocument();
      expect(input).toHaveValue(value);
    });
    selects.forEach((select) => expect(select).toBeInTheDocument());
  });

  it('Verifica se a tabela está com os cabeçalhos corretos', () => {
    renderWithRouter(<Checkout />);
    const headers = ['Item',
      'Descrição', 'Quantidade', 'Valor unitário', 'Sub-total', 'Remover Item'];
    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });
});
