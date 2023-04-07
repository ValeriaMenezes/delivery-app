import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SellerCard({
  index,
  id,
  status,
  deliveryAddress,
  deliveryNumber,
  saleDate,
  totalPrice,
}) {
  const mes = `${saleDate[5]}${saleDate[6]}`;
  const dia = `${saleDate[8]}${saleDate[9]}`;
  const ano = `${saleDate[2]}${saleDate[3]}`;
  const dataFormatada = `${dia}/${mes}/${ano}`;
  const NUMBER_OITO = 8;
  return (
    <Link to={ `/seller/orders/${id}` }>
      <div
        data-testid={ `seller_orders__element-order-id-${id}` }
      >
        <h4>Pedido</h4>
        <h2>{index < NUMBER_OITO ? `000${index + 1}` : `00${index + 1}`}</h2>
        <div>
          <h1>{status}</h1>
        </div>
        <h1>{dataFormatada}</h1>
        <h1>{totalPrice}</h1>
        <p>{`${deliveryAddress}, ${deliveryNumber}`}</p>
      </div>
    </Link>
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
