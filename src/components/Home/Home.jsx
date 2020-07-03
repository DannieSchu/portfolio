import React, { useState } from 'react';
import Arrow from '../Nav/Arrow';
import largeFlowers from '../../assets/images/large-flowers.png';
import smallFlowers from '../../assets/images/small-flowers.png';
import salmonIcon from '../../assets/icons/salmon-arrow.png';
import salmonShadowIcon from '../../assets/icons/salmon-arrow-shadow.png';
import typeStyle from '../../styles/type.css';
import styles from './Home.css';

const Home = () => {
  const [imageOneLoaded, setImageOneLoaded] = useState(false);
  const [imageTwoLoaded, setImageTwoLoaded] = useState(false);

  const opacity = (imageOneLoaded && imageTwoLoaded) ? 1 : 0;

  return (
    <section name="Home" className={styles.Home} style={{ opacity }}>
      <h1 className={typeStyle.mainHeading}>Dannie<br />Schumaker</h1>
      <img className={styles.largeFlowers} src={largeFlowers} onLoad={() => setImageOneLoaded(true)} alt='flower illustration' />
      <img className={styles.smallFlowers} src={smallFlowers} onLoad={() => setImageTwoLoaded(true)} alt='flower illustration' />
      <Arrow element="About" container="AboutContainer" icon={salmonIcon} shadowIcon={salmonShadowIcon} />
    </section>
  );
};

export default Home;
