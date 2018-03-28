import * as React from 'react';
import Button from 'material-ui/Button';
import { Kanji } from '../../types/Kanji';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import CompareArrows from 'material-ui-icons/CompareArrows';
import { Theme, WithStyles, withStyles } from 'material-ui';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';

declare var window: any;

window.jQuery = window.$ = require('jquery/dist/jquery.min.js');
require('dmak/dist/dmak');
require('dmak/dist/jquery.dmak');

interface Prop {
  open: boolean;
  handleClose: Function;
  kanji: Kanji | null;
}

const style = (theme: Theme) => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  dialog: {
    minWidth: '600px'
  }
});

type PropWithStyle = Prop &
  WithStyles<'button' | 'leftIcon' | 'rightIcon' | 'iconSmall' | 'dialog'>;

class DialogKanji extends React.Component<PropWithStyle> {
  c: any;
  shouldComponentUpdate(nextProps, nextState) {
    console.log('xxx');
    return true;
  }
  onClicked = () => {
    const { kanji } = this.props;
    const a = window.$(`#kanji-holder`);
    a.html('');
    if (window.$('#kanji-holder').data('plugin_dmak')) {
      window.$(`#kanji-holder`).dmak('reset');
      window.$('#kanji-holder').data('plugin_dmak', null);
    }

    window.$(`#kanji-holder`).dmak(kanji!.word, {
      uri: 'http://mbilbille.github.io/dmak/kanji/',
      skipLoad: !1,
      autoplay: !0,
      height: 100,
      width: 100,
      viewBox: {
        x: 0,
        y: 0,
        w: 125,
        h: 125
      },
      step: 0.01,
      stroke: {
        animated: {
          drawing: !0,
          erasing: !0
        },
        order: {
          visible: !0,
          attr: {
            'font-size': '8',
            fill: '#33B5E5'
          }
        },
        attr: {
          active: '#CC0000',
          stroke: 'random',
          'stroke-width': 3,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round'
        }
      },
      grid: {
        show: !0,
        attr: {
          stroke: '#CCCCCC',
          'stroke-width': 0.5,
          'stroke-dasharray': '--'
        }
      },
      svg: null
    });
  };
  componentDidMount() {
    if (this.c && this.props.kanji) {
      this.onClicked();
      console.log('xxx');
    }
  }
  render() {
    const { kanji, classes } = this.props;
    return (
      <Dialog
        open={this.props.open}
        onClose={() => {
          this.props.handleClose();
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className={classes.dialog}>
          {!kanji && <DialogContentText>Không có dữ liệu</DialogContentText>}
          {kanji && (
            <div>
              <Grid container={true}>
                <Grid item={true} xs={6}>
                  <Typography variant="subheading">Âm hán</Typography>
                  <Typography>{kanji.cn_mean}</Typography>
                </Grid>
                <Grid item={true} xs={6}>
                  <Typography variant="subheading">Nghĩa</Typography>
                  <Typography>{kanji.vi_mean}</Typography>
                </Grid>
              </Grid>
              <Grid container={true}>
                <Grid item={true} xs={6}>
                  <Typography variant="subheading">Kunjomi</Typography>
                  <Typography>{kanji.kunjomi}</Typography>
                </Grid>
                <Grid item={true} xs={6}>
                  <Typography variant="subheading">Onjomi</Typography>
                  <Typography>{kanji.onjomi}</Typography>
                </Grid>
              </Grid>
              <Grid container={true}>
                <Grid item={true} xs={12}>
                  <Typography variant="subheading">Hán tự</Typography>
                </Grid>
                <Grid
                  item={true}
                  xs={5}
                  style={{ fontSize: 80, textAlign: 'center' }}
                >
                  {kanji.word}
                </Grid>
                <Grid item={true} xs={2}>
                  <Button
                    onClick={() => {
                      this.onClicked();
                    }}
                    variant="raised"
                    className={classes.button}
                  >
                    Vẽ <CompareArrows className={classes.rightIcon} />
                  </Button>
                </Grid>
                <Grid item={true} xs={5} style={{ textAlign: 'center' }}>
                  <div id="kanji-holder" />
                </Grid>
              </Grid>
              <table style={{ width: '100%' }}>
                <tbody>
                  {kanji.note
                    .split('※')
                    .map((row, r) => (
                      <tr key={`_tr_${r}`}>
                        {row
                          .split('∴')
                          .map((item, i) => <td key={`_td_${i}`}>{item}</td>)}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              this.props.handleClose();
            }}
            color="primary"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(style, { withTheme: true })(DialogKanji);
