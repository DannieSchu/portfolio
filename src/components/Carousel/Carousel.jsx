import React from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';
import CarouselArrow from './CarouselArrow';import styles from './Carousel.css';
import { usePagination } from '../../hooks/paginateCarousel';

const Carousel = ({ images }) => {
  const { currentIndex, carouselImages, goToPrevSlide, goToNextSlide } = usePagination(images); 

  return (
    <section className={styles.Carousel}>
      <CarouselArrow direction="left" onClick={goToPrevSlide} />
      <Slide image={carouselImages[currentIndex]} />
      <CarouselArrow direction="right" onClick={goToNextSlide} />
    </section>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Carousel;
