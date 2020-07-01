import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slide.css';

const Slide = ({ image }) => <div style={{ backgroundImage: `URL(${image})` }} className={styles.Slide}></div>;

Slide.propTypes = {
  image: PropTypes.string.isRequired
};

export default Slide;
