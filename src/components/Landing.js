import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Inquiry from '../components/Inquiry';
import './components.css';

const Banner1 = './assets/header.jpg';
const Banner2 = './assets/header2.jpg';
const Banner3 = './assets/header3.jpg';

export default class Landing extends Component {
  render () {
    return (
        <Grid fluid={true}>
        <div className="landing-content">
          <Row>
            <Carousel autoPlay={false} showThumbs={false} showStatus={false} infiniteLoop={false}>
              <div className="carousel-content">
                <img src={Banner1} />
                <div className="banner-header">
                  <h1 className="banner-up yellow"> PadLac Construction </h1>
                  <h2 className="banner-down yellow"> "DOING IT RIGHT COSTS LESS,THAN DOING IT OVER" </h2>
                  <Button className="banner-btn" href="/contact" to="/contact"> Inquire Now </Button>
                </div>
              </div>
              <div className="carousel-content">
                <img src={Banner2} />
                <div className="banner-header">
                  <h1 className="banner-up yellow"> Trustworthy and Hardwoking </h1>
                  <h2 className="banner-down yellow"> "Good man power are the Bread and Butter of any Construction Company" </h2>
                  <Button className="banner-btn" href="/about" to="/about"> Read More </Button>
                </div>
              </div>
              <div className="carousel-content">
                <img src={Banner3} />
                <div className="banner-header">
                  <h1 className="banner-up yellow"> Be the contractor of choice </h1>
                  <h2 className="banner-down yellow"> "Giving superior client satisfaction and outstanding quality Service" </h2>
                  <Button className="banner-btn" href="/services" to="/services"> Check now </Button>
                </div>
              </div>
            </Carousel>
          </Row>
        </div>
        </Grid>

    )
  }
}
