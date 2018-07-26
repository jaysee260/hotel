import React from 'react';
import { Link } from 'react-router-dom';

export const Banner = () => 
  <section className="home-banner hero is-info is-medium">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">
          Lorem, ipsum dolor.
        </h1>

        <h2 className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h2>

        <div className="navbar-item is-paddingless" style={{display: 'inline-block'}}>
          <Link to="booknow" className="button is-info is-inverted is-outlined is-large">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  </section>
