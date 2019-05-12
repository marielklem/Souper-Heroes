import axios from 'axios';

export const FETCH_ORDERS = 'fetch_orders';
export const SUBMIT_ORDER = 'submit_order'
export const UPDATE_ORDER = 'update_order';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept, X-Authentication'
}

//get all pending orders
export const fetchOrders = () => {
  const request = axios.get('/orders/pending', {})
    return{
      type: FETCH_ORDERS,
      payload: request
    }
}

//submit an order
export const submitOrder = (order) => {
  console.log(order)
  const request = axios.post('/orders/neworder', {
    headers: CORS_HEADERS,
    name: order.name,
    nameId: order.nameId,
    order: order.order
  })
  return {
    type: SUBMIT_ORDER,
    payload: request
  }
}

//update order status
export const updateOrder = (id, status) => {
  const request = axios.put(`/orders/${id}`, {
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