import React from 'react';
import TechItem from './TechItem';
import PageHeading from '../PageHeading/PageHeading';
import Arrow from '../Nav/Arrow';
import { techArr } from '../../data/techArr';
import styles from './Tech.css';

const Tech = () => {
  const techElements = techArr.map(element => <TechItem key={element.title} {...element} />);

  return (
    <section name="Tech" className={styles.Tech}>
      <PageHeading content="Tech Stack" />
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
