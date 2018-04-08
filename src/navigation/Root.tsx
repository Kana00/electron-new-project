import * as React from 'react';
import DisplayReactElectron from '../components/DisplayReactElectron/DisplayReactElectron';

// URL = /
export default class Root extends React.Component<any, any> {
  render() {
    return (
      <div>
        <DisplayReactElectron />
      </div>
    );
  }
}
