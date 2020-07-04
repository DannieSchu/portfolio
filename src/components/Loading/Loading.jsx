import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loading.css';

const Loading = ({ timeoutStatus, background }) => (
  <section className={`${styles.Loading} ${styles[timeoutStatus]} ${styles[background]}`}>
    <div className={styles.spinner}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </section>
);

Loading.propTypes = {
  timeoutStatus: PropTypes.string,
  background: PropTypes.string
};

export default Loading;

