import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () =>
  <section className="section">
    <div className="container has-text-centered">
      <h1 className="title">
        404 - Page Not Found!
      </h1>
      <h2 className="subtitle">
        <Link to="/">
          Go back to the home page
        </Link>
      </h2>
    </div>
  </section>

export default NotFound;