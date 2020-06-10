import React from 'react';
import largeFlowers from '../../assets/images/large-flowers.png';
import smallFlowers from '../../assets/images/small-flowers.png';
import typeStyle from '../../styles/type.css';
import styles from './Home.css';

const Home = () => (
  <section name="Home" className={styles.Home}>
    <h1 className={typeStyle.mainHeading}>Dannie<br />Schumaker</h1>
    <img className={styles.largeFlowers} src={largeFlowers} alt='flower illustration' />
    <img className={styles.smallFlowers} src={smallFlowers} alt='flower illustration' />
  </section>
);

export default Home;
