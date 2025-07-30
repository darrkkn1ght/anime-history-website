'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Clock, TrendingUp, Film, Calendar, Users, Hash } from 'lucide-react';

interface SearchResult {
  id: string;
  type: 'anime' | 'era' | 'studio' | 'creator' | 'genre';
  title: string;
  subtitle?: string;
  description: string;
  year?: string;
  era?: string;
  relevanceScore: number;
  thumbnail?: string;
}

interface SearchComponentProps {
  onSearch: (query: string, results: SearchResult[]) => void;
  placeholder?: string;
  className?: string;
}

// Mock search data - in real app, this would come from an API or database
const mockSearchData: SearchResult[] = [
  {
    id: '1',
    type: 'anime',
    title: 'Akira',
    subtitle: 'Cyberpunk Masterpiece',
    description: 'Groundbreaking 1988 anime film that revolutionized animation techniques and introduced global audiences to mature anime storytelling.',
    year: '1988',
    era: 'expansion',
    relevanceScore: 95,
    thumbnail: '/images/anime/akira.jpg'
  },
  {
    id: '2',
    type: 'anime',
    title: 'Spirited Away',
    subtitle: 'Studio Ghibli Classic',
    description: 'Academy Award-winning film that became a cultural phenomenon and showcased the artistry of traditional animation.',
    year: '2001',
    era: 'golden',
    relevanceScore: 98,
    thumbnail: '/images/anime/spirited-away.jpg'
  },
  {
    id: '3',
    type: 'studio',
    title: 'Studio Ghibli',
    subtitle: 'Animation Studio',
    description: 'Legendary animation studio founded by Hayao Miyazaki and Isao Takahata, known for critically acclaimed films.',
    era: 'golden',
    relevanceScore: 92
  },
  {
    id: '4',
    type: 'creator',
    title: 'Osamu Tezuka',
    subtitle: 'Father of Manga',
    description: 'Pioneer of Japanese animation and manga, creator of Astro Boy and founder of modern anime industry.',
    era: 'foundation',
    relevanceScore: 99
  },
  {
    id: '5',
    type: 'era',
    title: 'Golden Age Era',
    subtitle: '1990s - 2000s',
    description: 'Period of explosive growth in anime production and international recognition.',
    era: 'golden',
    relevanceScore: 88
  },
  {
    id: '6',
    type: 'anime',
    title: 'Demon Slayer',
    subtitle: 'Modern Shounen Hit',
    description: 'Record-breaking anime series that showcases cutting-edge animation technology.',
    year: '2019',
    era: 'current',
    relevanceScore: 94
  }
];

const recentSearches = [
  'Studio Ghibli',
  'Akira animation techniques',
  'Mecha anime evolution',
  'Digital animation transition'
];

const trendingSearches = [
  'Demon Slayer box office',
  'Attack on Titan ending',
  'Studio WIT vs MAPPA',
  'Anime streaming wars',
  'AI in animation'
];

