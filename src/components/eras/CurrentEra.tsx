'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Globe2, 
  Sparkles, 
  Cpu, 
  Users, 
  DollarSign, 
  Award,
  Play,
  ExternalLink
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import FadeInView from '../animations/FadeInView';
import { ParallaxContainer } from '../animations/ParallaxContainer';

const CurrentEra: React.FC = () => {
  const currentHits = [
    {
      title: "Jujutsu Kaisen",
      year: "2020",
      studio: "Mappa",
      description: "Dark supernatural series with cutting-edge animation and complex characters",
      achievement: "Over 80M manga copies sold worldwide",
      status: "ongoing",
      color: "from-purple-600 to-indigo-600"
    },
    {
      title: "Chainsaw Man",
      year: "2022", 
      studio: "Mappa",
      description: "Genre-defying horror-action with cinematic animation quality",
      achievement: "18M manga copies, viral TikTok phenomenon",
      status: "season-2",
      color: "from-red-600 to-orange-600"
    },
    {
      title: "Spy x Family",
      year: "2022",
      studio: "WIT Studio/CloverWorks", 
      description: "Wholesome family comedy that conquered global audiences",
      achievement: "30M+ manga copies, universal appeal",
      status: "ongoing",
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Dandadan",
      year: "2024",
      studio: "Science SARU",
      description: "Supernatural comedy blending genres with unique visual style",
      achievement: "Fastest-growing new manga series",
      status: "new",
      color: "from-yellow-600 to-amber-600"
    }
  ];

  const industryStats = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: "$31.12B",
      label: "Global Market 2025",
      growth: "+15.2% YoY",
      description: "Unprecedented market expansion"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "1.2B+",
      label: "Global Fans",
      growth: "+200M since 2020",
      description: "Massive fanbase growth"
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      value: "195",
      label: "Countries",
      growth: "Universal reach",
      description: "Available worldwide"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      value: "500+",
      label: "New Titles Annually",
      growth: "+67% from 2019",
      description: "Content explosion"
    }
  ];

  const innovations = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Assisted Animation",
      description: "Machine learning enhances in-between frames and color correction",
      examples: ["Automated lip-sync", "Motion capture integration", "Real-time rendering"]
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Virtual Production",
      description: "Real-time 3D environments and virtual sets revolutionize production",
      examples: ["LED volume stages", "Unreal Engine integration", "Motion capture studios"]
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Simultaneous Global Release",
      description: "Day-and-date worldwide streaming eliminates regional delays",
      examples: ["24-hour translation", "Multi-language production", "Global marketing"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Interactive Content",
      description: "VR experiences, mobile games, and transmedia storytelling",
      examples: ["VR anime experiences", "Interactive episodes", "Social viewing features"]
    }
  ];

  const platformEvolution = [
    {
      platform: "Netflix",
      investment: "$1B+",
      originals: "200+",
      innovation: "Interactive anime, live-action adaptations"
    },
    {
      platform: "Crunchyroll",
      subscribers: "15M+",
      content: "50,000+ episodes",
      innovation: "Community features, manga integration"
    },
    {
      platform: "Disney+",
      focus: "Family-friendly",
      growth: "300% anime viewership",
      innovation: "Pixar-anime collaborations"
    },
    {
      platform: "Amazon Prime",
      exclusives: "50+ titles",
      technology: "4K HDR standard",
      innovation: "AI-powered recommendations"
    }
  ];

  const futuretrends = [
    "AI-Generated Animation",
    "Blockchain & NFT Integration", 
    "Metaverse Experiences",
    "Real-time Ray Tracing",
    "Neural Network Storytelling",
    "Holographic Displays"
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Futuristic Animated Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[url('/images/ui/backgrounds/neon-grid.svg')] bg-repeat animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <ParallaxContainer className="relative z-10">
        <div className="container mx-auto px-6 py-24">
          {/* Era Header */}
          <FadeInView>
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-6 px-8 py-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-md rounded-full border border-cyan-400/30">
                <Zap className="w-6 h-6 text-cyan-400" />
                <span className="text-cyan-300 font-medium text-lg">2020s - 2025</span>
              </div>
              
              <h2 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                The Golden Age
              </h2>
              
              <p className="text-xl md:text-3xl text-slate-200 max-w-5xl mx-auto leading-relaxed mb-8">
                Anime reaches its absolute peak as a 
                <span className="text-cyan-400 font-bold"> $31+ billion global industry</span>, 
                with technological innovation and cultural dominance reshaping entertainment forever.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {['Record Breaking', 'Global Phenomenon', 'Tech Innovation', 'Cultural Impact'].map((tag, index) => (
                  <motion.span 
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 text-cyan-300 rounded-full font-semibold border border-cyan-500/30 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </FadeInView>

          {/* Industry Statistics */}
          <FadeInView delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              {industryStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-700"
                  whileHover={{ scale: 1.05, y: -10 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-black text-slate-100 mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold text-slate-300 mb-2">{stat.label}</div>
                    <div className="text-sm text-green-400 font-medium mb-3">{stat.growth}</div>
                    <div className="text-sm text-slate-400">{stat.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeInView>

          {/* Current Masterpieces */}
          <FadeInView delay={0.3}>
            <div className="mb-24">
              <h3 className="text-5xl font-bold text-center mb-16 text-slate-100">
                Current <span className="text-purple-400">Masterpieces</span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {currentHits.map((anime, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <Card className="group relative overflow-hidden bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-md border border-slate-700/50 hover:border-purple-500/50 transition-all duration-700 h-full">
                      <div className={`absolute inset-0 bg-gradient-to-r ${anime.color} opacity-0 group-hover:opacity-15 transition-opacity duration-700`} />
                      
                      <div className="relative p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <h4 className="text-3xl font-bold text-slate-100">{anime.title}</h4>
                              <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                                anime.status === 'new' ? 'bg-green-600 text-green-100' :
                                anime.status === 'ongoing' ? 'bg-blue-600 text-blue-100' :
                                'bg-purple-600 text-purple-100'
                              }`}>
                                {anime.status === 'new' ? 'NEW' : 
                                 anime.status === 'ongoing' ? 'ONGOING' : 'S2'}
                              </div>
                            </div>
                            <div className="flex items-center gap-4 text-slate-400 mb-4">
                              <span className="font-medium">{anime.year}</span>
                              <span>•</span>
                              <span>{anime.studio}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="w-5 h-5" />
                          </Button>
                        </div>
                        
                        <p className="text-slate-300 mb-6 leading-relaxed text-lg">{anime.description}</p>
                        
                        <div className="bg-gradient-to-r from-slate-700/40 to-slate-800/40 rounded-2xl p-6 backdrop-blur-sm">
                          <div className="text-sm text-cyan-400 font-bold mb-2">ACHIEVEMENT</div>
                          <div className="text-slate-200 font-semibold">{anime.achievement}</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInView>

          {/* Technological Innovations */}
          <FadeInView delay={0.4}>
            <div className="mb-24">
              <h3 className="text-5xl font-bold text-center mb-16 text-slate-100">
                Tech <span className="text-cyan-400">Innovations</span>
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {innovations.map((innovation, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-700"
                    whileHover={{ scale: 1.02, y: -5 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-cyan-600/20 rounded-2xl text-cyan-400">
                        {innovation.icon}
                      </div>
                      <h4 className="text-2xl font-bold text-slate-100">{innovation.title}</h4>
                    </div>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed text-lg">{innovation.description}</p>
                    
                    <div className="space-y-2">
                      {innovation.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                          <span className="text-slate-400">{example}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInView>

          {/* Platform Evolution */}
          <FadeInView delay={0.5}>
            <div className="mb-24">
              <h3 className="text-5xl font-bold text-center mb-16 text-slate-100">
                Platform <span className="text-green-400">Evolution</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {platformEvolution.map((platform, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-500"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h4 className="text-xl font-bold text-green-400 mb-4">{platform.platform}</h4>
                    <div className="space-y-3 mb-4">
                      {Object.entries(platform).slice(1, -1).map(([key, value], idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-sm text-slate-400 capitalize">{key}</span>
                          <span className="text-slate-200 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-3 border-t border-slate-700/50">
                      <div className="text-xs text-green-400 font-medium mb-1">INNOVATION</div>
                      <div className="text-sm text-slate-300">{platform.innovation}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInView>

          {/* Future Trends */}
          <FadeInView delay={0.6}>
            <div className="mb-20">
              <h3 className="text-5xl font-bold text-center mb-16 text-slate-100">
                Future <span className="text-pink-400">Horizons</span>
              </h3>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                  {futuretrends.map((trend, index) => (
                    <motion.div
                      key={index}
                      className="group bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 hover:border-pink-500/50 text-center transition-all duration-500"
                      whileHover={{ scale: 1.05, y: -5 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="text-pink-400 font-semibold group-hover:text-pink-300 transition-colors">
                        {trend}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="text-center bg-gradient-to-r from-slate-800/60 via-purple-900/40 to-pink-900/60 backdrop-blur-md rounded-3xl p-12 border border-slate-700/50"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-3xl font-bold mb-6 text-slate-100">The Future is Now</h4>
                  <p className="text-xl text-slate-300 leading-relaxed mb-8">
                    As we stand in 2025, anime has transcended entertainment to become a 
                    defining cultural force of the 21st century. With emerging technologies 
                    like AI, VR, and blockchain integration, the next chapter promises even 
                    more revolutionary changes in how stories are created, distributed, and experienced.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-6">
                    <Button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Explore More
                    </Button>
                    <Button variant="ghost" className="border border-slate-600 hover:border-purple-500 text-slate-300 hover:text-purple-300 px-8 py-3 rounded-2xl transition-all duration-300">
                      <Award className="w-5 h-5 mr-2" />
                      Industry Reports
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </FadeInView>

          {/* Era Conclusion */}
          <FadeInView delay={0.7}>
            <div className="text-center max-w-6xl mx-auto">
              <motion.div
                className="relative overflow-hidden bg-gradient-to-r from-cyan-900/40 via-purple-900/60 to-pink-900/40 backdrop-blur-md rounded-3xl p-16 border border-slate-700/50"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.7 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 via-purple-600/10 to-pink-600/5" />
                
                <div className="relative">
                  <div className="flex justify-center mb-8">
                    <div className="p-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-full">
                      <Sparkles className="w-12 h-12 text-cyan-400" />
                    </div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    The Golden Age Continues
                  </h3>
                  
                  <p className="text-xl text-slate-200 leading-relaxed mb-10 max-w-4xl mx-auto">
                    From humble beginnings in early 20th century Japan to a $31+ billion global phenomenon, 
                    anime has become one of humanity&apos;s most powerful storytelling mediums. As technology 
                    advances and creative boundaries continue to expand, we&apos;re witnessing not just the 
                    golden age of anime, but the dawn of an entirely new era of human expression.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">125+ Years</div>
                      <div className="text-slate-400">Of Innovation</div>
                    </div>
                    <div className="p-6">
                      <div className="text-3xl font-bold text-purple-400 mb-2">Global Impact</div>
                      <div className="text-slate-400">Cultural Revolution</div>
                    </div>
                    <div className="p-6">
                      <div className="text-3xl font-bold text-pink-400 mb-2">Infinite Future</div>
                      <div className="text-slate-400">Endless Possibilities</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeInView>
        </div>
      </ParallaxContainer>
    </section>
  );
};

export default CurrentEra;