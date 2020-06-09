import React from 'react';
import { shallow } from 'enzyme';
import TechItem from './TechItem';

describe('TechItem component', () => {
  it('renders TechItem', () => {
    const wrapper = shallow(<TechItem title="Languages" definitions={['JavaScript', 'HTML', 'CSS']}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
