import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CarouselButton from '../CarouselButton';

configure({ adapter: new Adapter() });

describe('CarouselButton', () => {
    it('renders a <button>', () => {
        // setup 
        const wrapper = shallow(<CarouselButton />);

        // verification
        expect(wrapper.type()).toBe('button');
    });
});