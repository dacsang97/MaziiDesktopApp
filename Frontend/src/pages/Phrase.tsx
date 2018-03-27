import * as React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Category from '../components/phrase/Category';

export class Phrase extends React.PureComponent {
  render() {
    return (
      <Grid container={true} spacing={0}>
        <Grid xs={4}>
          <Category />
        </Grid>
      </Grid>
    );
  }
}
