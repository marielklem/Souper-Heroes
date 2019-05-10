import axios from 'axios';

export const FETCH_PRODUCTS = 'fetch_products';
export const UPDATE_CART = 'update_cart';
export const FETCH_CATEGORIES = 'fetch_categories';

//get all products
export const fetchProducts = () => {
  const request = axios.get('/products', {})

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}

//get all categories
export const fetchCategories = () => {
  const request = axios.get('/categories', {})
  return {
    type: FETCH_CATEGORIES,
    payload: request
  }
}

//update the cart (locally)
export const updateCart = (items, category) => {
  const data = items
  return {
    type: UPDATE_CART,
    payload: data
  }
}