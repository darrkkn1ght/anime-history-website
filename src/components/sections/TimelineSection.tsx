export default function TimelineSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-blue-400 bg-clip-text text-transparent">
            Timeline of Anime Evolution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the key milestones and eras that shaped anime into a global phenomenon
          </p>
        </div>
        
        <div className="space-y-16">
          {[
            { era: 'Origins', period: '1900s-1930s', description: 'Early Japanese animation and silent films' },
            { era: 'Foundation', period: '1950s-1960s', description: 'Tezuka era and birth of TV anime' },
            { era: 'Expansion', period: '1970s-1980s', description: 'Mecha boom and international growth' },
            { era: 'Golden Age', period: '1990s-2000s', description: 'Golden age of anime and global recognition' },
            { era: 'Digital Age', period: '2010s', description: 'Digital revolution and streaming era' },
            { era: 'Current Era', period: '2020s-2025', description: 'Global mainstream and AI integration' }
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-8 p-8 bg-gray-900 rounded-lg">
              <div className="w-24 h-24 bg-gold-600 rounded-full flex items-center justify-center text-black font-bold text-lg flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{item.era}</h3>
                <p className="text-gold-400 font-medium mb-2">{item.period}</p>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
