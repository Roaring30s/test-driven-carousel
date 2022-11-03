import React from 'react';
import CarouselButton from './CarouselButton';
import CarouselSlide from './CarouselSlide';
import PropTypes from 'prop-types';

export default class Carousel extends React.PureComponent {
    //Employed class syntax vs constructor
    static propTypes = {
        slides: PropTypes.arrayOf(
            PropTypes.shape
            (CarouselSlide.propTypes)).isRequired
    };

    state = {
        slideIndex: 0,
    };

    handlePrevClick = () => {
        const { slides } = this.props;
        this.setState(({ slideIndex }) => ({
            slideIndex: (slideIndex + slides.length - 1) % slides.length
        }));
    };

    handleNextClick = () => {
        const { slides } = this.props;
        this.setState(({ slideIndex }) => ({
            slideIndex: (slideIndex + 1) % slides.length
        }));
    };

    render() {
        const {slides, ...rest} = this.props;
        return (
            <div {...rest}>
                <CarouselSlide {...slides[this.state.slideIndex]} />
                <CarouselButton
                    data-action='prev'
                    onClick={this.handlePrevClick}
                >
                    Prev
                </CarouselButton>
                <CarouselButton
                    data-action='next'
                    onClick={this.handleNextClick}
                >
                    Next
                </CarouselButton>
            </div>
        ); 
    }
}