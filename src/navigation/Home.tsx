import * as React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

// --------------------- Redux how to use it ---------------------
import store from '../redux/store/store';
// import actions do you need
import addMessage from "../redux/action/action";
import { Component } from 'react';
// dispatch one action to the store
store.dispatch( addMessage('test') );
// each time store is modified, execute this callback
store.subscribe(() => console.log(store.getState()));
// ---------------------------------------------------------------





const mapStateToProps = state => {
  return { message: 'testtesttest' };
};

const mapStateToProps = (state) => {
  return {
      state: {
        message: state.message
      }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    message : dispatch(addMessage('');
  }
}

// URL = /home
class Home extends React.Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {store: store.getState()};
  }
  render() {
    return (
      <div>
        <p>Home component => <Link to="/test">root directory</Link></p>
        <p>Store content :</p>
      </div>
    );
  }
}

const EstablishmentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)


export default EstablishmentContainer;
