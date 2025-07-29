# 🎬 Anime History Website

A cinematic journey through anime history from the 1900s to 2025, featuring immersive storytelling, smooth animations, and comprehensive historical content.

## 🎯 Project Overview

This website chronicles the evolution of anime through six distinct eras:
- **Origins Era** (1900s-1930s): Early animation experiments
- **Foundation Era** (1950s-1960s): Birth of modern anime
- **Expansion Era** (1970s-1980s): Genre diversification
- **Golden Age** (1990s-2000s): Global recognition
- **Digital Age** (2010s): Streaming revolution
- **Current Era** (2020s-2025): Modern landscape

## ✨ Features

### 🎨 Visual Design
- **Cinematic Experience**: Film-inspired transitions and animations
- **Era-Specific Styling**: Visual themes that evolve with each time period
- **Dark Mode First**: Modern 2025 aesthetic with gold and electric blue accents
- **Glassmorphism Effects**: Frosted glass components with backdrop blur

### 🎭 Animations & Interactions
- **Smooth Scrolling**: Powered by Lenis for buttery smooth navigation
- **Parallax Effects**: Depth and immersion through layered animations
- **Scroll-Triggered Animations**: Content reveals as you explore
- **Micro-Interactions**: Delightful hover states and transitions

### 📱 Technical Excellence
- **Next.js 14**: Latest features with App Router
- **TypeScript**: Full type safety throughout
- **Responsive Design**: Mobile-first approach with touch gestures
- **Performance Optimized**: Image optimization, code splitting, and caching

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17.0 or higher
- npm 9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd anime-history-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript checks
npm run clean        # Clean build artifacts
```

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── ui/             # Base UI components
│   ├── layout/         # Layout components
│   ├── sections/       # Page sections
│   ├── eras/           # Era-specific content
│   ├── animations/     # Animation components
│   ├── interactive/    # Interactive features
│   └── data-viz/       # Data visualizations
├── data/               # Content and constants
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── styles/             # CSS and styling
└── types/              # TypeScript definitions
```

## 🎨 Design System

### Color Palette
- **Primary Gold**: `#eab308` - Cinematic luxury
- **Electric Blue**: `#0ea5e9` - Modern technology
- **Dark Background**: `#0a0a0a` - Premium depth
- **Glass Effects**: Semi-transparent overlays

### Typography
- **Primary**: Inter Variable (modern sans-serif)
- **Japanese**: Noto Sans JP (cultural authenticity)
- **Mono**: JetBrains Mono (code and technical content)

### Animation Principles
- **Easing**: `cubic-bezier(0.4, 0.0, 0.2, 1)` for all transitions
- **Duration**: 300-800ms for most interactions
- **Scroll Animations**: Triggered at 10% viewport intersection

## 🔧 Technology Stack

### Core
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4

### Animation Libraries
- **Framer Motion**: Component animations and transitions
- **GSAP**: Advanced scroll-triggered animations
- **Lenis**: Smooth scrolling experience

### UI Components
- **Radix UI**: Accessible component primitives
- **Lucide React**: Modern icon library
- **Recharts**: Data visualization

## 📊 Performance

### Optimization Features
- Next.js Image optimization with WebP/AVIF support
- Automatic code splitting and lazy loading
- Bundle analysis with webpack-bundle-analyzer
- Font optimization with next/font

### Target Metrics
- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🌐 Browser Support

- Chrome/Edge 88+
- Firefox 87+
- Safari 14.1+
- Mobile browsers with modern JavaScript support

## 📝 Content Management

Historical content is organized in structured TypeScript files:
- `src/data/content/eras.ts` - Era descriptions and timelines
- `src/data/content/anime-list.ts` - Comprehensive anime database
- `src/data/content/studios.ts` - Studio information and history

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript strict mode
- Use conventional commit messages
- Maintain responsive design principles
- Test on multiple devices and browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Anime industry pioneers and creators
- Historical archives and documentation
- Open source animation libraries
- Modern web development community

---

**Built with ❤️ for anime history enthusiasts**