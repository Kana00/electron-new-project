import * as React from 'react';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react';
import { addMessage, removeMessage } from "../redux/action/messageAction";
import __ from "../i18n/Language";
import * as moment from 'moment';


class Home extends React.Component<any, HomeStateType> {
  timerID: any;
  constructor(props: any) {
    super(props);
    this.props.showMessage('message empty');
    this.state = {
      timeNow: moment().format('LL') + ' ⤑ ' +  moment().format('LTS')
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      timeNow: moment().format('LL') + ' ⤑ ' +  moment().format('LTS')
    });
  }

  render() {
    const styles = {
      viewContainer: {
        height: '85vh',
      },
      homeContainer: {
        minWidth: '50em',
        width: '50vw',
        color: this.props.textColor,
        backgroundColor: this.props.backgroundColor,
        border: '1px solid ' + this.props.textColor,
        paddingBottom: '2rem',
        borderRadius: '1rem',
      },
      containerButton: {
        width: '20rem',
      }
    }
    return (
      <Flexbox flexDirection='column' justifyContent='center' alignItems='center' style={styles.viewContainer}>
        <Flexbox flexDirection='column' justifyContent='center' alignItems='center' style={styles.homeContainer}>
          <h1>Features</h1>

          <p>Translation string|number ⤑ {__("application.hello")} {__(1000.443)} ⤎</p>

          <p>Translation date ⤑ {this.state.timeNow} ⤎</p>

          <p>Redux exemple ⤑ {this.props.monMessage} ⤎</p>
          <Flexbox flexDirection='row' justifyContent='space-around' style={styles.containerButton}>
            <input type="button" value="add message" onClick={() => this.props.showMessage('button is pressed')}/>
            <input type="button" value="remove the message" onClick={() => this.props.hideMessage()}/>
          </Flexbox>

        </Flexbox>
      </Flexbox>
    );
  }
}

// send action and state to the props of component Home
function mapStateToProps(state: combinedReducerType) {
  return {
    monMessage: state.rootScreenReducer.message,
    textColor: state.themeReducer.textColor,
    backgroundColor: state.themeReducer.backgroundColorApp,
  }
}
function mapDispatchToProps(dispatch: any) {
  return {
    showMessage: (message: string) => dispatch(addMessage(message)),
    hideMessage: () => dispatch(removeMessage()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
