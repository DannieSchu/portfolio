import { useState, useEffect } from 'react';

export const useGetOpacity = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const opacity = isMounted ? 1 : 0;

  return opacity;
};
