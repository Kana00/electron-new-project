import * as React from 'react';

// --------------------- Redux how to use it ---------------------
import { connect } from 'react-redux';
// import actions do you need
import { addMessage, removeMessage } from "../redux/action/messageAction";
// dispatch one action to the store
// store.dispatch( addMessage('test') );
// each time store is modified, execute this callback
// store.subscribe(() => console.log(store.getState()));
// ---------------------------------------------------------------


/// <reference path="../interfaces.d.ts" />
class Home extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Home component</h4>
        <p>Redux exemple : {this.props.monMessage}</p>
        <input type="button" value="add message" onClick={() => this.props.showMessage('add button pressed')}/>
        <input type="button" value="test" onClick={() => this.props.hideMessage()}/>
      </div>
    );
  }
}

// send action and state to the props of component Home
function mapStateToProps(state: any) {
  return { monMessage: state.rootScreenReducer.message }
}
function mapDispatchToProps(dispatch: any) {
  return {
    showMessage: (message: string) => dispatch(addMessage(message)),
    hideMessage: () => dispatch(removeMessage()),
  }
}
const HomeComponent = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeComponent;
