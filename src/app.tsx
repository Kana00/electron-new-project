import * as React from 'react';
import __ from './i18n/Language';
// import { Switch, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to Home</h1>
  </div>
);

const Project = () => (
  <div>
    <h1>Welcome to Project</h1>
  </div>
);

const Contact = () => (
  <div>
    <h1>Welcome to Contact</h1>
  </div>
);

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
        <div>
          <h2>{__('application.hello')}</h2>
        </div>
    );
  }
}
