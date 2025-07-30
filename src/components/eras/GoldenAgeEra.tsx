'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Heart, Sword, Globe, Tv, Trophy, Sparkles, Zap } from 'lucide-react';

const GoldenAgeEra: React.FC = () => {
  const iconicAnime = [
    {
      title: "Dragon Ball Z",
      year: "1989-1996",
      impact: "Defined shounen battle anime formula",
      studio: "Toei Animation",
      genre: "Shounen",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Sailor Moon",
      year: "1992-1997",
      impact: "Magical girl phenomenon, global female fanbase",
      studio: "Toei Animation",
      genre: "Magical Girl",
      color: "from-pink-500 to-purple-500"
    },
    {
      title: "Neon Genesis Evangelion",
      year: "1995-1996",
      impact: "Psychological complexity, cultural phenomenon",
      studio: "Gainax",
      genre: "Mecha/Psychological",
      color: "from-purple-600 to-indigo-600"
    },
    {
      title: "Pokemon",
      year: "1997-present",
      impact: "Multimedia franchise template, global phenomenon",
      studio: "OLM",
      genre: "Adventure",
      color: "from-yellow-500 to-blue-500"
    },
    {
      title: "Cowboy Bebop",
      year: "1998-1999",
      impact: "Adult sophistication, Western appeal",
      studio: "Sunrise",
      genre: "Space Western",
      color: "from-gray-600 to-blue-600"
    },
    {
      title: "One Piece",
      year: "1999-present",
      impact: "Long-running adventure epic",
      studio: "Toei Animation",
      genre: "Shounen",
      color: "from-red-500 to-yellow-500"
    }
  ];

  const genres = [
    {
      name: "Shounen Battle",
      description: "Power progression, friendship, tournaments",
      examples: ["Dragon Ball Z", "Yu Yu Hakusho", "Rurouni Kenshin"],
      icon: <Sword className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Magical Girl",
      description: "Transformation sequences, friendship power",
      examples: ["Sailor Moon", "Card Captor Sakura", "Magic Knight Rayearth"],
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "Romantic Comedy",
      description: "School settings, relationship dynamics",
      examples: ["Ranma ½", "Tenchi Muyo!", "Love Hina"],
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-400 to-red-400"
    },
    {
      name: "Psychological Thriller",
      description: "Complex narratives, philosophical themes",
      examples: ["Evangelion", "Serial Experiments Lain", "Perfect Blue"],
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-600 to-indigo-600"
    }
  ];

  const milestones = [
    {
      year: "1988",
      event: "Akira theatrical release",
      description: "International breakthrough film",
      impact: "High"
    },
    {
      year: "1995",
      event: "Evangelion debuts",
      description: "Redefines mecha and psychological anime",
      impact: "Revolutionary"
    },
    {
      year: "1997",
      event: "Princess Mononoke",
      description: "Studio Ghibli's environmental masterpiece",
      impact: "High"
    },
    {
      year: "1998",
      event: "Toonami launches",
      description: "Anime enters Western mainstream TV",
      impact: "Global"
    },
    {
      year: "2001",
      event: "Adult Swim begins",
      description: "Late-night anime programming block",
      impact: "Cultural"
    },
    {
      year: "2002",
      event: "Spirited Away Oscar",
      description: "First anime wins Academy Award",
      impact: "Prestigious"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-orange-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/ui/backgrounds/golden-rays.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-900/40 to-black/70" />
        
        {/* Golden Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        {/* Era Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 rounded-full border border-yellow-400/30 backdrop-blur-sm mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Crown className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-yellow-300 font-semibold text-lg">1990s - 2000s</span>
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-8">
            The Golden Age
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-5xl mx-auto leading-relaxed">
            Anime reaches its creative and cultural peak with iconic series that define 
            entire genres. Global expansion begins as masterpieces capture hearts worldwide, 
            establishing anime as a dominant form of entertainment.
          </p>
        </motion.div>

        {/* Cultural Impact Stats */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {[
            { number: "200M+", label: "Global Fans", icon: <Globe className="w-8 h-8" /> },
            { number: "50+", label: "Iconic Series", icon: <Tv className="w-8 h-8" /> },
            { number: "15B+", label: "Revenue (USD)", icon: <Trophy className="w-8 h-8" /> },
            { number: "100+", label: "Countries Reached", icon: <Crown className="w-8 h-8" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border border-yellow-500/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, borderColor: "rgba(245, 158, 11, 0.4)" }}
            >
              <div className="text-yellow-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-yellow-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Genre Revolution */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-center text-white mb-12">Genre-Defining Series</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {genres.map((genre, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 backdrop-blur-sm h-full">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${genre.color} mr-4`}>
                      {genre.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-white">{genre.name}</h4>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg">{genre.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="text-yellow-400 font-semibold mb-3">Key Examples:</h5>
                    {genre.examples.map((example, i) => (
                      <div key={i} className="text-gray-200 text-sm bg-gray-800/50 px-3 py-1 rounded-lg inline-block mr-2 mb-2">
                        {example}
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Iconic Anime Showcase */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-center text-white mb-12">Legendary Series</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iconicAnime.map((anime, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm h-full relative overflow-hidden">
                  {/* Genre Color Strip */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${anime.color}`} />
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 rounded-full text-yellow-300 text-sm font-medium">
                      {anime.year}
                    </span>
                    <span className="text-gray-400 text-xs">{anime.studio}</span>
                  </div>
                  
                  <h4 className="text-white font-bold text-xl mb-2">{anime.title}</h4>
                  <div className="text-yellow-400 text-sm font-medium mb-3">{anime.genre}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{anime.impact}</p>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-500/30 transition-colors duration-300" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline of Breakthroughs */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-center text-white mb-12">Cultural Breakthroughs</h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-500 via-orange-500 to-red-500 rounded-full" />
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className={`relative ${index % 2 === 0 ? 'mr-12' : 'ml-12'} max-w-sm`}>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-900/50 to-orange-900/50 border border-yellow-500/30 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-yellow-400 font-bold text-xl">{milestone.year}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          milestone.impact === 'Revolutionary' ? 'bg-red-600/30 text-red-300' :
                          milestone.impact === 'High' ? 'bg-orange-600/30 text-orange-300' :
                          milestone.impact === 'Global' ? 'bg-blue-600/30 text-blue-300' :
                          milestone.impact === 'Cultural' ? 'bg-purple-600/30 text-purple-300' :
                          'bg-yellow-600/30 text-yellow-300'
                        }`}>
                          {milestone.impact}
                        </span>
                      </div>
                      <h4 className="text-white font-bold text-lg mb-2">{milestone.event}</h4>
                      <p className="text-gray-300 text-sm">{milestone.description}</p>
                    </div>
                    
                    {/* Timeline Connector */}
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-12 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 ${index % 2 === 0 ? '-right-12' : '-left-12'}`} />
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-yellow-500 rounded-full border-4 border-gray-900 ${index % 2 === 0 ? '-right-15' : '-left-15'} flex items-center justify-center`}>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Global Impact Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center text-white mb-12">Global Cultural Phenomenon</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Western Breakthrough",
                  description: "Toonami and Adult Swim introduce anime to mainstream American television, creating a new generation of fans.",
                  achievements: ["Cartoon Network partnership", "Prime time slots", "Dubbed series success"],
                  icon: <Globe className="w-8 h-8" />
                },
                {
                  title: "Merchandise Empire",
                  description: "Anime-based products generate billions in revenue, from action figures to video games.",
                  achievements: ["Multi-billion market", "Cross-media franchises", "Collector culture"],
                  icon: <Trophy className="w-8 h-8" />
                },
                {
                  title: "Cultural Legitimacy",
                  description: "Academic recognition and critical acclaim establish anime as serious art form worthy of study.",
                  achievements: ["Film festival recognition", "University courses", "Critical analysis"],
                  icon: <Crown className="w-8 h-8" />
                }
              ].map((impact, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/20 backdrop-blur-sm h-full">
                    <div className="text-yellow-400 mb-6 flex justify-center">
                      {impact.icon}
                    </div>
                    
                    <h4 className="text-2xl font-bold text-white mb-4 text-center">{impact.title}</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">{impact.description}</p>
                    
                    <div className="space-y-2">
                      {impact.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                          <span className="text-gray-200">{achievement}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Era Legacy */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-yellow-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <motion.div
                className="inline-block p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Crown className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-3xl font-bold text-white mb-6">The Golden Age Legacy</h3>
              
              <p className="text-gray-200 text-lg leading-relaxed mb-8">
                The 1990s and 2000s represent anime&apos;s creative zenith and global breakthrough. 
                Iconic series established lasting formulas, unforgettable characters captured hearts worldwide, 
                and anime transformed from niche interest to mainstream cultural force. The foundations laid 
                during this golden era continue to influence storytelling, character design, and fan culture today.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Global Phenomenon", 
                  "Genre Templates", 
                  "Cultural Impact", 
                  "Mainstream Recognition", 
                  "Lasting Franchises",
                  "International Fanbase"
                ].map((legacy, index) => (
                  <motion.span
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 rounded-full text-yellow-200 font-medium border border-yellow-500/40 backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(245, 158, 11, 0.2)"
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {legacy}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoldenAgeEra;