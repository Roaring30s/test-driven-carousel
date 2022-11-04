import React from 'react';
import { shallow } from 'enzyme';
import Carousel, {Carousel as CoreCarousel} from '../Carousel';
import CarouselButton from '../CarouselButton';
import CarouselSlide from '../CarouselSlide';  
import Carousel from '../Carousel';


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

    describe('component with HOC', () => {
        //Verify if wrapper HasIndex by checking props
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<Carousel slides={slides} />);
        });

        it('sets slideIndex={0} on the core component', () => {
            expect(wrapper.find(CoreCarousel).prop('slideIndex')).toBe(0);
        });

        it('passes `slides` down to the core component', () => {
            expect(wrapper.find(CoreCarousel).prop('slides')).toBe(slides);
        });
    });

    describe('core component', () => {
        //test against CoreCarousel will go here
        //jestfn creates a mock function keeping track of own calls
        const slideIndexDecrement = jest.fn();
        const slideIndexIncrement = jest.fn();
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(
                <CoreCarousel
                    slides={slides}
                    slideIndex={0}
                    slideIndexDecrement={slideIndexDecrement}
                    slideIndexIncrement={slideIndexIncrement}
                />
            );
        });

        it('renders a <div>', () => {
            expect(wrapper.type()).toBe('div');
        });

        it('renders a CarouselButton labeled "Prev"', () => {
            expect(wrapper.find(CarouselButton).at(0).prop('children')).toBe('Prev');
        });

        it('renders a CarouselButton labeled "Next"', () => {
            expect(wrapper.find(CarouselButton).at(1).prop('children')).toBe('Next');
        });

        it('renders the current slide as a CarouselSlide', () => {
            let slideProps;
            slideProps = wrapper.find(CarouselSlide).props();
            expect(slideProps).toEqual({
                ...CarouselSlide.defaultProps,
                ...slides[0],
            });
            wrapper.setProps({ slideIndex: 1 });
            slideProps = wrapper.find(CarouselSlide).props();
            expect(slideProps).toEqual({
                ...CarouselSlide.defaultProps,
                ...slides[1],
            });
        });

        it('decrements `slideIndex` when Prev is clicked', () => {
            wrapper.find('[data-action="prev"]').simulate('click');
            expect(slideIndexDecrement).toHaveBeenCalledWith(slides.length);
        });

        it('increments `slideIndex` when Next is clicked', () => {
            wrapper.find('[data-action="next"]').simulate('click');
            expect(slideIndexIncrement).toHaveBeenCalledWith(slides.length);
        });

        it('passes defaultImg and defaultImgHeight to the CarouselSlide', () => {
            const defaultImg = () => 'test';
            const defaultImgHeight = 1234;
            wrapper.setProps({defaultImg, defaultImgHeight});
            expect(wrapper.find(CarouselSlide).prop('Img')).toBe(defaultImg);
            expect(wrapper.find(CarouselSlide).prop('imgHeight')).toBe(defaultImgHeight);
        });

        it('allows individual slides to override Img and imgHeight', () => {
            const Img = () => 'test';
            const imgHeight = 1234;
            wrapper.setProps({ slides: [{ ...slides[0], Img, imgHeight }] });
            expect(wrapper.find(CarouselSlide).prop('Img')).toBe(Img);
            expect(wrapper.find(CarouselSlide).prop('imgHeight')).toBe(imgHeight);
        }); 
    });

});
7