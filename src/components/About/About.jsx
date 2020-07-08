import React from 'react';
import Typist from 'react-typist';
import Arrow from '../Nav/Arrow';
import selfPortrait from '../../assets/images/self-portrait.png';
import styles from './About.css';
import typeStyle from '../../styles/type.css';

const About = () => (
  <section name="about" className={styles.About}>
    <img src={selfPortrait} alt="Dannie Schumaker" className={styles.portrait} />
    <section>
      <h3 className={typeStyle.subheading}>Full-stack software developer who makes <i>clunky</i> code <i>beautiful</i>. </h3>
      <Typist avgTypingDelay={80} cursor={{ show: false }} startDelay={3000}>
        <p>Documentation fanatic<Typist.Delay ms={200} />...</p>
        <Typist.Delay ms={600} />
        <p>with an eye for detail<Typist.Delay ms={200} />...</p>
        <Typist.Delay ms={600} />
        <p>and a passion for finding elegant solutions to complex problems.</p>
      </Typist>
    </section>
    <Arrow element="approach" container="aboutContainer" />
  </section>
);

export default About;
