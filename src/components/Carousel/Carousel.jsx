import React from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';
import CarouselArrow from './CarouselArrow';
import { usePagination } from '../../hooks/paginateCarousel';
import styles from './Carousel.css';

const Carousel = ({ images }) => {
  const { visibleImage, goToPrevSlide, goToNextSlide } = usePagination(images); 

  return (
    <section className={styles.Carousel}>
      <CarouselArrow direction="left" onClick={() => goToPrevSlide()} />
      <Slide image={visibleImage || images[0]} />
      <CarouselArrow direction="right" onClick={() => goToNextSlide()} />
    </section>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Carousel;
