import React from 'react';
import About from './About';
import Approach from './Approach';
import Tech from './Tech';
import styles from './AboutContainer.css';

const AboutContainer = () => (
  <section id="AboutContainer" className={styles.AboutContainer}>
    <About />
    <Approach />
    <Tech />
  </section>
);

export default AboutContainer;
