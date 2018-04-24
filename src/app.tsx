import * as React from 'react';
import store from './redux/store/store';
import TitleBar from './components/TitleBar/TitleBar';
import RouteHandler from './routes/RouteHandler';
import NavigationBar from './components/NavigationBar/NavigationBar';


export default class App extends React.Component<AppPropsType, any> {
  constructor(props: AppPropsType) {
    super(props);
    this.state = store.getState().themeReducer;
    store.subscribe(() => this.setState(store.getState().themeReducer));
  }
  render() {
    return (
      <div>
        <TitleBar backgroundColor={this.state.titleBarWindowColor} textColor={this.state.textColor} />
        <RouteHandler />
        <NavigationBar />
      </div>
    );
  }
}
