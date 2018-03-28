import * as React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles, WithStyles, Theme } from 'material-ui/styles';
import SendIcon from 'material-ui-icons/Send';
import classNames from 'classnames';

const style = (theme: Theme) => ({
  root: {
    position: 'sticky',
    overflow: 'auto',
    maxHeight: '85vh',
    width: '100%',
    maxWidth: 360
  } as React.CSSProperties,
  listContainer: {
    backgroundColor: theme.palette.background.paper
  },
  listItemActive: {
    backgroundColor: theme.palette.primary.light
  }
});

interface Prop {
  current: number;
  onCatChange: Function;
  groups: any;
}

type PropsWithStyles = Prop &
  WithStyles<'root' | 'listContainer' | 'listItemActive'>;

class Category extends React.PureComponent<PropsWithStyles> {
  render() {
    const { classes, current, groups } = this.props;
    return (
      <Card className={classes.root}>
        <CardContent>
          <List
            className={classes.listContainer}
            component="nav"
            subheader={
              <ListSubheader component="div">Kanji Nâng cao</ListSubheader>
            }
          >
            {Object.keys(groups).map((category, i) => (
              <ListItem
                key={`category_row_${category}`}
                button={true}
                className={classNames(
                  +category === current && classes.listItemActive
                )}
                onClick={() => {
                  this.props.onCatChange(+category);
                }}
              >
                <ListItemText primary={`${category} -> ${groups[category]}`} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(style, { withTheme: true })(Category);
