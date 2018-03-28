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
import BridgeManager from '../../bridges/bridge-manage';
import { AudioBridge } from '../../bridges/bridges';
import IconButton from 'material-ui/IconButton';
import VolumeUp from 'material-ui-icons/VolumeUp';

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
  _audioBridge: AudioBridge;
  async componentDidMount() {
    this._audioBridge = await BridgeManager.getBridge<AudioBridge>(
      'audioBridge'
    );
  }
  handlePlayClicked = (url: string) => {
    this._audioBridge.playAudio(url);
  };
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
          <Typography>
            {data.pinyin}
            {''}
            <IconButton
              onClick={() => {
                this.handlePlayClicked(
                  `http://mina.mazii.net/db/phrase/${data.voice}.mp3`
                );
              }}
            >
              <VolumeUp />
            </IconButton>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CardContent);
