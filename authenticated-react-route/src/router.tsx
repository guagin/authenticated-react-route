import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoggedOutRoute from './component/logged-out-route';
import Landing from './page/landing';
import LoggedInRoute from './component/logged-in-route';
import About from './page/about';
import Terms from './page/terms';
import Login from './page/log-in';
import Logout from './page/log-out';
import NotFound from './page/not-found';

export const router = () => (
  <Switch>
    <LoggedOutRoute path="/" exact={true} component={Landing} />
    <LoggedOutRoute path="/about" exact={true} component={About} />
    <LoggedOutRoute path="/log-in" exact={true} component={Login} />
    <LoggedInRoute path="/log-out" exact={true} component={Logout} />
    <LoggedInRoute path="/home" exact={true} component={Logout} />
    <Route path="/terms" exact={true} component={Terms} />
    <Route component={NotFound} />
  </Switch>
);
