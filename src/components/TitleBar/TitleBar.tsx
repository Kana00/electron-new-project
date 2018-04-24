import * as React from 'react';
import * as os from 'os';
import Flexbox from 'flexbox-react';
import * as electron from 'electron';
import windowConfig from '../../config/windowConfig';
import WindowsWindowControl from './WindowsWindowControl/WindowsWindowControl';


export default class TitleBar extends React.Component<TitleBarPropsType, TitleBarStateType > {
  private _operatingSystem: string;
  private heightOfTitleBar: string;
  private paddingInterElement: string;
  private electronWindow: any;
  constructor(props: any) {
    super(props);

    this.state = {
      windowIsInFullScreen: false
    }

    this._operatingSystem = os.type();
    this.electronWindow = electron.remote.getCurrentWindow();
    if (this._operatingSystem === 'Darwin') {
      this.electronWindow.on('enter-full-screen', () => {
        this.setState({ windowIsInFullScreen: true });
      });
      this.electronWindow.on('leave-full-screen', () => {
        this.setState({ windowIsInFullScreen: false });
      });
    } else {
      this.electronWindow.on('maximize', () => {
        this.setState({ windowIsInFullScreen: true });
      });
      this.electronWindow.on('unmaximize', () => {
        this.setState({ windowIsInFullScreen: false });
      });
    }
  }

  renderTitleBarForMacOs(): JSX.Element {
    const styles = {
      titleContainer: {
        backgroundColor: this.props.backgroundColor,
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
        color: this.props.textColor,
      }
    };
    if (!this.state.windowIsInFullScreen) {
      return (
        <Flexbox style={styles.titleContainer}>
          <span style={styles.titleOfWindow}>{windowConfig.title}</span>
        </Flexbox>
      );
    }
    return <div />;
  }

  renderTitleBarForWindowsAndLinux(): JSX.Element {
    this.heightOfTitleBar = (this.state.windowIsInFullScreen) ? '22px' : '29px';
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
        fontFamily: 'SourceCodePro',
        fontSize: 14,
        color: this.props.textColor,
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
            <span>{windowConfig.title}</span>
          </div>
        </div>
        <div style={styles.controlRight}>
          <WindowsWindowControl colorOfControl={this.props.textColor} height={this.heightOfTitleBar}/>
        </div>
      </Flexbox>
    );
  }

  render() {
    if (this._operatingSystem === 'Darwin') {
      return this.renderTitleBarForMacOs();
    } else if (this._operatingSystem === 'Linux' || this._operatingSystem === 'Windows_NT') {
      return this.renderTitleBarForWindowsAndLinux();
    } else {
      return (<div><p>No detected operating system (NavigationBar react component)</p></div>);
    }
  }
}
