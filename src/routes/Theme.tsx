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
        border: '2px solid ' + this.props.textColor,
        borderRadius: '15rem',
      },
      marginButton: {
        margin: '1rem',
      }
    }
    return (
      <Flexbox flexDirection='row' justifyContent='center' alignItems='center' style={styles.containerThemeRoute}>
        <div style={styles.containerThemeButton}>
          <input type='button' value='One Dark Pro' style={styles.marginButton} onClick={() => this.props.setToDarkTheme()}/>
          <input type='button' value='Material Lighter' style={styles.marginButton} onClick={() => this.props.setToLightTheme()}/>
        </div>
      </Flexbox>
    );
  }
}

function mapStateToProps(state: combinedReducerType) {
  return {
    textColor: state.themeReducer.textColor,
    backgroundColor: state.themeReducer.backgroundColorApp,
  }
}
function mapDispatchToProps(dispatch: any) {
  return {
    setToLightTheme: () => dispatch(setLighterTheme()),
    setToDarkTheme: () => dispatch(setDarkerTheme()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Theme);
