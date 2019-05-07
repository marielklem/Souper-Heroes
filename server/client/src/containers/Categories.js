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
    if (this.props.inventory.length === 0) {
      return (
        <div>...loading</div>
      )
    }
    return this.props.inventory.map (item => {
      return (
        <div>
          <div id="accordion" style={{'padding': '10px'}}>
            <div className="card">
              <div className="card-header" id="categories">
                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  {item.category}
                </button>
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="categories" data-parent="#accordion">
              <ul className="row">
              <Products products={this.props.inventory} />
              </ul>
              </div>
            </div>
          </div>
        </div>


      )
    })
  }
}

const mapStateToProps = state => {
  return { inventory: state.products };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)  
