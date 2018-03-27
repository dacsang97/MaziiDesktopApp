import * as React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Category from '../components/phrase/Category';
import Content from '../components/phrase/Content';
import BridgeManager, { Bridge } from '../bridges/bridge-manage';
import { PhraseBridge } from '../bridges/bridges';
import { Phrase as PhraseType } from '../types/Phrase';

interface State {
  currentCat: number;
  phrases: PhraseType[] | null;
}

export class Phrase extends React.PureComponent<any, State> {
  _phraseBridge: PhraseBridge;
  state = {
    currentCat: 1,
    phrases: null
  };
  constructor(props) {
    super(props);
    console.log(BridgeManager);
  }
  async componentDidMount() {
    this._phraseBridge = await BridgeManager.getBridge<PhraseBridge>(
      'phraseBridge'
    );
    await this.loadCatById(this.state.currentCat);
  }
  loadCatById = id => {
    this.setState(
      {
        phrases: null
      },
      () => {
        this._phraseBridge
          .getPhrasesByCatID(this.state.currentCat)
          .then(phrases => {
            this.setState({
              phrases
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
          <Content data={this.state.phrases} />
        </Grid>
      </Grid>
    );
  }
}
