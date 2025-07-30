'use client';

import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, DollarSign, Users, Globe, Play, Pause, RotateCcw } from 'lucide-react';

// Market growth data
const marketRevenueData = [
  { year: '1990', revenue: 0.8, titles: 45, global: 2, streaming: 0 },
  { year: '1995', revenue: 2.1, titles: 78, global: 8, streaming: 0 },
  { year: '2000', revenue: 4.3, titles: 156, global: 25, streaming: 0 },
  { year: '2005', revenue: 7.8, titles: 234, global: 45, streaming: 0.1 },
  { year: '2010', revenue: 12.4, titles: 312, global: 78, streaming: 2.3 },
  { year: '2015', revenue: 18.7, titles: 456, global: 134, streaming: 8.9 },
  { year: '2020', revenue: 31.2, titles: 678, global: 245, streaming: 18.7 },
  { year: '2023', revenue: 47.8, titles: 834, global: 387, streaming: 31.4 },
  { year: '2025', revenue: 58.3, titles: 967, global: 456, streaming: 42.1 }
];

const platformDistribution = [
  { name: 'Television', value: 35, color: '#ffd700' },
  { name: 'Streaming', value: 42, color: '#00d4ff' },
  { name: 'Cinema', value: 15, color: '#ff6b6b' },
  { name: 'Direct-to-Video', value: 8, color: '#4ecdc4' }
];

const regionalData = [
  { region: 'Japan', domestic: 28.4, international: 19.9 },
  { region: 'North America', domestic: 8.7, international: 12.3 },
  { region: 'Europe', domestic: 3.2, international: 7.8 },
  { region: 'Asia Pacific', domestic: 9.1, international: 15.6 },
  { region: 'Rest of World', domestic: 1.2, international: 4.7 }
];

