// funcionalidades
import React from 'react';
import PropTypes from 'prop-types';
// importações
import SellerOrdersProvider from './SellerOrdersProvider';
import ProductsProvider from './ProductsProvider';
import FormProvider from './FormProvider';

export default function RootProvider({ children }) {
  return (
    <FormProvider>
      <ProductsProvider>
        <SellerOrdersProvider>
          { children }
        </SellerOrdersProvider>
      </ProductsProvider>
    </FormProvider>
  );
}

RootProvider.propTypes = {
  children: PropTypes.objectOf(),
}.isRequired;
