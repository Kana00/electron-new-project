import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import NoMatch from './NoMatch';
import FeaturesDemo from './FeaturesDemo';
import Theme from './Theme';

export default class RouteHandler extends React.Component<{},{}> {
  render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={Main} />
        <Route exact={true} path='/featuresDemo' component={FeaturesDemo} />
        <Route exact={true} path='/theme' component={Theme} />
        <Route component={NoMatch}/>
      </Switch>
    );
  }
}
