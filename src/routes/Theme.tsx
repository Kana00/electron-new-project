import * as React from 'react';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react';
import { setLighterTheme, setDarkerTheme } from '../redux/action/themeAction';

class Theme extends React.Component<any,{}> {
  render() {
    const styles = {
      containerThemeRoute: {
        height: '90vh',
        weight: '100vh',
      },
      containerThemeButton: {
        padding: '5rem',
        backgroundColor: 'rgba(0,0,0,0.1)',
        border: '2px solid rgba(0,0,0,0.4)',
        borderRadius: '15rem',
      },
      marginButton: {
        margin: '1rem',
      }
    }
    return (
      <Flexbox flexDirection='row' justifyContent='center' alignItems='center' style={styles.containerThemeRoute}>
        <div style={styles.containerThemeButton}>
          <input type='button' value='Material Lighter' style={styles.marginButton} onClick={() => this.props.setToLightTheme()}/>
          <input type='button' value='One Dark Pro' style={styles.marginButton} onClick={() => this.props.setToDarkTheme()}/>
        </div>
      </Flexbox>
    );
  }
}

function mapStateToProps( state: combinedReducerType) {

}
function mapDispatchToProps(dispatch: any) {
  return {
    setToLightTheme: () => dispatch(setLighterTheme()),
    setToDarkTheme: () => dispatch(setDarkerTheme()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Theme);
