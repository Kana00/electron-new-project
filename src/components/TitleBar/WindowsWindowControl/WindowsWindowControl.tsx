/// <reference path="../../../interfaces.d.ts" />
import * as React from 'react';
import * as electron from 'electron';
import Flexbox from 'flexbox-react';
import * as classNames from 'classnames';

export default class WindowsWindowControl extends React.Component<WindowsWindowControlPropsType, any> {
  sizePixel: number | string;
  isMaxSizeWindow: boolean;
  constructor(props: WindowsWindowControlPropsType) {
    super(props);
    this.state = {
      isMaxSizeWindow: false,
      isOverMinus: false,
      isOverPlus: false,
      isOverClose: false
    };
    this.actionControlWindow = this.actionControlWindow.bind(this);
  }

  onOver(event: any) {
    let nodeClass = null;
    if (event.target !== null) {
      nodeClass = event.target;
    } else {
      return;
    }
    if (event.target.firstChild !== null ) {
      nodeClass = event.target.firstChild;
    }
    switch (nodeClass.classList.value) {
      case 'ti-minus':
          this.setState({ isOverMinus: true });
          break;
        case 'ti-layers':
          this.setState({ isOverPlus: true });
          break;
        case 'ti-plus':
          this.setState({ isOverPlus: true });
          break;
        case 'ti-close':
          this.setState({ isOverClose: true });
          break;
      default:
        break;
    }

  }
  onLeave(event: any) {
    let nodeClass = null;
    if (event.target !== null) {
      nodeClass = event.target;
    } else {
      return;
    }
    if (event.target.firstChild !== null ) {
      nodeClass = event.target.firstChild;
    }
    switch (nodeClass.classList.value) {
      case 'ti-minus':
          this.setState({ isOverMinus: false });
          break;
        case 'ti-layers':
          this.setState({ isOverPlus: false });
          break;
        case 'ti-plus':
          this.setState({ isOverPlus: false });
          break;
        case 'ti-close':
          this.setState({ isOverClose: false });
          break;
      default:
        break;
    }
  }
  actionControlWindow(actionToTheWindow: string) {
    const window = electron.remote.getCurrentWindow();
    switch (actionToTheWindow) {
      case 'close window':
        window.close();
        break;
      case 'ask change size of window':
        if (this.state.isMaxSizeWindow === false) {
          if (!window.isMaximized()) {
            this.setState({ isMaxSizeWindow: true });
            window.maximize();
          }
        } else {
          if (window.isMaximized()) {
            this.setState({ isMaxSizeWindow: false });
            window.unmaximize();
          }
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
      this.sizePixel = this.sizePixel / 2;
      this.sizePixel = this.sizePixel + 'px';
    } catch (e) { console.log(e); }

    const styles = {
      controlContainer: {
        color: this.props.colorOfControl,
        lineHeight: (this.props.height) ? this.props.height : '100%',
        fontSize: (this.props.height) ? this.sizePixel : '100%',
      },
      themifyElement: {
        paddingRight: '10px',
        paddingLeft: '10px',
      },
      onOver: {
        paddingRight: '10px',
        paddingLeft: '10px',
        color: this.props.onOverColor,
      }
    };
    return (
      <Flexbox flexDirection='row' justifyContent='center' alignItems='center' style={styles.controlContainer}>

        <div
        onMouseOver={(event) => this.onOver(event)}
        onMouseOut={(event) => this.onLeave(event)}
        onClick={() => this.actionControlWindow('minus window')}
        style={(this.state.isOverMinus) ? styles.onOver : styles.themifyElement} >
          <span className='ti-minus'></span>
        </div>

        <div
        onMouseOver={(event) => this.onOver(event)}
        onMouseOut={(event) => this.onLeave(event)}
        onClick={() => this.actionControlWindow('ask change size of window')}
        style={(this.state.isOverPlus) ? styles.onOver : styles.themifyElement} >
          {
            (this.state.isMaxSizeWindow) ?
            <span className='ti-layers'></span>
            :
            <span className='ti-plus'></span>
          }
        </div>

        <div
        onMouseOver={(event) => this.onOver(event)}
        onMouseOut={(event) => this.onLeave(event)}
        onClick={() => this.actionControlWindow('close window')}
        style={(this.state.isOverClose) ? styles.onOver : styles.themifyElement}>
          <span className='ti-close'></span>
        </div>

      </Flexbox>
    );
  }
}
