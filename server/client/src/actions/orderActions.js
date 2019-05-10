import axios from 'axios';

export const FETCH_ORDERS = 'fetch_orders';
export const UPDATE_ORDER = 'update_order';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept, X-Authentication'
}

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
    headers: CORS_HEADERS,
    body: {
      "status": status
    }
})
  return {
    type: UPDATE_ORDER,
    payload: request
  }
}