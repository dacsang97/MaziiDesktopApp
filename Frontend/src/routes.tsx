import * as React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import Grid from 'material-ui/Grid';
import styled from 'styled-components';
import CssBaseline from 'material-ui/CssBaseline';
import ButtonAppBar from './components/shared/AppBar';

const RouteWrapper = () => (
  <div style={{ flexGrow: 1 }}>
    <CssBaseline />
    <ButtonAppBar />
    <Grid container={true} spacing={0}>
      <Grid item={true} xs={3}>
        <Route exact={true} path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Grid>
    </Grid>
  </div>
);

export const routes = RouteWrapper;
