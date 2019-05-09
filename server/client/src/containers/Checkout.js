import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actionTypes from "../actions";

class Checkout extends Component {
  submitOrder(e) {
    e.preventDefault()
    console.log(e)
  }

  renderCart() {
    const items = Object.entries(this.props.cart) 
    return items.map (item => {
      return (
        <li className="list-group-item d-flex justify-content-between align-items-center">{item[0]}
          <span className="badge badge-primary badge-pill">{item[1]}</span>
        </li>
      )
    })
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <ul className="list-group container" style={{'padding': '20px'}}>
            <li className="list-group-item list-group-item-info align-items-center">Your Order</li>
              {this.renderCart()}
            <li className="list-group-item"><button type="button" onClick={e => this.submitOrder(e)}className="btn btn-info btn-lg btn-block"><i className="fas fa-shopping-cart" style={{'padding': '5px'}} />Check Out</button></li>
          </ul>
      </div>
      </div>

    )
  }
}


const mapStateToProps = state => {
  return { 
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Checkout)  
