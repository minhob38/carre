import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
  const getWindowDimension = () => {
    if (typeof window === 'undefined') return { width: null, height: null };
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  };

  const [windowDimension, setWindowDimensions] = useState(getWindowDimension());

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimension());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimension;
}
