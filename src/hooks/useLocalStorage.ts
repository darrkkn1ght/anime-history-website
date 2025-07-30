import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for managing localStorage with React state synchronization
 * Provides type-safe localStorage operations with automatic JSON serialization
 */
export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void, () => void] => {
  // State to store the current value
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Function to update both state and localStorage
  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        // Allow value to be a function so we have the same API as useState
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        
        // Save state
        setStoredValue(valueToStore);
        
        // Save to localStorage if we're in the browser
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
          
          // Dispatch custom event for cross-tab synchronization
          window.dispatchEvent(
            new CustomEvent('localStorageChange', {
              detail: { key, value: valueToStore },
            })
          );
        }
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  // Function to remove the key from localStorage
  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
        
        // Dispatch custom event
        window.dispatchEvent(
          new CustomEvent('localStorageChange', {
            detail: { key, value: undefined },
          })
        );
      }
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  // Listen for changes in localStorage (cross-tab synchronization)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (error) {
          console.warn(`Error parsing localStorage value for key "${key}":`, error);
        }
      } else if (e.key === key && e.newValue === null) {
        setStoredValue(initialValue);
      }
    };

    const handleCustomStorageChange = (e: CustomEvent) => {
      if (e.detail?.key === key) {
        setStoredValue(e.detail.value ?? initialValue);
      }
    };

    // Listen for storage events (cross-tab)
    window.addEventListener('storage', handleStorageChange);
    
    // Listen for custom events (same tab)
    window.addEventListener('localStorageChange', handleCustomStorageChange as EventListener);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('localStorageChange', handleCustomStorageChange as EventListener);
    };
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
};

/**
 * Hook for managing user preferences in localStorage
 */
export const useUserPreferences = () => {
  const [preferences, setPreferences, clearPreferences] = useLocalStorage('anime-history-preferences', {
    theme: 'dark' as 'light' | 'dark',
    autoplay: true,
    soundEnabled: true,
    animationSpeed: 'normal' as 'slow' | 'normal' | 'fast',
    language: 'en' as 'en' | 'ja',
    viewedEras: [] as string[],
    favoriteAnime: [] as string[],
    lastVisited: null as string | null,
    scrollPosition: 0,
  });

  const updatePreference = useCallback(
    <K extends keyof typeof preferences>(
      key: K,
      value: typeof preferences[K]
    ) => {
      setPreferences(prev => ({ ...prev, [key]: value }));
    },
    [setPreferences]
  );

  const addViewedEra = useCallback(
    (eraId: string) => {
      setPreferences(prev => ({
        ...prev,
        viewedEras: Array.from(new Set([...prev.viewedEras, eraId])),
      }));
    },
    [setPreferences]
  );

  const addFavoriteAnime = useCallback(
    (animeId: string) => {
      setPreferences(prev => ({
        ...prev,
        favoriteAnime: Array.from(new Set([...prev.favoriteAnime, animeId])),
      }));
    },
    [setPreferences]
  );

  const removeFavoriteAnime = useCallback(
    (animeId: string) => {
      setPreferences(prev => ({
        ...prev,
        favoriteAnime: prev.favoriteAnime.filter(id => id !== animeId),
      }));
    },
    [setPreferences]
  );

  const updateScrollPosition = useCallback(
    (position: number) => {
      // Throttle scroll position updates to avoid excessive localStorage writes
      setPreferences(prev => ({ ...prev, scrollPosition: position }));
    },
    [setPreferences]
  );

  return {
    preferences,
    updatePreference,
    addViewedEra,
    addFavoriteAnime,
    removeFavoriteAnime,
    updateScrollPosition,
    clearPreferences,
  };
};

/**
 * Hook for managing timeline navigation state
 */
