'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Film, Camera, Scroll, Sparkles, Clock, Users } from 'lucide-react';

interface OriginsMilestone {
  year: number;
  title: string;
  description: string;
  significance: string;
  creator?: string;
  icon: React.ReactNode;
}

const OriginsEra: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // Era data
  const milestones: OriginsMilestone[] = [
    {
      year: 1906,
      title: "Humorous Phases of Funny Faces",
      description: "J. Stuart Blackton creates the first animated film using stop-motion photography, pioneering the art of moving drawings.",
      significance: "Birth of animation as an art form",
      creator: "J. Stuart Blackton",
      icon: <Camera className="w-6 h-6" />
    },
    {
      year: 1917,
      title: "The Sinking of the Lusitania",
      description: "Winsor McCay produces the first serious animated documentary, demonstrating animation's potential beyond entertainment.",
      significance: "Animation as a storytelling medium",
      creator: "Winsor McCay",
      icon: <Film className="w-6 h-6" />
    },
    {
      year: 1920,
      title: "Namakura Gatana",
      description: "Jun'ichi Kōuchi creates Japan's first professional animated film, marking the birth of anime as we know it today.",
      significance: "Birth of Japanese animation industry",
      creator: "Jun'ichi Kōuchi",
      icon: <Scroll className="w-6 h-6" />
    },
    {
      year: 1928,
      title: "Steamboat Willie",
      description: "Disney's Mickey Mouse debuts with synchronized sound, revolutionizing animation and establishing global standards.",
      significance: "Animation meets sound technology",
      creator: "Walt Disney",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-amber-950/20 via-stone-900/40 to-amber-900/30"
    >
      {/* Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-600/5 via-transparent to-stone-800/10" />
      </motion.div>

      {/* Film Grain Overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noiseFilter)%22%20opacity%3D%220.4%22/%3E%3C/svg%3E')] animate-pulse" />

      <div className="relative z-10 container mx-auto px-6 py-24">
        {/* Era Header */}
        <motion.div 
          style={{ y: titleY }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-600/20 to-yellow-500/20 border border-amber-400/30 backdrop-blur-sm mb-6"
          >
            <Clock className="w-5 h-5 text-amber-400" />
            <span className="text-amber-200 font-medium">1900s - 1930s</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent"
            style={{ fontFamily: 'var(--font-noto-sans-jp)' }}
          >
            起源
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-3xl md:text-4xl font-light text-amber-100 mb-4"
          >
            The Dawn of Animation
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg text-amber-200/80 max-w-3xl mx-auto leading-relaxed"
          >
            From silent magic lantern shows to the first moving drawings, witness the birth of an art form 
            that would captivate the world and lay the foundation for modern anime.
          </motion.p>
        </motion.div>

        {/* Timeline Content */}
        <motion.div
          style={{ y: contentY }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:gap-12"
        >
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              variants={itemVariants}
              className="group relative"
            >
              {/* Timeline Connector */}
              {index < milestones.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-amber-400/50 to-transparent hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Year Badge */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center shadow-lg group-hover:shadow-amber-500/25 transition-all duration-500">
                      {milestone.icon}
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-amber-900/80 backdrop-blur-sm rounded-full border border-amber-400/30">
                      <span className="text-sm font-bold text-amber-200">{milestone.year}</span>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1">
                  <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-stone-900/60 to-amber-950/40 border border-amber-400/20 backdrop-blur-sm group-hover:border-amber-400/40 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-amber-500/10">
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-bl-full" />
                    
                    <div className="relative z-10">
                      <h4 className="text-2xl md:text-3xl font-bold text-amber-100 mb-3 group-hover:text-amber-200 transition-colors duration-300">
                        {milestone.title}
                      </h4>
                      
                      {milestone.creator && (
                        <div className="flex items-center gap-2 mb-4">
                          <Users className="w-4 h-4 text-amber-400" />
                          <span className="text-amber-300 font-medium">{milestone.creator}</span>
                        </div>
                      )}
                      
                      <p className="text-amber-200/90 text-lg leading-relaxed mb-4">
                        {milestone.description}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600/20 border border-amber-400/30">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span className="text-sm text-amber-200 font-medium">{milestone.significance}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Era Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-amber-950/40 via-stone-900/60 to-amber-950/40 border border-amber-400/20 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-amber-100 mb-4">The Foundation Era</h4>
            <p className="text-amber-200/80 text-lg leading-relaxed">
              These pioneering decades established the fundamental techniques and artistic vision that would 
              evolve into the rich tradition of Japanese animation. From hand-drawn cells to stop-motion 
              photography, early creators laid the groundwork for an industry that would eventually 
              captivate audiences worldwide.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Transition Effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-900 to-transparent" />
    </section>
  );
};

export default OriginsEra;