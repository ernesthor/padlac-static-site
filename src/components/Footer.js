import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import Ionicon from 'react-ionicons';

const padlacLogo = './assets/padlac-footer-logo.png'

export default class Footer extends Component {
  render () {
    return (
        <footer className="footer white">
          <Grid fluid={true}>
            <Row>
              <Col xs={12} sm={12} md={4} lg={4} xl={4} className="center">
                <Link to="/"><img src={padlacLogo} className="footer-logo"/></Link>
                <h5> "Doing it right costs less, than doing it over" </h5>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <h2 className="sub-header"> Office Hours </h2>
                <h4 className="inline"> Monday to Friday : </h4> <h5 className="inline"> 8:00 AM - 5:00 PM </h5> <br/>
                <h4 className="inline"> Saturday : </h4> <h5 className="inline"> 8:00 AM - 5:00 PM (Site office) </h5> <br/>
                <h4 className="inline"> Sunday: </h4> <h5 className="inline"> Closed </h5> <br/>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <h2 className="sub-header"> Follow Us </h2>
                <a href="https://www.facebook.com/PadLacConstruction/" className="white"><Ionicon icon="logo-facebook" fontSize="20px" color="#ffc000" className="icons"/> Facebook </a>
              </Col>
            </Row>
            <Row>
              <hr/>
            </Row>
            <Row className="center">
              <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                <span className="footer-copy">PadLac Construction &#169; {new Date().getFullYear()}&nbsp;&nbsp;&nbsp;</span>
                <span className="footer-copy">Designed by: <strong> CMGC Solutions </strong> </span>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6} xl={6} className="footer-menu">
                <Link href="/" to="/"> Home </Link>
                <Link href="/about" to="/about"> About </Link>
                <Link href="/contact" to="/contact"> Contact Us </Link>
                <Link href="/terms" to="/terms"> Terms and Condition </Link>
                <Link href="/privacy" to="/privacy"> Privacy </Link>
              </Col>
            </Row>
          </Grid>
        </footer>

    )
  }
}
