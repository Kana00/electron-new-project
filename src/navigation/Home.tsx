import * as React from 'react';
import { Link } from 'react-router-dom';

// URL = /home
export default class Home extends React.Component<any> {
  render() {
    return (
      <div>
        <p>Home component => <Link to="/test">root directory</Link></p>
      </div>
    );
  }
}
