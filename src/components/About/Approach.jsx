import React from 'react';
import PageHeading from '../PageHeading/PageHeading';
import Arrow from '../Nav/Arrow';
import ApproachItem from './ApproachItem';
import styles from './Approach.css';
import { approachArr } from '../../data/approachArr';

const Approach = () => {
  const approachElements = approachArr.map(item => <ApproachItem key={item.name} {...item} />);

  return (
    <section name='Approach' className={styles.Approach}>
      <PageHeading content="Approach" />
      {approachElements}
      <Arrow element="Tech" container="AboutContainer" />
    </section>
  );
};

export default Approach;
