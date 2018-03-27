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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightMedium
  },
  expansion: {
    display: 'block'
  },
  japanese: {
    color: theme.palette.primary.light
  }
});

type Prop = Kotoba & WithStyles<'root' | 'heading' | 'expansion' | 'japanese'>;

class CardContent extends React.PureComponent<Prop> {
  render() {
    const { classes, ...data } = this.props;
    console.log(data);
    return (
      <List component="nav">
        <ListItem>
          <ListItemText primary={data.hiragana} />
        </ListItem>
        {data.kanji !== '' &&
          data.cnMean !== '' && (
            <ListItem>
              <ListItemText primary={`${data.kanji}-${data.cnMean}`} />
            </ListItem>
          )}
        <ListItem>
          <ListItemText primary={data.mean} />
        </ListItem>
        <Divider />
      </List>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CardContent);
