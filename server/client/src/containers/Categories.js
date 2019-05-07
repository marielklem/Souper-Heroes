import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../actions';
import Products from "./Products"

class Categories extends Component {


  //on page load, fetch all products
  componentDidMount() {
    this.props.fetchProducts();
  }


  render() {
    console.log(this.props.inventory)
    if (!this.props.inventory) {
      return (
        <div>...loading</div>
      )
    }
    console.log(this.props)
    return (
      <div>
        <div id="accordion" style={{'padding': '10px'}}>
          <div className="card">
            <div className="card-header" id="categories">
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Vegetables
              </button>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="categories" data-parent="#accordion">
              <Products />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { inventory: state.products };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)  
