import React from 'react';
import About from './About';
import Strengths from './Strengths';
import styles from './AboutContainer.css';

const AboutContainer = () => (
  <section id="AboutContainer" className={styles.AboutContainer}>
    <About />
    <Strengths />
  </section>
);

export default AboutContainer;
