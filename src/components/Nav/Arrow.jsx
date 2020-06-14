import React, { useState } from 'react';
import PropTypes from 'prop-types';
import defaultArrow from '../../assets/icons/arrow.png';
import defaultHoverArrow from '../../assets/icons/white-arrow-shadow.png';
import styles from './Arrow.css';
import { useGetScroll } from '../../hooks/getScroll';

const Arrow = ({ element, container, icon, shadowIcon }) => {
  const [currIcon, setCurrIcon] = useState(icon || defaultArrow);
  const { scrollTo, scrollToWithContainer } = useGetScroll();

  return <img 
    src={currIcon} 
    alt="arrow" 
    onClick={container ? () => scrollToWithContainer(element, container) : () => scrollTo(element)} 
    onMouseEnter={() => setCurrIcon(shadowIcon || defaultHoverArrow)} 
    onMouseLeave={() => setCurrIcon(icon || defaultArrow)} 
    className={styles.Arrow} />;
};

Arrow.propTypes = {
  element: PropTypes.string.isRequired,
  container: PropTypes.string,
  icon: PropTypes.string,
  shadowIcon: PropTypes.string
};

export default Arrow;
