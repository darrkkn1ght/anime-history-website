'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Mail, Heart, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
      color: 'hover:text-white'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:contact@animehistory.com',
      label: 'Email',
      color: 'hover:text-amber-400'
    }
  ];

  const footerLinks = [
    {
      title: 'Content',
      links: [
        { name: 'Timeline', href: '#timeline' },
        { name: 'Eras', href: '#eras' },
        { name: 'Statistics', href: '#statistics' },
        { name: 'Sources', href: '#sources' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Methodology', href: '#methodology' },
        { name: 'References', href: '#references' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Use', href: '#terms' },
        { name: 'Copyright', href: '#copyright' },
        { name: 'Disclaimers', href: '#disclaimers' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="relative bg-black border-t border-amber-500/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-blue-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(255,215,0,0.1),transparent_50%)]" />
      </div>

      {/* Film Grain Texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20/%3E%3CfeColorMatrix%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%201%200%22/%3E%3C/filter%3E%3C/defs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url%28%23noise%29%22%20opacity%3D%220.4%22/%3E%3C/svg%3E')] animate-pulse" />
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent mb-2">
                アニメ史
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                A comprehensive journey through the evolution of Japanese animation, 
                from its humble beginnings to its global cultural phenomenon.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 transition-all duration-300 ${social.color} hover:bg-white/10 hover:border-white/20 hover:scale-110`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-amber-500/30">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                      {link.href.startsWith('http') && (
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gradient-to-r from-transparent via-amber-500/30 to-transparent"
        />

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center pt-8 space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>for anime culture</span>
          </div>

          <div className="text-sm text-gray-400 text-center md:text-right">
            <p>© {currentYear} Anime History Project. All rights reserved.</p>
            <p className="mt-1 text-xs">
              Educational content for cultural preservation and appreciation.
            </p>
          </div>
        </motion.div>

        {/* Scroll to Top Indicator */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/25">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
    </footer>
  );
};

export default Footer;