const demographicData = [
  { age: '6-12', percentage: 18, growth: '+12%' },
  { age: '13-17', percentage: 24, growth: '+8%' },
  { age: '18-24', percentage: 32, growth: '+15%' },
  { age: '25-34', percentage: 19, growth: '+22%' },
  { age: '35+', percentage: 7, growth: '+28%' }
];

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, title, value, change, trend, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
  >
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-lg bg-gradient-to-br ${color}`}>
        {icon}
      </div>
      <div className={`flex items-center text-sm ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
        <TrendingUp className={`w-4 h-4 mr-1 ${trend === 'down' ? 'rotate-180' : ''}`} />
        {change}
      </div>
    </div>
    <h3 className="text-white/70 text-sm font-medium mb-1">{title}</h3>
    <p className="text-2xl font-bold text-white">{value}</p>
  </motion.div>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/80 backdrop-blur-md border border-white/20 rounded-lg p-4 shadow-xl">
        <p className="text-white font-semibold mb-2">{`Year: ${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {`${entry.dataKey}: ${entry.value}${entry.dataKey === 'revenue' ? 'B USD' : entry.dataKey === 'titles' ? ' titles' : entry.dataKey === 'global' ? ' countries' : 'B USD'}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function MarketGrowthGraph() {
  const [activeChart, setActiveChart] = useState<'revenue' | 'platform' | 'regional' | 'demographic'>('revenue');
  const [isAnimating, setIsAnimating] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const resetChart = () => {
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 100);
  };

  const chartVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 bg-clip-text text-transparent mb-4">
          Anime Industry Growth Metrics
        </h2>
        <p className="text-white/70 text-lg max-w-3xl mx-auto">
          Comprehensive analysis of the anime industry's explosive growth from 1990 to 2025, 
          showcasing market expansion, platform evolution, and global reach.
        </p>
      </motion.div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <MetricCard
          icon={<DollarSign className="w-6 h-6 text-white" />}
          title="Market Value (2025)"
          value="$58.3B"
          change="+22%"
          trend="up"
          color="from-green-500 to-emerald-600"
        />
        <MetricCard
          icon={<Play className="w-6 h-6 text-white" />}
          title="Active Titles"
          value="967"
          change="+16%"
          trend="up"
          color="from-blue-500 to-cyan-600"
        />
        <MetricCard
          icon={<Globe className="w-6 h-6 text-white" />}
          title="Global Reach"
          value="456 Countries"
          change="+18%"
          trend="up"
          color="from-purple-500 to-pink-600"
        />
        <MetricCard
          icon={<Users className="w-6 h-6 text-white" />}
          title="Streaming Revenue"
          value="$42.1B"
          change="+34%"
          trend="up"
          color="from-orange-500 to-red-600"
        />
      </div>

      {/* Chart Controls */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {[
          { key: 'revenue', label: 'Market Revenue', icon: <DollarSign className="w-4 h-4" /> },
          { key: 'platform', label: 'Platform Distribution', icon: <Play className="w-4 h-4" /> },
          { key: 'regional', label: 'Regional Analysis', icon: <Globe className="w-4 h-4" /> },
          { key: 'demographic', label: 'Demographics', icon: <Users className="w-4 h-4" /> }
        ].map((chart) => (
          <motion.button
            key={chart.key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveChart(chart.key as any)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeChart === chart.key
                ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
          >
            {chart.icon}
            {chart.label}
          </motion.button>
        ))}
      </div>

      {/* Animation Controls */}
      <div className="flex justify-center gap-4 mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleAnimation}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white/70 hover:text-white transition-all duration-300"
        >
          {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {isAnimating ? 'Pause' : 'Play'} Animation
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={resetChart}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white/70 hover:text-white transition-all duration-300"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </motion.button>
      </div>

      {/* Chart Container */}
      <motion.div
        className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <AnimatePresence mode="wait">
          {activeChart === 'revenue' && (
            <motion.div
              key="revenue"
              variants={chartVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="h-96"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Anime Industry Revenue Growth (1990-2025)
              </h3>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={marketRevenueData}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ffd700" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ffd700" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="streamingGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#00d4ff" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="year" 
                    stroke="rgba(255,255,255,0.7)"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.7)"
                    style={{ fontSize: '12px' }}
                    label={{ value: 'Billions USD', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: 'rgba(255,255,255,0.7)' } }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#ffd700"
                    fillOpacity={1}
                    fill="url(#revenueGradient)"
                    strokeWidth={3}
                    name="Total Revenue"
                    animationDuration={isAnimating ? 2000 : 0}
                  />
                  <Area
                    type="monotone"
                    dataKey="streaming"
                    stroke="#00d4ff"
                    fillOpacity={1}
                    fill="url(#streamingGradient)"
                    strokeWidth={2}
                    name="Streaming Revenue"
                    animationDuration={isAnimating ? 2500 : 0}
                    animationDelay={500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>
          )}

          {activeChart === 'platform' && (
            <motion.div
              key="platform"
              variants={chartVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="h-96"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Content Distribution by Platform (2025)
              </h3>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    innerRadius={60}
                    paddingAngle={5}
                    dataKey="value"
                    animationDuration={isAnimating ? 1500 : 0}
                  >
                    {platformDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: any) => [`${value}%`, 'Market Share']}
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px',
                      color: 'white'
                    }}
                  />
                  <Legend 
                    wrapperStyle={{ color: 'white' }}
                    formatter={(value) => `${value}`}
                  />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          )}

          {activeChart === 'regional' && (
            <motion.div
              key="regional"
              variants={chartVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="h-96"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Regional Market Analysis (Billions USD)
              </h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="region" 
                    stroke="rgba(255,255,255,0.7)"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.7)"
                    style={{ fontSize: '12px' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar 
                    dataKey="domestic" 
                    fill="#ffd700" 
                    name="Domestic Revenue"
                    animationDuration={isAnimating ? 1500 : 0}
                  />
                  <Bar 
                    dataKey="international" 
                    fill="#00d4ff" 
                    name="International Revenue"
                    animationDuration={isAnimating ? 1500 : 0}
                    animationDelay={300}
                  />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          )}

          {activeChart === 'demographic' && (
            <motion.div
              key="demographic"
              variants={chartVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="h-96"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Audience Demographics & Growth
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-full">
                {demographicData.map((demo, index) => (
                  <motion.div
                    key={demo.age}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 rounded-lg p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-white mb-2">{demo.age}</div>
                    <div className="text-3xl font-bold text-amber-400 mb-2">{demo.percentage}%</div>
                    <div className="text-green-400 text-sm font-medium">{demo.growth}</div>
                    <div className="w-full bg-white/10 rounded-full h-2 mt-3">
                      <motion.div
                        className="bg-gradient-to-r from-amber-400 to-orange-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${demo.percentage * 2.5}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Key Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-amber-500/10 to-orange-600/10 border border-amber-500/20 rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-amber-400 mb-4">Key Market Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white/80">
          <div>
            <h4 className="font-semibold text-white mb-2">Streaming Dominance</h4>
            <p className="text-sm">Streaming platforms now account for 72% of anime consumption, with revenue growing 340% since 2020.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Global Expansion</h4>
            <p className="text-sm">International markets now represent 67% of total revenue, up from 23% in 2010.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Demographic Shift</h4>
            <p className="text-sm">Adult audiences (25+) show the highest growth rate at 28%, indicating mainstream acceptance.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}