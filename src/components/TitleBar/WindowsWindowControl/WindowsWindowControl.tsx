/// <reference path="../../../interfaces.d.ts" />
import * as React from 'react';
import * as electron from 'electron';
import Flexbox from 'flexbox-react';

export default class WindowsWindowControl extends React.Component<WindowsWindowControlPropsType, any> {
  sizePixel: number | string;
  isMaxSizeWindow: boolean;
  constructor(props: WindowsWindowControlPropsType) {
    super(props);
    this.state = { isMaxSizeWindow: false }
    this.actionControlWindow = this.actionControlWindow.bind(this);
  }

  actionControlWindow(actionToTheWindow: string) {
    const window = electron.remote.getCurrentWindow();
    switch (actionToTheWindow) {
      case 'close window':
        window.close();
        break;
      case 'ask large window':
        this.setState({ isMaxSizeWindow: true });
        window.maximize();
        break;
      case 'ask small window':
        this.setState({ isMaxSizeWindow: false });
        window.unmaximize();
        break;
      case 'minus window':
        window.minimize();
      default:
    }
  }

  render() {
    this.sizePixel = this.props.height.toString();
    this.sizePixel.substring(0, this.sizePixel.length - 2);
    try {
      this.sizePixel = parseInt(this.sizePixel);
      this.sizePixel = this.sizePixel/2;
      this.sizePixel = this.sizePixel + 'px';
    } catch (e) { console.log(e)}
    const styles = {
      controlContainer: {
        display: 'inline-block',
        color: this.props.colorOfControl,
        lineHeight: (this.props.height) ? this.props.height : '100%',
        fontSize: (this.props.height) ? this.sizePixel : '100%',
        marginRight: '15px',
      },
      themifyElement: {
        marginLeft: '20px',
      }
    }
    return (
      <Flexbox flexDirection="row" justifyContent="center" alignItems="center" style={styles.controlContainer}>
        <span onClick={() => this.actionControlWindow("minus window")} style={styles.themifyElement} className="ti-minus"></span>
        {
          (this.state.isMaxSizeWindow) ?
          <span onClick={() => this.actionControlWindow("ask small window")} style={styles.themifyElement} className="ti-layers"></span>
          :
          <span onClick={() => this.actionControlWindow("ask large window")} style={styles.themifyElement} className="ti-plus"></span>
        }
        <span onClick={() => this.actionControlWindow("close window")} style={styles.themifyElement} className="ti-close"></span>
      </Flexbox>
    );
  }
}
