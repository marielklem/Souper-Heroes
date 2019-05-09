import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from "../actions";

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();   
  }

  statusChange(e) {
    e.preventDefault()
    console.log(e)
  }

  renderOrders(orders) {
    return orders.map (item => {
      return (
        <div>
        </div>
      )
    })
  }

  render() {
    if (this.props.orders === undefined) {
      return (<div>...loading</div>)
    }
    console.log(this.props.orders)
    return(
      <div>this is the Admin Page</div>

    )
  }
}


const mapStateToProps = state => {
  return { 
    orders: state.orders
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: () => dispatch(actionTypes.fetchOrders()),
    // updateOrder: (id, status) => dispatch(actionTypes.updateOrder(id, status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)  
