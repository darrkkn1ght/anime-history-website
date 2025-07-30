'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Tv, Zap, Globe, Film, Star } from 'lucide-react';

const ExpansionEra: React.FC = () => {
  const keyAnime = [
    {
      title: "Mobile Suit Gundam",
      year: "1979",
      impact: "Revolutionized mecha genre, realistic war themes",
      studio: "Sunrise"
    },
    {
      title: "Space Battleship Yamato",
      year: "1974",
      impact: "Space opera pioneer, emotional storytelling",
      studio: "Office Academy"
    },
    {
      title: "Lupin III",
      year: "1971",
      impact: "Adult-oriented animation, international appeal",
      studio: "TMS Entertainment"
    },
    {
      title: "Captain Harlock",
      year: "1978",
      impact: "Space pirate archetype, gothic aesthetics",
      studio: "Toei Animation"
    },
    {
      title: "Galaxy Express 999",
      year: "1978",
      impact: "Philosophical sci-fi, Leiji Matsumoto's vision",
      studio: "Toei Animation"
    },
    {
      title: "Urusei Yatsura",
      year: "1981",
      impact: "Romantic comedy template, otaku culture birth",
      studio: "Pierrot"
    }
  ];

  const milestones = [
    {
      year: "1972",
      event: "Mazinger Z debuts",
      description: "Super robot genre established",
      icon: <Rocket className="w-5 h-5" />
    },
    {
      year: "1974",
      event: "Space Battleship Yamato",
      description: "Anime gains teen/adult audience",
      icon: <Star className="w-5 h-5" />
    },
    {
      year: "1979",
      event: "Mobile Suit Gundam",
      description: "Real robot revolution begins",
      icon: <Zap className="w-5 h-5" />
    },
    {
      year: "1981",
      event: "Studio Pierrot founded",
      description: "New animation powerhouse emerges",
      icon: <Film className="w-5 h-5" />
    },
    {
      year: "1984",
      event: "Nausicaä released",
      description: "Miyazaki's environmental themes",
      icon: <Globe className="w-5 h-5" />
    },
    {
      year: "1985",
      event: "OVA format introduced",
      description: "Direct-to-video market opens",
      icon: <Tv className="w-5 h-5" />
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/ui/backgrounds/space-nebula.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/50 to-black/80" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        {/* Era Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-purple-300 font-medium">1970s - 1980s</span>
          </motion.div>
          
          <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
            The Expansion Era
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Anime reaches for the stars as science fiction themes dominate. 
            The medium matures with complex narratives, targeting older audiences 
            and establishing genres that define modern anime.
          </p>
        </motion.div>

        {/* Key Innovations */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Mecha Revolution",
              description: "From super robots to real robots, mecha anime becomes a defining genre",
              icon: <Rocket className="w-8 h-8" />,
              color: "from-red-500 to-orange-500"
            },
            {
              title: "Space Opera Boom",
              description: "Epic space adventures with complex storylines and adult themes",
              icon: <Star className="w-8 h-8" />,
              color: "from-blue-500 to-purple-500"
            },
            {
              title: "Mature Storytelling",
              description: "Anime begins targeting teen and adult audiences with sophisticated plots",
              icon: <Film className="w-8 h-8" />,
              color: "from-green-500 to-teal-500"
            }
          ].map((innovation, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm h-full">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${innovation.color} mb-4`}>
                  {innovation.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{innovation.title}</h3>
                <p className="text-gray-300">{innovation.description}</p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">Key Milestones</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`relative ${index % 2 === 0 ? 'mr-8' : 'ml-8'} max-w-md`}>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 backdrop-blur-sm">
                      <div className="flex items-center mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 mr-3">
                          {milestone.icon}
                        </div>
                        <span className="text-purple-400 font-bold text-lg">{milestone.year}</span>
                      </div>
                      <h4 className="text-white font-bold mb-2">{milestone.event}</h4>
                      <p className="text-gray-300 text-sm">{milestone.description}</p>
                    </div>
                    
                    {/* Timeline Connector */}
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 ${index % 2 === 0 ? '-right-8' : '-left-8'}`} />
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900 ${index % 2 === 0 ? '-right-10' : '-left-10'}`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Anime Showcase */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">Defining Anime</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyAnime.map((anime, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 backdrop-blur-sm h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full text-purple-300 text-sm font-medium">
                      {anime.year}
                    </span>
                    <span className="text-gray-400 text-sm">{anime.studio}</span>
                  </div>
                  
                  <h4 className="text-white font-bold text-lg mb-3">{anime.title}</h4>
                  <p className="text-gray-300 text-sm">{anime.impact}</p>
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Era Impact */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Legacy of the Expansion Era</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              The 1970s and 1980s established anime as a serious artistic medium capable of 
              complex storytelling and mature themes. Science fiction became anime's signature genre, 
              while mecha shows created a template still used today. This era proved that animation 
              could be more than children's entertainment, setting the stage for anime's global expansion.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["Mecha Genre", "Space Opera", "Adult Animation", "OVA Format", "International Appeal"].map((tag, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full text-purple-300 text-sm font-medium border border-purple-500/30"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpansionEra;