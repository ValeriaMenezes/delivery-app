import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SellerCard from '../components/SellerCard';

function SellerOrders() {
  const [sellers, setSellers] = useState([]);

  const getAllSellers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/seller/orders');
      const sellers2 = response.data;
      setSellers(sellers2);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllSellers();
  }, []);

  return (
    <div>
      {sellers.map((seller) => (
        <SellerCard
          key={ seller.sellerID }
          sellerID={ seller.sellerID }
          status={ seller.status }
          deliveryAdress={ seller.deliveryAdress }
          deliveryNumber={ seller.deliveryNumber }
          saleData={ seller.saleData }
          totalPrice={ seller.totalPrice }
        />
      ))}
    </div>
  );
}

export default SellerOrders;
