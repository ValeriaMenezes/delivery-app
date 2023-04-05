import React, { useContext, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
// import { ProductsContext } from '../context/ProductsProvider';
// import { fetchSales } from '../requests/index';

function OrderDetails() {
  // const { userInfo, setUserInfo } = useContext(ProductsContext);
  // const { role } = userInfo;

  // const { id } = useParams();

  // useEffect(() => {
  //   const getSales = async () => {
  //     const response = await fetchSales(id);
  //     // aqui deve ser verificado o que é retornado do db quando a tela de checkout estiver pronta
  //     return response;
  //   };

  //   getSales();
  // }, []);

  return (
    <div>
      <NavBar />
      <h1>Detalhes do Pedido</h1>
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        Pedido 0003
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
      <div>
        <table>
          <thead>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </thead>
          <tbody>
            <tr>
              <td
                data-testid="customer_order_details__element-order-table-item-number-<index>"
              >
                {/* { index + 1} */}
              </td>
              <td
                data-testid="customer_order_details__element-order-table-name-<index>"
              >
                {/* { name } */}
              </td>
              <td
                data-testid="customer_order_details__element-order-table-quantity-<index>"
              >
                {/* { quantity } */}
              </td>
              <td
                data-testid="customer_order_details__element-order-table-unit-price-<index>"
              >
                {/* { price } */}
              </td>
              <td
                data-testid="customer_order_details__element-order-table-sub-total-<index>"
              >
                {/* { price * quantity } */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <span
        data-testid="customer_order_details__element-order-total-price"
      >
        Total:
      </span>
    </div>
  );
}

export default OrderDetails;
