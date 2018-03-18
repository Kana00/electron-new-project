import * as React from 'react';
import ReactDOM from 'react-dom';
import __ from './i18n/Language';
import { Route, Link } from 'react-router-dom';

// URL = /
const Root = () => (
  <div>
    <span>Root component</span>
    <Link to="/home">Home directory</Link>
  </div>
);

// URL = /home
const Home = () => (
  <div>
    <h2>Home component</h2>
    <Link to="/">root directory</Link>
  </div>
);

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        <Route path='/' component={Root}/>
        <Route exact path='/home' component={Home}/>
      </div>
    );
  }
}
