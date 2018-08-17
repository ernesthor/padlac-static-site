import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Alert } from 'react-bootstrap';
import Ionicon from 'react-ionicons';

import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';

const services = './assets/services.png';
const crane = './assets/crane.png';
const maintenance = './assets/maintenance.png';
const project = './assets/project.png';

export default class Services extends Component {
  render () {
    return (
      <div className="padlac-container">
        <div className="padlac-content">
          <AppNavbar/>
          <div className="container">
          <Row className="landing-service container">
          <Col xs={7} sm={7} md={7} lg={7} xl={7}>
            <h1 className="pages-header center"> PLC Services </h1>
            <p className="serv-content"> <q className="serv-content"> To be the Contractor of choice, by giving superior client satisfaction and outstanding quality service. </q> </p>
            <p className="serv-content"> This is Padlac Construction mission and in achieving this goal we&#39;re giving our clients satisfaction in our services </p>
          </Col>
          <Col xs={5} sm={5} md={5} lg={5} xl={5}>
            <img src={services} className="servpage-logo" alt="plc-services"/>
          </Col>
          </Row>
          <hr/>
          <Row>
            <Col xs={5} sm={5} md={5} lg={5} xl={5}>
              <div className="servpage-temp">
                <img src={project} className="servpage-plclogo" alt="plc-design"/>
                <h1 className="servpages-header center"> Design </h1>
              </div>
            </Col>
            <Col xs={7} sm={7} md={7} lg={7} xl={7}>
            <div className="serv-timelinedes">
              <div className="servpage-list">
                <ul>
                  <li>
                    <div>
                      <span> 1 </span>
                      <h2 className="servpage-items"> Initial Meeting </h2>
                      <p className="serv-desc">
                      A draft of plans will be shown to the client together with a rough construction estimate and the design quotation.
                      This is where the client signs the service agreement if they want to proceed.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span> 2 </span>
                      <h2 className="servpage-items"> Confirmation of Service </h2>
                      <p className="serv-desc">
                      This is where we get the chance to meet the client and discuss the design they envision. This is followed by a site inspection if necessary.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span> 3 </span>
                      <h2 className="servpage-items"> Final Plans </h2>
                      <p className="serv-desc">
                      The Client approves or points out revisions to be done before final printing.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span> 4 </span>
                      <h2 className="servpage-items"> Completion of Design </h2>
                      <p className="serv-desc">
                      7 Sets of Signed and Sealed plans will be submitted to the client.
                      Further negotiation/discussion for Construction Phase.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            </Col>
          </Row>
          <hr/>
          <Row>
          <Col xs={7} sm={7} md={7} lg={7} xl={7}>
          <div className="serv-timelinecon">
          <div className="servpage-list">
            <ul>
              <li>
                <div>
                  <span> 1 </span>
                  <h2 className="servpage-items"> Construction Proposal </h2>
                  <p className="serv-desc">
                  A Construction proposal is submitted togetger with Bill of Quantities, Construction Schedule and Cash Flow.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <span> 2 </span>
                  <h2 className="servpage-items"> Clarification Meeting </h2>
                  <p className="serv-desc">
                  All the queries between both parties are answered. Units Costs, Quantities, Plans, Schedules, Methodology, and other matters regarding the construction of the project is discuss on this meeting.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <span> 3 </span>
                  <h2 className="servpage-items"> Negotation </h2>
                  <p className="serv-desc">
                  This is where the contractor will submit their BEST and FINAL OFFER.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <span> 4 </span>
                  <h2 className="servpage-items"> Awarding </h2>
                  <p className="serv-desc">
                  The client awards the contractor the project after both parties agreed on the negotiation.
                  A NOTICE OF AWARD and a NOTICE TO PROCEED is given to the contractor.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          </div>
          </Col>
          <Col xs={5} sm={5} md={5} lg={5} xl={5}>
            <div className="servpage-temp">
            <img src={crane} className="servpage-plclogo" alt="plc-construction"/>
            <h1 className="servpages-header center"> Construction </h1>
            </div>
          </Col>
          </Row>
          <hr/>
          <Row>
          <Col xs={5} sm={5} md={5} lg={5} xl={5}>
            <div className="servpage-temp">
            <img src={project} className="servpage-plclogo" alt="plc-design"/>
            <h1 className="servpages-header center"> Project Management </h1>
            </div>
          </Col>
          <Col xs={7} sm={7} md={7} lg={7} xl={7}>
          <div className="serv-timelinepm">
          <div className="servpage-list">
            <ul>
              <li>
                <div>
                  <span> 1 </span>
                  <h2 className="servpage-items"> Construction Period </h2>
                  <p className="serv-desc">
                  This is where PLC team the #PLCBoys do best.
                  The contractor assumes full responsibility of the Construction Site during the whole construction period.
                  We are to provide the best personell and top class equipment and methodology necessary to complete the project.
                  We will manage and fully utilize all the MANPOWER and the MATERIALS.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <span> 2 </span>
                  <h2 className="servpage-items"> Turnover </h2>
                  <p className="serv-desc">
                  This is where we turn over the completed project to the owner. In return the client will issue a CERTIFICATE OF COMPLETION to the contractor.
                  </p>
                </div>
              </li>
            </ul>
        </div>
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
