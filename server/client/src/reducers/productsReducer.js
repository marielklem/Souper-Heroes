import { FETCH_PRODUCTS } from '../actions/productActions'

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload.data;
    default:
      return state;
  }
}
export default productsReducer;