import * as React from 'react';
import __ from '../i18n/Language';
import { Link } from 'react-router-dom';

// URL = /
export default class Root extends React.Component<any> {
  render() {
    return (
      <div>
        <p>{__('application.hello')} => <Link to="/home">Home directory</Link></p>
      </div>
    );
  }
}
