import * as React from 'react';
import TitleBar from './components/TitleBar/TitleBar';
import RouteHandler from './routes/RouteHandler';
import NavigationBar from './components/NavigationBar/NavigationBar';



export class App extends React.Component<AppPropsType, any> {
  render() {
    return (
      <div>
        <TitleBar backgroundColor='#282C34' textColor='#BBBBBB' />
        <RouteHandler />
        <NavigationBar />
      </div>
    );
  }
}
