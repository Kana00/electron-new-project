import * as React from 'react';
import { Link } from 'react-router-dom';

// URL = /home
export default class Home extends React.Component<any> {
  render() {
    return (
      <div>
        <h2>Home component</h2>
        <Link to="/test">root directory</Link>
      </div>
    );
  }
}
