import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loading.css';

const Loading = ({ background }) => (
  <section className={`${styles.Loading} ${styles[background]}`}>
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
  background: PropTypes.string
};

export default Loading;

