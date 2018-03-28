import * as React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Category from '../components/kotoba/Category';
import Content from '../components/kotoba/Content';
import BridgeManager, { Bridge } from '../bridges/bridge-manage';
import { KotobaBridge, AudioBridge, LessonBridge } from '../bridges/bridges';
import { Kotoba as KotobaType } from '../types/Kotoba';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import VolumeUp from 'material-ui-icons/VolumeUp';

const CustomPaper = styled(Paper)`
  margin-bottom: 1em;
  padding: 1em;
`;

interface State {
  currentCat: number;
  kotobas: KotobaType[] | null;
  currentLink: string;
}

export class Kotoba extends React.PureComponent<any, State> {
  _kotobaBridge: KotobaBridge;
  _audioBridge: AudioBridge;
  _lessonBridge: LessonBridge;
  state = {
    currentCat: 1,
    kotobas: null,
    currentLink: ''
  };
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    this._kotobaBridge = await BridgeManager.getBridge<KotobaBridge>(
      'kotobaBridge'
    );
    this._audioBridge = await BridgeManager.getBridge<AudioBridge>(
      'audioBridge'
    );
    this._lessonBridge = await BridgeManager.getBridge<LessonBridge>(
      'lessonBridge'
    );
    await this.loadCatById(this.state.currentCat);
  }
  handlePlayClicked = () => {
    if (this.state.currentLink) {
      this._audioBridge.playAudio(this.state.currentLink);
    }
  };
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
        this._lessonBridge
          .getListenLesson(this.state.currentCat)
          .then(lesson => {
            this.setState({
              currentLink: `http://eup.mobi/apps/mina/listen/${lesson.link}`
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
          <CustomPaper>
            <Typography variant="headline">
              Bài {currentCat}{' '}
              {/* <IconButton
                onClick={() => {
                  this.handlePlayClicked();
                }}
              >
                <VolumeUp />
              </IconButton> */}
            </Typography>
          </CustomPaper>
          <Content data={this.state.kotobas} />
        </Grid>
      </Grid>
    );
  }
}
