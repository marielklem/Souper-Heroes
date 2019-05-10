import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from "../actions";

import { Button, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem } from 'reactstrap';

let moment = require("moment");

class OrderDetails extends Component {
  state = {
    status: "pending"
  }

  updateOrderStatus =() => {
    const status = "complete"
    this.props.updateOrder(this.props.order._id, status)
    this.props.toggle()
  }

  renderOrder() {
    if(this.props.order) {
      const items = Object.entries(this.props.order.order) 
    return (items.map(item => {
      return(
        <ListGroupItem key={item[0]}>
          {item[1]}{' '}
          {item[0]}
        </ListGroupItem>
      )

    }))
  }}

  render() {
    return(
      <React.Fragment>  
          <ModalHeader>{this.props.order.name}'s Order</ModalHeader>
          <ModalBody>
            <p style={{"textAlign": "right", "fontSize" : "12px", "color": "#A9A9A9"}}>Order placed {moment(this.props.order.createdAt).format("MM/DD/YYYY")}</p>
            <ListGroup>
               {this.renderOrder()}
            </ListGroup>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateOrderStatus}>Complete Order</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
      </React.Fragment>
      

    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    updateOrder: (id, status) => dispatch(actionTypes.updateOrder(id, status))
  }
}

export default connect(null, mapDispatchToProps)(OrderDetails)  
