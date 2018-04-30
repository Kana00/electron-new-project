import * as React from 'react';
import TitleBar from '../TitleBar/TitleBar';
import * as renderer from 'react-test-renderer';
import * as Adapter from 'enzyme-adapter-react-16';
import { configure as configureEnzyme } from 'enzyme';
import { shallow } from 'enzyme';

configureEnzyme({ adapter: new Adapter() });

describe('Test component TitleBar', () => {
  it('render correctly', () => {
    const tree = renderer.create(<TitleBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('contains WindowsWindowControl', () => {
    const wrapper = shallow(<TitleBar />);
    expect(wrapper.find('WindowsWindowControl').length).toBe(1);
  });
});
