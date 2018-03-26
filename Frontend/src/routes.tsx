import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

export const routes = () => (
  <div>
    <Route exact={true} path="/" component={Home} />
    <Route path="/login" component={Login} />
  </div>
);
