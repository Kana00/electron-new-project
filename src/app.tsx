import * as React from 'react';
import store from './redux/store/store';
import TitleBar from './components/TitleBar/TitleBar';
import RouteHandler from './routes/RouteHandler';
import NavigationBar from './components/NavigationBar/NavigationBar';
import windowConfig from './config/windowConfig';


export default class App extends React.Component<AppPropsType, any> {
  constructor(props: AppPropsType) {
    super(props);
    this.state = store.getState().themeReducer;
    store.subscribe(() => this.setState(store.getState().themeReducer));
  }
  render() {
    const styles = {
      backgroundApplication: {
        weight: '100vw',
        height: '100vh',
        backgroundColor: (this.state.backgroundColorApp) ? this.state.backgroundColorApp : windowConfig.backgroundColor,
        transition: '400ms',
      }
    }
    return (
      <div style={styles.backgroundApplication}>
        <TitleBar backgroundColor={this.state.titleBarWindowColor} textColor={this.state.textColor} />
        <RouteHandler />
        <NavigationBar backgroundColor={this.state.titleBarWindowColor} textColor={this.state.textColor} />
      </div>
    );
  }
}
