export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="text-center space-y-8 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gold-400 to-blue-400 bg-clip-text text-transparent">
          Anime History Timeline
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Journey through 125 years of Japanese animation evolution, from silent films to global phenomenon
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gold-600 hover:bg-gold-500 text-black font-semibold rounded-lg transition-colors">
            Explore Timeline
          </button>
          <button className="px-8 py-4 border border-gray-600 hover:border-gold-400 text-white font-semibold rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
