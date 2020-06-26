import React from 'react';
import PropTypes from 'prop-types';
import typeStyles from '../../styles/type.css';

const StackList = ({ stack }) => {
  const stackList = stack.map(techItem => `${techItem}`).join(' | ');

  return <h4 className={typeStyles.allCaps}>{stackList}</h4>;
};

StackList.propTypes = {
  stack: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default StackList;
