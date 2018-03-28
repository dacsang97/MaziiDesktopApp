import * as React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles, WithStyles, Theme } from 'material-ui/styles';
import SendIcon from 'material-ui-icons/Send';
import classNames from 'classnames';

export const categories = [
  'Bài 1',
  'Bài 2',
  'Bài 3',
  'Bài 4',
  'Bài 5',
  'Bài 6',
  'Bài 7',
  'Bài 8',
  'Bài 9',
  'Bài 10',
  'Bài 11',
  'Bài 12',
  'Bài 13',
  'Bài 14',
  'Bài 15',
  'Bài 16',
  'Bài 17',
  'Bài 18',
  'Bài 19',
  'Bài 20',
  'Bài 21',
  'Bài 22',
  'Bài 23',
  'Bài 24',
  'Bài 25',
  'Bài 26',
  'Bài 27',
  'Bài 28',
  'Bài 29',
  'Bài 30',
  'Bài 31',
  'Bài 32'
];

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
}

type PropsWithStyles = Prop &
  WithStyles<'root' | 'listContainer' | 'listItemActive'>;

class Category extends React.PureComponent<PropsWithStyles> {
  render() {
    const { classes, current } = this.props;
    return (
      <Card className={classes.root}>
        <CardContent>
          <List
            className={classes.listContainer}
            component="nav"
            subheader={
              <ListSubheader component="div">512 từ Kanji cơ bản</ListSubheader>
            }
          >
            {categories.map((category, i) => (
              <ListItem
                key={`category_row_${i}`}
                button={true}
                className={classNames(i === current && classes.listItemActive)}
                onClick={() => {
                  this.props.onCatChange(i);
                }}
              >
                <ListItemText primary={category} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(style, { withTheme: true })(Category);
