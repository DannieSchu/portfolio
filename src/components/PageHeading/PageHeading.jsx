import React from 'react';
import PropTypes from 'prop-types';
import typeStyle from '../../styles/type.css';
import styles from './PageHeading.css';

const PageHeading = ({ content }) => {
  return (
    <div className={styles.PageHeading}>
      <h2 className={typeStyle.pageHeading}>{content}</h2>
    </div>
  );
};

PageHeading.propTypes = {
  content: PropTypes.string.isRequired
};

export default PageHeading;
