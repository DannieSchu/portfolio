import React from 'react';
import PropTypes from 'prop-types';
import styles from './LargeButton.css';
import typeStyle from '../../styles/type.css';

const LargeButton = ({ link, children }) => <a href={link} target="blank" className={`${styles.LargeButton} ${typeStyle.body}`}>{children}</a>;

LargeButton.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default LargeButton;
