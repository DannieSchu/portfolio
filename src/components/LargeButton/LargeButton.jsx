import React from 'react';
import PropTypes from 'prop-types';
import styles from './LargeButton.css';
import typeStyle from '../../styles/type.css';

const LargeButton = ({ link, children }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`${styles.LargeButton} ${typeStyle.body}`}
  >
    {children}
  </a>
);

LargeButton.propTypes = {
  link: PropTypes.string,
  children: PropTypes.string.isRequired
};

export default LargeButton;
