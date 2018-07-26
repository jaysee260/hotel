import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../components/sections/Home';
import { About } from '../components/sections/AboutUs';
import { RoomAndRates, RoomsAndRates } from '../components/sections/Rooms&Rates';
import { Photos } from '../components/sections/Photos';

import NotFound from '../components/NotFound';

/**
 * @description
 * Catalog of accessible routes
 * within the React application.
 * 
 * "Default" or "Index" route is
 * set with "exact path".
 */

const routes = () =>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/rooms&rates" component={RoomsAndRates} />
    <Route path="/photos" component={Photos} />

    <Route component={NotFound} />
  </Switch>

export default routes;