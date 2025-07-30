'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X, Play, Pause, RotateCcw } from 'lucide-react';
import Image from 'next/image';
import './ImageCarousel.css';

interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  year?: number;
  studio?: string;
  category?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  interval?: number;
  showThumbnails?: boolean;
  showMetadata?: boolean;
  className?: string;
  onImageChange?: (index: number) => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoPlay = false,
  interval = 5000,
  showThumbnails = true,
  showMetadata = true,
  className = '',
  onImageChange
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      setIsPlaying(false); // Pause when entering fullscreen
    }
  }, [isFullscreen]);

  const resetCarousel = useCallback(() => {
    setCurrentIndex(0);
    setDirection(1);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && !isFullscreen) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, interval);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isFullscreen, interval, handleNext]);

  // Notify parent of image changes
  useEffect(() => {
    onImageChange?.(currentIndex);
  }, [currentIndex, onImageChange]);

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setIsFullscreen(false);
      if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handlePrevious, handleNext, togglePlayPause]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const currentImage = images[currentIndex];

  const CarouselContent = () => (
    <div className={`image-carousel ${isFullscreen ? 'fullscreen' : ''} ${className}`} ref={carouselRef}>
      {/* Main Image Display */}
      <div className="carousel-main">
        <div 
          className="image-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  handleNext();
                } else if (swipe > swipeConfidenceThreshold) {
                  handlePrevious();
                }
              }}
              className="image-slide"
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                className="carousel-image"
                draggable={false}
                width={800}
                height={600}
                priority
              />
              
              {/* Image Overlay with Metadata */}
              {showMetadata && (currentImage.title || currentImage.description) && (
                <motion.div 
                  className="image-overlay"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="image-metadata">
                    {currentImage.title && (
                      <h3 className="image-title">{currentImage.title}</h3>
                    )}
                    {currentImage.description && (
                      <p className="image-description">{currentImage.description}</p>
                    )}
                    <div className="image-details">
                      {currentImage.year && (
                        <span className="detail-tag">{currentImage.year}</span>
                      )}
                      {currentImage.studio && (
                        <span className="detail-tag">{currentImage.studio}</span>
                      )}
                      {currentImage.category && (
                        <span className="detail-tag">{currentImage.category}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            className="nav-arrow prev"
            onClick={handlePrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            className="nav-arrow next"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Control Bar */}
        <div className="control-bar">
          <div className="control-group">
            <motion.button
              className="control-btn"
              onClick={togglePlayPause}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </motion.button>

            <motion.button
              className="control-btn"
              onClick={resetCarousel}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RotateCcw size={18} />
            </motion.button>

            <div className="slide-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          <motion.button
            className="control-btn fullscreen-btn"
            onClick={toggleFullscreen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isFullscreen ? <X size={18} /> : <Maximize2 size={18} />}
          </motion.button>
        </div>

        {/* Progress Indicators */}
        <div className="progress-indicators">
          {images.map((_, index) => (
            <motion.button
              key={index}
              className={`progress-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Strip */}
      {showThumbnails && (
        <motion.div 
          className="thumbnail-strip"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="thumbnail-container">
            {images.map((image, index) => (
              <motion.button
                key={image.id}
                className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  width={100}
                  height={75}
                  className="thumbnail-image"
                />
                <div className="thumbnail-overlay">
                  <span className="thumbnail-title">{image.title || image.alt}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

    </div>
  );

  // Render fullscreen or normal view
  return isFullscreen ? (
    <div className="fullscreen-overlay">
      <CarouselContent />
    </div>
  ) : (
    <CarouselContent />
  );
};

export default ImageCarousel;