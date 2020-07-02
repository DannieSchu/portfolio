import { useState } from 'react';

export const usePagination = (images) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    currentIndex < 1 ? setCurrentIndex(images.length - 1) : setCurrentIndex(currentIndex - 1);
  };

  const goToNextSlide = () => {
    currentIndex === images.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
  };

  return { currentIndex, goToPrevSlide, goToNextSlide };
};
