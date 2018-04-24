import * as React from 'react';
import { connect } from 'react-redux';
import TitleBar from './components/TitleBar/TitleBar';
import RouteHandler from './routes/RouteHandler';
import NavigationBar from './components/NavigationBar/NavigationBar';


class App extends React.Component<AppPropsType, any> {
  render() {
    console.log(this.props.titleBarWindowColor);
    return (
      <div>
        <TitleBar backgroundColor='#171B23' textColor='#BBBBBB' />
        <RouteHandler />
        <NavigationBar />
      </div>
    );
  }
}

function mapStateToProps(state: combinedReducerType) {
  return {
    textColor: state.themeReducer.textColor,
    backgroundColorApp: state.themeReducer.backgroundColorApp,
    titleBarWindowColor:  state.themeReducer.titleBarWindowColor,
    navigationBarColor: state.themeReducer.navigationBarColor,
  }
}

export default connect(mapStateToProps)(App)
