import * as React from 'react';
// import * as classNames from 'classnames';
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


  render() {
    const styles = {
      themifyElement: {
        paddingRight: '10px',
        paddingLeft: '10px',
      },
      onOver: {
        paddingRight: '10px',
        paddingLeft: '10px',
        color: lightenColor(this.props.textColor, 100),
      },
      onPress: {
        paddingRight: '10px',
        paddingLeft: '10px',
        color: darkenColor(this.props.textColor, 100),
      },
    }
    return (
      <div
        onMouseOver={() => this.onOver()}
        onMouseOut={() => this.onLeave()}
        onMouseDown={() => this.onPressDown()}
        style={(this.state.isOver) ? styles.onOver : styles.themifyElement}>
          <span className={this.props.codeThemify}></span>
      </div>
    );
  }
}
