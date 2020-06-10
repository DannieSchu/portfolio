import React, { useState } from 'react';
import { Events, scroller } from 'react-scroll';
import PropTypes from 'prop-types';
import defaultArrow from '../../assets/icons/arrow.png';
import defaultHoverArrow from '../../assets/icons/white-arrow-shadow.png';
import styles from './Arrow.css';

const Arrow = ({ element, container, icon, shadowIcon }) => {
  const [currIcon, setCurrIcon] = useState(icon || defaultArrow);

  const scrollTo = element => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  const scrollToWithContainer = (element, container) => {

    let goToContainer = new Promise(resolve => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo(container, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo(element, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: container
      }));
  };

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
