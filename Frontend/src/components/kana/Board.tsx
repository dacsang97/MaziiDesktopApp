import * as React from 'react';
import { Kana } from '../../types/Kana';
import chunk from 'lodash/chunk';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';
import { Theme, WithStyles, withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

interface Prop {
  data: Kana[] | null;
  onClick: Function;
  type: number;
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
  handleClick = id => {
    this.props.onClick(id);
  };
  render() {
    if (!this.props.data) {
      return <h1>Loading</h1>;
    }
    const { classes, type } = this.props;
    const chunkData = chunk(this.props.data, 5);
    return (
      <>
        {chunkData.map((row: Kana[], idr) => (
          <Grid container={true} key={`_chunkRow_${idr}`}>
            {row.map((kana, id) => (
              <Grid item={true} xs={true} key={`_${type}_id_${id}`}>
                <Paper
                  elevation={1}
                  className={classes.paper}
                  onClick={() => this.handleClick(kana.id)}
                >
                  <Typography variant="display2" className={classes.character}>
                    {type === 0 ? kana.hira : kana.kata}
                  </Typography>
                  <Typography variant="subheading">{kana.romaji}</Typography>
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
