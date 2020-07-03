import React from 'react';
import styles from './Loading.css';

const Loading = () => (
  <section className={styles.Loading}>
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

export default Loading;

