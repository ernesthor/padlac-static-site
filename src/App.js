import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import logo from './logo.svg';
import './App.css';
import store from './store'


import Home from './pages/Home';
import AppNavbar from './components/AppNavbar';
import About from './components/About';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import E404 from './pages/E404';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/404" component={E404} />
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
