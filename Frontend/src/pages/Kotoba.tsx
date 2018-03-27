import * as React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Category from '../components/kotoba/Category';
import Content from '../components/kotoba/Content';
import BridgeManager, { Bridge } from '../bridges/bridge-manage';
import { KotobaBridge } from '../bridges/bridges';
import { Kotoba as KotobaType } from '../types/Kotoba';

interface State {
  currentCat: number;
  kotobas: KotobaType[] | null;
}

export class Kotoba extends React.PureComponent<any, State> {
  _kotobaBridge: KotobaBridge;
  state = {
    currentCat: 1,
    kotobas: null
  };
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    this._kotobaBridge = await BridgeManager.getBridge<KotobaBridge>(
      'kotobaBridge'
    );
    await this.loadCatById(this.state.currentCat);
  }
  loadCatById = id => {
    this.setState(
      {
        kotobas: null
      },
      () => {
        this._kotobaBridge.getKotoba(this.state.currentCat).then(kotobas => {
          this.setState({
            kotobas
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
          <Content data={this.state.kotobas} />
        </Grid>
      </Grid>
    );
  }
}
