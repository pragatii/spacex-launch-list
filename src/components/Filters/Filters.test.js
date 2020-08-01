import React from 'react';
import { mount, shallow, render } from 'enzyme';

import Filters from './Filters';

const props = {
    title: '',
    options: [1, 2, 3],
    classes: {},
    onSelect: jest.fn(),
    selectedFilter: ''
}
it('renders correctly', () => {
    let wrapper = shallow(<Filters/>);
    expect(wrapper).toMatchSnapshot();
});

it('should mount the component with all props', () => {
    const component = mount(<Filters {...props} />);
    expect(component).toMatchSnapshot();
    component.unmount();
});
