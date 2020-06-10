import React from 'react';
import { Events, scroller } from 'react-scroll';
import PropTypes from 'prop-types';
import arrow from '../../assets/icons/arrow.png';
import styles from './Arrow.css';

const Arrow = ({ element, container, icon }) => {
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

  return <img src={icon || arrow} alt="arrow" onClick={container ? () => scrollToWithContainer(element, container) : () => scrollTo(element)} className={styles.Arrow} />;
};

Arrow.propTypes = {
  element: PropTypes.string.isRequired,
  container: PropTypes.string,
  icon: PropTypes.string
};

export default Arrow;
