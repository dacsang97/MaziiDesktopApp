import * as React from 'react';
import { Kana } from '../../types/Kana';
import * as DmakJS from 'dmak';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';
import Button from 'material-ui/Button';
declare var window: any;

window.jQuery = window.$ = require('jquery/dist/jquery.min.js');
require('dmak/dist/dmak');
require('dmak/dist/jquery.dmak');

interface Prop {
  char: Kana;
  type: number;
}

const CustomPaper = styled(Paper)`
  margin-top: 1em;
`;

class Dmak extends React.PureComponent<Prop> {
  onClicked = () => {
    const { char, type } = this.props;
    const letter = type === 0 ? char.hira : char.kata;
    const a = window.$(`#image-holder`);
    a.html('');
    if (window.$('#image-holder').data('plugin_dmak')) {
      window.$(`#image-holder`).dmak('reset');
      window.$('#image-holder').data('plugin_dmak', null);
    }

    window.$(`#image-holder`).dmak(letter, {
      uri: 'http://mbilbille.github.io/dmak/kanji/',
      skipLoad: !1,
      autoplay: !0,
      height: 250,
      width: 250,
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
    this.onClicked();
  }
  componentDidUpdate() {
    this.onClicked();
  }
  render() {
    const { char, type } = this.props;

    return (
      <>
        <Button onClick={this.onClicked}>Vẽ lại</Button>
      </>
    );
  }
}

export default Dmak;
