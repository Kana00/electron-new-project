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
        color: '#BBBBBB',
        fontFamily: 'SourceCodeRoman-ExtraLight',
        fontWeight: '100',
        backgroundColor: '#282C34',
        borderBottom: '5px solid #181C24',
        borderRadius: '5px',
        boxShadow: '3px 3px 5px 1px rgba(0, 0, 0, 0.2)',
        paddingBottom: '2rem',
      },
      containerButton: {
        width: '20rem',
      }
    }
    return (
      <Flexbox flexDirection='column' justifyContent='center' alignItems='center' style={styles.viewContainer}>
        <Flexbox flexDirection='column' justifyContent='center' alignItems='center' style={styles.homeContainer}>
          <h1 className='thinText'>Home component</h1>

          <p>Translation exemple ⤑ {__("application.hello")} {__(1000.443)} ⤎</p>

          <p>{this.state.timeNow}</p>

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
