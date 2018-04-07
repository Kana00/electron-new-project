import * as React from 'react';

const styles = {
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItem: 'start',
    marginTop: '5rem',
    marginBottom: '1rem',
  },
  text: {
    fontFamily: 'SourceCodeRoman-ExtraLight',
    color: '#BBBBBB',
    fontSize: 80,
    fontWeight: 'lighter',
  },
}

export default class DisplayReactElectron extends React.Component {
  render() {
    return (
      <div style={styles.contentContainer}>
        <span style={styles.text}>Electron</span>
      </div>
    );
  }
}
