import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import { Button, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem } from 'reactstrap';

class Cart extends Component {

  renderCart() {
    const items = Object.entries(this.props.cart) 
    return items.map (item => {
      return (
        <ListGroupItem key={item[0]}>{item[1]}- {' '}{item[0]}
        </ListGroupItem>
      )
    })
  }

  render() {
    return(
      <React.Fragment>  
          <ModalHeader>Cart</ModalHeader>
          <ModalBody>
            <ListGroup style={{"padding": "10px"}}>
               {this.renderCart()}
            </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Link to='./checkout'><Button color="primary" >Check Out</Button></Link>
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
      </React.Fragment>
      

    )
  }
}

const mapStateToProps = state => {
  return { 
    cart: state.cart,
  };
}

export default connect(mapStateToProps)(Cart)  
