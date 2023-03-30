import React from 'react';
import PropTypes from 'prop-types';

function SellerCard({
  sellerID,
  status,
  deliveryAdress,
  deliveryNumber,
  saleData,
  totalPrice,
}) {
  return (
    <div
      data-testid={ `customer_products__element-order-date-${sellerID}` }
    >
      <h4>Pedido</h4>
      <h2>{`${sellerID}`}</h2>
      <div>
        <h1>{ status }</h1>
      </div>
      <h1>{ saleData }</h1>
      <h1>{ totalPrice }</h1>
      <p>{ `${deliveryAdress}, ${deliveryNumber}` }</p>
    </div>
  );
}

SellerCard.propTypes = {
  sellerID: PropTypes.number,
  status: PropTypes.string,
  deliveryAdress: PropTypes.string,
  data: PropTypes.string,
  totalPrice: PropTypes.number,
}.isRequired;

export default SellerCard;
