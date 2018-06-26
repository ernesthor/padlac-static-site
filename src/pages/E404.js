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
            <Alert bsStyle="warning">
              <h1><strong>Error 404</strong></h1>
              <h2><strong>Page Not Found</strong></h2>
              <h3>Page is under construction please go back to Home</h3>
              <Link to href="/" to="/"> Go back to home </Link>
            </Alert>
        </div>
      </div>
    )
  }
}
