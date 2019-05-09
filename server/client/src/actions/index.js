import axios from 'axios';

export const FETCH_PRODUCTS = 'fetch_products';
export const FETCH_CATEGORIES = 'fetch_categories';
export const UPDATE_CART = 'updateCart'
export const FETCH_USER = 'fetch_user'

//get all products
export const fetchProducts = () => {
  const request = axios.get('http://localhost:8000/products', {})

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}

//get all categories
export const fetchCategories = () => {
  const request = axios.get('http://localhost:8000/categories', {})
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

//get profile information on a user
export const fetchUser = () => {
  const request = axios.get('http://localhost:8000/profile/5cd2f186c93c4937d8f970b0', {})
    return{
      type: FETCH_USER,
      payload: request
    }
}