import { FETCH_CATEGORIES } from '../actions/productActions'

export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload.data;
    default:
      return state;
  }
}
export default categoriesReducer;