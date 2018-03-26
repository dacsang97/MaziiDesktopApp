import * as React from 'react';
import './App.css';
import bridgeManager, { Bridge } from './bridges/bridge-manage';
import {
  DialogBridge,
  FileBridge,
  TimeBridge,
  StudentBridge
} from './bridges/bridges';
import Student from './types/Student';

const logo = require('./logo.svg');

class App extends React.Component {
  _dialogBridge: DialogBridge;
  _studentBridge: StudentBridge;
  _listStudent: Student[];

  componentWillMount() {
    this._loadBridges();
  }

  clicked() {
    this._dialogBridge.showDialog('Ahihi', 'iHaha', false);
    console.log(this._listStudent);
  }

  async _loadBridges() {
    this._dialogBridge = await bridgeManager.getBridge<DialogBridge>(
      'dialogBridge'
    );
    this._studentBridge = await bridgeManager.getBridge<StudentBridge>(
      'studentBridge'
    );
    this._listStudent = await this._studentBridge.getAllStudent();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          onClick={() => {
            this.clicked();
          }}
        >
          Show Dialog
        </button>
      </div>
    );
  }
}

export default App;
