import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

it('renders correctly', () => {
  let wrapper = shallow(<App/>);
  expect(wrapper).toMatchSnapshot();
});
