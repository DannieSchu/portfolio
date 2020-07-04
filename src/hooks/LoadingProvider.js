import React, { 
  createContext, 
  useState, 
  useEffect, 
  useContext 
} from 'react';
import PropTypes from 'prop-types';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [imageOneLoaded, setImageOneLoaded] = useState(false);
  const [imageTwoLoaded, setImageTwoLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [timeoutStatus, setTimeoutStatus] = useState('initating');

  const opacity = (imageOneLoaded && imageTwoLoaded) ? 1 : 0;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setTimeoutStatus('completed');
  }, [imageOneLoaded, imageTwoLoaded]);

  return (
    <LoadingContext.Provider value={{ isLoading, timeoutStatus, opacity, setImageOneLoaded, setImageTwoLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
};

LoadingProvider.propTypes = {
  children: PropTypes.node
};

export const useLoading = () => {
  const { isLoading } = useContext(LoadingContext);
  return isLoading;
};

export const useTimeoutStatus = () => {
  const { timeoutStatus } = useContext(LoadingContext);
  return timeoutStatus;
};

export const useOpacity = () => {
  const { opacity } = useContext(LoadingContext);
  return opacity;
};

export const useSetImageOneLoaded = () => {
  const { setImageOneLoaded } = useContext(LoadingContext);
  return setImageOneLoaded;
};

export const useSetImageTwoLoaded = () => {
  const { setImageTwoLoaded } = useContext(LoadingContext);
  return setImageTwoLoaded;
};
