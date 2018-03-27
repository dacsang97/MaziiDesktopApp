import * as React from 'react';
import Grid from 'material-ui/Grid';
import classNames from 'classnames';
import Typography from 'material-ui/Typography';
import CssBaseline from 'material-ui/CssBaseline';
import ButtonAppBar from './components/shared/AppBar';
import MiniDrawer from './components/shared/MiniDrawer';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { routes as Routes } from './routes';
import { withStyles } from 'material-ui/styles';
import { Kana } from './pages/Kana';
import { Kotoba } from './pages/Kotoba';
import { KanjiBasic } from './pages/KanjiBasic';
import { KanjiAdvance } from './pages/KanjiAdvance';
import { Phrase } from './pages/Phrase';

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
    minHeight: 48
  } as React.CSSProperties,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    marginLeft: 72
  } as React.CSSProperties,
  contentDrawerOpen: {
    marginLeft: 240
  }
});

interface Prop {
  classes?: any;
}

class App extends React.PureComponent<any, any> {
  state = {
    open: false,
    value: 0
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
  handleChangeTab = value => {
    this.setState(() => {
      return { value };
    });
  };
  render() {
    const { open, value } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <ButtonAppBar
          open={open}
          handleOpen={this.handleDrawerOpen}
          value={value}
          handleChangeTab={this.handleChangeTab}
        />
        <MiniDrawer
          open={open}
          handleOpen={this.handleDrawerOpen}
          handleClose={this.handelDrawerClose}
        />
        <main
          className={classNames(
            classes.content,
            open && classes.contentDrawerOpen
          )}
        >
          <div className={classes.toolbar} />
          {value === 0 && <Kana />}
          {value === 1 && <Kotoba />}
          {value === 2 && <KanjiBasic />}
          {value === 3 && <KanjiAdvance />}
          {value === 4 && <Phrase />}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
