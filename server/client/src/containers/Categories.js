import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from "../actions";
import Products from "./Products"

import { Collapse, CardHeader, CardBody, Card } from 'reactstrap';

class Categories extends Component {
  state = {}
  //on page load, fetch all products
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProducts();
  }

  setLocalState() {
    console.log('made it')
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

  //toggle each category container open and closed on click
  toggleCategory = (name) => {
    if (name in this.state) {
      this.setState({[name] : {
        ...this.state[name],
        collapse: !this.state[name].collapse
      }})
    } else {
      this.setState({[name] : {
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
        this.setState({
          [category1.name]: {
            color: "red",
            collapse: false,
            total: total
          }
        })
      } 
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

  render() {
    if (this.props.inventory.length === 0) {
      return (
        <div>...loading</div>
      )
    }
    return this.props.categories.map (category => {
      console.log(this.state[category.name])
      return (
        <div className="container">
          <Card>
            <CardHeader key={category._id} onClick={() => this.toggleCategory(category.name)}>
              <h1 className="category-title col-6">
                    {category.name}
                </h1>
                <span className="col-6 limit" style={{"color": (this.state[category] && this.state[category.name].hasOwnProperty('color') ? this.state[category.name].color : "red") }}>{ this.state[category.name] ? this.state[category.name].total : 0}/{category.limit}</span>
            </CardHeader>
            <Collapse isOpen={this.state[category.name] ? this.state[category.name].collapse : true}>

              {this.renderProducts(category)} 

              </Collapse>
          </Card>
      </div>
        // <div key={category._id} className="container">
        //   <div id="accordion" style={{'padding': '10px'}} className="row" >
        //     <div className="card" isOpen={this.state.collapse}>
        //       <div className="card-header" id="categories">
                // <h1 className="btn btn-link category-title col-6" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                //   {category.name}
                // </h1>
                // <span className="col-6 limit" style={{'float': 'right', "color": this.state.color}}>{this.state[category.name] || 0}/{category.limit}</span>
        //       </div>
        //       <div id="collapseOne" className="collapse show" aria-labelledby="categories" data-parent="#accordion">
        //       <div className="panel-body">
        //         {this.renderProducts(category)}  
        //       </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
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
