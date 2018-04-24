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
        boxShadow: '1px 1px 5px rgba(0,0,0,0.3)',
        backgroundColor: 'rgba(0,0,0,0.23)',
        border: '3px solid rgba(0,0,0,0.4)',
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
