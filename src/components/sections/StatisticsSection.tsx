'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { TrendingUp, Globe, DollarSign, Users, PlayCircle, Award } from 'lucide-react';
import FadeInView from '@/components/animations/FadeInView';
import { ParallaxContainer } from '@/components/animations/ParallaxContainer';
import { initializeGSAP } from '@/utils/gsap-init';

// Sample data - in real app this would come from props or data layer
const revenueData = [
  { year: '1990', revenue: 0.5, global: 0.1 },
  { year: '1995', revenue: 1.2, global: 0.3 },
  { year: '2000', revenue: 2.8, global: 0.8 },
  { year: '2005', revenue: 4.1, global: 1.5 },
  { year: '2010', revenue: 6.8, global: 2.8 },
  { year: '2015', revenue: 12.4, global: 5.2 },
  { year: '2020', revenue: 18.9, global: 8.7 },
  { year: '2025', revenue: 28.5, global: 15.2 }
];

const genreData = [
  { name: 'Shonen', value: 35, color: '#ff6b6b' },
  { name: 'Seinen', value: 22, color: '#4ecdc4' },
  { name: 'Shojo', value: 18, color: '#ffe66d' },
  { name: 'Josei', value: 12, color: '#ff8b94' },
  { name: 'Kodomomuke', value: 8, color: '#95e1d3' },
  { name: 'Other', value: 5, color: '#a8e6cf' }
];

const platformData = [
  { name: 'Streaming', value: 68, growth: '+15%' },
  { name: 'Television', value: 22, growth: '-8%' },
  { name: 'Cinema', value: 7, growth: '+3%' },
  { name: 'Physical', value: 3, growth: '-12%' }
];

const keyStats = [
  {
    icon: DollarSign,
    title: 'Market Value',
    value: '$28.5B',
    subtitle: '2025 Global Revenue',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    value: '195',
    subtitle: 'Countries & Territories',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    icon: Users,
    title: 'Audience',
    value: '1.2B',
    subtitle: 'Active Viewers Worldwide',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: PlayCircle,
    title: 'Content',
    value: '15,000+',
    subtitle: 'Anime Series & Films',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },
  {
    icon: TrendingUp,
    title: 'Growth Rate',
    value: '18%',
    subtitle: 'Annual Market Growth',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10'
  },
  {
    icon: Award,
    title: 'Recognition',
    value: '2,500+',
    subtitle: 'International Awards',
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10'
  }
];

interface StatisticsSectionProps {
  className?: string;
}

const StatCard: React.FC<{
  stat: typeof keyStats[0];
  index: number;
  isInView: boolean;
}> = ({ stat, index, isInView }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      const numericValue = parseFloat(stat.value.replace(/[^0-9.]/g, ''));
      let current = 0;
      const increment = numericValue / 50;
      
      const counter = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          current = numericValue;
          clearInterval(counter);
        }
        setCount(current);
      }, 40);

      return () => clearInterval(counter);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [isInView, stat.value, index]);

  const formatValue = (value: number) => {
    const original = stat.value;
    if (original.includes('B')) return `${value.toFixed(1)}B`;
    if (original.includes('K')) return `${Math.round(value)}K`;
    if (original.includes('%')) return `${Math.round(value)}%`;
    if (original.includes('+')) return `${Math.round(value).toLocaleString()}+`;
    return Math.round(value).toLocaleString();
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative p-6 rounded-2xl backdrop-blur-lg bg-black/20 border border-white/10 hover:border-white/20 transition-all duration-500 group ${stat.bgColor}`}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}>
          <stat.icon className={`w-6 h-6 ${stat.color}`} />
        </div>
        <div className="text-right">
          <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
            {formatValue(count)}
          </div>
          <div className="text-sm text-white/60">{stat.subtitle}</div>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{stat.title}</h3>
      
      {/* Animated progress bar */}
      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${stat.color.replace('text-', 'from-')} to-transparent rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const StatisticsSection: React.FC<StatisticsSectionProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const chartsRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(sectionRef, { 
    margin: "-10% 0px -10% 0px" 
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  useEffect(() => {
    // Initialize GSAP
    initializeGSAP();
    
    const section = sectionRef.current;
    const charts = chartsRef.current;

    if (!section || !charts) return;

    gsap.fromTo(
      charts.children,
      {
        y: 100,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: charts,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className={`relative min-h-screen py-24 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Animated Background */}
      <ParallaxContainer>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"
          style={{ y: backgroundY }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </ParallaxContainer>

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6"
        style={{ y: contentY }}
      >
        {/* Section Header */}
        <FadeInView>
          <div className="text-center mb-16">
            <motion.h2
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Industry Impact
            </motion.h2>
            <motion.p
              className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From humble beginnings to a global phenomenon, anime has transformed into 
              one of the world&apos;s most influential entertainment mediums.
            </motion.p>
          </div>
        </FadeInView>

        {/* Key Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {keyStats.map((stat, index) => (
            <StatCard
              key={stat.title} 
              stat={stat} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>

        {/* Charts Section */}
        <div ref={chartsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Revenue Chart */}
          <motion.div
            className="backdrop-blur-lg bg-black/20 rounded-2xl border border-white/10 p-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Market Growth</h3>
            <p className="text-white/60 mb-6">Global anime industry revenue over time</p>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00d4ff" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis dataKey="year" stroke="#ffffff80" />
                <YAxis stroke="#ffffff80" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    color: 'white'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#00d4ff" 
                  fillOpacity={1} 
                  fill="url(#revenueGradient)" 
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Genre Distribution */}
          <motion.div
            className="backdrop-blur-lg bg-black/20 rounded-2xl border border-white/10 p-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Genre Distribution</h3>
            <p className="text-white/60 mb-6">Popular anime genres by viewership</p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genreData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {genreData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    color: 'white'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Platform Distribution */}
          <motion.div
            className="backdrop-blur-lg bg-black/20 rounded-2xl border border-white/10 p-6 lg:col-span-2"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Distribution Platforms</h3>
            <p className="text-white/60 mb-6">How audiences consume anime content in 2025</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {platformData.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                >
                  <div className="text-3xl font-bold text-white mb-2">{platform.value}%</div>
                  <div className="text-sm text-white/60 mb-1">{platform.name}</div>
                  <div className={`text-xs ${platform.growth.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {platform.growth}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <FadeInView>
          <motion.div
            className="text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              These numbers tell the story of an art form that has transcended cultural boundaries, 
              becoming a universal language of creativity and imagination.
            </p>
          </motion.div>
        </FadeInView>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-full blur-2xl" />
    </motion.section>
  );
};

export default StatisticsSection;