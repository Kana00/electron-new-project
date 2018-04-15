import * as React from 'react';
import WindowsWindowControl from '../TitleBar/WindowsWindowControl/WindowsWindowControl';
import * as renderer from 'react-test-renderer';

describe('Test component WindowsWindowControl', () => {
  it('render correctly', () => {
    const tree = renderer.create(
    <WindowsWindowControl
    colorOfControl='#BBBBBB'
    onOverColor='#EEEEEE'
    height='30px'/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
