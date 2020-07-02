import { useState, useEffect } from 'react';

export const usePagination = (images) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImage, setVisibleImage] = useState(images[0]);

  const goToPrevSlide = () => setCurrentIndex(prevIndex => prevIndex < 1 ? images.length - 1 : prevIndex - 1);

  const goToNextSlide = () => setCurrentIndex(prevIndex => prevIndex === images.length - 1 ? 0 : prevIndex + 1);

  useEffect(() => {
    const nextImage = images[currentIndex];
    setVisibleImage(() => nextImage);
  }, [currentIndex]);

  return { visibleImage, goToPrevSlide, goToNextSlide };
};
