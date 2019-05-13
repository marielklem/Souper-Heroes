import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from "../actions";
import Products from "./Products"
import grapes from "../static/grapes.jpg"


import { Collapse, CardBody, Card } from 'reactstrap';

class Categories extends Component {
  state = {}
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

  renderCategories = () => {
        return this.props.categories.map (category => {
          return (
            <div className="container" key={category._id}>
              <Card clasName="row" >
                <div className="container" onClick={() => this.toggleCategory(category.name)}>
                  <div className="category-title col-6" >{category.name}</div>
                  <span className="col-6 limit" style={{"color": (this.state[category.name] && this.state[category.name].hasOwnProperty('color') ? this.state[category.name].color : "green") }}>{ this.state[category.name] ? this.state[category.name].total : 0}/{category.limit}</span>
                </div>
                <Collapse isOpen={this.state[category.name] ? this.state[category.name].collapse : true}>
                <hr />
                  {this.renderProducts(category)} 
                </Collapse>
              </Card>
            </div>
          )})
        }

  render() {
    if (this.props.inventory.length === 0) {
      return (
        <div>...loading</div>
      )
    }
    return (
      <React.Fragment>
        <div className="view" style={{"backgroundImage": `url(${grapes})`, "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "backgroundPosition": "center center", "minHeight": "30%"}}></div>
          <div className="mask rgba-gradient d-flex justify-content-center align-items-center"></div>
            {/* <div className="container" style={{"padding": "70px"}}>
              <div className="row"> */}
                {this.renderCategories()} 
              {/* </div> */}
            {/* </div> */}
          {/* </div>
        </div> */}
      </React.Fragment>
    )

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
