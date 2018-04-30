import * as React from 'react';
import { lightenColor, darkenColor  } from '../../utils/colorTools';


export default class ButtonThemify extends React.Component<ButtonThemifyPropsType, ButtonThemifyStateType> {
  constructor(props: ButtonThemifyPropsType) {
    super(props);
    this.state = {
      isOver: false,
      isOnPress: false,
    };
  }

  onOver() {
    this.setState({ isOver: true });
  }

  onLeave() {
    this.setState({ isOver: false });
  }

  onPressDown() {
    this.setState({ isOnPress: true });
  }

  resetStyle() {
    this.setState({isOver: false, isOnPress: false});
  }


  render() {
    let actualStyle = {};
    if (this.state.isOnPress) {
      actualStyle = {
        WebkitAppRegion: 'no-drag',
        paddingRight: '16px',
        paddingLeft: '16px',
        color: darkenColor(this.props.textColor, 30),
        backgroundColor: 'rgba(1,1,1, 0.2)',
      }
    } else if (this.state.isOver) {
      actualStyle = {
        WebkitAppRegion: 'no-drag',
        paddingRight: '16px',
        paddingLeft: '16px',
        color: lightenColor(this.props.textColor, 30),
        backgroundColor: 'rgba(1,1,1, 0.2)',
      }
    } else {
      actualStyle = {
        WebkitAppRegion: 'no-drag',
        paddingRight: '16px',
        paddingLeft: '16px',
      }
    }
    const iconOfButtonStyle = {
      verticalAlign: 'middle'
    }
    return (
      <div
        onMouseOver={() => this.onOver()}
        onMouseOut={() => this.onLeave()}
        onMouseDown={() => this.onPressDown()}
        onMouseUp={() => {
          this.resetStyle();
          this.props.click();
          }
        }
        onMouseLeave={() => this.resetStyle()}
        style={actualStyle}>
          <span style={iconOfButtonStyle} className={this.props.codeThemify}></span>
      </div>
    );
  }
}
