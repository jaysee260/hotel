import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Header
import Nav from './header/Nav';

class Layout extends Component {
  render() {
    return (
        <Router>
          <div id="page">

            <header id="page-header">
              <Nav />
            </header>

            <main id="page-body">
              {this.props.children}
            </main>

            <footer id="page-footer"></footer>

          </div>
        </Router>
    )
  }
};

export default Layout;