import {
  FETCH_ORDERS,
  UPDATE_ORDER
} from '../actions/orderActions'

export const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        ...state,
        orders: action.payload.data
      }

      case UPDATE_ORDER:
        const stateCopy = {
          ...state
        }
        stateCopy.orders.map((order, index, arr) => {
          if (order._id === action.payload.data._id) {
            arr[index] = action.payload.data
          }
          return arr;
        });
        return stateCopy;

      default:
        return state;
  }
}
export default ordersReducer;