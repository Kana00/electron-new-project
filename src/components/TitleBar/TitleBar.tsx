import * as React from 'react';
import * as os from 'os';
import Flexbox from 'flexbox-react';
import * as electron from 'electron';
import windowConfig from '../../config/windowConfig';
import WindowsWindowControl from './WindowsWindowControl/WindowsWindowControl';

const operatingSystem = os.type();
const electronWindow = electron.remote.getCurrentWindow();

export default class TitleBar extends React.Component<TitleBarPropsType, TitleBarStateType > {
  private heightOfTitleBar: string;
  private paddingInterElement: string;
  constructor(props: TitleBarPropsType) {
    super(props);

    this.state = {
      windowIsInFullScreen: false,
      windowIsInFocus: true,
    }

    // Listen if the user is entering in full-screen mode
    if (operatingSystem === 'Darwin') {
      electronWindow.on('enter-full-screen', this.toggleMaximizeWindow.bind(this));
      electronWindow.on('leave-full-screen', this.toggleMaximizeWindow.bind(this));
    } else {
      electronWindow.on('maximize', this.toggleMaximizeWindow.bind(this));
      electronWindow.on('unmaximize', this.toggleMaximizeWindow.bind(this));
    }

    electronWindow.on('focus', this.windowGainFocus.bind(this));
    electronWindow.on('blur', this.windowLoseFocus.bind(this));
  }

  componentWillUnmount() {
    // to prevent memory leak, listener must be remove at unmounted life state
    if (operatingSystem === 'Darwin') {
      electronWindow.removeListener('enter-full-screen', this.toggleMaximizeWindow.bind(this));
      electronWindow.removeListener('leave-full-screen', this.toggleMaximizeWindow.bind(this));
    } else {
      electronWindow.removeListener('maximize', this.toggleMaximizeWindow.bind(this));
      electronWindow.removeListener('unmaximize', this.toggleMaximizeWindow.bind(this));
    }

    electronWindow.removeListener('focus', this.windowGainFocus.bind(this));
    electronWindow.removeListener('blur', this.windowLoseFocus.bind(this));
  }

  windowGainFocus() {
    this.setState({windowIsInFocus: true});
  }

  windowLoseFocus() {
    this.setState({windowIsInFocus: false});
  }

  toggleMaximizeWindow() {
    this.setState({ windowIsInFullScreen: !this.state.windowIsInFullScreen });
  };

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
        opacity: (this.state.windowIsInFocus)? 1 : 0.5,
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
        paddingLeft: this.paddingInterElement,
        opacity: (this.state.windowIsInFocus)? 1 : 0.5,
      },
    };
    return (
      <Flexbox flexDirection='row' justifyContent='space-between' style={styles.titleContainer}>
        <div style={styles.controlLeft}>
          <span>{windowConfig.title}</span>
        </div>
        <div style={styles.controlRight}>
          <WindowsWindowControl colorOfControl={this.props.textColor} height={this.heightOfTitleBar}/>
        </div>
      </Flexbox>
    );
  }

  render() {
    if (operatingSystem === 'Darwin') {
      return this.renderTitleBarForMacOs();
    } else if (operatingSystem === 'Linux' || operatingSystem === 'Windows_NT') {
      return this.renderTitleBarForWindowsAndLinux();
    } else {
      return (<div><p>No detected operating system (NavigationBar react component)</p></div>);
    }
  }
}
