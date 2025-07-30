'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Calendar, Play, Pause } from 'lucide-react';

interface Era {
  id: string;
  name: string;
  period: string;
  startYear: number;
  endYear: number;
  color: string;
  description: string;
  keyAnime: string[];
}

interface TimelineNavigatorProps {
  eras: Era[];
  currentEra: string;
  onEraChange: (eraId: string) => void;
  className?: string;
}

const TimelineNavigator: React.FC<TimelineNavigatorProps> = ({
  eras,
  currentEra,
  onEraChange,
  className = ''
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentIndex = eras.findIndex(era => era.id === currentEra);
  const totalYears = eras[eras.length - 1].endYear - eras[0].startYear;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % eras.length;
      onEraChange(eras[nextIndex].id);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, currentIndex, eras, onEraChange]);

  // Calculate progress based on current era
  useEffect(() => {
    if (currentIndex >= 0) {
      const currentEraData = eras[currentIndex];
      const yearsPassed = currentEraData.startYear - eras[0].startYear;
      const newProgress = (yearsPassed / totalYears) * 100;
      setProgress(newProgress);
    }
  }, [currentIndex, eras, totalYears]);

  const navigateToEra = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? Math.max(0, currentIndex - 1)
      : Math.min(eras.length - 1, currentIndex + 1);
    
    onEraChange(eras[newIndex].id);
  };

  const handleEraClick = (eraId: string) => {
    onEraChange(eraId);
    setIsExpanded(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <div className={`timeline-navigator ${className}`}>
      {/* Main Navigation Bar */}
      <motion.div 
        className="timeline-nav-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
      >
        {/* Progress Bar Background */}
        <div className="timeline-progress-bg">
          <motion.div 
            className="timeline-progress-fill"
            style={{
              background: `linear-gradient(90deg, ${eras[currentIndex]?.color || '#ffd700'}, #00d4ff)`
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
          />
        </div>

        {/* Navigation Controls */}
        <div className="timeline-controls">
          {/* Previous Era Button */}
          <motion.button
            className="era-nav-btn prev"
            onClick={() => navigateToEra('prev')}
            disabled={currentIndex === 0}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} />
          </motion.button>

          {/* Current Era Display */}
          <motion.div 
            className="current-era-display"
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="era-info">
              <span className="era-name">{eras[currentIndex]?.name}</span>
              <span className="era-period">{eras[currentIndex]?.period}</span>
            </div>
            <div className="era-progress">
              <Clock size={16} />
              <span>{currentIndex + 1}/{eras.length}</span>
            </div>
          </motion.div>

          {/* Next Era Button */}
          <motion.button
            className="era-nav-btn next"
            onClick={() => navigateToEra('next')}
            disabled={currentIndex === eras.length - 1}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={20} />
          </motion.button>

          {/* Auto-play Toggle */}
          <motion.button
            className={`autoplay-btn ${isAutoPlay ? 'active' : ''}`}
            onClick={toggleAutoPlay}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAutoPlay ? <Pause size={18} /> : <Play size={18} />}
          </motion.button>
        </div>

        {/* Era Timeline Dots */}
        <div className="era-dots">
          {eras.map((era, index) => (
            <motion.button
              key={era.id}
              className={`era-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleEraClick(era.id)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              style={{
                backgroundColor: index === currentIndex ? era.color : 'rgba(255, 255, 255, 0.3)'
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Expanded Era Selection */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="expanded-era-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <div className="era-grid">
              {eras.map((era, index) => (
                <motion.div
                  key={era.id}
                  className={`era-card ${index === currentIndex ? 'current' : ''}`}
                  onClick={() => handleEraClick(era.id)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div 
                    className="era-color-bar"
                    style={{ backgroundColor: era.color }}
                  />
                  <div className="era-content">
                    <div className="era-header">
                      <h3 className="era-title">{era.name}</h3>
                      <div className="era-years">
                        <Calendar size={14} />
                        <span>{era.period}</span>
                      </div>
                    </div>
                    <p className="era-description">{era.description}</p>
                    <div className="era-anime-list">
                      {era.keyAnime.slice(0, 3).map((anime, i) => (
                        <span key={i} className="anime-tag">{anime}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .timeline-navigator {
          position: sticky;
          top: 80px;
          z-index: 50;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 16px;
          margin: 0 auto;
          max-width: 1200px;
          border: 1px solid rgba(255, 215, 0, 0.2);
        }

        .timeline-nav-container {
          position: relative;
        }

        .timeline-progress-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .timeline-progress-fill {
          height: 100%;
          border-radius: 2px;
          position: relative;
        }

        .timeline-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          gap: 16px;
        }

        .era-nav-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(255, 215, 0, 0.1);
          border: 1px solid rgba(255, 215, 0, 0.3);
          border-radius: 12px;
          color: #ffd700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
        }

        .era-nav-btn:hover:not(:disabled) {
          background: rgba(255, 215, 0, 0.2);
          border-color: rgba(255, 215, 0, 0.5);
        }

        .era-nav-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .current-era-display {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
        }

        .current-era-display:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 215, 0, 0.3);
        }

        .era-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .era-name {
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
        }

        .era-period {
          font-size: 14px;
          color: #ffd700;
        }

        .era-progress {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
        }

        .autoplay-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.3);
          border-radius: 12px;
          color: #00d4ff;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
        }

        .autoplay-btn:hover {
          background: rgba(0, 212, 255, 0.2);
          border-color: rgba(0, 212, 255, 0.5);
        }

        .autoplay-btn.active {
          background: rgba(0, 212, 255, 0.2);
          border-color: #00d4ff;
        }

        .era-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;
        }

        .era-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
        }

        .expanded-era-menu {
          margin-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 16px;
        }

        .era-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }

        .era-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .era-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 215, 0, 0.3);
        }

        .era-card.current {
          background: rgba(255, 215, 0, 0.1);
          border-color: rgba(255, 215, 0, 0.5);
        }

        .era-color-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }

        .era-content {
          padding-top: 8px;
        }

        .era-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
        }

        .era-title {
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
        }

        .era-years {
          display: flex;
          align-items: center;
          gap: 4px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
        }

        .era-description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          line-height: 1.5;
          margin: 8px 0 12px 0;
        }

        .era-anime-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .anime-tag {
          background: rgba(255, 215, 0, 0.2);
          color: #ffd700;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .timeline-navigator {
            margin: 0 16px;
          }

          .timeline-controls {
            flex-wrap: wrap;
            gap: 12px;
          }

          .current-era-display {
            order: -1;
            width: 100%;
          }

          .era-grid {
            grid-template-columns: 1fr;
          }

          .era-nav-btn,
          .autoplay-btn {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default TimelineNavigator;