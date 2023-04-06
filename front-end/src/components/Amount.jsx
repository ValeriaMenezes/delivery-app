import React from 'react';
import PropTypes from 'prop-types';

function Amount({ sale, dataTestId }) {
  return (
    <h3 data-testid={ dataTestId }>
      {sale.products.reduce((acc, curr) => acc
      + (curr.price * curr.SalesProducts.quantity), 0)}
    </h3>
  );
}

Amount.propTypes = {
  sale: PropTypes.shape,
}.isRequired;
export default Amount;
