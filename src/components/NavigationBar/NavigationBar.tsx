import * as React from 'react';
import { Link } from 'react-router-dom';

export default class NavigationBar extends React.Component {
  render() {
    const heightOfNavBar = 3;
    const styles = {
      navigationContainer: {
        /* Position Handler  */
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        fontSize: heightOfNavBar/3 + 'rem',
        backgroundColor: '#282C34',
        color: '#BBBBBB',
        textDecorationLine: 'none',
        hover: {
          backgroundColor: '#30333b',
        }
      }
    }
    return(
      <div style={styles.navigationContainer}>
        <Link style={ styles.styleLink } to={"/"}>Root</Link><br/>
        <Link style={ styles.styleLink } to={"/home"}>Home</Link><br/>
        <Link style={ styles.styleLink } to={"/hosdfsdfme"}>NoMatch</Link><br/>
      </div>
    );
  }
}
