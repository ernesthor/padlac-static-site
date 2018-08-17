import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'

import logo from './logo.svg';
import './App.css';
import store from './store'


import Home from './pages/Home';
import AppNavbar from './components/AppNavbar';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Footer from './components/Footer';

import About from './pages/About';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';
import E404 from './pages/E404';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/careers" component={Careers} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route component={E404} />
          </Switch>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
