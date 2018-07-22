import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Ionicon from 'react-ionicons';

import Inquiry from '../components/Inquiry';
import Gmaps from '../components/Gmaps';
import './components.css';

const crane = './assets/crane.png';
const maintenance = './assets/maintenance.png';
const project = './assets/project.png';
const actuate = './assets/actuate.png';
const hyundai = './assets/hyundai.png';
const mwc = './assets/mwc.png';
const wellman = './assets/wellman.png';
const samsung = './assets/samsung.png';
const mdc = './assets/mdc.png';
const P = './assets/P.png';
const I = './assets/I.png';
const C = './assets/C.png';
const S = './assets/S.png';
const youtube = './assets/youtube.png';

export default class Landing extends Component {
  render () {
    return (
      <div className="landing2-content">
        <div className="container">
            <h2 className="header center"> About Us </h2>
            <hr/>
          <Row className="landing-about">
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <h4 className="text-head center"> "Doing it Right costs less, than Doing it OVER!". </h4>
                <p className="text-sub"> With the experience and passion in the Construction Industry,
                  Arch. Gregg L. Padro, MIML, AIB, Mr, Giordan R. Padro, AFIML, RMT, and Engr. Jorge B. Lacanilao founded PADLAC Construction.
                  PLC is backed by their sister company Reowex Pty Ltd, which is a manufacturing company located in Melbourne,
                  Australia. Reowex plays a major role in the construction industry in the whole state of Victoria in Australia.
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <h1 className="sub-header">Our Mission</h1>
                <p className="text-head">‘To be the Contractor of choice”. By giving superior client satisfaction and outstanding quality service.</p>
                <p className="text-sub">PADLAC Construction’s mission is to deliver high standard service, thru the use of modern technologies and newly innovated methodologies in Construction Industry.</p>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <h1 className="sub-header">Our Value</h1>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <h3><img src={P} className="lvalue-img"/>Passion</h3>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <h3><img src={I} className="lvalue-img"/>Integrity</h3>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <h3><img src={C} className="lvalue-img"/>Commitment</h3>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <h3><img src={S} className="lvalue-img"/>Safety and Quality</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </div>
        <div className="container">
            <h2 className="header center"> Services </h2>
            <hr/>
          <Row className="landing-serv">
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <div className="lserv-box">
              <img src={project} className="lserv-img"/>
              <h2 className="lserv-title center"> Design </h2>
              <div className="lserv-list">
                <ul>
                  <li>
                    <div>
                      <span> 1 </span>
                      <h4 className="lserv-items"> Initial Meeting </h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span> 2 </span>
                      <h4 className="lserv-items"> Confirmation of Service </h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span> 3 </span>
                      <h4 className="lserv-items"> Final Plans </h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span> 4 </span>
                      <h4 className="lserv-items"> Completion of Design </h4>
                    </div>
                  </li>
                </ul>
              </div>
              <Button to="/services" href="/services" className="lserv-btn"> Learn More </Button>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={4}>
            <div className="lserv-box">
              <img src={crane} className="lserv-img"/>
              <h2 className="lserv-title center"> Construction </h2>
              <div className="lserv-list">
                <ul>
                  <li>
                    <div>
                      <span> 1 </span>
                      <h4 className="lserv-items"> Construction Proposal </h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span> 2 </span>
                      <h4 className="lserv-items"> Clarification Meeting </h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span> 3 </span>
                      <h4 className="lserv-items"> Negotation </h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span> 4 </span>
                      <h4 className="lserv-items"> Awarding </h4>
                    </div>
                  </li>
                </ul>
              </div>
              <Button to="/services" href="/services" className="lserv-btn"> Learn More </Button>
            </div>
          </Col>
          <Col xs={12} sm={6} smOffset={3} md={4} mdOffset={0} lg={4} xl={4}>
            <div className="lserv-box">
              <img src={maintenance} className="lserv-img"/>
              <h2 className="lserv-title center"> Project Management </h2>
                <div className="lserv-list">
                  <ul>
                    <li>
                      <div>
                        <span> 1 </span>
                        <h4 className="lserv-items"> Construction Period </h4>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span> 2 </span>
                        <h4 className="lserv-items"> Turnover </h4>
                      </div>
                    </li>
                  </ul>
              </div>
              <Button to="/services" href="/services" className="lserv-btn"> Learn More </Button>
            </div>
          </Col>
          </Row>
        </div>
        <div className="container">
            <h2 className="header center"> Clients </h2>
            <hr/>
          <Row className="landing-clients center">
            <Col xs={4} xsOffset={4} sm={6} smOffset={4} md={12} mdOffset={0} lg={12} lgOffset={0} xl={12} xlOffset={0}>
              <img src={wellman} className="clients-img" alt="wellman"/>
              <img src={hyundai} className="clients-img" alt="hyundai"/>
              <img src={mwc} className="clients-img" alt="mwc"/>
              <img src={actuate} className="clients-img" alt="actuate"/>
              <img src={samsung} className="clients-img" alt="samsung"/>
              <img src={mdc} className="clients-img" alt="mdc"/>
            </Col>
          </Row>
        </div>
        <div className="landing-contact">
          <div className="container">
              <h2 className="header center"> Contact Us </h2>
            <Row className="landing-form">
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <h3 className="sub-header"> Inquire! </h3>
                <Inquiry/>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <h3 className="sub-header"> Stay in touch with Us</h3>
                <p><Ionicon icon="ios-mail" fontSize="20px" className="icons"/>&nbsp;: enquiries@padlacconstruction.com</p>
                <p><Ionicon icon="ios-phone-portrait" fontSize="20px" className="icons"/>&nbsp;: +63 2 876 0378</p>
                <p><Ionicon icon="ios-pin" fontSize="20px" className="icons"/>&nbsp;: 19B Dollar St. North Fairview, QC, NCR, Philippines, 1121</p>
                <Gmaps/>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}
