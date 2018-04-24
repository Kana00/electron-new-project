import * as React from 'react';
import Flexbox from 'flexbox-react';

export default class Theme extends React.Component<{},{}> {
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
          <input type='button' value='Material Lighter' style={styles.marginButton}/>
          <input type='button' value='One Dark Pro' style={styles.marginButton}/>
        </div>
      </Flexbox>
    );
  }
}
