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
        paddingRight: '10px',
        paddingLeft: '10px',
        color: darkenColor(this.props.textColor, 100),
      }
    }
    else if (this.state.isOver) {
      actualStyle = {
        paddingRight: '10px',
        paddingLeft: '10px',
        color: lightenColor(this.props.textColor, 100),
      }
    } else {
      actualStyle = {
        paddingRight: '10px',
        paddingLeft: '10px',
      }
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
          <span className={this.props.codeThemify}></span>
      </div>
    );
  }
}
