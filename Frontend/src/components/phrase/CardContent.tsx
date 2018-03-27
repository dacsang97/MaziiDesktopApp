import * as React from 'react';
import { WithStyles, withStyles, Theme } from 'material-ui/styles';
import { Phrase } from '../../types/Phrase';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

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

type Prop = Phrase & WithStyles<'root' | 'heading' | 'expansion' | 'japanese'>;

class CardContent extends React.PureComponent<Prop> {
  render() {
    const { classes, ...data } = this.props;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading} variant="headline">
            {data.vietnamese}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansion}>
          <Typography variant="headline" className={classes.japanese}>
            {data.japanese}
          </Typography>
          <br />
          <Typography>{data.pinyin}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CardContent);
