import * as React from 'react';
import * as os from 'os';
import Flexbox from 'flexbox-react';
import configApp from '../../config/appconfigrc';
import WindowsWindowControl from './WindowsWindowControl/WindowsWindowControl';


export default class TitleBar extends React.Component<TitleBarPropsType, TitleBarStateType > {
  private _operatingSystem: string;
  private heightOfTitleBar: string;
  private paddingInterElement: string;
  constructor(props: any) {
    super(props);
    this._operatingSystem = os.type();
    this._operatingSystem = 'Windows_NT';
  }

  render() {
    if (this._operatingSystem === 'Darwin') {
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
      };
      return (
        <div style={styles.titleContainer}>
          <span style={styles.titleOfWindow}>{configApp.window.title}</span>
        </div>
      );
    } else if (this._operatingSystem === 'Linux' || this._operatingSystem === 'Windows_NT') {
      this.heightOfTitleBar = '30px';
      this.paddingInterElement = '10px';
      const styles = {
        titleContainer: {
          backgroundColor: this.props.backgroundColor,
          height: this.heightOfTitleBar,
          WebkitUserSelect: 'none',
          WebkitAppRegion: 'drag',
          fontWeight: '100',
        },
        controlRight: {

        },
        controlLeft: {
          fontFamily: 'Helvetica Neue',
          fontSize: 14,
          color: '#9DA5B4',
          lineHeight: this.heightOfTitleBar,
        },
        elementOnBar: {
          paddingLeft: this.paddingInterElement,
        }
      };
      return (
        <Flexbox flexDirection='row' justifyContent='space-between' style={styles.titleContainer}>
          <div style={styles.controlLeft}>
            <div style={styles.elementOnBar}>
              <span>{configApp.window.title}</span>
            </div>
          </div>
          <div style={styles.controlRight}>
            <WindowsWindowControl colorOfControl={this.props.textColor} height={this.heightOfTitleBar}/>
          </div>
        </Flexbox>
      );
    } else {
      return (<div><p>No detected operating system (NavigationBar react component)</p></div>);
    }
  }
}
