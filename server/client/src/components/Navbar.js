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


export default class NavBar extends React.Component {
  state = {
    isOpen: false,
    cart: '',
    shop: '',
    profile: '',
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar light expand="md" className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar navvy">
          <div className="container">
            <NavbarBrand href="/">
              <strong>Souper Heroes</strong>
            </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="navbar-nav mr-auto" navbar>
              <NavItem className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></NavItem>
              <NavItem  className="nav-item"><Link to="/shop" className="nav-link">Shop</Link></NavItem>
              <NavItem className="nav-item"><Link to="/checkout" className="nav-link">View Cart</Link></NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}