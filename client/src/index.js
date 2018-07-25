import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma';
import Layout from './components/Layout'
import App from './App';

const root = document.getElementById("root");

ReactDOM.render(
  <Layout>
    <App />
  </Layout>,
  root
);