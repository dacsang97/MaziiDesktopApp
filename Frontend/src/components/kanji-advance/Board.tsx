import * as React from 'react';
import { Kanji } from '../../types/Kanji';
import chunk from 'lodash/chunk';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';
import { Theme, WithStyles, withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Loading from '../shared/Loading';

interface Prop {
  data: Kanji[] | null;
  onClick: Function;
}

const styles = (theme: Theme) => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    transition: theme.transitions.create('box-shadow', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shortest
    }),
    '&:hover': {
      boxShadow: theme.shadows['4']
    }
  },
  character: {
    color: theme.palette.primary.light
  }
});

type PropWithStyle = Prop & WithStyles<'paper' | 'character'>;

class Board extends React.PureComponent<PropWithStyle> {
  handleClick = kanji => {
    this.props.onClick(kanji);
  };
  render() {
    if (!this.props.data) {
      return <Loading />;
    }
    const { classes } = this.props;
    const chunkData = chunk(this.props.data, 5);
    return (
      <>
        {chunkData.map((row: Kanji[], idr) => (
          <Grid container={true} key={`_chunkRow_${idr}`}>
            {row.map((kanji: Kanji, id) => (
              <Grid item={true} xs={true} key={`_id_${id}`}>
                <Paper
                  elevation={1}
                  className={classes.paper}
                  onClick={() => this.handleClick(kanji)}
                >
                  <Typography variant="display2" className={classes.character}>
                    {kanji.word}
                  </Typography>
                  <Typography variant="subheading">{kanji.cn_mean}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        ))}
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Board);
