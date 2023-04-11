import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useLocation, useParams } from 'react-router-dom';
import { fetchUpdateStatusSale } from '../requests';

function DetailsHead({ sale, dataTestId }) {
  const { pathname } = useLocation();
  const { id } = useParams();

  const statusToPreparando = () => {
    fetchUpdateStatusSale(id, 'Preparando');
  };

  const statusToEmTransito = () => {
    fetchUpdateStatusSale(id, 'Em Trânsito');
  };

  const statusToEntregue = () => {
    fetchUpdateStatusSale(id, 'Entregue');
  };

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
          onClick={ statusToPreparando }
          disabled={ sale.status !== 'Pendente' }
        >
          Prepara pedido
        </button>
      )}
      {pathname.includes('seller') && (
        <button
          type="button"
          data-testid={ dataTestId.dispatchButton }
          onClick={ statusToEmTransito }
          disabled={ sale.status !== 'Preparando' }
        >
          Saiu para entrega
        </button>
      )}
      {pathname.includes('customer') && (
        <button
          type="button"
          data-testid={ dataTestId.deliveryCheck }
          onClick={ statusToEntregue }
          disabled={ sale.status !== 'Em Trânsito' }
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
