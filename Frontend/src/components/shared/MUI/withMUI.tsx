import * as React from 'react';
import { MuiThemeProvider, withStyles } from 'material-ui/styles';
import { theme } from './theme';

export const withMaterialUI = ComposedComponent => {
  class HOC extends React.PureComponent {
    render() {
      return (
        <MuiThemeProvider theme={theme}>
          <ComposedComponent {...this.props} />
        </MuiThemeProvider>
      );
    }
  }
  return HOC;
};
