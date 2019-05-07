import axios from 'axios';

export const FETCH_PRODUCTS = 'fetch_products';

export const fetchProducts = () => {
  const request = axios.get('http://localhost:8000/products', {
  })

  console.log(request)

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}