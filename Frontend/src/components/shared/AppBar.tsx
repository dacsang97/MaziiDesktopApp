import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import classNames from 'classnames';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1
  } as React.CSSProperties,
  hide: {
    display: 'none'
  } as React.CSSProperties,
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  } as React.CSSProperties,
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  } as React.CSSProperties,
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

interface Props {
  classes?: any;
  handleOpen: Function;
  open: boolean;
}

interface State {
  value: number;
}

class ButtonAppBar extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleDrawerOpen = () => {
    this.props.handleOpen();
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <AppBar
        position="absolute"
        color="default"
        className={classNames(
          classes.appBar,
          this.props.open && classes.appBarShift
        )}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            className={classNames(
              classes.menuButton,
              this.props.open && classes.hide
            )}
            onClick={this.handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ButtonAppBar);
