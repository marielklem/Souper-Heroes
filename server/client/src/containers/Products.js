import React, { Component } from 'react'

class Products extends Component {
  render() {
    if (this.props.products.length === 0) {
    }

    return this.props.products.map (item => {
    return (
      <li className="col-5 col-sm-6 col-md-4 col-lg-2 col-xl-2">
        <div className="card">
          <img className="card-img-top" src={item.image} alt="food item" />
          <h5 className="card-title" style={{'textAlign': 'center'}}>{item.name}</h5>
            <div className="input-group">
            <span className="input-group-btn">
              <button type="button" className="btn btn-default btn-number">
                <i className="fas fa-minus"/>
              </button>
            </span>
             <input type="text" className="form-control input-number" />
            <span className="input-group-btn">
              <button type="button" className="btn btn-default btn-number">
                <i className="fas fa-plus"/>
              </button>
            </span>
          </div>
        </div>
      </li>
    )
    })
  }
}

export default Products
