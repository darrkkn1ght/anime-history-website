import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-2xl w-full text-center"
      >
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text leading-none">
            404
          </h1>
          <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Lost in the <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">Anime Timeline</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md mx-auto"
        >
          The page you're looking for seems to have vanished into another dimension. 
          Let's get you back to exploring anime history!
        </motion.p>

        {/* Anime Character Illustration (Text-based) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
          className="mb-8 text-6xl"
        >
          <span className="inline-block animate-bounce">🤖</span>
        </motion.div>

        {/* Navigation Options */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          {/* Home Button */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 backdrop-blur-sm border border-purple-500/20"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Return Home
              </span>
            </motion.div>
          </Link>

          {/* Timeline Button */}
          <Link href="/#timeline">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-slate-800/50 text-gray-300 font-semibold rounded-lg shadow-lg hover:shadow-slate-800/25 transition-all duration-300 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                View Timeline
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-gray-400"
        >
          <p className="text-sm mb-4">Or explore these eras:</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              { name: 'Origins', href: '/#origins' },
              { name: 'Golden Age', href: '/#golden-age' },
              { name: 'Digital Era', href: '/#digital-era' },
              { name: 'Modern', href: '/#current-era' }
            ].map((era, index) => (
              <Link key={era.name} href={era.href}>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="px-3 py-1 bg-slate-800/30 hover:bg-slate-700/50 rounded-full transition-colors duration-200 cursor-pointer border border-slate-700/30 hover:border-slate-600/50"
                >
                  {era.name}
                </motion.span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Error Code */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 text-xs text-gray-600 font-mono"
        >
          ERROR_CODE: PAGE_NOT_FOUND | TIMELINE_DISRUPTION_DETECTED
        </motion.div>
      </motion.div>
    </div>
  )
}