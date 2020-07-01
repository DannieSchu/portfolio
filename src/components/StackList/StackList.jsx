import React from 'react';
import PropTypes from 'prop-types';
import typeStyles from '../../styles/type.css';

const StackList = ({ stack }) => {
  const stackList = stack.map(techItem => `${techItem}`).join(' | ');

  return <h4 className={typeStyles.allCaps} style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>{stackList}</h4>;
};

StackList.propTypes = {
  stack: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default StackList;
