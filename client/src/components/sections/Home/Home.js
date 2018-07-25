import React, { Component } from 'react';

import { Banner } from './index';
import { About } from '../AboutUs';

export class Home extends Component {
  render() {
    return (
      <section className="home-page">
      
      <Banner />

      <About />
      </section>
    )
  }
};