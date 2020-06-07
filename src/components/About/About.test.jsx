import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe('About component', () => {
  it('renders About', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
