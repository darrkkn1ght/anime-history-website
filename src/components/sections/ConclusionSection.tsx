export default function ConclusionSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold-400 to-blue-400 bg-clip-text text-transparent">
          The Future of Anime
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          As we look toward the future, anime continues to evolve and adapt to new technologies and global audiences. 
          From AI-assisted animation to virtual reality experiences, the medium is poised for even greater innovation.
        </p>
        <p className="text-lg text-gray-400 leading-relaxed">
          The journey from silent films to streaming platforms represents not just technological advancement, 
          but the universal appeal of storytelling through animation. Anime has become a bridge between cultures, 
          connecting people worldwide through shared emotional experiences.
        </p>
        <div className="pt-8">
          <button className="px-8 py-4 bg-gold-600 hover:bg-gold-500 text-black font-semibold rounded-lg transition-colors">
            Explore More History
          </button>
        </div>
      </div>
    </div>
  );
}
