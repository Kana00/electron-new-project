import * as React from 'react';
import Lottie from 'react-lottie';


export default class DisplayReactElectron extends React.Component {
  render() {
    const styles = {
      viewContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
      },
      contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItem: 'center',
        marginTop: '1rem',
        height: '100%',
        weight: '100%',
      },
      text: {
        fontFamily: 'SourceCodeRoman-ExtraLight',
        fontWeight: '100',
        textAlign: 'center',
        color: '#BBBBBB',
        fontSize: 80,
        marginTop: -40,
      },
    }
    return (
      <div style={styles.viewContainer}>
        <div style={styles.contentContainer}>
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData: require('../../assets/animations/reactAnimation.json'),
            }}
            height={200}
            width={200}
            isStopped={false}
            isPaused={false}
          />
          <span style={styles.text}>React</span>
        </div>
      </div>
    );
  }
}
