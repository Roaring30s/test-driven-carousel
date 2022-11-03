import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../Carousel';
import CarouselButton from '../CarouselButton';
import CarouselSlide from '../CarouselSlide';  

/**
 * 
 * NOTE: Testing Stateless Components
 * MARKUP
 * 1. Assure top-most component is rendered
 * 2. Assure children, orderlessly, are rendered
 * 3. Make sure all props are rendered in their respective component
 * 
 * STATE
 * Stage input values in 1st describe
 * beforeEach -> pack component to be tested with these values
 * 
 * 4. Make sure all INITIAL state values are correct
 * 5. Each scenario is a describe
 * 5a. Brainstorm all scenarios your state logic could undergo
 * 5b. - one describe for mid, start and end index to see if logic can switch slides
 * 
 */

describe('Carousel', () => {
    let wrapper;

    const slides = [
        {
            imgUrl: 'https://example.com/slide1./png',
            description: 'Slide 1',
            attribution: 'Uno Pizzeria'
        },
        {
            imgUrl: 'https://example.com/slide2./png',
            description: 'Slide 2',
            attribution: 'Dos Equis'
        },
        {
            imgUrl: 'https://example.com/slide2./png',
            description: 'Slide 3',
            attribution: 'Tres Amigos'
        },
    ];
    
    beforeEach(() => {
        wrapper = shallow(<Carousel slides={slides} />);
    });

    it('render a <div>', () => {
        // verify
        expect(wrapper.type()).toBe('div');
    });

    it('has an initial `slideIndex` of 0', () => {
        // verify
        wrapper.setState({ slideIndex: 0 });
        expect(wrapper.state('slideIndex')).toBe(0);
    });

    it('renders a CarouselButton labeled `Prev`', () => {
        //find returns multiple results, at() selects one
        //children returns children of CarouselButton
        expect(wrapper.find(CarouselButton).at(0).prop('children')).toBe('Prev')
    });

    it('renders a CarouselButton labeled `Next`', () => {
        expect(wrapper.find(CarouselButton).at(1).prop('children')).toBe('Next');
    });

    it('passes defaultImg and defaultImgHeight to the CarouselSlide', () => {
        const defaultImg = () => 'test';
        const defaultImgHeight = () => 1234;

        wrapper.setProps({ defaultImg, defaultImgHeight });
        expect(wrapper.find(CarouselSlide).prop('Img')).toBe(defaultImg);
        expect(wrapper.find(CarouselSlide).prop('imgHeight')).toBe(defaultImgHeight);
    }); 

    it('allows individual slides to override Img and imgHeight', () => {
        const Img = () => 'test';
        const imgHeight = () => 1234;
        wrapper.setProps({ slides: [{...slides[0], Img, imgHeight }] });
        expect(wrapper.find(CarouselSlide).prop('Img')).toBe(Img);
        expect(wrapper.find(CarouselSlide).prop('imgHeight')).toBe(imgHeight);
    });

    describe('with a middle slide selected', () => {
        beforeEach(() => {
            wrapper.setState({ slideIndex: 1 });
        });

        it('decrements `slideIndex` when Prev is clicked', () => {
            wrapper.find('[data-action="prev"]').simulate('click');
            expect(wrapper.state('slideIndex')).toBe(0);
        });

        it('increments `slideIndex` when Next is clicked', () => {
            wrapper.find('[data-action="next"]').simulate('click');
            expect(wrapper.state('slideIndex')).toBe(2);
        });
    });

    describe('with the first slide selected', () =>{
        it('wraps `slideIndex` to the max value when Prev is clicked', () => {
            wrapper.setState({ slideIndex: 0});
            wrapper.find('[data-action="prev"]').simulate('click');
            expect(wrapper.state('slideIndex')).toBe(slides.length-1);
        });
    });

    describe('with the last slide selected', () => {
        it('wraps `slideIndex` to the min value when Next is clicked', () => {
            wrapper.setState({ slideIndex: slides.length-1 });
            wrapper.find('[data-action="next"]').simulate('click');
            expect(wrapper.state('slideIndex')).toBe(0);
        });

        it('renders the current slide as a CarouselSlide', () => {
            let slideProps;
            slideProps = wrapper.find(CarouselSlide).props();
            expect(slideProps).toEqual({
                ...CarouselSlide.defaultProps,
                ...slides[0]
            });
            wrapper.setState( {slideIndex: 1} );
            slideProps = wrapper.find(CarouselSlide).props();
            expect(slideProps).toEqual({
                ...CarouselSlide.defaultProps,
                ...slides[1]
            });
        });
    });


});
7