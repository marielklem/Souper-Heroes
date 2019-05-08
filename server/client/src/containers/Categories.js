import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from "../actions";
import Products from "./Products"

class Categories extends Component {
  //on page load, fetch all products
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProducts();
    
  }

  //for each category, add all matching products
  addProducts(category) {
    if (this.props.inventory.length === 0) {
      return(<div>...loading</div>)
    }
    const filterByCategory = this.props.inventory.filter(product => {
      return (product.category === category.name)
    })
    return (
      <div className="container">
        <ul className="row">
          <Products products={filterByCategory} category={category} />
        </ul>
      </div>
      
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
        <div key={category._id} className="container">
          <div id="accordion" style={{'padding': '10px'}} className="row">
            <div className="card">
              <div className="card-header" id="categories">
                <h1 className="btn btn-link category-title col-6" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  {category.name}
                </h1>
                <span className="col-6" style={{'float': 'right'}}>(limit: {category.limit})</span>
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="categories" data-parent="#accordion">
              <div className="panel-body">
                {this.addProducts(category)}  
              </div>
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
