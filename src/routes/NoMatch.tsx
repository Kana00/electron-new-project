import * as React from 'react';
import Lottie from 'react-lottie';

export default class NoMatch extends React.Component<any, any> {
  render() {
    const styles = {
      viewContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
      },
      title: {
        fontFamily: 'SourceCodeRoman-ExtraLight',
        fontWeight: '100',
        color: '#BBBBBB',
      },
      animationContainer: {
        marginTop: '-2rem',
        // webkitUserDrag: 'none',
        // webkitUserModify: 'none',
        // mozUserFocus: 'none',
      }
    }
    return (
      <div style={styles.viewContainer}>
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
      </div>
    );
  }
}
