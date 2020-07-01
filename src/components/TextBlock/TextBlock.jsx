import React from 'react';
import PropTypes from 'prop-types';
import typeStyles from '../../styles/type.css';

const TextBlock = ({ heading, content }) => {
  const paragraphElements = content.map((item, i) => <p key={i} className={typeStyles.body}>{item}</p>);

  return (
    <div>
      <h3 className={typeStyles.pullOut}>{heading}</h3>
      {paragraphElements}
    </div>
  );
};

TextBlock.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default TextBlock;

