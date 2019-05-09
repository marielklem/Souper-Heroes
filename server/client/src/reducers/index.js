import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import ordersReducer from './ordersReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer,
});

export default rootReducer;