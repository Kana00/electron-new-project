import * as React from 'react';
import * as os from 'os';
import configApp from '../../appconfigrc';
import './TitleBar';



export default class TitleBar extends React.Component {
  private _operatingSystem: string;
  constructor(props: any) {
    super(props);
    this._operatingSystem = os.type();
    this._operatingSystem = "Windows_NT";
  }

  render() {
    const styles = {
      titleContainer: {
        backgroundColor: '#282C34',
        height: '22px',
        width: '100vw',
        WebkitUserSelect: 'none',
        WebkitAppRegion: 'drag',
        Display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      titleOfWindow: {
        fontFamily: 'Helvetica',
        fontSize: 14,
        color: '#9DA5B4',
        width: '100%',
      }
    }
    if(this._operatingSystem === "Darwin") {
      return (
        <div style={styles.titleContainer}>
          <span style={styles.titleOfWindow}>{configApp.window.title}</span>
        </div>
      );
    } else if (this._operatingSystem === "Linux" || this._operatingSystem === "Windows_NT") {
      return (
        <div style={styles.titleContainer}>
          <span style={styles.titleOfWindow}>test</span>
        </div>
      )
    } else {
      return (<div><p>No detected operating system (NavigationBar react component)</p></div>)
    }
  }
}
