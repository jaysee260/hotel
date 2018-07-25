import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Layout/header/Nav';

import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Router>
          <div id="page">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>

      </div>
    )
  }
};

export default App;