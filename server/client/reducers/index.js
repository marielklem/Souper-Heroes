import { combineReducers } from 'redux';
import ProductsReducer from './productsReducer'

const rootReducer = combineReducers({
  products: ProductsReducer,
});

export default rootReducer;