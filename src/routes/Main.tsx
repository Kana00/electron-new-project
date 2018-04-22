import * as React from 'react';
import DisplayReactElectron from '../components/DisplayReactElectron/DisplayReactElectron';
import __ from '../i18n/Language';

// URL = /
export default class Main extends React.Component<any, any> {
  render() {
    return (
      <div>
        <DisplayReactElectron />
      </div>
    );
  }
}
