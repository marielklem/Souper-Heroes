import { UPDATE_CART, DELETE_CART } from '../actions/productActions'

const defaultState = {}
export default function(state = {}, action) {
  switch (action.type) {
    case UPDATE_CART:
      return Object.assign(state, action.payload)

    case DELETE_CART:
      return defaultState
    default:
      return state;
  }
}