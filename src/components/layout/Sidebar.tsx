'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, TrendingUp, BarChart3, Home, Search, Settings, Info } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navigationItems = [
    {
      id: 'home',
      name: 'Home',
      href: '#hero',
      icon: Home,
      description: 'Return to top'
    },
    {
      id: 'timeline',
      name: 'Timeline',
      href: '#timeline',
      icon: Clock,
      description: 'Full historical timeline'
    },
    {
      id: 'statistics',
      name: 'Statistics',
      href: '#statistics',
      icon: BarChart3,
      description: 'Market data & analytics'
    },
    {
      id: 'trends',
      name: 'Modern Trends',
      href: '#current-era',
      icon: TrendingUp,
      description: '2020s-2025 developments'
    }
  ];

  const eraItems = [
    {
      id: 'origins',
      name: 'Origins Era',
      href: '#origins-era',
      period: '1900s-1930s',
      color: 'text-amber-600'
    },
    {
      id: 'foundation',
      name: 'Foundation Era',
      href: '#foundation-era',
      period: '1950s-1960s',
      color: 'text-orange-500'
    },
    {
      id: 'expansion',
      name: 'Expansion Era',
      href: '#expansion-era',
      period: '1970s-1980s',
      color: 'text-red-500'
    },
    {
      id: 'golden',
      name: 'Golden Age',
      href: '#golden-age-era',
      period: '1990s-2000s',
      color: 'text-purple-500'
    },
    {
      id: 'digital',
      name: 'Digital Age',
      href: '#digital-age-era',
      period: '2010s',
      color: 'text-blue-500'
    },
    {
      id: 'current',
      name: 'Current Era',
      href: '#current-era',
      period: '2020s-2025',
      color: 'text-green-400'
    }
  ];

  const utilityItems = [
    {
      id: 'search',
      name: 'Search',
      icon: Search,
      action: 'search'
    },
    {
      id: 'settings',
      name: 'Settings',
      icon: Settings,
      action: 'settings'
    },
    {
      id: 'about',
      name: 'About',
      icon: Info,
      action: 'about'
    }
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    onClose();
  };

  const handleUtilityAction = (action: string) => {
    // Handle utility actions
    console.log(`Utility action: ${action}`);
    onClose();
  };

  const sidebarVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 40
      }
    }
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const contentVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl border-r border-amber-500/20 z-50 overflow-y-auto"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-blue-500/20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,215,0,0.1),transparent_70%)]" />
            </div>

            <motion.div
              className="relative p-6 h-full flex flex-col"
              variants={contentVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                    アニメ史
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">Navigation Menu</p>
                </div>
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Main Navigation */}
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4 px-2">
                  Main Navigation
                </h3>
                <nav className="space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => handleNavigation(item.href)}
                        className="w-full text-left p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300 group"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                          <div className="flex-1">
                            <div className="text-white font-medium">{item.name}</div>
                            <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </nav>
              </motion.div>

              {/* Era Navigation */}
              <motion.div variants={itemVariants} className="mb-8 flex-1">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4 px-2">
                  Historical Eras
                </h3>
                <nav className="space-y-2">
                  {eraItems.map((era, index) => (
                    <motion.button
                      key={era.id}
                      onClick={() => handleNavigation(era.href)}
                      className="w-full text-left p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="text-white font-medium group-hover:text-amber-100 transition-colors duration-300">
                            {era.name}
                          </div>
                          <div className={`text-xs font-medium transition-colors duration-300 ${era.color}`}>
                            {era.period}
                          </div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-current opacity-60 group-hover:opacity-100 transition-opacity duration-300" 
                             style={{ color: era.color.replace('text-', '').replace('-', '') }} />
                      </div>
                    </motion.button>
                  ))}
                </nav>
              </motion.div>

              {/* Utility Actions */}
              <motion.div variants={itemVariants}>
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4 px-2">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {utilityItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => handleUtilityAction(item.action)}
                        className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300 text-center group"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors duration-300 mx-auto mb-1" />
                        <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {item.name}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div variants={itemVariants} className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs text-gray-500 text-center">
                  <p>Swipe or click outside to close</p>
                  <p className="mt-1">© 2025 Anime History Project</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Side Accent */}
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-amber-500/50 to-transparent" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;