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

export default class NavBar extends React.Component {
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
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar navvy">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <strong>Souper Heroes</strong>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-7">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/checkout" className="nav-link">View Cart</Link>
                </li>
                <li className="nav-item">
                  <Link to="/shop" className="nav-link">Shop</Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">Profile</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <Navbar color="light" light expand="md">
          <NavbarBrand className="logo" href="/"><img className="img-logo" src={logo} alt="Super hero logo" /> Souper Heroes</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem style={{'padding': '10px'}}><Link to="/checkout">View Cart</Link></NavItem>
              <NavItem style={{'padding': '10px'}}><Link to="/profile">Shop</Link></NavItem>
              <NavItem style={{'padding': '10px'}}><Link to="/shop">Profile</Link></NavItem>
            </Nav>
          </Collapse>
        </Navbar> */}
      </div>
    );
  }
}