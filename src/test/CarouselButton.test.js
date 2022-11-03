import React from 'react';
import { shallow } from 'enzyme';
import CarouselButton from '../CarouselButton';

describe('CarouselButton', () => {
    //set up 
    const text = 'Button text';
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CarouselButton>{text}</CarouselButton>);
    });

    it('renders a <button>', () => {
        // verification
        expect(wrapper.type()).toBe('button');
    });
    it('passes children to the <button>', () => {

        // execution
        const btnChildren = wrapper.prop('children');
        
        // verify
        expect(btnChildren).toBe(text);
    });
    it('passes other props through to the <button>', () => {
        // setup
        const onClick = () => {};
        const className = 'my-carousel-button';
        const dataAction = 'prev';

        // execution
        wrapper.setProps({ onClick, className, 'data-action': dataAction});

        // verify
        expect(wrapper.prop('onClick')).toBe(onClick);
        expect(wrapper.prop('className')).toBe(className);
        expect(wrapper.prop('data-action')).toBe(dataAction);
    });
});
