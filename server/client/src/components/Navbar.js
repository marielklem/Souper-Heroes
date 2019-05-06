import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

import logo from "../static/logo.png"
import header from "../static/can-header.jpg"

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
          <NavbarBrand className="logo" href="/"><img className="img-logo" src={logo} alt="Super hero logo" /> Souper Heros</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/checkout/"><i className="fas fa-shopping-cart"></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/orderStatus"><i className="fas fa-bell"></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile"><i className="fas fa-user"></i></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <img src={header} className="img-fluid header" alt="canned food header"></img>
      </div>
    );
  }
}