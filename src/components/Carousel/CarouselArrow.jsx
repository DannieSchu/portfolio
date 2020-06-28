import React, { useState } from 'react';
import PropTypes from 'prop-types';
import leftArrow from '../../assets/icons/arrow.png';
import rightArrow from '../../assets/icons/arrow.png';
import leftHoverArrow from '../../assets/icons/white-arrow-shadow.png';
import rightHoverArrow from '../../assets/icons/white-arrow-shadow.png';
import styles from './CarouselArrow.css';
// import { useGetScroll } from '../../hooks/getScroll';

const CarouselArrow = ({ direction, onClick }) => {
  // const icon = direction === 'left' ? leftArrow : rightArrow;
  // const hoverIcon = direction === 'left' ? leftHoverArrow : rightHoverArrow;
  // const right = direction === 'right' ? '25px' : null;
  
  const arrowFactory = {
    left: leftArrow,
    right: rightArrow
  };

  const hoverArrowFactory = {
    left: leftHoverArrow,
    right: rightHoverArrow
  };

  const [currIcon, setCurrIcon] = useState(arrowFactory[direction]);
  // const { scrollTo } = useGetScroll();

  return <img 
    style={{ [direction]: '1rem' }}
    // style={{ right: `${right}` }}
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
