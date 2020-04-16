import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';

import HomePage from "../component/homePage";
import Profile from '../component/profile';

const AppRouter = () => (
  <Router history={history}>
      <Switch>
      <Route exact path="/" component={HomePage}>
      </Route>
      <Route path="/profile" component={Profile}> 
      </Route>
      </Switch>
  </Router>
  
);

export default AppRouter;