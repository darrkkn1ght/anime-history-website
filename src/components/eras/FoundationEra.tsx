'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Tv, Star, Zap, Rocket, Palette, Trophy, Heart, Play } from 'lucide-react';

interface FoundationMilestone {
  year: number;
  title: string;
  description: string;
  impact: string;
  creator?: string;
  studio?: string;
  icon: React.ReactNode;
  color: string;
}

interface KeyFigure {
  name: string;
  role: string;
  contribution: string;
  image?: string;
}

const FoundationEra: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  // Era data
  const milestones: FoundationMilestone[] = [
    {
      year: 1951,
      title: "The Tale of the White Serpent",
      description: "Toei Animation produces Japan's first full-color animated feature film, establishing the studio system and proving anime's commercial viability.",
      impact: "Birth of the modern anime industry",
      studio: "Toei Animation",
      icon: <Star className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-500"
    },
    {
      year: 1961,
      title: "Alakazam the Great",
      description: "First anime film to receive international distribution, introducing Japanese animation to Western audiences and establishing global appeal.",
      impact: "International recognition of anime",
      studio: "Toei Animation",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500"
    },
    {
      year: 1963,
      title: "Astro Boy TV Series",
      description: "Osamu Tezuka's groundbreaking TV series establishes the template for modern anime with limited animation techniques and compelling storytelling.",
      impact: "Template for modern anime production",
      creator: "Osamu Tezuka",
      studio: "Mushi Production",
      icon: <Tv className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500"
    },
    {
      year: 1965,
      title: "Kimba the White Lion",
      description: "First color anime TV series, pushing technical boundaries and establishing anime's visual identity with vibrant colors and expressive character designs.",
      impact: "Evolution of anime's visual language",
      creator: "Osamu Tezuka",
      studio: "Mushi Production",
      icon: <Palette className="w-6 h-6" />,
      color: "from-orange-400 to-red-500"
    },
    {
      year: 1968,
      title: "Horus: Prince of the Sun",
      description: "Isao Takahata and Hayao Miyazaki collaborate on this influential film, establishing narrative depth and artistic excellence that would define future masterpieces.",
      impact: "Artistic maturation of anime",
      creator: "Isao Takahata",
      studio: "Toei Animation",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-yellow-400 to-amber-500"
    }
  ];

  const keyFigures: KeyFigure[] = [
    {
      name: "Osamu Tezuka",
      role: "The God of Manga",
      contribution: "Revolutionized anime production with limited animation techniques and established the modern anime industry structure."
    },
    {
      name: "Hayao Miyazaki",
      role: "Master Animator",
      contribution: "Began his legendary career during this era, contributing to the artistic evolution of anime storytelling."
    },
    {
      name: "Isao Takahata",
      role: "Visionary Director",
      contribution: "Pioneered realistic drama in anime and pushed the medium toward mature, sophisticated narratives."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const figureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950/50 to-purple-950/40"
    >
      {/* Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        {/* Geometric Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M50%2050L25%2025h50L50%2050zM50%2050L75%2075H25L50%2050z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        
        {/* Color Gradients */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </motion.div>

      {/* TV Scan Lines Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse" 
             style={{
               backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)',
               animation: 'scan 2s linear infinite'
             }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        {/* Era Header */}
        <motion.div 
          style={{ y: titleY }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-500/20 border border-cyan-400/30 backdrop-blur-sm mb-6"
          >
            <Tv className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-200 font-medium">1950s - 1960s</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-200 via-blue-300 to-purple-400 bg-clip-text text-transparent"
            style={{ fontFamily: 'var(--font-noto-sans-jp)' }}
          >
            基盤
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-3xl md:text-4xl font-light text-cyan-100 mb-4"
          >
            The Birth of Modern Anime
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg text-cyan-200/80 max-w-3xl mx-auto leading-relaxed"
          >
            The television age arrives, and with it, the revolutionary techniques and storytelling methods 
            that would define anime for generations. Watch as visionary creators establish the foundations 
            of an industry.
          </motion.p>
        </motion.div>

        {/* Timeline Content */}
        <motion.div
          style={{ y: contentY }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12 mb-20"
        >
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              variants={itemVariants}
              className="group relative"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Year and Icon */}
                <div className="flex-shrink-0 lg:w-64">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                      <div className="text-white">
                        {milestone.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-cyan-100">{milestone.year}</div>
                      {milestone.studio && (
                        <div className="text-sm text-cyan-300">{milestone.studio}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-blue-950/40 border border-cyan-400/20 backdrop-blur-sm group-hover:border-cyan-400/40 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-bl-full" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-tr-full" />
                    
                    <div className="relative z-10">
                      <h4 className="text-2xl md:text-3xl font-bold text-cyan-100 mb-4 group-hover:text-cyan-200 transition-colors duration-300">
                        {milestone.title}
                      </h4>
                      
                      {milestone.creator && (
                        <div className="flex items-center gap-2 mb-4">
                          <Heart className="w-4 h-4 text-cyan-400" />
                          <span className="text-cyan-300 font-medium">Created by {milestone.creator}</span>
                        </div>
                      )}
                      
                      <p className="text-cyan-200/90 text-lg leading-relaxed mb-6">
                        {milestone.description}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-600/20 border border-cyan-400/30">
                        <Zap className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-cyan-200 font-medium">{milestone.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < milestones.length - 1 && (
                <div className="hidden lg:block absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-cyan-400/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Key Figures Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-16"
        >
          <h4 className="text-3xl font-bold text-center text-cyan-100 mb-12">Visionary Creators</h4>
          
          <div className="grid md:grid-cols-3 gap-8">
            {keyFigures.map((figure, index) => (
              <motion.div
                key={figure.name}
                variants={figureVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 1 + index * 0.2 }}
                className="group relative"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-blue-950/60 border border-cyan-400/20 backdrop-blur-sm group-hover:border-cyan-400/40 transition-all duration-500 group-hover:scale-105">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{figure.name.charAt(0)}</span>
                    </div>
                    
                    <h5 className="text-xl font-bold text-cyan-100 mb-2">{figure.name}</h5>
                    <p className="text-cyan-300 text-sm font-medium mb-3">{figure.role}</p>
                    <p className="text-cyan-200/80 text-sm leading-relaxed">{figure.contribution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Era Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-slate-800/60 via-blue-950/40 to-purple-950/60 border border-cyan-400/20 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Play className="w-6 h-6 text-cyan-400" />
              <h4 className="text-2xl font-bold text-cyan-100">The Television Revolution</h4>
              <Play className="w-6 h-6 text-cyan-400 rotate-180" />
            </div>
            
            <p className="text-cyan-200/90 text-lg leading-relaxed mb-6">
              The 1950s and 1960s marked anime&apos;s transformation from experimental art form to structured industry. 
              Television broadcasting created new opportunities and constraints, leading to the development of 
              limited animation techniques that would become anime&apos;s signature style.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="p-4 rounded-xl bg-cyan-900/20 border border-cyan-400/20">
                <h5 className="font-bold text-cyan-100 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-cyan-400" />
                  Technical Innovations
                </h5>
                <ul className="text-cyan-200/80 text-sm space-y-1">
                  <li>• Limited animation techniques</li>
                  <li>• Color television adaptation</li>
                  <li>• Weekly production schedules</li>
                  <li>• Character merchandising</li>
                </ul>
              </div>
              
              <div className="p-4 rounded-xl bg-purple-900/20 border border-purple-400/20">
                <h5 className="font-bold text-purple-100 mb-2 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-purple-400" />
                  Cultural Impact
                </h5>
                <ul className="text-purple-200/80 text-sm space-y-1">
                  <li>• International distribution</li>
                  <li>• Studio system establishment</li>
                  <li>• Narrative sophistication</li>
                  <li>• Artistic recognition</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-400/20">
              <p className="text-cyan-100 text-center font-medium">
                &ldquo;This era established the creative and commercial foundations that would support anime&apos;s 
                evolution into a global cultural phenomenon, setting the stage for the explosive growth 
                of the following decades.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Transition Effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent" />
      
      {/* Custom Styles for TV Scan Effect */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </section>
  );
};

export default FoundationEra;