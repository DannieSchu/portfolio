import { useState, useEffect } from 'react';

export const usePagination = (images) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselImages, setCarouselImages] = useState([]);
  
  useEffect(() => {
    setCarouselImages(images);
  }, [images]);

  const goToPrevSlide = () => {
    currentIndex < 1 ? setCurrentIndex(carouselImages.length - 1) : setCurrentIndex(currentIndex - 1);
  };

  const goToNextSlide = () => {
    currentIndex === carouselImages.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
  };

  return { currentIndex, carouselImages, goToPrevSlide, goToNextSlide };
};
