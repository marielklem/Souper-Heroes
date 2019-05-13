import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from "../actions";

class Checkout extends Component {
  state = {
    name: this.props.user.name,
    nameId: this.props.user._id,
    order: this.props.cart
  }
  checkoutOrder = (e) => {
    e.preventDefault();
    this.props.submitOrder(this.state)
  }

  renderCart() {
    const items = Object.entries(this.props.cart) 
    return items.map (item => {
      return (
        <li className="list-group-item d-flex justify-content-between align-items-center" key={item[0]}>{item[0]}
          <span className="badge badge-primary badge-pill">{item[1]}</span>
        </li>
      )
    })
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <ul className="list-group container" style={{'padding': '70px'}}>
            <li className="list-group-item list-group-item-info align-items-center">Your Order</li>
              {this.renderCart()}
            <li className="list-group-item"><button type="submit" onClick={(e) => this.checkoutOrder(e)}className="btn btn-info btn-lg btn-block"><i className="fas fa-shopping-cart" style={{'padding': '5px'}} />Check Out</button></li>
          </ul>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    cart: state.cart,
    user: state.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    submitOrder: (order) => dispatch(actionTypes.submitOrder(order))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)  