const SearchComponent: React.FC<SearchComponentProps> = ({
  onSearch,
  placeholder = "Search anime history...",
  className = ""
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [searchHistory, setSearchHistory] = useState<string[]>(recentSearches);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((searchQuery: string) => {
      if (searchQuery.trim()) {
        performSearch(searchQuery);
      } else {
        setResults([]);
        setIsLoading(false);
      }
    }, 300),
    []
  );

  useEffect(() => {
    if (query.length > 0) {
      setIsLoading(true);
      debouncedSearch(query);
    } else {
      setResults([]);
      setIsLoading(false);
    }
  }, [query, debouncedSearch]);

  const performSearch = (searchQuery: string) => {
    // Simulate API search with scoring
    const filteredResults = mockSearchData
      .filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle?.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => b.relevanceScore - a.relevanceScore);

    setTimeout(() => {
      setResults(filteredResults);
      setIsLoading(false);
      onSearch(searchQuery, filteredResults);
    }, 200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleResultClick(results[selectedIndex]);
        } else if (query.trim()) {
          handleSearch(query);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const handleResultClick = (result: SearchResult) => {
    setQuery(result.title);
    setIsOpen(false);
    addToSearchHistory(result.title);
    onSearch(result.title, [result]);
  };

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      addToSearchHistory(searchQuery);
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const addToSearchHistory = (searchQuery: string) => {
    setSearchHistory(prev => {
      const updated = [searchQuery, ...prev.filter(item => item !== searchQuery)];
      return updated.slice(0, 5); // Keep only last 5 searches
    });
  };

  const clearQuery = () => {
    setQuery('');
    setResults([]);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'anime': return Film;
      case 'era': return Calendar;
      case 'studio': return Users;
      case 'creator': return Users;
      case 'genre': return Hash;
      default: return Search;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'anime': return 'text-blue-400';
      case 'era': return 'text-amber-400';
      case 'studio': return 'text-green-400';
      case 'creator': return 'text-purple-400';
      case 'genre': return 'text-pink-400';
      default: return 'text-zinc-400';
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <motion.div
          className={`
            relative flex items-center bg-zinc-900/80 backdrop-blur-sm 
            border rounded-lg transition-all duration-300
            ${isOpen ? 'border-amber-400/50 shadow-lg shadow-amber-500/20' : 'border-zinc-700/50'}
          `}
          whileFocus={{ scale: 1.02 }}
        >
          <Search className="absolute left-3 w-4 h-4 text-zinc-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}
            className="
              w-full pl-10 pr-10 py-3 bg-transparent text-white placeholder-zinc-500
              focus:outline-none text-sm
            "
          />
          {query && (
            <button
              onClick={clearQuery}
              className="absolute right-3 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </motion.div>

        {/* Loading Indicator */}
        {isLoading && (
          <motion.div
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-amber-400 border-t-transparent" />
          </motion.div>
        )}
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={resultsRef}
            className="
              absolute top-full left-0 right-0 mt-2 
              bg-zinc-900/95 backdrop-blur-md border border-zinc-700/50 
              rounded-lg shadow-2xl z-50 overflow-hidden
            "
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            {/* Search Results */}
            {results.length > 0 ? (
              <div className="max-h-96 overflow-y-auto">
                <div className="p-2 border-b border-zinc-700/50">
                  <h4 className="text-xs font-medium text-zinc-400 uppercase tracking-wide px-2">
                    Search Results ({results.length})
                  </h4>
                </div>
                {results.map((result, index) => {
                  const Icon = getTypeIcon(result.type);
                  const isSelected = index === selectedIndex;
                  
                  return (
                    <motion.div
                      key={result.id}
                      onClick={() => handleResultClick(result)}
                      className={`
                        p-3 cursor-pointer transition-all duration-200 border-l-2
                        ${isSelected 
                          ? 'bg-amber-500/10 border-amber-400' 
                          : 'border-transparent hover:bg-zinc-800/50'
                        }
                      `}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`mt-1 ${getTypeColor(result.type)}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <h5 className="text-sm font-medium text-white truncate">
                              {result.title}
                            </h5>
                            {result.year && (
                              <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded">
                                {result.year}
                              </span>
                            )}
                          </div>
                          {result.subtitle && (
                            <p className="text-xs text-amber-400 mt-1">
                              {result.subtitle}
                            </p>
                          )}
                          <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                            {result.description}
                          </p>
                        </div>
                        <div className="text-xs text-zinc-500 capitalize">
                          {result.type}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : query.length > 0 && !isLoading ? (
              <div className="p-4 text-center">
                <Search className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
                <p className="text-sm text-zinc-400">No results found for "{query}"</p>
                <p className="text-xs text-zinc-500 mt-1">Try different keywords or check spelling</p>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {/* Recent Searches */}
                {searchHistory.length > 0 && (
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock className="w-4 h-4 text-zinc-500" />
                      <h4 className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
                        Recent Searches
                      </h4>
                    </div>
                    <div className="space-y-1">
                      {searchHistory.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setQuery(search);
                            handleSearch(search);
                          }}
                          className="
                            w-full text-left px-3 py-2 text-sm text-zinc-300 
                            hover:bg-zinc-800/50 rounded transition-colors
                          "
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div