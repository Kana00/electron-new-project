import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from './routes/root';
import NoMatch from './routes/NoMatch';
import Home from './routes/Home';
import TitleBar from './components/TitleBar/TitleBar';
import NavigationBar from './components/NavigationBar/NavigationBar';


export class App extends React.Component<AppPropsType, any> {
  render() {
    return (
      <div>
        <TitleBar backgroundColor='#282C34' textColor='#BBBBBB' />

        <Switch>
          {/* subscribe all your route here */}
          <Route exact={true} path={"/"} component={Root}/>
          <Route exact={true} path={"/home"} component={Home}/>
          <Route component={NoMatch}/>
        </Switch>

        <NavigationBar />
      </div>
    );
  }
}
