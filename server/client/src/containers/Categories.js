import React, { Component } from 'react'
import Products from "./Products"

class Categories extends Component {
  render() {
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

export default Categories