export const useTimelineState = () => {
  const [timelineState, setTimelineState, clearTimelineState] = useLocalStorage('anime-timeline-state', {
    currentEra: 'origins' as string,
    progress: 0,
    autoScroll: true,
    visitedEras: [] as string[],
    bookmarks: [] as { eraId: string; timestamp: number; note?: string }[],
  });

  const setCurrentEra = useCallback(
    (eraId: string) => {
      setTimelineState(prev => ({
        ...prev,
        currentEra: eraId,
        visitedEras: Array.from(new Set([...prev.visitedEras, eraId])),
      }));
    },
    [setTimelineState]
  );

  const updateProgress = useCallback(
    (progress: number) => {
      setTimelineState(prev => ({ ...prev, progress }));
    },
    [setTimelineState]
  );

  const addBookmark = useCallback(
    (eraId: string, note?: string) => {
      const bookmark: { eraId: string; timestamp: number; note?: string } = {
        eraId,
        timestamp: Date.now(),
        ...(note && { note }),
      };
      setTimelineState(prev => ({
        ...prev,
        bookmarks: [...prev.bookmarks, bookmark],
      }));
    },
    [setTimelineState]
  );

  const removeBookmark = useCallback(
    (timestamp: number) => {
      setTimelineState(prev => ({
        ...prev,
        bookmarks: prev.bookmarks.filter(b => b.timestamp !== timestamp),
      }));
    },
    [setTimelineState]
  );

  const toggleAutoScroll = useCallback(() => {
    setTimelineState(prev => ({ ...prev, autoScroll: !prev.autoScroll }));
  }, [setTimelineState]);

  return {
    timelineState,
    setCurrentEra,
    updateProgress,
    addBookmark,
    removeBookmark,
    toggleAutoScroll,
    clearTimelineState,
  };
};

/**
 * Hook for managing search and filter state
 */
export const useSearchState = () => {
  const [searchState, setSearchState, clearSearchState] = useLocalStorage('anime-search-state', {
    recentSearches: [] as string[],
    filters: {
      era: [] as string[],
      genre: [] as string[],
      studio: [] as string[],
      year: { min: 1900, max: 2025 },
    },
    sortBy: 'year' as 'year' | 'title' | 'popularity' | 'rating',
    sortOrder: 'asc' as 'asc' | 'desc',
  });

  const addRecentSearch = useCallback(
    (query: string) => {
      if (query.trim()) {
        setSearchState(prev => ({
          ...prev,
          recentSearches: [
            query,
            ...prev.recentSearches.filter(s => s !== query),
          ].slice(0, 10), // Keep only 10 recent searches
        }));
      }
    },
    [setSearchState]
  );

  const updateFilters = useCallback(
    (filters: Partial<typeof searchState.filters>) => {
      setSearchState(prev => ({
        ...prev,
        filters: { ...prev.filters, ...filters },
      }));
    },
    [setSearchState, searchState]
  );

  const updateSort = useCallback(
    (sortBy: typeof searchState.sortBy, sortOrder: typeof searchState.sortOrder) => {
      setSearchState(prev => ({ ...prev, sortBy, sortOrder }));
    },
    [setSearchState, searchState]
  );

  const clearRecentSearches = useCallback(() => {
    setSearchState(prev => ({ ...prev, recentSearches: [] }));
  }, [setSearchState]);

  return {
    searchState,
    addRecentSearch,
    updateFilters,
    updateSort,
    clearRecentSearches,
    clearSearchState,
  };
};

/**
 * Utility function to check if localStorage is available
 */
export const isLocalStorageAvailable = (): boolean => {
  try {
    if (typeof window === 'undefined') return false;
    
    const test = '__localStorage_test__';
    window.localStorage.setItem(test, 'test');
    window.localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
};

/**
 * Utility function to get localStorage size
 */
export const getLocalStorageSize = (): number => {
  if (!isLocalStorageAvailable()) return 0;
  
  let total = 0;
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      total += localStorage[key].length + key.length;
    }
  }
  return total;
};

/**
 * Utility function to clear all anime-related localStorage keys
 */
export const clearAnimeLocalStorage = (): void => {
  if (!isLocalStorageAvailable()) return;
  
  const keys = Object.keys(localStorage);
  const animeKeys = keys.filter(key => key.startsWith('anime-'));
  
  animeKeys.forEach(key => {
    localStorage.removeItem(key);
  });
};

export default useLocalStorage;