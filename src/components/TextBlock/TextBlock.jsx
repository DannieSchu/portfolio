import React from 'react';
import PropTypes from 'prop-types';
import typeStyles from '../../styles/type.css';

const TextBlock = ({ heading, content }) => (
  <div> 
    <h3 className={typeStyles.pullOut}>{heading}</h3>
    <p className={typeStyles.body}>{content}</p>
  </div>
);

TextBlock.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default TextBlock;

