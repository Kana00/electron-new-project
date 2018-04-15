import * as React from 'react';
import Lottie from 'react-lottie';
import Flexbox from 'flexbox-react';


export default class DisplayReactElectron extends React.Component<{}, {}> {
  render() {
    const styles = {
      viewContainer: {
        height: '70vh',
      },
      contentContainer: {
        marginTop: '1rem',
        height: '100%',
        weight: '100%',
      },
      text: {
        fontFamily: 'SourceCodeRoman-ExtraLight',
        color: '#BBBBBB',
        fontSize: 80,
        marginTop: -40,
      },
    }
    return (
      <Flexbox flexDirection='column' justifyContent='center' alignItems='center' style={styles.viewContainer}>
        <Flexbox flexDirection='column' justifyContent='center' alignItems='center' style={styles.contentContainer}>
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
        </Flexbox>
      </Flexbox>
    );
  }
}
