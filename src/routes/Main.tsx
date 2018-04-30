import * as React from 'react';
import { connect } from 'react-redux';
import DisplayReactElectron from '../components/DisplayReactElectron/DisplayReactElectron';
import __ from '../i18n/Language';


class Main extends React.Component<MainPropsType> {
  render() {
    return (
      <div>
        <DisplayReactElectron textColor={this.props.textColor}/>
      </div>
    );
  }
}

function mapStateToProps(state: combinedReducerType) {
  return {
    textColor: state.themeReducer.textColor,
  }
}

export default connect(mapStateToProps)(Main);
