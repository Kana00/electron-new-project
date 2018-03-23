import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from './navigation/root';
import NoMatch from './navigation/NoMatch';
import Home from './navigation/Home';

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        {/* subscribe all your route here */}
        {/* fore selected path, component is rendered */}
        {/* use <Link to='/myPath/…'>click here</Link> to select your path to render */}
        <Route path='/' component={Root}/>
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}
