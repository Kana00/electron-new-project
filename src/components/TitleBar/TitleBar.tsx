import * as React from 'react';
import * as os from 'os';
import Flexbox from 'flexbox-react';
import configApp from '../../appconfigrc';
import './TitleBar';
import WindowsWindowControl from './WindowsWindowControl/WindowsWindowControl';


export default class TitleBar extends React.Component {
  private _operatingSystem: string;
  private _heightOfTitleBar: string;
  private _paddingInterElement: string;
  constructor(props: any) {
    super(props);
    this._operatingSystem = os.type();
    this._operatingSystem = "Windows_NT";
  }

  render() {
    if(this._operatingSystem === "Darwin") {
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
        }
      }
      return (
        <div style={styles.titleContainer}>
          <span style={styles.titleOfWindow}>{configApp.window.title}</span>
        </div>
      );
    } else if (this._operatingSystem === "Linux" || this._operatingSystem === "Windows_NT") {
      this._heightOfTitleBar = '30px';
      this._paddingInterElement = '10px';
      const styles = {
        titleContainer: {
          backgroundColor: '#282C34',
          height: this._heightOfTitleBar,
          WebkitUserSelect: 'none',
          WebkitAppRegion: 'drag',
          fontWeight: '100',
        },
        controlRight: {

        },
        controlLeft: {
          fontFamily: 'Helvetica',
          fontSize: 12,
          color: '#9DA5B4',
          lineHeight: this._heightOfTitleBar,
          textAlign: 'center',
        },
        elementOnBar: {
          paddingLeft: this._paddingInterElement,

        }
      }
      return (
        <Flexbox flexDirection="row" justifyContent="space-between" style={styles.titleContainer}>
          <div style={styles.controlLeft}>
            <div style={styles.elementOnBar}>
              <span>{configApp.window.title}</span>
            </div>
          </div>
          <div style={styles.controlRight}>
            <WindowsWindowControl colorOfControl="#BBBBBB" onOverColor="#EEEEEE" height={this._heightOfTitleBar}/>
          </div>
        </Flexbox>
      )
    } else {
      return (<div><p>No detected operating system (NavigationBar react component)</p></div>)
    }
  }
}
