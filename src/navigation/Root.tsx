import * as React from 'react';
import { Link } from 'react-router-dom';

// URL = /
export default class Root extends React.Component<any> {
  render() {
    return (
      <div>
        <span>Root component</span>
        <Link to="/home">Home directory</Link>
      </div>
    );
  }
}
