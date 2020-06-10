import React from 'react';
import About from './About';
import Strengths from './Strengths';
import Tech from './Tech';
import styles from './AboutContainer.css';

const AboutContainer = () => (
  <section id="AboutContainer" className={styles.AboutContainer}>
    <About />
    <Strengths />
    <Tech />
  </section>
);

export default AboutContainer;
