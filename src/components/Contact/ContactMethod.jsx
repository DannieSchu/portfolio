import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactMethod.css';
import typeStyles from '../../styles/type.css';

const ContactMethod = ({ image, link, text }) => {
  return (
    <a href={link} className={styles.ContactMethod}>
      <img src={image} alt={text} />
      <p className={typeStyles.body}>{text}</p>
    </a>
  );
};

ContactMethod.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ContactMethod;
