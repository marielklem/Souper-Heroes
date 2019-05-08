import axios from 'axios';

export const FETCH_PRODUCTS = 'fetch_products';
export const FETCH_CATEGORIES = 'fetch_categories';

export const fetchProducts = () => {
  const request = axios.get('http://localhost:8000/products', {})

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}

export const fetchCategories = () => {
  const request = axios.get('http://localhost:8000/categories', {})
  return {
    type: FETCH_CATEGORIES,
    payload: request
  }
}

export const updateCart = item => {
  console.log(item)
}