import React from 'react';
import renderWithRouter from '../utils/renderWithRouter';
import App from '../App';

describe('Testando a <App />', () => {
  test('Default test', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');
  });
});
