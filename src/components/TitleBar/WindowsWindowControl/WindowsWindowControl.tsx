/// <reference path="../../../interfaces.d.ts" />
import * as React from 'react';
import * as electron from 'electron';
import Flexbox from 'flexbox-react';

export default class WindowsWindowControl extends React.Component<WindowsWindowControlPropsType, any> {
  sizePixel: number | string;
  isMaxSizeWindow: boolean;
  constructor(props: WindowsWindowControlPropsType) {
    super(props);
    this.state = { isMaxSizeWindow: false, styleControl: {
        color: this.props.colorOfControl,
      }
    }
    this.actionControlWindow = this.actionControlWindow.bind(this);
  }

  onOver(event: any) {
    console.log('onOver');
    event.target.style.color = this.props.onOverColor;
  }

  onLeave(event: any) {
    console.log('onLeave');
    event.target.style.color = this.props.colorOfControl;
  }

  actionControlWindow(actionToTheWindow: string) {
    const window = electron.remote.getCurrentWindow();
    switch (actionToTheWindow) {
      case 'close window':
        window.close();
        break;
      case 'ask change size of window':
        if(this.state.isMaxSizeWindow === false) {
          this.setState({ isMaxSizeWindow: true });
          window.maximize();
        } else {
          this.setState({ isMaxSizeWindow: false });
          window.unmaximize();
        }
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
        color: this.props.colorOfControl,
        lineHeight: (this.props.height) ? this.props.height : '100%',
        fontSize: (this.props.height) ? this.sizePixel : '100%',
      },
      themifyElement: {
        paddingRight: '10px',
        paddingLeft: '10px',
      }
    }
    return (
      <Flexbox flexDirection="row" justifyContent="center" alignItems="center" style={styles.controlContainer}>
        <div
        onMouseOver={(event) => this.onOver(event)}
        onMouseLeave={(event) => this.onLeave(event)}
        onClick={() => this.actionControlWindow("minus window")}
        style={styles.themifyElement} >
          <span className="ti-minus"></span>
        </div>
        <div
        onMouseOver={(event) => this.onOver(event)}
        onMouseLeave={(event) => this.onLeave(event)}
        onClick={() => this.actionControlWindow("ask change size of window")}
        style={styles.themifyElement} >
          {
            (this.state.isMaxSizeWindow) ?
            <span className="ti-layers"></span>
            :
            <span className="ti-plus"></span>
          }
        </div>
        <div
        onMouseOver={(event) => this.onOver(event)}
        onMouseLeave={(event) => this.onLeave(event)}
        onClick={() => this.actionControlWindow("close window")}
        style={styles.themifyElement}>
          <span className="ti-close"></span>
        </div>
      </Flexbox>
    );
  }
}
