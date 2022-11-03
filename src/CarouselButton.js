import React from 'react';
import PropTypes from 'prop-types'

const CarouselButton = (props) => {
    return (
        <button {...props} />
    );
} 

CarouselButton.propTypes = {
    //node - either React Element or Primitive
    children: PropTypes.node.isRequired,
}

export default CarouselButton;
