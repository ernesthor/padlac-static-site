import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Landing from '../components/Landing';
import Landing2 from '../components/Landing2';
import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';

import './pages.css';

export default class Home extends Component {
  render () {
    return (
      <div className="padlac-container">
        <div className="padlac-content">
          <AppNavbar/>
          <Landing/>
          <Landing2/>
        </div>
        <Footer/>
      </div>
    )
  }
}
