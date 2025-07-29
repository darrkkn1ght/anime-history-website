export default function StatisticsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: 'Years of History', value: '125+', description: 'From 1900 to 2025' },
        { title: 'Global Revenue', value: '$25B+', description: 'Annual industry value' },
        { title: 'Active Studios', value: '500+', description: 'Production companies' },
        { title: 'International Fans', value: '100M+', description: 'Worldwide audience' },
        { title: 'Anime Titles', value: '10K+', description: 'Produced series & films' },
        { title: 'Streaming Platforms', value: '50+', description: 'Global distribution' }
      ].map((stat, index) => (
        <div key={index} className="bg-gray-800 rounded-lg p-6 text-center space-y-4">
          <div className="w-12 h-12 bg-gold-600 rounded-lg flex items-center justify-center mx-auto">
            <span className="text-black font-bold text-lg">📊</span>
          </div>
          <div className="text-3xl font-bold text-gold-400">{stat.value}</div>
          <h3 className="text-lg font-semibold text-white">{stat.title}</h3>
          <p className="text-gray-300 text-sm">{stat.description}</p>
        </div>
      ))}
    </div>
  );
}
