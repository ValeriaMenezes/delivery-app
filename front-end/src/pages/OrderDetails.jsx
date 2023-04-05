import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import { ProductsContext } from '../context/ProductsProvider';

function OrderDetails() {
  const { userInfo, setUserInfo } = useContext(ProductsContext);
  const { role } = userInfo;
  return (
    <div>
      <NavBar />
      <h1>Detalhes do Pedido</h1>
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        Pedido 000
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        P. Vend: Fulana Pereira
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        07/04/2021
      </span>
      <span
        data-testid="customer_order_
          details__element-order-details-label-delivery-status<index>"
      >
        ENTREGUE
      </span>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}

export default OrderDetails;
