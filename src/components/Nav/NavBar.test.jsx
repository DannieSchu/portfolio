import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('NavBar component', () => {
  it('renders NavBar', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
