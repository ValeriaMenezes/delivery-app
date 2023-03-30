// funcionalidades
import React from 'react';
import PropTypes from 'prop-types';
// importações
import SellerOrdersProvider from './SellerOrdersProvider';
import FormProvider from './FormProvider';

export default function RootProvider({ children }) {
  return (
    <FormProvider>
      <SellerOrdersProvider>
        { children }
      </SellerOrdersProvider>
    </FormProvider>
  );
}

RootProvider.propTypes = {
  children: PropTypes.objectOf(),
}.isRequired;
