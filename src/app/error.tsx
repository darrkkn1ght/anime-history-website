'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-md w-full text-center"
      >
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto w-20 h-20 mb-8 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 rounded-full opacity-20 blur-xl" />
          <div className="relative bg-gradient-to-br from-red-500/20 to-orange-600/20 backdrop-blur-sm border border-red-500/30 rounded-full w-full h-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Error Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
        >
          Something Went Wrong
        </motion.h1>

        {/* Error Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-300 mb-8 leading-relaxed"
        >
          We encountered an unexpected error while loading the anime timeline. 
          Don&apos;t worry, our team has been notified and we&apos;re working to fix it.
        </motion.p>

        {/* Error Details (Development Mode) */}
        {process.env.NODE_ENV === 'development' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ delay: 0.8 }}
            className="mb-8 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg text-left"
          >
            <h3 className="text-sm font-semibold text-red-400 mb-2">Error Details:</h3>
            <code className="text-xs text-gray-400 break-all">
              {error.message}
            </code>
            {error.digest && (
              <p className="text-xs text-gray-500 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Try Again Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-red-500/25 transition-all duration-300 backdrop-blur-sm border border-red-500/20"
          >
            Try Again
          </motion.button>

          {/* Go Home Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-slate-800/50 text-gray-300 font-semibold rounded-lg shadow-lg hover:shadow-slate-800/25 transition-all duration-300 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50"
          >
            Go Home
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex justify-center items-center space-x-2 text-gray-500"
        >
          <div className="w-2 h-2 bg-red-500/30 rounded-full animate-ping" />
          <span className="text-sm">Monitoring system active</span>
          <div className="w-2 h-2 bg-orange-500/30 rounded-full animate-ping delay-500" />
        </motion.div>
      </motion.div>
    </div>
  )
}