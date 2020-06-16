import React from 'react';
import { shallow } from 'enzyme';
import ContactMethod from './ContactMethod';

describe('ContactMethod component', () => {
  it('renders ContactMethod', () => {
    const wrapper = shallow(<ContactMethod image="../assets/social-media/twitter.png" link="https://twitter.com/DannieSchumaker" text="dannieschumaker" />);
    expect(wrapper).toMatchSnapshot();
  });
});
