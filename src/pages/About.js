import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Alert } from 'react-bootstrap';

import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';

const plchalf = './assets/logohalf.png';
const team = './assets/our-team.png';
const coo = './assets/coo.png';
const vp = './assets/vp.png';
const oe = './assets/ofceng.png';
const cad = './assets/cad.png';

export default class About extends Component {
  render () {
    return (
      <div className="padlac-container">
        <div className="padlac-content">
          <AppNavbar/>
          <div className="container">
          <Row className="landing-about container">
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <img src={plchalf} className="aboutpage-plclogo" alt="plc-logohalf"/>
                </Col>
                <Col xs={8} sm={8} md={8} lg={8} xl={8} className="header-slogan">
                <h1 className="center aboutpage-slogan"> PadLaC Construction </h1>
                <h2 className="center aboutpage-subslogan"> "Doing it Right costs less, than Doing it OVER!". </h2>
                </Col>
                <br/>
            </Row>
            <div className="about-upper about-text">
              <p className="aboutpage-details"> With the experience and passion in the Construction industry, Arch. Gregg L. Padro, AIML, AIB,
              Mr. Giordan Padro, and Engr. Jorge Lacanilao founded PADLAC Construction.
              </p>
              <p className="aboutpage-details">
              A vision of continuous growth with excellence and to be the Contractor of Choice for all the Filipinos locally and
              abroad are the main goal of PADLAC Construction for the succeeding years to come.
              </p>
              <p className="aboutpage-details">PLC have local and foreign consultants at their reach to provide assurance that the services
              offered are based on current industry standards.
              </p>
            </div>
            <br/>
            <div className="about-lower">
              <h1 className="center pages-subheader"> Our Team </h1>
              <img src={team} className="aboutpage-imgheader" alt="plc-team"/>
              <p className="team-photo">
              *PLC Team (left to right) <i> Raffy John Jimenez, Giordan R. Padro, AFIML, RMT, Engr. Jorge Michail Lacanilao, and Engr. Mary Ann Palti  *
              </i></p>
              <h1 className="center pages-subheader"> Meet the Team </h1>
              <Row>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} className="emp-col">
                <img src={coo} className="aboutpage-imgicon" alt="plc-coo"/>
                <div className="name-parent">
                  <div className="name-template">
                    <h4 className="center empname"> Giordan R. Padro, AFIML, RMT </h4>
                    <h4 className="center jobposition"> President & COO </h4>
                  </div>
                </div>
                </Col>
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <div className="jobs-details">
                  <p className="aboutpage-jobs">
                  Giordan Padro is the PADLAC Construction’s President and COO.
                  He did Master’s in Business Administration at Australian Catholic University in Melbourne, Australia.
                  Giordan is an Associate Fellow of Australian Institute of Managers and Leaders, which is the top management professionals group in Australia.
                  He is also affiliated with GP Creative Solutions, (a creative firm), and Reowex Pty Ltd, both based in Melbourne, Australia. He is the Business
                  Development Officer of PADRO Group, which includes businesses:  Padro Design & Printing Services(PADES), SeCamflex CCTV, and Printsmart PH.
                  </p>
                </div>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <div className="jobs-details">
                  <p className="aboutpage-jobs">
                  Engr. Jorge Michail Lacanilao is PLC’s Vice President. Jorge is a licensed Professional Civil Engineer who finished his degree from University of Santo Tomas in Manila.
                  He has a wide experience in the construction industry having worked from top construction firms in the Philippines. He is responsible for day to day Administrative Operations of PLC.
                  </p>
                </div>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} className="emp-col">
                <img src={vp} className="aboutpage-imgicon" alt="plc-vp"/>
                <div className="name-parent">
                  <div className="name-template">
                  <h4 className="center empname"> Engr. Jorge Lacanilao </h4>
                  <h4 className="center jobposition"> VP- Admin </h4>
                  </div>
                </div>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} className="emp-col">
                <img src={oe} className="aboutpage-imgicon" alt="plc-oe"/>
                <div className="name-parent">
                  <div className="name-template">
                  <h4 className="center empname"> Engr. Mary Ann Palti </h4>
                  <h4 className="center jobposition"> Office Engineer </h4>
                  </div>
                </div>
                </Col>
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <div className="jobs-details">
                  <p className="aboutpage-jobs">
                  Engr. Meanne, as what her colleague calls her, is PLC’s Office Engineer. Meanne is a licensed Electrical Engineer, with an extensive practice in Construction office operations.
                  She is the link between PLC admin operations and site operations. Her responsibilities focused on general administrative duties, including PLC asset management and monitoring.
                  </p>
                </div>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <div className="jobs-details">
                  <p className="aboutpage-jobs">
                  Raffy is PLC Team’s draftsman. He has wide experience working as freelancer and in big Construction firms. Raffy is currently continuing his
                  training and studies to become full time Architect. His main responsibility is to assist the whole PLC Team with matters concerning plans and design.
                  </p>
                </div>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4} className="emp-col">
                <img src={cad} className="aboutpage-imgicon" alt="plc-cad"/>
                <div className="name-parent">
                  <div className="name-template">
                  <h4 className="center empname"> Raffy John Jimenez </h4>
                  <h4 className="center jobposition"> CAD Operator/ Draftsman </h4>
                  </div>
                </div>
                </Col>
              </Row>
            </div>
              </Col>
          </Row>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
