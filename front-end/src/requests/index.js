// const headers = {
//   Accept: 'application/json, text/plain, */*',
//   'Access-Control-Allow-Origin': '*',
//   'Content-Type': 'application/json',
// };

const fetchProducts = async () => {
  const response = await fetch(
    `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/products`,
    {
      method: 'GET',
      // headers,
    },
  );
  const data = await response.json();
  return data;
};

const fetchSales = async (id) => {
  const response = await fetch(
    `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/sales/orders/details/${id}`,
    {
      method: 'GET',
    },
  );
  const data = await response.json();
  // console.log('data', data);
  return data;
};

const fetchUpdateStatusSale = async (id, newStatus) => {
  console.log('aquii');
  const response = await fetch(
    `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/sales/status/${id}`,
    {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify({ newStatus }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = await response.json();
  return data;
};

export default fetchProducts;
export { fetchSales, fetchUpdateStatusSale };
