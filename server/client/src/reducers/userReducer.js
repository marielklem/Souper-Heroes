import {FETCH_USER} from '../actions/userActions'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload.data;
    default:
      return state;
  }
}