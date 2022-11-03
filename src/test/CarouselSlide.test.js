import React from 'react';
import { shallow } from 'enzyme';
import CarouselSlide from '../CarouselSlide';

/**
 * NOTE: Testing Stateless Components
 * 1. Assure top-most component is rendered
 * 2. Assure children, orderlessly, are rendered
 * 3. Make sure all props are rendered in their respective component
 * 3a. Run test per component checking presence of props
 */

describe('CarouselSlide', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
        <CarouselSlide
            imgUrl='https://example.com/default.jpg'
            description='Default test image'
        />);
    });

    it('renders a <figure>', () => {
        // verify
        expect(wrapper.type()).toBe('figure');
    });

    it('renders an <img> and a <figcaption> as children', () => {
        // setup
        const imgChild = wrapper.childAt(0).type();
        const capChild = wrapper.childAt(1).type();

        // verify
        expect(imgChild).toBe(CarouselSlide.defaultProps.Img);
        expect(capChild).toBe('figcaption');
    });

    it('passes `imgUrl` through to the props.Img', () => {
        // setup
        const imgUrl = 'https://example.com/image.png';
        wrapper.setProps({imgUrl});
        // `find` returns a shallow-like wrapper
        //  use over childAt() for changing DOM structure
        const img = wrapper.find(CarouselSlide.defaultProps.Img);

        // verify
        expect(img.prop('src')).toBe(imgUrl);
    });

    it('uses `description` and `attribution` as the <figaption>', () => {
        // setup
        const description = 'A beautiful image';
        const attribution = 'Dan Pan';
        wrapper.setProps({ description, attribution });

        // execute
        const figcapText = wrapper.find('figcaption').text(); //returns text nodes
        const figcapStrong = wrapper.find('figcaption strong').text();

        // verify
        expect(figcapText).toBe(`${description} ${attribution}`);
        expect(figcapStrong).toBe(description); //description is bold
    });

    it('passes other props through to the <figure>', () => {
        // setup
        const style = {};
        const onClick = () => {};
        const className = 'my-carousel-slide';
        wrapper.setProps({style, onClick, className});

        // execution
        const propStyle = wrapper.prop('style');
        const propClick = wrapper.prop('onClick');
        const propClassName = wrapper.prop('className');

        // verify
        expect(propStyle).toBe(style);
        expect(propClick).toBe(onClick);
        expect(propClassName).toBe(className);
    });
});

describe('Img', () => {
    let mounted;
    const imgUrl = 'https://example.com/default.jpg';

    beforeEach(() => {
        const Img = CarouselSlide.defaultProps.Img;
        //mount vs shallow
        //Shallow test component in isolation
        //Mount test child components as well
        mounted = mount(
            <Img src={imgUrl} imgHeight={500} />
        );
    });

    it('renders an <img> with the given src', () => {
        expect(mounted.containsMatchingElement(<img src={imgUrl} />)).toBe(true);
    });
});