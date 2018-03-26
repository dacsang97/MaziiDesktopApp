import * as React from 'react';
import Grid from 'material-ui/Grid';
import styled from 'styled-components';
import Typography from 'material-ui/Typography';
import CssBaseline from 'material-ui/CssBaseline';
import ButtonAppBar from './components/shared/AppBar';
import MiniDrawer from './components/shared/MiniDrawer';
import { withStyles } from 'material-ui/styles';

interface State {
  open: boolean;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  } as React.CSSProperties,
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  } as React.CSSProperties,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  } as React.CSSProperties
});

interface Prop {
  classes?: any;
}

class App extends React.PureComponent<any, any> {
  state = {
    open: false
  };
  handleDrawerOpen = () => {
    this.setState({
      open: true
    });
  };
  handelDrawerClose = () => {
    this.setState({
      open: false
    });
  };
  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <ButtonAppBar open={open} handleOpen={this.handleDrawerOpen} />
        <MiniDrawer
          open={open}
          handleOpen={this.handleDrawerOpen}
          handleClose={this.handelDrawerClose}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
