'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Share2, 
  Copy, 
  Check, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Mail, 
  MessageCircle,
  Download,
  QrCode,
  Link,
  X
} from 'lucide-react';

interface ShareData {
  title: string;
  description: string;
  url: string;
  hashtags?: string[];
  via?: string;
}

interface ShareComponentProps {
  shareData: ShareData;
  className?: string;
  variant?: 'button' | 'icon' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'amber' | 'white';
}

interface ShareOption {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  action: (data: ShareData) => void;
}

const ShareComponent: React.FC<ShareComponentProps> = ({
  shareData,
  className = "",
  variant = 'button',
  size = 'md',
  color = 'default'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const shareButtonRef = useRef<HTMLButtonElement>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const generateShareUrl = (platform: string, data: ShareData): string => {
    const encodedUrl = encodeURIComponent(data.url);
    const encodedTitle = encodeURIComponent(data.title);
    const encodedDescription = encodeURIComponent(data.description);
    const hashtags = data.hashtags?.join(',') || '';

    switch (platform) {
      case 'twitter':
        return `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&hashtags=${hashtags}${data.via ? `&via=${data.via}` : ''}`;
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`;
      case 'whatsapp':
        return `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
      case 'telegram':
        return `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`;
      case 'reddit':
        return `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`;
      default:
        return data.url;
    }
  };

  const shareOptions: ShareOption[] = [
    {
      id: 'copy',
      name: 'Copy Link',
      icon: copied ? Check : Copy,
      color: copied ? 'text-green-400' : 'text-zinc-400',
      bgColor: copied ? 'bg-green-500/20' : 'bg-zinc-800/50',
      action: (data) => copyToClipboard(data.url)
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: Twitter,
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/20',
      action: (data) => window.open(generateShareUrl('twitter', data), '_blank')
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: Facebook,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      action: (data) => window.open(generateShareUrl('facebook', data), '_blank')
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'text-blue-500',
      bgColor: 'bg-blue-600/20',
      action: (data) => window.open(generateShareUrl('linkedin', data), '_blank')
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      action: (data) => window.open(generateShareUrl('whatsapp', data), '_blank')
    },
    {
      id: 'email',
      name: 'Email',
      icon: Mail,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/20',
      action: (data) => {
        const subject = encodeURIComponent(data.title);
        const body = encodeURIComponent(`${data.description}\n\n${data.url}`);
        window.open(`mailto:?subject=${subject}&body=${body}`, '_self');
      }
    }
  ];

  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'px-3 py-2 text-sm';
      case 'lg': return 'px-6 py-4 text-lg';
      default: return 'px-4 py-3 text-base';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'amber': return 'text-amber-300 border-amber-400/50 hover:border-amber-400 hover:text-amber-200';
      case 'white': return 'text-white border-white/50 hover:border-white hover:text-zinc-200';
      default: return 'text-zinc-300 border-zinc-700/50 hover:border-zinc-600 hover:text-white';
    }
  };

  const renderShareButton = () => {
    const baseClasses = `
      inline-flex items-center space-x-2 border rounded-lg
      transition-all duration-300 group relative overflow-hidden
      ${getSizeClasses()} ${getColorClasses()}
    `;

    if (variant === 'icon') {
      return (
        <motion.button
          ref={shareButtonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg border border-zinc-700/50 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Share2 className="w-4 h-4" />
        </motion.button>
      );
    }

    if (variant === 'minimal') {
      return (
        <motion.button
          ref={shareButtonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="text-zinc-400 hover:text-white transition-colors p-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Share2 className="w-4 h-4" />
        </motion.button>
      );
    }

    return (
      <motion.button
        ref={shareButtonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`${baseClasses} bg-zinc-900/80 backdrop-blur-sm`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Share2 className="w-4 h-4" />
        <span className="text-sm font-medium">Share</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      </motion.button>
    );
  };

  const generateQRCode = () => {
    // In a real app, you'd use a QR code library like qrcode.js
    // For now, we'll use a placeholder QR code service
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shareData.url)}`;
  };

  return (
    <div className={`relative ${className}`}>
      {renderShareButton()}

      {/* Share Options Popup */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Share Panel */}
            <motion.div
              className="
                absolute bottom-full right-0 mb-2 w-80 max-w-[calc(100vw-2rem)]
                bg-zinc-900/95 backdrop-blur-md border border-zinc-700/50 
                rounded-xl shadow-2xl z-50 overflow-hidden
              "
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              {/* Header */}
              <div className="p-4 border-b border-zinc-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Share2 className="w-4 h-4 text-amber-400" />
                    <h3 className="text-sm font-semibold text-white">Share Content</h3>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-zinc-400 hover:text-white transition-colors p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-zinc-400 mt-1 truncate">
                  {shareData.title}
                </p>
              </div>

              {/* Share Options Grid */}
              <div className="p-4">
                <div className="grid grid-cols-3 gap-3">
                  {shareOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <motion.button
                        key={option.id}
                        onClick={() => {
                          option.action(shareData);
                          if (option.id !== 'copy') {
                            setIsOpen(false);
                          }
                        }}
                        className={`
                          group flex flex-col items-center p-3 rounded-lg
                          ${option.bgColor} ${option.color}
                          hover:bg-opacity-80 transition-all duration-300
                          border border-transparent hover:border-zinc-600/50
                        `}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-5 h-5 mb-2" />
                        <span className="text-xs font-medium text-center">
                          {option.name}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Additional Options */}
                <div className="mt-4 pt-4 border-t border-zinc-700/50">
                  <div className="flex space-x-2">
                    <motion.button
                      onClick={() => setShowQR(!showQR)}
                      className="
                        flex-1 flex items-center justify-center space-x-2 p-2
                        bg-zinc-800/50 rounded-lg text-zinc-400 hover:text-white
                        hover:bg-zinc-700/50 transition-all duration-300
                      "
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <QrCode className="w-4 h-4" />
                      <span className="text-xs font-medium">QR Code</span>
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        // Generate and download a shareable image
                        // This would typically create a canvas with the content info
                        console.log('Download share image');
                      }}
                      className="
                        flex-1 flex items-center justify-center space-x-2 p-2
                        bg-zinc-800/50 rounded-lg text-zinc-400 hover:text-white
                        hover:bg-zinc-700/50 transition-all duration-300
                      "
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="w-4 h-4" />
                      <span className="text-xs font-medium">Save Image</span>
                    </motion.button>
                  </div>
                </div>

                {/* QR Code Display */}
                <AnimatePresence>
                  {showQR && (
                    <motion.div
                      className="mt-4 pt-4 border-t border-zinc-700/50 text-center"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="bg-white p-4 rounded-lg inline-block">
                        <Image
                          src={generateQRCode()}
                          alt="QR Code"
                          width={128}
                          height={128}
                          className="w-32 h-32"
                        />
                      </div>
                      <p className="text-xs text-zinc-400 mt-2">
                        Scan to share this content
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* URL Display */}
                <div className="mt-4 pt-4 border-t border-zinc-700/50">
                  <div className="flex items-center space-x-2 bg-zinc-800/50 rounded-lg p-3">
                    <Link className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                    <input
                      type="text"
                      value={shareData.url}
                      readOnly
                      className="
                        flex-1 bg-transparent text-xs text-zinc-300 
                        focus:outline-none select-all
                      "
                    />
                    <motion.button
                      onClick={() => copyToClipboard(shareData.url)}
                      className="text-zinc-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Copy Success Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            className="
              fixed bottom-4 right-4 bg-green-500/90 backdrop-blur-sm 
              text-white px-4 py-2 rounded-lg shadow-lg z-50
              flex items-center space-x-2
            "
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
          >
            <Check className="w-4 h-4" />
            <span className="text-sm font-medium">Link copied!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShareComponent;