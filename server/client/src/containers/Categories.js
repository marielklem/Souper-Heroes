import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom'
import * as actionTypes from "../actions";
import Products from "./Products";
import Cart from "../components/cart"

import { Collapse, CardBody, Card, Button, Modal } from 'reactstrap';

class Categories extends Component {
  state = {
    count: 0,
    modal: false
  }
  //on page load, fetch all products
  componentDidMount = () => {
    this.props.fetchCategories();
    this.props.fetchProducts();
  }

  setLocalState = () => {
    this.props.categories.map (category => {
      this.setState(
        {[category]: {
          total: 0,
          color: "green",
          collapse: true
        }}
      )
    })
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  //toggle each category container open and closed on click
  toggleCategory = (name) => {
    if (name in this.state) {
      this.setState({[name] : {
        ...this.state[name],
        collapse: !this.state[name].collapse
      }})
    } else {
      this.setState({[name] : {
      color: "green",
      total: 0,
      collapse: false
    }})
    }
  }

  //update total to auto collapse each card and update total vs limit in each category
  updateTotal = (category, total) => {
    this.setState(
      {[category]: {
        total: total,
        color: "green",
        collapse: true
      }}, () => {
      const category1 = this.props.categories.find( (limit) => {
        return limit.name === category
      })
      if (this.state[category].total >= category1.limit) {
        let count = this.state.count + 1
        this.setState({
          [category1.name]: {
            color: "red",
            collapse: false,
            total: total
          }, count
        })
      } 
    })
  }

  renderModal = () => {
    if (this.state.modal === true) {
      return (
        <Modal isOpen={this.state.modal} className={this.props.className}>
          <Cart toggle={this.toggleModal}/>
        </Modal>
      )
    }
  }

  //render cart items as they're added
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

  //for each category, add all matching products
  renderProducts(category) {
    if (this.props.inventory.length === 0) {
      return(<div>...loading</div>)
    }
    const filterByCategory = this.props.inventory.filter(product => {
      return (product.category === category.name)
    })
    return (
      <CardBody>
        <div className="container">
          <ul className="row">
            <Products products={filterByCategory} category={category} updateTotal={this.updateTotal}/>
          </ul>
        </div>
      </CardBody>
    )
  }
  //render each category
  renderCategories() {
    return this.props.categories.map (category => {
      return (
        <div className="container" key={category._id}>
          <Card >
            <div className="container" onClick={() => this.toggleCategory(category.name)}>
              <div className="category-title col-6" ><strong>{category.name.toUpperCase()}</strong></div>
              <span className="col-6 limit" style={{"color": (this.state[category.name] && this.state[category.name].hasOwnProperty('color') ? this.state[category.name].color : "green") }}>{ this.state[category.name] ? this.state[category.name].total : 0}/{category.limit}</span>
            </div>
            <Collapse isOpen={this.state[category.name] ? this.state[category.name].collapse : true}>
            <hr />
              {this.renderProducts(category)} 
            </Collapse>
          </Card>
      </div>
      )
    })
  }

  render() {
    if (this.props.inventory.length === 0) {
      return (
        <div>...loading</div>
      )
    }
    if (this.state.count === 7) {
      return <Redirect to='/checkout' />
    }
    return (
      <React.Fragment>
        {this.renderModal()}
        {this.renderCategories()}
        <Button className="checkout" onClick={this.toggleModal}><i className="fas fa-shopping-cart"/></Button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { 
    inventory: state.products,
    categories: state.categories,
    cart: state.cart
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(actionTypes.fetchCategories()),
    fetchProducts: () => dispatch(actionTypes.fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)  
