import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions';
import '../static/products.css';

class Products extends Component {
  state = {
    sum: 0
  }


  //add one item to cart on each click
  addToCart = (item, updateTotal) => {
    //check to make sure limit in category has not been reached
    if (this.state.length !== 0) {
      const limit = this.props.category.limit
      if (this.state.sum >= limit){
        throw alert (`Limit reached, please remove some ${item.category} items from your cart to add this item`)
      }
      //if item already in state, add one
      if (item.name in this.state) {
        //check to make sure quantity hasn't been reached
        if(this.state[item.name] < item.quantity) {
          const qty = parseInt(this.state[item.name]) + 1
          let sum = this.state.sum + 1
          this.setState({[item.name] : qty, sum}, () => {
            updateTotal(item.category, this.state.sum)
            this.props.updateCart(this.state, this.props.category.name)
          })
        } else {
            throw alert (`Sorry we only have ${item.quantity} ${item.name} in stock. Please add a different item`)
          }
      } else {
          let sum = this.state.sum + 1
          this.setState({[item.name]: 1, sum}, () => {
            updateTotal(item.category, this.state.sum)
            this.props.updateCart(this.state, this.props.category.name)
          })
        }
    }
  }

  //subtract one item from cart on click
  subtractFromCart = (item, updateTotal) => {
    if (this.state[item.name] > 0) {
      const qty = parseInt(this.state[item.name]) - 1
      let sum = this.state.sum - 1
      this.setState({[item.name] : qty, sum}, () => {
        updateTotal(item.category, this.state.sum)
        this.props.updateCart(this.state, this.props.category.name)
      })
    } else {
      this.setState({[item.name]: 0}, () => {
        this.props.updateCart(this.state, this.props.category.name)
      })
    }
  }

  render() {
    if (this.props.products.length === 0) {
    }
    const {products, updateTotal} = this.props
    return products.map (item => {
    return (
      <li className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2" key={item._id}>
        <div className="card">
          <img className="card-img-top" src={item.image} alt="food item" />
          <h5 className="card-title">{item.name}</h5>
          <div className="qty mt-5">
            <span className="minus bg-secondary" onClick={() => this.subtractFromCart(item, updateTotal)}>-</span>
            {/* <h3 className="count">{this.state[item.name] || 0}</h3> */}
            <input type="number" className="count" name={item.name} value={this.state[item.name] || 0} readOnly />
            <span className="plus bg-secondary" onClick={() => this.addToCart(item, updateTotal)}>+</span>
          </div>
        </div>
      </li>
    )
    })
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCart: (items, category) => dispatch(actionTypes.updateCart(items, category))
  }
}

export default connect(null, mapDispatchToProps)(Products)  