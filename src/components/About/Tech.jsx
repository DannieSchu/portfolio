import React from 'react';
import TechItem from './TechItem';
import { techArr } from './techArr';
import styles from './Tech.css';
import typeStyle from '../../styles/type.css';

const Tech = () => {
  const techElements = techArr.map(element => <TechItem key={element.title} {...element} />);

  return (
    <section className={styles.Tech}>
      <h2 className={typeStyle.pageHeading}>Tech Stack</h2>
      <section>
        {techElements}
      </section>
    </section>
  );
};

export default Tech;
