import * as React from 'react';
import TitleBar from '../TitleBar/TitleBar';
import * as renderer from 'react-test-renderer';

describe('Test component TitleBar', () => {
  it('render correctly', () => {
    const tree = renderer.create(<TitleBar />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
