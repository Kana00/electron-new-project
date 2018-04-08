import * as React from 'react';

export default class NoMatch extends React.Component<any> {
  render() {
    const styles = {
      viewContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '85vh',
      },
      title: {
        fontFamily: 'SourceCodeRoman-ExtraLight',
        fontWeight: '100',
        color: '#BBBBBB',
      }
    }
    return (
      <div style={styles.viewContainer}>
        <h1 style={styles.title}>Route not defined</h1>
      </div>
    );
  }
}
