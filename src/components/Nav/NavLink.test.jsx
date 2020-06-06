import React from 'react';
import { shallow } from 'enzyme';
import NavLink from './NavLink';

describe('NavLink component', () => {
  it('renders NavLink', () => {
    const wrapper = shallow(
      <NavLink to="Home" icon="home.png" activeIcon="home-active.png" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
