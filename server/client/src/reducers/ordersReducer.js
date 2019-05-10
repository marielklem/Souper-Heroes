import { FETCH_ORDERS, UPDATE_ORDER } from '../actions/orderActions'

export const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        ...state,
        orders: action.payload.data
      }

    case UPDATE_ORDER:
      return {
        ...state,
        orders: action.payload.data
      }
    default:
        return state;  
  }
}
export default ordersReducer;