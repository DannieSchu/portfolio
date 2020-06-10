import React from 'react';
import { shallow } from 'enzyme';
import Tech from './Tech';

describe('Tech component', () => {
  it('renders Tech', () => {
    const wrapper = shallow(<Tech />);
    expect(wrapper).toMatchSnapshot();
  });
});
