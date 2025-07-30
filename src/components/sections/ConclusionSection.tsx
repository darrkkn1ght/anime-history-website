'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { 
  Heart, 
  Star, 
  Globe, 
  Sparkles, 
  ArrowUp, 
  Share2, 
  BookOpen, 
  Film,
  Palette,
  Music
} from 'lucide-react';
import FadeInView from '@/components/animations/FadeInView';
import { ParallaxContainer } from '@/components/animations/ParallaxContainer';
import { initializeGSAP } from '@/utils/gsap-init';

interface ConclusionSectionProps {
  className?: string;
}

const legacyHighlights = [
  {
    icon: Film,
    title: "Cinematic Revolution",
    description: "From hand-drawn cells to digital masterpieces, anime redefined visual storytelling.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Heart,
    title: "Cultural Bridge",
    description: "Connected hearts across nations, sharing Japanese values with the world.",
    color: "from-pink-500 to-purple-500"
  },
  {
    icon: Palette,
    title: "Artistic Innovation",
    description: "Pushed creative boundaries with unique art styles and animation techniques.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Globe,
    title: "Global Language",
    description: "Created a universal form of entertainment transcending language barriers.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Music,
    title: "Musical Legacy",
    description: "Iconic soundtracks and opening themes that became cultural phenomena.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: BookOpen,
    title: "Narrative Depth",
    description: "Explored complex themes and mature storytelling in animated form.",
    color: "from-cyan-500 to-teal-500"
  }
];

const timelineHighlights = [
  "1900s: The birth of Japanese animation",
  "1960s: Television anime revolution",
  "1980s: International breakthrough",
  "1990s: Golden age of creativity",
  "2000s: Digital transformation",
  "2010s: Streaming era begins",
  "2020s: Global cultural phenomenon"
];

const ConclusionSection: React.FC<ConclusionSectionProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const legacyRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const isInView = useInView(sectionRef, { 
    margin: "-10% 0px -10% 0px" 
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const starsRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);



  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shareContent = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Anime History: A Cinematic Journey',
        text: 'Explore the complete history of anime from 1900s to 2025',
        url: window.location.href
      });
    }
  };

  useEffect(() => {
    // Initialize GSAP
    initializeGSAP();
    
    const timeline = timelineRef.current;
    const legacy = legacyRef.current;

    if (!timeline || !legacy) return;

    // Timeline animation
    gsap.fromTo(
      timeline.children,
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timeline,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Legacy cards animation
    gsap.fromTo(
      legacy.children,
      {
        y: 80,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: legacy,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Floating animation for stars
    gsap.to(".floating-star", {
      y: "random(-20, 20)",
      x: "random(-15, 15)",
      rotation: "random(-180, 180)",
      duration: "random(3, 6)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 2,
        from: "random"
      }
    });

  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className={`relative min-h-screen py-24 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Cinematic Background */}
      <ParallaxContainer>
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/30 to-black"
          style={{ y: backgroundY }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.1),transparent_70%)]" />
      </ParallaxContainer>

      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="floating-star absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: starsRotate
            }}
          >
            <Sparkles 
              className="w-2 h-2 text-white/20" 
              style={{ 
                filter: `hue-rotate(${Math.random() * 360}deg)` 
              }} 
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Opening Quote */}
        <FadeInView>
          <motion.div
            className="text-center mb-20"
            style={{ scale: textScale }}
          >
            <motion.div
              className="inline-block mb-8"
              initial={{ rotate: -5, scale: 0 }}
              animate={isInView ? { rotate: 0, scale: 1 } : { rotate: -5, scale: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.4 }}
            >
              <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white via-yellow-200 to-purple-200 bg-clip-text text-transparent mb-8 leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              A Legacy
              <br />
              <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                Eternal
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              &quot;From the first hand-drawn frames to today&apos;s digital masterpieces, 
              anime has woven itself into the fabric of global culture, 
              creating memories, inspiring dreams, and connecting souls across every continent.&quot;
            </motion.p>
          </motion.div>
        </FadeInView>

        {/* Timeline Recap */}
        <motion.div
          ref={timelineRef}
          className="mb-20 backdrop-blur-lg bg-black/20 rounded-3xl border border-white/10 p-8 md:p-12"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Our Journey Through Time
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelineHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0" />
                <span className="text-white/80 text-sm md:text-base">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Legacy Highlights */}
        <motion.div
          ref={legacyRef}
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            The Lasting Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legacyHighlights.map((item, index) => (
              <motion.div
                key={index}
                className="group relative p-6 rounded-2xl backdrop-blur-lg bg-black/20 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </h4>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Message */}
        <FadeInView>
          <motion.div
            className="text-center mb-16"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          >
            <div className="max-w-4xl mx-auto backdrop-blur-lg bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl border border-white/10 p-8 md:p-12">
              <Heart className="w-12 h-12 text-pink-400 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                As we stand at the threshold of anime&apos;s next chapter, we carry with us 
                the magic of every frame, the emotion of every story, and the dreams 
                of every creator who dared to imagine worlds beyond reality.
              </p>
              <p className="text-base md:text-lg text-white/70">
                The journey continues, and the best is yet to come.
              </p>
            </div>
          </motion.div>
        </FadeInView>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            onClick={shareContent}
            className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 className="w-5 h-5" />
            <span>Share This Journey</span>
          </motion.button>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-3 px-8 py-4 backdrop-blur-lg bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
            <span>Return to Beginning</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </motion.section>
  );
};

export default ConclusionSection;