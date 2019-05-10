import axios from 'axios';

export const FETCH_ORDERS = 'fetch_orders';
export const UPDATE_ORDER = 'update_order';

//get all pending orders
export const fetchOrders = () => {
  const request = axios.get('http://localhost:8000/orders/pending', {})
    return{
      type: FETCH_ORDERS,
      payload: request
    }
}

//update order status
export const updateOrder = (id, status) => {
  const request = axios.put(`http://localhost:8000/orders/${id}`, {
  params: {
    status: status
  }
})
  return {
    type: UPDATE_ORDER,
    payload: request
  }
}