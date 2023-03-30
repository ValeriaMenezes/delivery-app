import React from 'react';
import PropTypes from 'prop-types';

function SellerCard({ index, request, endereco, data, value }) {
  return (
    <div
      data-testid={ `customer_products__element-order-date-${index}` }
    >
      <h4>Pedido</h4>
      <h2>{`${index}`}</h2>
      <div>
        <h1>{ request }</h1>
      </div>
      <h1>{ data }</h1>
      <h1>{ value }</h1>
      <p>{ endereco }</p>
    </div>
  );
}

SellerCard.propTypes = {
  index: PropTypes.number,
  request: PropTypes.string,
  endereco: PropTypes.string,
  data: PropTypes.string,
  value: PropTypes.number,
}.isRequired;

export default SellerCard;
