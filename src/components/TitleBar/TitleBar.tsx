import * as React from 'react';
import configApp from '../../appconfigrc';
import './TitleBar';

const styles = {
  titleContainer: {
    backgroundColor: '#282C34',
    height: '22px',
    width: '100vw',
    WebkitUserSelect: 'none',
    WebkitAppRegion: 'drag',
    textAlign: 'center',
  },
  titleOfWindow: {
    fontSize: 14,
    color: '#9DA5B4',
  }
}

export default class TitleBar extends React.Component {
  render() {
    return (
      <div style={styles.titleContainer}>
        <span style={styles.titleOfWindow}>{configApp.window.title}</span>
      </div>
    )
  }
}
