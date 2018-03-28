import * as React from 'react';
import { WithStyles, withStyles, Theme } from 'material-ui/styles';
import { Kanji } from '../../types/Kanji';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Card, { CardMedia } from 'material-ui/Card';

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

type Prop = Kanji & WithStyles<'root' | 'heading' | 'expansion' | 'japanese'>;

class CardContent extends React.PureComponent<Prop> {
  render() {
    const { classes, ...data } = this.props;
    console.log(data);
    return (
      <List component="nav">
        <ListItem>
          <ListItem>
            <ListItemText primary={data.kunjomi} />
            <ListItemText primary={data.onjomi} />
          </ListItem>
          <ListItem>
            <ListItemText primary={data.word} />
            <Card>
              <CardMedia
                style={{ width: 250, height: 100 }}
                image={`https://mina.mazii.net/imgs/ikanji/${data.image}.jpg`}
                title="Contemplative Reptile"
              />
            </Card>
          </ListItem>
          <ListItem>
            <ListItemText primary={data.cn_mean} />
            <ListItemText primary={data.remember} />
          </ListItem>
        </ListItem>
        <Divider />
      </List>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CardContent);
