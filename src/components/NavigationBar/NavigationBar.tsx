import * as React from 'react';
import { Link } from 'react-router-dom';
import Flexbox from 'flexbox-react';

export default class NavigationBar extends React.Component<NavigationBarPropsType, any> {
  render() {
    const heightOfNavBar = 3;
    const styles = {
      navigationContainer: {
        /* Position Handler  */
        position: 'absolute',
        bottom: 0,
        /* Size Handler */
        width: '100vw',
        height: heightOfNavBar + 'rem',
      },
      styleLink: {
        flex: 1,
        height: heightOfNavBar + 'rem',
        textAlign: 'center',
        lineHeight: heightOfNavBar + 'rem',
        fontSize: heightOfNavBar / 3 + 'rem',
        backgroundColor: this.props.backgroundColor,
        color: this.props.textColor,
        textDecorationLine: 'none',
      }
    };
    return(
      <Flexbox flexDirection='row' justifyContent='space-between' alignItems='center' style={styles.navigationContainer}>
        <Link style={ styles.styleLink } to='/'>Main</Link>
        <Link style={ styles.styleLink } to='/featuresDemo'>Features</Link>
        <Link style={ styles.styleLink } to='/theme'>Theme</Link>
        <Link style={ styles.styleLink } to='/unknown'>NoMatch</Link>
      </Flexbox>
    );
  }
}
