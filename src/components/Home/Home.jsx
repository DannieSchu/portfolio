import React from 'react';
import largeFlowers from '../../assets/images/large-flowers.png';
import smallFlowers from '../../assets/images/small-flowers.png';
import home from '../../assets/icons/home.png';
import typeStyle from '../../styles/type.css';
import styles from './Home.css';

const Home = () => {
  return (
    <section className={styles.Home}>
      <img className={styles.home} src={home} alt='home' />
      <h1 className={typeStyle.mainHeading}>Dannie<br />Schumaker</h1>
      <img className={styles.largeFlowers} src={largeFlowers} alt='flower illustration' />
      <img className={styles.smallFlowers} src={smallFlowers} alt='flower illustration' />
    </section>
  );
};

export default Home;

