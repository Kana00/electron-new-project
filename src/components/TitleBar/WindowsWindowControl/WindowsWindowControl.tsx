import * as React from 'react';
import * as electron from 'electron';
import Flexbox from 'flexbox-react';
import ButtonThemify from '../../ButtonThemify/ButtonThemify';

export default class WindowsWindowControl extends React.Component<WindowsWindowControlPropsType, WindowsWindowControlStateType> {
  private sizePixel: number | string;
  private electronWindow: Electron.BrowserWindow;
  constructor(props: WindowsWindowControlPropsType) {
    super(props);

    this.electronWindow = electron.remote.getCurrentWindow();

    this.state = {
      isMaxSizeWindow: false,
      isOverMinus: false,
      isOverPlus: false,
      isOverClose: false
    };

    this.maximizeWindow = this.maximizeWindow.bind(this);

  }

  maximizeWindow() {
    if (this.state.isMaxSizeWindow === false) {
      if (!this.electronWindow.isMaximized()) {
        this.setState({ isMaxSizeWindow: true });
        this.electronWindow.maximize();
      }
    } else {
      if (this.electronWindow.isMaximized()) {
        this.setState({ isMaxSizeWindow: false });
        this.electronWindow.unmaximize();
      }
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
      }
    };
    return (
      <Flexbox flexDirection='row' justifyContent='center' alignItems='center' style={styles.controlContainer}>

        <ButtonThemify textColor={this.props.colorOfControl} codeThemify='ti-minus' click={() => this.electronWindow.minimize()}/>
        {
          (this.state.isMaxSizeWindow) ?
          <ButtonThemify textColor={this.props.colorOfControl} codeThemify='ti-layers' click={() => this.maximizeWindow()}/>
          :
          <ButtonThemify textColor={this.props.colorOfControl} codeThemify='ti-control-stop' click={() => this.maximizeWindow()}/>
        }
        <ButtonThemify textColor={this.props.colorOfControl} codeThemify='ti-close' click={() => this.electronWindow.close()}/>

      </Flexbox>
    );
  }
}
