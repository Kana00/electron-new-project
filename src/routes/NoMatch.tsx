import * as React from 'react';
import { connect } from 'react-redux';
import Lottie from 'react-lottie';
import Flexbox from 'flexbox-react';

class NoMatch extends React.Component<NoMatchPropsType> {
  render() {
    const styles = {
      viewContainer: {
        height: '70vh',
      },
      title: {
        color: this.props.textColor,
      },
      animationContainer: {
        marginTop: '-2rem',
        // webkitUserDrag: 'none',
        // webkitUserModify: 'none',
        // mozUserFocus: 'none',
      }
    }
    return (
      <Flexbox flexDirection='column' justifyContent='center' alignItems='center' style={styles.viewContainer}>
        <h1 style={styles.title}>Route not defined</h1>
        <div style={styles.animationContainer}>
          <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: require('../assets/animations/infinityLoader.json'),
                }}
                width={200}
                isStopped={false}
                isPaused={false}
              />
        </div>
      </Flexbox>
    );
  }
}

function mapStateToProps(state: combinedReducerType) {
  return {
    textColor: state.themeReducer.textColor
  }
}
export default connect(mapStateToProps)(NoMatch);
