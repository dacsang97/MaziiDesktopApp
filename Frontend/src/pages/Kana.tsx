import * as React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Dmak from '../components/kana/Dmak';
import Board from '../components/kana/Board';
import BridgeManager, { Bridge } from '../bridges/bridge-manage';
import { Kana as KanaType, HIRA, KATA } from '../types/Kana';
import { KanaBridge } from '../bridges/bridges';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import styled from 'styled-components';
import { Theme, withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import chunk from 'lodash/chunk';

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1em;
`;

const OverViewCard = styled.div`
  position: fixed;
  width: 40%;
`;

interface State {
  currentKana: number;
  kanas: KanaType[] | null;
  type: number;
}

const style = (theme: Theme) => ({
  chipActive: {
    backgroundColor: theme.palette.primary.light
  },
  paper: {
    padding: '1em'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  card: {
    marginTop: 16
  }
});

class Kana extends React.PureComponent<any, State> {
  _kanaBridge: KanaBridge;
  r: any;
  state = {
    currentKana: 1,
    kanas: null,
    type: HIRA
  };
  constructor(props) {
    super(props);
  }

  handleClick = id => {
    this.setState({
      currentKana: id
    });
  };

  changeType = type => {
    this.setState({
      type
    });
  };

  async componentDidMount() {
    this._kanaBridge = await BridgeManager.getBridge<KanaBridge>('kanaBridge');
    this.setState({
      kanas: await this._kanaBridge.getKana()
    });
  }
  render() {
    const { kanas, currentKana, type } = this.state;
    const { classes } = this.props;
    if (!kanas) {
      return <h1>Loading</h1>;
    }
    return (
      <Grid container={true} spacing={8}>
        <Grid item={true} xs={7}>
          <Board
            data={this.state.kanas}
            onClick={this.handleClick}
            type={this.state.type}
          />
        </Grid>
        <Grid item={true} xs={5}>
          <OverViewCard>
            <ButtonContainer>
              <Chip
                avatar={<Avatar>あ</Avatar>}
                label="Hiragana"
                onClick={() => {
                  this.changeType(0);
                }}
                className={classNames(type === 0 && classes.chipActive)}
              />
              <Chip
                avatar={<Avatar>ア</Avatar>}
                label="Katakana"
                onClick={() => {
                  this.changeType(1);
                }}
                className={classNames(type === 1 && classes.chipActive)}
              />
            </ButtonContainer>
            <Paper className={classes.paper}>
              <div id="image-holder" />
              <Dmak char={kanas![currentKana - 1]} type={this.state.type} />
            </Paper>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary">
                  Ví dụ
                </Typography>
                <table style={{ width: '100%' }}>
                  <tbody>
                    {kanas![currentKana - 1].example
                      .split('\n')
                      .map((row, r) => (
                        <tr key={`_tr_${r}`}>
                          {row
                            .split('∴')
                            .map((item, i) => <td key={`_td_${i}`}>{item}</td>)}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </OverViewCard>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(style, { withTheme: true })(Kana);
