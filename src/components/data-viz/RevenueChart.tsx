'use client';

import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, DollarSign, Globe, Users, PlayCircle, Calendar } from 'lucide-react';

// Market data for anime industry revenue growth
const revenueData = [
  { year: 1963, global: 0.05, domestic: 0.05, streaming: 0, merchandise: 0.02 },
  { year: 1970, global: 0.12, domestic: 0.10, streaming: 0, merchandise: 0.08 },
  { year: 1980, global: 0.35, domestic: 0.25, streaming: 0, merchandise: 0.22 },
  { year: 1990, global: 0.78, domestic: 0.45, streaming: 0, merchandise: 0.55 },
  { year: 2000, global: 1.8, domestic: 0.85, streaming: 0.02, merchandise: 1.2 },
  { year: 2005, global: 3.2, domestic: 1.1, streaming: 0.08, merchandise: 2.1 },
  { year: 2010, global: 5.8, domestic: 1.8, streaming: 0.35, merchandise: 3.2 },
  { year: 2015, global: 12.4, domestic: 2.1, streaming: 1.8, merchandise: 6.8 },
  { year: 2020, global: 24.2, domestic: 2.8, streaming: 8.2, merchandise: 12.1 },
  { year: 2024, global: 31.7, domestic: 3.2, streaming: 15.8, merchandise: 18.2 },
  { year: 2025, global: 34.1, domestic: 3.4, streaming: 18.2, merchandise: 20.1 }
];

// Regional distribution data
const regionalData = [
  { region: 'Japan', value: 28, color: '#FF6B6B' },
  { region: 'North America', value: 35, color: '#4ECDC4' },
  { region: 'Europe', value: 18, color: '#45B7D1' },
  { region: 'Asia Pacific', value: 12, color: '#96CEB4' },
  { region: 'Others', value: 7, color: '#FFEAA7' }
];

// Platform revenue data
const platformData = [
  { platform: 'Streaming', revenue: 18.2, growth: 45.2 },
  { platform: 'Merchandise', revenue: 20.1, growth: 12.8 },
  { platform: 'Box Office', revenue: 2.8, growth: 8.5 },
  { platform: 'Gaming', revenue: 6.2, growth: 38.7 },
  { platform: 'Publishing', revenue: 4.1, growth: 15.3 }
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/90 backdrop-blur-md border border-yellow-500/30 rounded-lg p-4 shadow-xl">
        <p className="text-yellow-400 font-semibold mb-2">{`Year: ${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-white text-sm" style={{ color: entry.color }}>
            {`${entry.dataKey}: $${entry.value}B`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

interface RevenueChartProps {
  className?: string;
}

const RevenueChart: React.FC<RevenueChartProps> = ({ className = '' }) => {
  const [activeChart, setActiveChart] = useState<'overview' | 'regional' | 'platform'>('overview');
  const [isVisible, setIsVisible] = useState(false);
  const [animationDelay, setAnimationDelay] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setAnimationDelay(0);
    const timer = setTimeout(() => setAnimationDelay(300), 100);
    return () => clearTimeout(timer);
  }, [activeChart]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-teal-900/10 rounded-2xl" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl" />
      
      {/* Content Container */}
      <div className="relative z-10 p-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full">
              <TrendingUp className="w-6 h-6 text-black" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">
                Anime Industry Revenue Growth
              </h2>
              <p className="text-gray-300">
                From humble beginnings to global entertainment powerhouse
              </p>
            </div>
          </div>

          {/* Chart Type Selector */}
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'overview', label: 'Revenue Overview', icon: DollarSign },
              { key: 'regional', label: 'Regional Distribution', icon: Globe },
              { key: 'platform', label: 'Platform Analysis', icon: PlayCircle }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveChart(key as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeChart === key
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Chart Container */}
        <div 
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: `${animationDelay}ms` }}
        >
          {/* Revenue Overview Chart */}
          {activeChart === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Total Revenue 2025', value: '$34.1B', change: '+7.6%', icon: DollarSign },
                  { label: 'Streaming Revenue', value: '$18.2B', change: '+45.2%', icon: PlayCircle },
                  { label: 'Global Reach', value: '190+ Countries', change: '+15 new', icon: Globe },
                  { label: 'Active Viewers', value: '1.2B+', change: '+28%', icon: Users }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon className="w-4 h-4 text-yellow-400" />
                      <span className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-green-400">{stat.change}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-yellow-400" />
                  Revenue Evolution (1963-2025)
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="globalGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="streamingGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#FF6B6B" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#FF6B6B" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="merchandiseGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#FFD93D" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#FFD93D" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                      <XAxis 
                        dataKey="year" 
                        stroke="#ffffff60"
                        fontSize={12}
                      />
                      <YAxis 
                        stroke="#ffffff60"
                        fontSize={12}
                        tickFormatter={(value) => `$${value}B`}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="global"
                        stroke="#4ECDC4"
                        strokeWidth={3}
                        fill="url(#globalGradient)"
                        name="Global Revenue"
                      />
                      <Area
                        type="monotone"
                        dataKey="streaming"
                        stroke="#FF6B6B"
                        strokeWidth={2}
                        fill="url(#streamingGradient)"
                        name="Streaming"
                      />
                      <Area
                        type="monotone"
                        dataKey="merchandise"
                        stroke="#FFD93D"
                        strokeWidth={2}
                        fill="url(#merchandiseGradient)"
                        name="Merchandise"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* Regional Distribution */}
          {activeChart === 'regional' && (
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-yellow-400" />
                Global Market Distribution (2025)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={regionalData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {regionalData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value: any) => [`${value}%`, 'Market Share']}
                        contentStyle={{
                          backgroundColor: 'rgba(0,0,0,0.9)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          borderRadius: '8px',
                          color: 'white'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                  {regionalData.map((region, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: region.color }}
                        />
                        <span className="text-white font-medium">{region.region}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold">{region.value}%</div>
                        <div className="text-xs text-gray-400">Market Share</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Platform Analysis */}
          {activeChart === 'platform' && (
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <PlayCircle className="w-5 h-5 text-yellow-400" />
                Revenue by Platform (2025)
              </h3>
              <div className="h-80 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={platformData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                    <XAxis 
                      dataKey="platform" 
                      stroke="#ffffff60"
                      fontSize={12}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis 
                      stroke="#ffffff60"
                      fontSize={12}
                      tickFormatter={(value) => `$${value}B`}
                    />
                    <Tooltip 
                      formatter={(value: any, name: string) => [
                        name === 'revenue' ? `$${value}B` : `${value}%`,
                        name === 'revenue' ? 'Revenue' : 'Growth Rate'
                      ]}
                      contentStyle={{
                        backgroundColor: 'rgba(0,0,0,0.9)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        color: 'white'
                      }}
                    />
                    <Bar 
                      dataKey="revenue" 
                      fill="url(#barGradient)"
                      radius={[4, 4, 0, 0]}
                    />
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.9}/>
                        <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0.6}/>
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {platformData.map((platform, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/10"
                  >
                    <div className="text-white font-semibold mb-2">{platform.platform}</div>
                    <div className="text-2xl font-bold text-yellow-400 mb-1">
                      ${platform.revenue}B
                    </div>
                    <div className="text-sm text-green-400">
                      +{platform.growth}% YoY Growth
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;