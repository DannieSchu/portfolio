import React from 'react';
import Typist from 'react-typist';
import selfPortrait from '../../assets/images/self-portrait.png';
import styles from './About.css';
import typeStyle from '../../styles/type.css';

const About = () => (
  <section id="About" className={styles.About}>
    <img src={selfPortrait} alt="Dannie Schumaker" />
    <section>
      <h3 className={typeStyle.subheading}>Full-stack software developer who makes <i>clunky</i> code <i>beautiful</i>. </h3>
      <Typist avgTypingDelay={110} cursor={{ show: false }} startDelay={5000}>
        <p>Documentation fanatic<Typist.Delay ms={300} />...</p>
        <Typist.Delay ms={1000} />
        <p>with an eye for detail<Typist.Delay ms={300} />...</p>
        <Typist.Delay ms={1000} />
        <p>and a passion for finding elegant solutions to complex problems.</p>
      </Typist>
    </section>
  </section>
);

export default About;
