import * as React from 'react';
import { Link } from 'react-router-dom';
import { KanjiBridge } from '../bridges/bridges';
import BridgeManager from '../bridges/bridge-manage';
import { Kanji } from '../types/Kanji';

export class KanjiBasic extends React.PureComponent {
  _kanjiBridge: KanjiBridge;
  async componentDidMount() {
    this._kanjiBridge = await BridgeManager.getBridge<KanjiBridge>(
      'kanjiBridge'
    );
    this._kanjiBridge.getKanjiesById(1).then((result: Kanji[]) => {
      console.log(result);
    });
  }
  render() {
    return (
      <>
        <h1>Kanji Basic Page</h1>
      </>
    );
  }
}
