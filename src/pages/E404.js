import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Alert } from 'react-bootstrap';
import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';

export default class E404 extends Component {
  render () {
    return (
      <div className="padlac-container">
        <div className="padlac-content">
          <AppNavbar/>
          <div>
          <Alert bsStyle="warning">
            <h1><strong>Error 404</strong></h1>
            <h2><strong>Page Not Found</strong></h2>
            <h3>Link may be broken or page is under construction</h3>
            <Link to href="/" to="/"> Please go back to home </Link>
          </Alert>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
