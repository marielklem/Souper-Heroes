import { FETCH_ORDERS, UPDATE_ORDER } from '../actions/orderActions'

export const ordersReducer = (state = {}, action) => {
  console.log('order reducer: made it')
  switch (action.type) {
    case FETCH_ORDERS:
    console.log(action.payload.data)
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