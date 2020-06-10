import React from 'react';
import inkBlot from '../../assets/images/splotch.png';
import roundInkBlot from '../../assets/images/round-splotch.png';
import typeStyle from '../../styles/type.css';
import styles from './Strengths.css';
  
const Strengths = () => {
  return (
    <section name='Strengths' className={styles.Strengths}>
      <h2 className={typeStyle.pageHeading}>Strengths</h2>
      <div className={`${styles.element} ${styles.learner}`}>
        <img src={roundInkBlot} alt="Ink Blot" />
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
        <img src={inkBlot} alt="Ink Blot" />
        <div className={styles.content}>
          <h3 className={typeStyle.subheading}>Ethos for Quality</h3>
          <p className={`${styles.details} ${typeStyle.body}`}>"Dannie has an <i>extreme</i> amount of attention to detail"<br /><i>-a senior developer</i></p>
        </div>
      </div>
      <div className={`${styles.element} ${styles.problemSolver}`}>
        <img src={inkBlot} alt="Ink Blot" />
        <div className={styles.content}>
          <h3 className={typeStyle.subheading}>Creative Problem Solver</h3>
          <p className={`${styles.details} ${typeStyle.body}`}>Some stuff here...fneonwoegwep jopjv<br /> fiewohgwe0fhiosbhsoens</p>
        </div>
      </div>
    </section>
  );
};

export default Strengths;
