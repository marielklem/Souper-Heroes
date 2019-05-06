import React, { Component } from 'react'

class Products extends Component {
  render() {
    return (
      <div className="card-body col-6 col-sm-3 col-md-4 col-lg- 2 col-xl-1">
        <div className="card">
          <img className="card-img-top" src="https://target.scene7.com/is/image/Target/13324726?wid=250&hei=250&qlt=80&fmt=webp" alt="food item" />
          <div className="card-body">
            <h5 className="card-title">Corn</h5>
            <div className="card-text">
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
          </div>
        </div>
      </div>
    )
  }
}

export default Products
