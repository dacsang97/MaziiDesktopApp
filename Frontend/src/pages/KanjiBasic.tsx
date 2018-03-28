import * as React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Category from '../components/kanjiBasic/Category';
import Content from '../components/kanjiBasic/Content';
import BridgeManager, { Bridge } from '../bridges/bridge-manage';
import { KanjiBridge } from '../bridges/bridges';
import { Kanji as KanjiType } from '../types/Kanji';

export class KanjiBasic extends React.PureComponent {
  _kanjiBridge: KanjiBridge;
  state = {
    currentCat: 1,
    kanjies: null
  };
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    this._kanjiBridge = await BridgeManager.getBridge<KanjiBridge>(
      'kanjiBridge'
    );
    await this.loadCatById(this.state.currentCat);
  }
  loadCatById = id => {
    this.setState(
      {
        kanjies: null
      },
      () => {
        this._kanjiBridge
          .getKanjiesById(this.state.currentCat)
          .then(kanjies => {
            this.setState({
              kanjies
            });
          });
      }
    );
  };
  onCatChange = id => {
    this.setState({
      currentCat: id + 1
    });
    this.loadCatById(id + 1);
  };
  render() {
    const { currentCat } = this.state;
    return (
      <Grid container={true} spacing={8}>
        <Grid item={true} xs={4}>
          <Category current={currentCat - 1} onCatChange={this.onCatChange} />
        </Grid>
        <Grid item={true} xs={8}>
          <Content data={this.state.kanjies} />
        </Grid>
      </Grid>
    );
  }
}
