import * as React from 'react';
import DisplayReactElectron from '../DisplayReactElectron/DisplayReactElectron';
import * as renderer from 'react-test-renderer';

jest.mock('react-lottie');

describe('Test component DisplayReactElectron', () => {
  it('render correctly', () => {
    const tree = renderer.create(<DisplayReactElectron />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
