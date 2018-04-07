import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Root from './navigation/root';
import NoMatch from './navigation/NoMatch';
import Home from './navigation/Home';
import TitleBar from './components/TitleBar/TitleBar';


/// <reference path="./interfaces.d.ts" />
export class App extends React.Component<AppPropsType, any> {
  render() {
    return (
      <div>
        <TitleBar />

        <Switch>
          {/* subscribe all your route here */}
          <Route exact={true} path={"/"} component={Root}/>
          <Route exact={true} path={"/home"} component={Home}/>
          <Route component={NoMatch}/>
        </Switch>

        <Link to={"/"}>URL : /</Link><br/>
        <Link to={"/hosdfsdfme"}>URL : /???</Link><br/>
        <Link to={"/home"}>URL : /home</Link><br/>
      </div>
    );
  }
}
