/**
 * Text Formatting Utilities for Anime History Website
 * Provides consistent text formatting, number formatting, and content processing
 */

/**
 * Capitalizes the first letter of each word in a string
 */
export const toTitleCase = (str: string): string => {
    return str.replace(/\w\S*/g, (txt) => 
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  };
  
  /**
   * Converts a string to kebab-case for URLs and IDs
   */
  export const toKebabCase = (str: string): string => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };
  
  /**
   * Converts a string to camelCase
   */
  export const toCamelCase = (str: string): string => {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
  };
  
  /**
   * Formats large numbers with appropriate suffixes (K, M, B)
   */
  export const formatNumber = (num: number): string => {
    if (num >= 1e9) {
      return (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1e6) {
      return (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1e3) {
      return (num / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
  };
  
  /**
   * Formats currency values with proper symbols and commas
   */
  export const formatCurrency = (
    amount: number, 
    currency: string = 'USD',
    locale: string = 'en-US'
  ): string => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  };
  
  /**
   * Formats percentages with proper decimal places
   */
  export const formatPercentage = (value: number, decimals: number = 1): string => {
    return `${(value * 100).toFixed(decimals)}%`;
  };
  
  /**
   * Truncates text to specified length with ellipsis
   */
  export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - 3) + '...';
  };
  
  /**
   * Extracts and formats reading time estimate from text
   */
  export const getReadingTime = (text: string, wordsPerMinute: number = 200): string => {
    const wordCount = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };
  
  /**
   * Formats Japanese names with proper romanization
   */
  export const formatJapaneseName = (
    firstName: string, 
    lastName: string, 
    isWesternOrder: boolean = false
  ): string => {
    return isWesternOrder ? `${firstName} ${lastName}` : `${lastName} ${firstName}`;
  };
  
  /**
   * Formats anime titles with proper capitalization and handling
   */
  export const formatAnimeTitle = (title: string, includeYear?: number): string => {
    const formattedTitle = title
      .split(' ')
      .map(word => {
        // Don't capitalize common anime particles
        const lowerWords = ['no', 'wa', 'ga', 'wo', 'ni', 'de', 'to', 'ya'];
        if (lowerWords.includes(word.toLowerCase()) && word !== title.split(' ')[0]) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
    
    return includeYear ? `${formattedTitle} (${includeYear})` : formattedTitle;
  };
  
  /**
   * Formats duration in various units (minutes, hours, episodes)
   */
  export const formatDuration = (minutes: number): string => {
    if (minutes < 60) {
      return `${minutes}m`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
  };
  
  /**
   * Formats episode count with proper pluralization
   */
  export const formatEpisodeCount = (count: number): string => {
    if (count === 1) return '1 episode';
    if (count === 0) return 'No episodes';
    return `${count} episodes`;
  };
  
  /**
   * Formats studio names with proper handling of common prefixes
   */
  export const formatStudioName = (studioName: string): string => {
    // Handle common studio prefixes
    const prefixes = ['Studio', 'Production', 'Toei', 'Madhouse', 'Bones', 'Wit'];
    
    for (const prefix of prefixes) {
      if (studioName.toLowerCase().startsWith(prefix.toLowerCase())) {
        return prefix + studioName.slice(prefix.length);
      }
    }
    
    return toTitleCase(studioName);
  };
  
  /**
   * Formats era date ranges for timeline display
   */
  export const formatEraRange = (startYear: number, endYear?: number): string => {
    if (!endYear) return `${startYear}s - Present`;
    if (startYear === endYear) return `${startYear}`;
    return `${startYear}s - ${endYear}s`;
  };
  
  /**
   * Formats search queries for better matching
   */
  export const normalizeSearchQuery = (query: string): string => {
    return query
      .toLowerCase()
      .trim()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, ' ');
  };
  
  /**
   * Formats content tags with consistent styling
   */
  export const formatTag = (tag: string): string => {
    return tag
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };
  
  /**
   * Formats URLs for sharing and navigation
   */
  export const formatShareUrl = (baseUrl: string, path: string, params?: Record<string, string>): string => {
    const url = new URL(path, baseUrl);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
      });
    }
    
    return url.toString();
  };
  
  /**
   * Formats text content for social media sharing
   */
  export const formatShareText = (title: string, description: string, maxLength: number = 280): string => {
    const baseText = `${title}: ${description}`;
    return truncateText(baseText, maxLength);
  };
  
  /**
   * Removes HTML tags from text content
   */
  export const stripHtml = (html: string): string => {
    return html.replace(/<[^>]*>/g, '');
  };
  
  /**
   * Formats lists with proper conjunction handling
   */
  export const formatList = (
    items: string[], 
    conjunction: string = 'and',
    maxItems?: number
  ): string => {
    if (items.length === 0) return '';
    if (items.length === 1) return items[0];
    
    const displayItems = maxItems ? items.slice(0, maxItems) : items;
    const remaining = maxItems ? items.length - maxItems : 0;
    
    if (displayItems.length === 2) {
      const result = `${displayItems[0]} ${conjunction} ${displayItems[1]}`;
      return remaining > 0 ? `${result} ${conjunction} ${remaining} more` : result;
    }
    
    const lastItem = displayItems.pop();
    const result = `${displayItems.join(', ')}, ${conjunction} ${lastItem}`;
    return remaining > 0 ? `${result}, ${conjunction} ${remaining} more` : result;
  };
  
  /**
   * Formats relative time (e.g., "2 hours ago", "3 days ago")
   */
  export const formatRelativeTime = (date: Date, _locale: string = 'en-US'): string => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    const diffWeek = Math.floor(diffDay / 7);
    const diffMonth = Math.floor(diffDay / 30);
    const diffYear = Math.floor(diffDay / 365);
  
    if (diffSec < 60) return 'Just now';
    if (diffMin < 60) return `${diffMin}m ago`;
    if (diffHour < 24) return `${diffHour}h ago`;
    if (diffDay < 7) return `${diffDay}d ago`;
    if (diffWeek < 4) return `${diffWeek}w ago`;
    if (diffMonth < 12) return `${diffMonth}mo ago`;
    return `${diffYear}y ago`;
  };

/**
 * Debounce function to limit the rate at which a function can fire
 */
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};