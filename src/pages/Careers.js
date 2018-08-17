import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Alert } from 'react-bootstrap';

import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';

const conn = './assets/connection.png';

export default class Terms extends Component {
  render () {
    return (
      <div className="padlac-container">
        <div className="padlac-content">
          <AppNavbar/>
          <div className="container">
          <Row className="landing-careers container">
                <Col xs={5} sm={5} md={5} lg={5} xl={5}>
                <img src={conn} className="career-img" alt="join-us"/>
                </Col>
                <Col xs={7} sm={7} md={7} lg={7} xl={7}>
                <p className="careers-header">Want to join PLC Team, or the PLC Boys? </p>
                <p className="careers-subheader">Contact us, or Send us your CV on enquiries@padlacconstruction.com. </p>
                </Col>
                <br/>
          </Row>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
