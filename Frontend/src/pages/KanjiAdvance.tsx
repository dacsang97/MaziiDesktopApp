import * as React from 'react';
import { KanjiBridge } from '../bridges/bridges';
import BridgeManager from '../bridges/bridge-manage';
import { Kanji } from '../types/Kanji';
import Grid from 'material-ui/Grid';
import Category from '../components/kanji-advance/Category';
import Board from '../components/kanji-advance/Board';
import Dialog from '../components/kanji-advance/Dialog';

interface State {
  currentCat: number;
  kanjies: Kanji[] | null;
  groups: any;
  open: boolean;
  currentKanji: Kanji | null;
}

const g = {};
for (let p = 1; 19 >= p; p++) {
  g[100 * (p - 1) + 1] = 100 * p;
}
g[1901] = 1945;

export class KanjiAdvance extends React.PureComponent<any, State> {
  state = {
    currentCat: 1,
    kanjies: null,
    open: false,
    groups: g,
    currentKanji: null
  };
  _kanjiBridge: KanjiBridge;
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    this._kanjiBridge = await BridgeManager.getBridge<KanjiBridge>(
      'kanjiBridge'
    );
    await this.loadKanjiByScope(1, 100);
  }
  handleClose = () => {
    this.setState({
      open: false
    });
  };
  loadKanjiByScope(from: number, to: number) {
    this.setState(
      {
        kanjies: null
      },
      () => {
        this._kanjiBridge.getKanjiesByScope(from, to).then(kanjies => {
          this.setState({
            kanjies
          });
        });
      }
    );
  }
  onCatChange = id => {
    this.setState({
      currentCat: id
    });
    this.loadKanjiByScope(id, this.state.groups[id]);
  };
  handleClick = kanji => {
    this.setState({
      currentKanji: kanji,
      open: true
    });
  };
  render() {
    const { currentCat, groups, open, currentKanji } = this.state;
    console.log(this.state.kanjies);
    return (
      <Grid container={true} spacing={8}>
        <Grid item={true} xs={4}>
          <Category
            groups={groups}
            current={currentCat}
            onCatChange={this.onCatChange}
          />
        </Grid>
        <Grid item={true} xs={8}>
          <Dialog
            open={open}
            handleClose={this.handleClose}
            kanji={currentKanji}
          />
          <Board data={this.state.kanjies} onClick={this.handleClick} />
        </Grid>
      </Grid>
    );
  }
}
