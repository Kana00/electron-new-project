import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Root from './navigation/root';
import NoMatch from './navigation/NoMatch';
import Home from './navigation/Home';


export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        {/*subscribe all your route here*/}
        <Route path='/' component={Root}/>
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}
