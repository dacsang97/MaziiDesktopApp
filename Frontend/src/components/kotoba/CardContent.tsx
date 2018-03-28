import * as React from 'react';
import { WithStyles, withStyles, Theme } from 'material-ui/styles';
import { Kotoba } from '../../types/Kotoba';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    color: theme.palette.primary.dark
  },
  mean: {
    marginTop: '0.5em',
    color: theme.palette.grey['600']
  }
});

type Prop = Kotoba & WithStyles<'root' | 'title' | 'mean'>;

class CardContent extends React.PureComponent<Prop> {
  render() {
    const { classes, ...data } = this.props;
    console.log(data);
    return (
      <List component="nav">
        <Typography variant="title" className={classes.title}>
          {data.hiragana}
        </Typography>
        {data.kanji !== '' &&
          data.cnMean !== '' && (
            <Typography variant="subheading">
              {`${data.kanji}-${data.cnMean}`}
            </Typography>
          )}
        <Typography variant="subheading" className={classes.mean}>
          {data.mean}
        </Typography>
        <Divider />
      </List>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CardContent);
