import * as React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import Grid from 'material-ui/Grid';
import styled from 'styled-components';
import ButtonAppBar from './components/shared/AppBar';

const Container = styled.div`
  flex-grow: 1;
`;

const RouteWrapper = () => (
  <Container>
    <Grid container={true} spacing={24}>
      <Grid item={true} xs={12}>
        <ButtonAppBar />
        <Route exact={true} path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Grid>
    </Grid>
  </Container>
);

export const routes = RouteWrapper;
