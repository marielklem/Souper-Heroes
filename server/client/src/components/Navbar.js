import React from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import logo from "../static/logo.png"
import header from "../static/market.jpg"

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand className="logo" href="/"><img className="img-logo" src={logo} alt="Super hero logo" /> Souper Heroes</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem style={{'padding': '10px'}}><Link to="/checkout"><i className="fas fa-shopping-cart" /></Link></NavItem>
              <NavItem style={{'padding': '10px'}}><Link to="/orderStatus"><i className="fas fa-bell"/></Link></NavItem>
              <NavItem style={{'padding': '10px'}}><Link to="/profile"><i className="fas fa-user"/></Link></NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <img src={header} className="img-fluid header" alt="canned food header"></img>
      </div>
    );
  }
}