import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';
import CarouselArrow from './CarouselArrow';import styles from './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    currentIndex < 1 ? setCurrentIndex(images.length - 1) : setCurrentIndex(currentIndex - 1);
  };

  const goToNextSlide = () => {
    currentIndex === images.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
  };

  return (
    <section className={styles.Carousel}>
      <CarouselArrow direction="left" onClick={goToPrevSlide} />
      <Slide image={images[currentIndex]} />
      <CarouselArrow direction="right" onClick={goToNextSlide} />
    </section>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Carousel;
