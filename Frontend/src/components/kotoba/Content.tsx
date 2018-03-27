import * as React from 'react';
import { Kotoba } from '../../types/Kotoba';
import CardContent from './CardContent';
import { LinearProgress } from 'material-ui/Progress';

interface Prop {
  data: Kotoba[] | null;
}

class Content extends React.PureComponent<Prop> {
  render() {
    console.log(this.props.data);
    return (
      <>
        {!this.props.data && <LinearProgress />}
        {this.props.data &&
          this.props.data.map((item, i) => {
            return <CardContent key={`content_row_${i}`} {...item} />;
          })}
      </>
    );
  }
}

export default Content;
