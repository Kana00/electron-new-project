import * as React from 'react';
import test from './i18n/Language';
export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        <h2>{test('application.hello')}</h2>
      </div>
    );
  }
}
