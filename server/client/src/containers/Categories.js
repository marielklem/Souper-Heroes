import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionTypes from "../actions";
import Products from "./Products"

class Categories extends Component {
  //on page load, fetch all products
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProducts();
  }

  addProducts(category) {
    if (this.props.inventory.length === 0) {
      return(<div>...loading</div>)
    }
    const filterByCategory = this.props.inventory.filter(product => {
      return (product.category === category.name)
    })
    return (
      <ul className="row">
        <Products products={filterByCategory} />
      </ul>
    )
  }


  render() {
    if (this.props.inventory.length === 0) {
      return (
        <div>...loading</div>
      )
    }
    return this.props.categories.map (category => {
      return (
        <div key={category._id}>
          <div id="accordion" style={{'padding': '10px'}}>
            <div className="card">
              <div className="card-header" id="categories">
                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  {category.name}
                </button>
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="categories" data-parent="#accordion">
              {this.addProducts(category)}
              </div>
            </div>
          </div>
        </div>


      )
    })
  }
}

const mapStateToProps = state => {
  return { 
    inventory: state.products,
    categories: state.categories
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(actionTypes.fetchCategories()),
    fetchProducts: () => dispatch(actionTypes.fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)  
