import React, { useState } from 'react';
import PropTypes from 'prop-types';
import leftArrow from '../../assets/icons/left-arrow-circle.svg';
import rightArrow from '../../assets/icons/right-arrow-circle.svg';
import leftHoverArrow from '../../assets/icons/left-arrow-salmon.svg';
import rightHoverArrow from '../../assets/icons/right-arrow-salmon.svg';
import styles from './CarouselArrow.css';

const CarouselArrow = ({ direction, onClick }) => {
  const arrowFactory = {
    left: leftArrow,
    right: rightArrow
  };

  const hoverArrowFactory = {
    left: leftHoverArrow,
    right: rightHoverArrow
  };

  const [currIcon, setCurrIcon] = useState(arrowFactory[direction]);

  return <img 
    style={{ [direction]: '1rem' }}
    src={currIcon} 
    alt="arrow" 
    onClick={() => onClick()} 
    onMouseEnter={() => setCurrIcon(hoverArrowFactory[direction])} 
    onMouseLeave={() => setCurrIcon(arrowFactory[direction])} 
    className={styles.CarouselArrow} />;
};

CarouselArrow.propTypes = {
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CarouselArrow;
