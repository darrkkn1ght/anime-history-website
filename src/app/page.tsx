export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
            Anime History
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            From Origins to Modern Era | 1900s-2025
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore the complete evolution of anime from its earliest origins in the 1900s 
            to today&apos;s global entertainment powerhouse.
          </p>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
            Timeline Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { era: "Origins", period: "1900s-1930s", desc: "Birth of Japanese animation" },
              { era: "Foundation", period: "1950s-1960s", desc: "Television anime revolution" },
              { era: "Expansion", period: "1970s-1980s", desc: "International breakthrough" },
              { era: "Golden Age", period: "1990s-2000s", desc: "Peak creativity and innovation" },
              { era: "Digital Age", period: "2010s", desc: "Streaming and digital transformation" },
              { era: "Current Era", period: "2020s-2025", desc: "Global cultural phenomenon" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.era}</h3>
                <p className="text-gray-400 mb-2">{item.period}</p>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
            Global Impact & Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { stat: "$28.5B", label: "Market Value (2025)", desc: "Global Revenue" },
              { stat: "195", label: "Countries & Territories", desc: "Global Reach" },
              { stat: "1.2B", label: "Active Viewers", desc: "Worldwide Audience" },
              { stat: "15,000+", label: "Anime Series & Films", desc: "Content Library" },
              { stat: "18%", label: "Annual Growth Rate", desc: "Market Expansion" },
              { stat: "2,500+", label: "International Awards", desc: "Recognition" }
            ].map((item, index) => (
              <div key={index} className="text-center bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{item.stat}</div>
                <div className="text-lg font-semibold text-white mb-1">{item.label}</div>
                <div className="text-gray-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-yellow-400">
            A Cultural Revolution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            From humble beginnings to a global phenomenon, anime has transcended cultural 
            boundaries and redefined entertainment for generations. Its impact on art, 
            storytelling, and global culture continues to grow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Cinematic Revolution",
              "Cultural Bridge", 
              "Artistic Innovation",
              "Global Language",
              "Musical Legacy",
              "Narrative Depth"
            ].map((highlight, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="text-yellow-400 font-semibold">{highlight}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}