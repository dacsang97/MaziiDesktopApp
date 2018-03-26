import * as React from 'react';
import { Link } from 'react-router-dom';

export class Home extends React.PureComponent {
  render() {
    return (
      <>
        <h1>Home Page</h1>
        <Link to="/login">Login</Link>
      </>
    );
  }
}
