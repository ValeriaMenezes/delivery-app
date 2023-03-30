// funcionalidades
import React from 'react';
import PropTypes from 'prop-types';
// importações
import SellerOrdersProvider from './SellerOrdersProvider';

export default function RootProvider({ children }) {
  return (
    <SellerOrdersProvider>
      { children }
    </SellerOrdersProvider>
  );
}

RootProvider.propTypes = {
  children: PropTypes.objectOf(),
}.isRequired;
