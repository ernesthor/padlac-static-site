import React, { Component } from 'react';
import {  Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './components.css'

const padlacLogo = './assets/padlac-navbar-logo.png'

export default class AppNavbar extends Component {
  render () {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><img src={padlacLogo} className="padlac-logo"/></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link}  className="app-li" href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link}  className="app-li" href="/about" to="/about">
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link}  className="app-li" href="/services" to="/services">
              Services
            </NavItem>
            <NavItem eventKey={4} componentClass={Link}  className="app-li" href="/contact" to="/contact">
              Contact
            </NavItem>
            <NavItem eventKey={5} componentClass={Link}  className="app-li" href="/careers" to="/careers">
              Careers
            </NavItem>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
