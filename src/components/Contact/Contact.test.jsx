import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

describe('Contact component', () => {
  it('renders Contact', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper).toMatchSnapshot();
  });
});
