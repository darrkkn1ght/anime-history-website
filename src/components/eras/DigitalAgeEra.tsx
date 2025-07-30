'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, TrendingUp, Globe, Smartphone, Monitor, Users } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import FadeInView from '../animations/FadeInView';
import { ParallaxContainer } from '../animations/ParallaxContainer';

const DigitalAgeEra: React.FC = () => {
  const keyAnime = [
    {
      title: "Attack on Titan",
      year: "2013",
      studio: "Mappa/WIT Studio",
      description: "Revolutionary storytelling that redefined modern anime narratives",
      impact: "Global cultural phenomenon with 100M+ manga sales",
      color: "from-red-600 to-orange-500"
    },
    {
      title: "Demon Slayer",
      year: "2019",
      studio: "Ufotable",
      description: "Groundbreaking animation techniques and visual excellence",
      impact: "Highest-grossing anime film of all time",
      color: "from-green-600 to-emerald-500"
    },
    {
      title: "Your Name",
      year: "2016",
      studio: "CoMix Wave Films",
      description: "Makoto Shinkai's masterpiece bridging traditional and digital",
      impact: "4th highest-grossing anime film worldwide",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "One Punch Man",
      year: "2015",
      studio: "Madhouse",
      description: "Subversive superhero comedy with incredible animation",
      impact: "Viral meme culture and international recognition",
      color: "from-yellow-600 to-amber-500"
    }
  ];

  const digitalRevolution = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Simulation Technology",
      description: "CGI integration reached photorealistic levels with shows like Ghost in the Shell: SAC_2045"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Consumption",
      description: "Vertical video formats and mobile-first content creation emerged"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Streaming Platforms",
      description: "Netflix, Crunchyroll, and Funimation revolutionized distribution"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media Impact",
      description: "TikTok, Twitter, and YouTube created new fan engagement models"
    }
  ];

  const streamingStats = [
    { platform: "Crunchyroll", subscribers: "5M+", launched: "2006" },
    { platform: "Netflix Anime", originals: "100+", investment: "$500M+" },
    { platform: "Funimation", episodes: "13,000+", languages: "10+" },
    { platform: "Hulu", anime_titles: "800+", viewers: "43M+" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Digital Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/ui/backgrounds/digital-grid.svg')] bg-repeat animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <ParallaxContainer className="relative z-10">
        <div className="container mx-auto px-6 py-24">
          {/* Era Header */}
          <FadeInView>
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-blue-600/20 backdrop-blur-md rounded-full border border-blue-400/30">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                <span className="text-blue-300 font-medium">2010s - 2019</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Digital Age
              </h2>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                The streaming revolution and digital innovation transformed anime into a 
                <span className="text-blue-400 font-semibold"> global entertainment powerhouse</span>, 
                reaching unprecedented audiences worldwide.
              </p>
            </motion.div>
          </FadeInView>

          {/* Key Statistics */}
          <FadeInView delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {[
                { value: "$4.3B", label: "Market Value 2019", icon: "💰" },
                { value: "100M+", label: "Streaming Subscribers", icon: "📺" },
                { value: "50+", label: "Countries", icon: "🌍" },
                { value: "1000+", label: "New Titles", icon: "🎬" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700/50"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeInView>

          {/* Flagship Anime */}
          <FadeInView delay={0.3}>
            <div className="mb-20">
              <h3 className="text-4xl font-bold text-center mb-12 text-slate-100">
                Era-Defining <span className="text-blue-400">Masterpieces</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {keyAnime.map((anime, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="group relative overflow-hidden bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500">
                      <div className={`absolute inset-0 bg-gradient-to-r ${anime.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      <div className="relative p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-2xl font-bold text-slate-100 mb-2">{anime.title}</h4>
                            <div className="flex items-center gap-4 text-sm text-slate-400">
                              <span>{anime.year}</span>
                              <span>•</span>
                              <span>{anime.studio}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <p className="text-slate-300 mb-4 leading-relaxed">{anime.description}</p>
                        
                        <div className="bg-slate-700/30 rounded-lg p-4">
                          <div className="text-xs text-blue-400 font-medium mb-1">CULTURAL IMPACT</div>
                          <div className="text-sm text-slate-300">{anime.impact}</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInView>

          {/* Digital Revolution */}
          <FadeInView delay={0.4}>
            <div className="mb-20">
              <h3 className="text-4xl font-bold text-center mb-12 text-slate-100">
                The <span className="text-purple-400">Digital Revolution</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {digitalRevolution.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group text-center p-8 bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500"
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6 text-purple-400 group-hover:text-purple-300 transition-colors flex justify-center">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-slate-100 mb-4">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInView>

          {/* Streaming Platform Stats */}
          <FadeInView delay={0.5}>
            <div className="mb-20">
              <h3 className="text-4xl font-bold text-center mb-12 text-slate-100">
                Streaming <span className="text-green-400">Ecosystem</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {streamingStats.map((platform, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-500"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-xl font-bold text-green-400 mb-4">{platform.platform}</h4>
                    <div className="space-y-3">
                      {Object.entries(platform).slice(1).map(([key, value], idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-sm text-slate-400 capitalize">{key.replace('_', ' ')}</span>
                          <span className="text-slate-200 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInView>

          {/* Era Legacy */}
          <FadeInView delay={0.6}>
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                className="bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-3xl p-12 border border-slate-700/50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold mb-6 text-slate-100">Legacy of Innovation</h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  The 2010s established anime as a dominant force in global entertainment, 
                  with streaming platforms democratizing access and digital technologies 
                  enabling unprecedented creative possibilities. This decade laid the 
                  foundation for anime&apos;s current golden age.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {['Global Recognition', 'Technological Innovation', 'Cultural Impact', 'Commercial Success'].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-6 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </FadeInView>
        </div>
      </ParallaxContainer>
    </section>
  );
};

export default DigitalAgeEra;