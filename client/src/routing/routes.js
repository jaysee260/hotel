import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../components/sections/Home';
import { About } from '../components/sections/AboutUs';
import { RoomAndRates, RoomsAndRates } from '../components/sections/Rooms&Rates';
import { Photos } from '../components/sections/Photos';
import { BookNow } from '../components/sections/BookNow';

import NotFound from '../components/NotFound';

const routes = () =>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/rooms&rates" component={RoomsAndRates} />
    <Route path="/photos" component={Photos} />
    <Route path="/booknow" component={BookNow} />

    <Route component={NotFound} />
  </Switch>

export default routes;