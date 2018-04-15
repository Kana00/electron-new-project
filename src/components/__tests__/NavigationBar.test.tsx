import * as React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import * as renderer from 'react-test-renderer';

jest.mock('react-router-dom');

describe('Test component NavigationBar', () => {
  it('render correctly', () => {
    const tree = renderer.create(<NavigationBar />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
