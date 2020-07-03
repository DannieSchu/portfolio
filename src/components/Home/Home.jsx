import React from 'react';
import Arrow from '../Nav/Arrow';
import largeFlowers from '../../assets/images/large-flowers.png';
import smallFlowers from '../../assets/images/small-flowers.png';
import salmonIcon from '../../assets/icons/salmon-arrow.png';
import salmonShadowIcon from '../../assets/icons/salmon-arrow-shadow.png';
import { useGetOpacity } from '../../hooks/getOpacity';
import typeStyle from '../../styles/type.css';
import styles from './Home.css';

const Home = () => {
  const opacity = useGetOpacity();

  return (
    <section name="Home" className={styles.Home} style={{ opacity }}>
      <h1 className={typeStyle.mainHeading}>Dannie<br />Schumaker</h1>
      <img className={styles.largeFlowers} src={largeFlowers} alt='flower illustration' />
      <img className={styles.smallFlowers} src={smallFlowers} alt='flower illustration' />
      <Arrow element="About" container="AboutContainer" icon={salmonIcon} shadowIcon={salmonShadowIcon} />
    </section>
  );
};

export default Home;
