import { useState, useEffect } from 'react';

export const useAppReady = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      return;
    }

    // Set ready after a short delay to ensure React is fully initialized
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Return false during SSR to prevent hydration mismatches
  if (typeof window === 'undefined') {
    return false;
  }

  return isReady;
}; 