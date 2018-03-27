import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Tabs, { Tab } from 'material-ui/Tabs';
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
    }),
    minHeight: 48
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
  handleChangeTab: Function;
  open: boolean;
  value: number;
}

class ButtonAppBar extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
  }
  handleChange = (event, value) => {
    this.props.handleChangeTab(value);
  };
  handleDrawerOpen = () => {
    this.props.handleOpen();
  };
  render() {
    const { classes, value } = this.props;
    return (
      <AppBar
        position="fixed"
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
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Bảng chữ cái" />
            <Tab label="50 bài Minna" />
            <Tab label="512 từ Kanji cơ bản" />
            <Tab label="1945 từ Kanji nâng cao" />
            <Tab label="1000 mẫu câu giao tiếp" />
          </Tabs>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ButtonAppBar);
