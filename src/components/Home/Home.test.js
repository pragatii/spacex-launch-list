import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import Home from './Home';


it('renders correctly', () => {
    let wrapper = shallow(<Home/>);
    expect(wrapper).toMatchSnapshot();
});