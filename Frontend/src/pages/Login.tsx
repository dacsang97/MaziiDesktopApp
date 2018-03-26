import * as React from 'react';
import { Link } from 'react-router-dom';

export class Login extends React.PureComponent {
  render() {
    return (
      <>
        <h1>Login Page</h1>
        <Link to="/">Home</Link>
      </>
    );
  }
}
