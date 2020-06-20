import React from 'react';
import TechItem from './TechItem';
import Arrow from '../Nav/Arrow';
import { techArr } from '../../data/techArr';
import styles from './Tech.css';
import typeStyle from '../../styles/type.css';

const Tech = () => {
  const techElements = techArr.map(element => <TechItem key={element.title} {...element} />);

  return (
    <section name="Tech" className={styles.Tech}>
      <h2 className={typeStyle.pageHeading}>Tech Stack</h2>
      <section className={styles.techList}>
        <dl className={styles.definitionList}>
          {techElements}
        </dl>
      </section>
      <Arrow element="Projects" />
    </section>
  );
};

export default Tech;
