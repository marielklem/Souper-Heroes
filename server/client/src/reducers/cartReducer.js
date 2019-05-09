import { UPDATE_CART } from '../actions/productActions'

export default function(state = {}, action) {
  switch (action.type) {
    case UPDATE_CART:
      return Object.assign(state, action.payload)
    default:
      return state;
  }
}