import * as React from 'react';
import Lottie from 'react-lottie';


const styles = {
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItem: 'center',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  text: {
    fontFamily: 'SourceCodeRoman-ExtraLight',
    textAlign: 'center',
    color: '#BBBBBB',
    fontSize: 80,
    fontWeight: 'lighter',
  },
}

export default class DisplayReactElectron extends React.Component {
  render() {
    return (
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
        <span style={styles.text}>Electron</span>
      </div>
    );
  }
}
