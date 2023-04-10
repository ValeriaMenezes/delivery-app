import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useLocation } from 'react-router-dom';

function DetailsHead({ sale, dataTestId }) {
  const { pathname } = useLocation();
  return (
    <section>
      <p
        data-testid={ dataTestId.id }
      >

        { sale.id }
      </p>
      <p
        data-testid={ dataTestId.seller }
      >
        {pathname.includes('customer') && sale.seller.name}
      </p>
      <p
        data-testid={ dataTestId.date }
      >
        { moment(sale.saleDate).format('DD/MM/YYYY') }
      </p>
      <h4
        data-testid={ dataTestId.status }
      >
        { sale.status }
      </h4>
      {pathname.includes('seller') && (
        <button
          type="button"
          data-testid={ dataTestId.preparingButton }
          onClick={ () => {} }
        >
          Prepara pedido
        </button>
      )}
      {pathname.includes('seller') && (
        <button
          type="button"
          data-testid={ dataTestId.dispatchButton }
          onClick={ () => {} }
          disabled
        >
          Saiu para entrega
        </button>
      )}
      {pathname.includes('customer') && (
        <button
          type="button"
          data-testid={ dataTestId.deliveryCheck }
          onClick={ () => {} }
          disabled
        >
          Marcar como entregue
        </button>
      )}

    </section>
  );
}

DetailsHead.propTypes = {
  sale: PropTypes.shape(),
}.isRequired;

export default DetailsHead;
