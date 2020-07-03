import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loading.css';

const Loading = ({ timeoutStatus }) => (
  <section className={`${styles.Loading} ${styles[timeoutStatus]}`}>
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
  timeoutStatus: PropTypes.string
};

export default Loading;

