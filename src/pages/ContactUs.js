import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Alert } from 'react-bootstrap';

import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';
import Ionicon from 'react-ionicons';

import Inquiry from '../components/Inquiry';
import Gmaps from '../components/Gmaps';

const contact = './assets/contact.png';

export default class Contact extends Component {
  render () {
    return (
      <div className="padlac-container">
        <div className="padlac-content">
          <AppNavbar/>
          <div className="container">
          <Row className="landing-contacts container">
          <Row>
          <Col xs={5} sm={5} md={5} lg={5} xl={5}>
            <img src={contact} className="contpage-logo" alt="plc-contact"/>
          </Col>
          <Col xs={7} sm={7} md={7} lg={7} xl={7}>
            <h1 className="pages-header center"> Get in touch with Us  </h1>
            <p className="header-slogan"> Interested in working with our company? Fill out the Inquiry Form below to send us some information about your project.
             Please allow us to process your inquiry for a couple of business days (If not answered kindly call us immediately). </p>
          </Col>
          </Row>
          <hr/>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <h2 className="pages-subheader center"> Inquire! </h2>
                <Inquiry/>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <Row className="contactpages-details">
                  <h2 className="pages-subheader center"> Contact Details </h2>
                  <p><Ionicon icon="ios-mail" fontSize="20px" className="icons"/>&nbsp;: enquiries@padlacconstruction.com</p>
                  <p><Ionicon icon="ios-phone-portrait" fontSize="20px" className="icons"/>&nbsp;: +63 2 876 0378</p>
                  <p><a href="https://www.facebook.com/PadLacConstruction/"><Ionicon icon="logo-facebook" fontSize="20px" className="icons"/>&nbsp;: Facebook </a></p>
                </Row>
                <Row className="contactpages-details">
                  <h2 className="pages-subheader center"> Office Hours </h2>
                   <h4>Monday to Friday : 8:00 AM - 5:00 PM </h4>
                   <h4>Saturday : 8:00 AM - 5:00 PM (Site office) </h4>
                   <h4>Sunday: Closed </h4>
                </Row>
              </Col>
            </Row>
            <Row>
              <h2 className="center pages-subheader"> Visit Us </h2>
              <p className="center"><Ionicon icon="ios-pin" fontSize="20px" className="icons"/>&nbsp; 19B Dollar St. North Fairview, QC, NCR, Philippines, 1121</p>
            <Gmaps/>
            </Row>
          </Row>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
