import React from 'react';
import About from './About';
import Strengths from './Strengths';
import styles from './AboutContainer.css';
import Tech from './Tech';

const AboutContainer = () => (
  <section id="AboutContainer" className={styles.AboutContainer}>
    <About />
    <Strengths />
    <Tech />
  </section>
);

export default AboutContainer;
