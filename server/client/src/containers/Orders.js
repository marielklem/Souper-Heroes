import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from "../actions";
import IndividualOrder from '../components/individualOrder'
import {Modal} from 'reactstrap'

let moment = require("moment");

class Orders extends Component {
  state = {
    showDetails: false,
    order: {}
  }
  componentDidMount = () => {
    this.props.fetchOrders();   
  }

  toggleDetails = (order) => {
    this.setState({ showDetails: !this.state.showDetails, order });
  }

  showModal = () => {
    if (this.state.showDetails === true) {
      return (
        <Modal isOpen={this.state.showDetails} className={this.props.className}>
          <IndividualOrder toggle={this.toggleDetails} order={this.state.order} />
        </Modal>
      )
    }
  }

  renderOrders = () => {
    if (this.props.orders.orders){
      return this.props.orders.orders.map (order => {
        return (
          <tr onClick={() => this.toggleDetails(order)} key={order._id}>
            <td>{moment(order.createdAt).format("MM/DD/YYYY")}</td>
            <td>{order.name}</td>
            <td>{order.status}</td>
          </tr>
        )
      })
    }
  }

  render() {
    if (this.props.orders.length === 0) {
      return (<div>...loading</div>)
    }
    return(
      <React.Fragment>
        {this.showModal()}
        <div className="container">
          <div className="view-account">
            <section className="module">
              <div className="module-inner">
                <div className="container">
                  <div className="row">
                    <h1>Outstanding Orders</h1>
                  </div>
                <div className="container">
                  <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Request Date</th>
                      <th>Client Name</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderOrders()}
                  </tbody>
                  </table>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => {
  return { 
    orders: state.orders
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: () => dispatch(actionTypes.fetchOrders()),
    updateOrder: (id, status) => dispatch(actionTypes.updateOrder(id, status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)  
