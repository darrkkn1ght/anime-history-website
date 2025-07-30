/**
 * Date Utilities for Anime History Website
 * Handles date formatting, era calculations, and timeline positioning
 */

export interface EraDateRange {
    start: Date;
    end: Date;
    label: string;
    slug: string;
  }
  
  export interface TimelinePosition {
    percentage: number;
    year: number;
    era: string;
  }
  
  export interface AnimeDate {
    year: number;
    month?: number;
    day?: number;
    season?: 'spring' | 'summer' | 'fall' | 'winter';
    isApproximate?: boolean;
  }
  
  /**
   * Era definitions with precise date ranges
   */
  export const ERA_DATES: EraDateRange[] = [
    {
      start: new Date(1900, 0, 1),
      end: new Date(1939, 11, 31),
      label: 'Origins Era',
      slug: 'origins'
    },
    {
      start: new Date(1950, 0, 1),
      end: new Date(1969, 11, 31),
      label: 'Foundation Era',
      slug: 'foundation'
    },
    {
      start: new Date(1970, 0, 1),
      end: new Date(1989, 11, 31),
      label: 'Expansion Era',
      slug: 'expansion'
    },
    {
      start: new Date(1990, 0, 1),
      end: new Date(2009, 11, 31),
      label: 'Golden Age',
      slug: 'golden'
    },
    {
      start: new Date(2010, 0, 1),
      end: new Date(2019, 11, 31),
      label: 'Digital Age',
      slug: 'digital'
    },
    {
      start: new Date(2020, 0, 1),
      end: new Date(2025, 11, 31),
      label: 'Current Era',
      slug: 'current'
    }
  ];
  
  /**
   * Format date for display in different contexts
   */
  export const formatDate = (
    date: Date | string | number,
    format: 'full' | 'year' | 'month-year' | 'era' | 'timeline' | 'relative' = 'full',
    locale: string = 'en-US'
  ): string => {
    const dateObj = new Date(date);
    
    if (isNaN(dateObj.getTime())) {
      return 'Unknown Date';
    }
  
    const options: Record<string, Intl.DateTimeFormatOptions> = {
      full: {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      },
      year: {
        year: 'numeric'
      },
      'month-year': {
        year: 'numeric',
        month: 'long'
      },
      era: {
        year: 'numeric'
      },
      timeline: {
        year: 'numeric',
        month: 'short'
      },
      relative: {
        year: 'numeric'
      }
    };
  
    if (format === 'relative') {
      return formatRelativeDate(dateObj);
    }
  
    return new Intl.DateTimeFormat(locale, options[format]).format(dateObj);
  };
  
  /**
   * Format relative date (e.g., "25 years ago")
   */
  export const formatRelativeDate = (date: Date): string => {
    const now = new Date();
    const diffInYears = now.getFullYear() - date.getFullYear();
    
    if (diffInYears === 0) {
      return 'This year';
    } else if (diffInYears === 1) {
      return 'Last year';
    } else if (diffInYears > 1) {
      return `${diffInYears} years ago`;
    } else {
      return `In ${Math.abs(diffInYears)} year${Math.abs(diffInYears) === 1 ? '' : 's'}`;
    }
  };
  
  /**
   * Format anime release date with season information
   */
  export const formatAnimeDate = (animeDate: AnimeDate): string => {
    const { year, month, day, season, isApproximate } = animeDate;
    
    let formattedDate = year.toString();
    
    if (season) {
      const seasonNames = {
        spring: 'Spring',
        summer: 'Summer',
        fall: 'Fall',
        winter: 'Winter'
      };
      formattedDate = `${seasonNames[season]} ${year}`;
    } else if (month !== undefined) {
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      
      if (day !== undefined) {
        formattedDate = `${monthNames[month - 1]} ${day}, ${year}`;
      } else {
        formattedDate = `${monthNames[month - 1]} ${year}`;
      }
    }
    
    return isApproximate ? `~${formattedDate}` : formattedDate;
  };
  
  /**
   * Determine which era a date belongs to
   */
  export const getEraFromDate = (date: Date | string | number): EraDateRange | null => {
    const dateObj = new Date(date);
    
    if (isNaN(dateObj.getTime())) {
      return null;
    }
    
    return ERA_DATES.find(era => 
      dateObj >= era.start && dateObj <= era.end
    ) || null;
  };
  
  /**
   * Get era by slug
   */
  export const getEraBySlug = (slug: string): EraDateRange | null => {
    return ERA_DATES.find(era => era.slug === slug) || null;
  };
  
  /**
   * Calculate timeline position as percentage
   */
  export const calculateTimelinePosition = (date: Date | string | number): TimelinePosition => {
    const dateObj = new Date(date);
    const startDate = ERA_DATES[0].start;
    const endDate = ERA_DATES[ERA_DATES.length - 1].end;
    
    const totalRange = endDate.getTime() - startDate.getTime();
    const datePosition = dateObj.getTime() - startDate.getTime();
    
    const percentage = Math.max(0, Math.min(100, (datePosition / totalRange) * 100));
    const era = getEraFromDate(dateObj);
    
    return {
      percentage,
      year: dateObj.getFullYear(),
      era: era?.slug || 'unknown'
    };
  };
  
  /**
   * Get decade from year
   */
  export const getDecade = (year: number): string => {
    const decade = Math.floor(year / 10) * 10;
    return `${decade}s`;
  };
  
  /**
   * Format decade range
   */
  export const formatDecadeRange = (startYear: number, endYear: number): string => {
    const startDecade = Math.floor(startYear / 10) * 10;
    const endDecade = Math.floor(endYear / 10) * 10;
    
    if (startDecade === endDecade) {
      return `${startDecade}s`;
    }
    
    return `${startDecade}s-${endDecade}s`;
  };
  
  /**
   * Calculate era duration in years
   */
  export const getEraDuration = (era: EraDateRange): number => {
    return era.end.getFullYear() - era.start.getFullYear() + 1;
  };
  
  /**
   * Get all eras that overlap with a date range
   */
  export const getErasInRange = (startDate: Date, endDate: Date): EraDateRange[] => {
    return ERA_DATES.filter(era => 
      (era.start <= endDate && era.end >= startDate)
    );
  };
  
  /**
   * Format era date range for display
   */
  export const formatEraRange = (era: EraDateRange, format: 'short' | 'long' = 'short'): string => {
    const startYear = era.start.getFullYear();
    const endYear = era.end.getFullYear();
    
    if (format === 'long') {
      return `${formatDate(era.start, 'year')} - ${formatDate(era.end, 'year')}`;
    }
    
    return `${startYear}-${endYear}`;
  };
  
  /**
   * Check if date is in the current era
   */
  export const isCurrentEra = (date: Date | string | number): boolean => {
    const era = getEraFromDate(date);
    return era?.slug === 'current';
  };
  
  /**
   * Get next era after a given era
   */
  export const getNextEra = (currentEra: string): EraDateRange | null => {
    const currentIndex = ERA_DATES.findIndex(era => era.slug === currentEra);
    return currentIndex >= 0 && currentIndex < ERA_DATES.length - 1 
      ? ERA_DATES[currentIndex + 1] 
      : null;
  };
  
  /**
   * Get previous era before a given era
   */
  export const getPreviousEra = (currentEra: string): EraDateRange | null => {
    const currentIndex = ERA_DATES.findIndex(era => era.slug === currentEra);
    return currentIndex > 0 ? ERA_DATES[currentIndex - 1] : null;
  };
  
  /**
   * Sort dates in chronological order
   */
  export const sortDatesChronologically = (
    dates: (Date | string | number)[],
    ascending: boolean = true
  ): Date[] => {
    const sortedDates = dates
      .map(date => new Date(date))
      .filter(date => !isNaN(date.getTime()))
      .sort((a, b) => a.getTime() - b.getTime());
    
    return ascending ? sortedDates : sortedDates.reverse();
  };
  
  /**
   * Create date range for filtering
   */
  export const createDateRange = (
    start: Date | string | number,
    end: Date | string | number
  ): { start: Date; end: Date; isValid: boolean } => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    
    return {
      start: startDate,
      end: endDate,
      isValid: !isNaN(startDate.getTime()) && !isNaN(endDate.getTime()) && startDate <= endDate
    };
  };
  
  /**
   * Calculate age of anime (years since release)
   */
  export const calculateAnimeAge = (releaseDate: Date | string | number): number => {
    const release = new Date(releaseDate);
    const now = new Date();
    
    if (isNaN(release.getTime())) {
      return 0;
    }
    
    return now.getFullYear() - release.getFullYear();
  };
  
  /**
   * Format duration between two dates
   */
  export const formatDuration = (
    startDate: Date | string | number,
    endDate: Date | string | number
  ): string => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return 'Unknown duration';
    }
    
    const diffInYears = end.getFullYear() - start.getFullYear();
    const diffInMonths = (end.getFullYear() * 12 + end.getMonth()) - 
                        (start.getFullYear() * 12 + start.getMonth());
    
    if (diffInYears >= 1) {
      return `${diffInYears} year${diffInYears === 1 ? '' : 's'}`;
    } else if (diffInMonths >= 1) {
      return `${diffInMonths} month${diffInMonths === 1 ? '' : 's'}`;
    } else {
      const diffInDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      return `${diffInDays} day${diffInDays === 1 ? '' : 's'}`;
    }
  };
  
  /**
   * Get Japanese era name (for cultural context)
   */
  export const getJapaneseEra = (year: number): string => {
    const japaneseEras = [
      { start: 1868, end: 1912, name: 'Meiji' },
      { start: 1912, end: 1926, name: 'Taishō' },
      { start: 1926, end: 1989, name: 'Shōwa' },
      { start: 1989, end: 2019, name: 'Heisei' },
      { start: 2019, end: 2025, name: 'Reiwa' }
    ];
    
    const era = japaneseEras.find(era => year >= era.start && year <= era.end);
    return era ? era.name : 'Unknown';
  };
  
  const dateUtils = {
    ERA_DATES,
    formatDate,
    formatRelativeDate,
    formatAnimeDate,
    getEraFromDate,
    getEraBySlug,
    calculateTimelinePosition,
    getDecade,
    formatDecadeRange,
    getEraDuration,
    getErasInRange,
    formatEraRange,
    isCurrentEra,
    getNextEra,
    getPreviousEra,
    sortDatesChronologically,
    createDateRange,
    calculateAnimeAge,
    formatDuration,
    getJapaneseEra
  };

  export default dateUtils;