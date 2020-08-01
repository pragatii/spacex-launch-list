import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import LaunchCard from './LaunchCard';


it('renders correctly', () => {
    let wrapper = shallow(<LaunchCard/>);
    expect(wrapper).toMatchSnapshot();
});