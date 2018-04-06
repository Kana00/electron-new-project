import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Root from './navigation/root';
import NoMatch from './navigation/NoMatch';
import Home from './navigation/Home';



/// <reference path="./interfaces.d.ts" />
export class App extends React.Component<AppPropsType, any> {
  render() {
    return (
      <div>
        <Link to={"/"}>To URL /</Link><br/>
        <Link to={"/home"}>To URL /home</Link><br/>
        <Link to={"/hosdfsdfme"}>No match link /hosdfsdfme</Link>
        <Switch>
          {/* subscribe all your route here */}
          <Route exact={true} path={"/"} component={Root}/>
          <Route exact={true} path={"/home"} component={Home}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}
