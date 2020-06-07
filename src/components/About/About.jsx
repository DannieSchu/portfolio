import React from 'react';
import selfPortrait from '../../assets/images/self-portrait.png';
import styles from './About.css';
import typeStyle from '../../styles/type.css';

const About = () => (
  <section id="About" className={styles.About}>
    <img src={selfPortrait} alt="Dannie Schumaker" />
    <section>
      <h3 className={typeStyle.subheading}>Full-stack software developer who makes <i>clunky</i> code <i>beautiful</i>. </h3>
      <div className={styles.typewriter}>
        <p>Documentation fanatic</p>
        <p>with an eye for detail</p>
        <p>and a passion for finding elegant solutions to complex problems.</p>
      </div>
    </section>
  </section>
);

export default About;
