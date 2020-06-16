import React from 'react';
import Arrow from '../Nav/Arrow';
import inkBlot1 from '../../assets/images/splotch1.png';
import inkBlot2 from '../../assets/images/splotch2.png';
import inkBlot3 from '../../assets/images/splotch3.png';
import typeStyle from '../../styles/type.css';
import styles from './Strengths.css';
  
const Strengths = () => {
  return (
    <section name='Strengths' className={styles.Strengths}>
      <h2 className={typeStyle.pageHeading}>Strengths</h2>
      <div className={`${styles.element} ${styles.learner}`}>
        <img src={inkBlot3} alt="Ink Blot" />
        <div className={styles.content}>
          <h3 className={typeStyle.subheading}>Lifelong Learner</h3>
          <ul className={`${styles.details} ${typeStyle.body}`}>
            <li>Some awesome thing here</li>
            <li>Another awesome thing here</li>
            <button>Learn More</button>
          </ul>
        </div>
      </div>
      <div className={`${styles.element} ${styles.quality}`}>
        <img src={inkBlot2} alt="Ink Blot" />
        <div className={styles.content}>
          <h3 className={typeStyle.subheading}>Ethos for Quality</h3>
          <p className={`${styles.details} ${typeStyle.body}`}>"Dannie has an <i>extreme</i> amount of attention to detail"<br /><i>-a senior developer</i></p>
        </div>
      </div>
      <div className={`${styles.element} ${styles.problemSolver}`}>
        <img src={inkBlot1} alt="Ink Blot" />
        <div className={styles.content}>
          <h3 className={typeStyle.subheading}>Creative Problem Solver</h3>
          <p className={`${styles.details} ${typeStyle.body}`}>Some stuff here...fneonwoegwep jopjv<br /> fiewohgwe0fhiosbhsoens</p>
        </div>
      </div>
      <Arrow element="Tech" container="AboutContainer" />
    </section>
  );
};

export default Strengths;
