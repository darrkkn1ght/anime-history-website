# 🎬 Anime History Website - Development Guide

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v18.17.0 or higher
- **npm**: v9+ or **yarn**: v1.22+
- **Git**: Latest version
- **VS Code**: Recommended with extensions below

### Initial Setup
```bash
# Clone repository
git clone <repository-url>
cd anime-history-website

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev

# Open browser
open http://localhost:3000
```

## 📁 Project Architecture

### Design Principles
- **Component-Driven Development**: Every UI element is a reusable component
- **TypeScript First**: Strict typing for better development experience
- **Mobile-First Responsive**: Progressive enhancement from mobile to desktop
- **Performance Optimized**: Code splitting, lazy loading, and image optimization
- **Accessibility Focused**: WCAG 2.1 AA compliance

### Folder Structure Philosophy
```
src/
├── app/              # Next.js 14 App Router
├── components/       # Reusable UI components
│   ├── ui/          # Base design system components
│   ├── layout/      # Layout-specific components
│   ├── sections/    # Page section components
│   ├── eras/        # Historical era components
│   ├── animations/  # Animation wrappers
│   ├── interactive/ # User interaction components
│   └── data-viz/    # Data visualization components
├── data/            # Static content and configuration
├── hooks/           # Custom React hooks
├── utils/           # Pure utility functions
├── styles/          # CSS modules and global styles
└── types/           # TypeScript type definitions
```

## 🎨 Design System

### Color System
```typescript
// Reference: src/data/constants/colors.ts
const colors = {
  primary: {
    black: '#0a0a0a',
    gold: '#ffd700',
    electricBlue: '#00d4ff'
  },
  eras: {
    origins: { sepia: '#8B4513', cream: '#F4E4BC' },
    foundation: { retro: '#FF6B35', warm: '#F7931E' },
    expansion: { neon: '#FF073A', cyber: '#39FF14' },
    golden: { royal: '#FFD700', deep: '#B8860B' },
    digital: { electric: '#00D4FF', bright: '#0080FF' },
    current: { vibrant: '#FF6B6B', fresh: '#4ECDC4' }
  }
}
```

### Typography Scale
```typescript
// Reference: src/data/constants/typography.ts
const typography = {
  fonts: {
    primary: 'Inter Variable', // Latin text
    japanese: 'Noto Sans JP',  // Japanese text
    display: 'Inter Variable'   // Headers
  },
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem'   // 60px
  }
}
```

### Spacing System
```css
/* Based on 4px unit system */
.space-1 { margin: 4px; }      /* 4px */
.space-2 { margin: 8px; }      /* 8px */
.space-3 { margin: 12px; }     /* 12px */
.space-4 { margin: 16px; }     /* 16px */
.space-6 { margin: 24px; }     /* 24px */
.space-8 { margin: 32px; }     /* 32px */
.space-12 { margin: 48px; }    /* 48px */
.space-16 { margin: 64px; }    /* 64px */
.space-24 { margin: 96px; }    /* 96px */
```

## 🔧 Component Development

### Component Structure Template
```typescript
// src/components/example/ExampleComponent.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/format-utils';

interface ExampleComponentProps {
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  children?: React.ReactNode;
}

export const ExampleComponent: React.FC<ExampleComponentProps> = ({
  title,
  description,
  variant = 'primary',
  className,
  children
}) => {
  return (
    <motion.div
      className={cn(
        'base-styles',
        variant === 'primary' && 'primary-styles',
        variant === 'secondary' && 'secondary-styles',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && (
        <p className="text-gray-600 mt-2">{description}</p>
      )}
      {children}
    </motion.div>
  );
};
```

### Animation Guidelines
```typescript
// Standard animation configurations
const animations = {
  // Page transitions
  pageTransition: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }
  },
  
  // Scroll-triggered animations
  scrollReveal: {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }
  },
  
  // Hover animations
  hover: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  }
};
```

## 🎭 Era Component Development

### Era Component Pattern
Each era follows a consistent structure:

```typescript
// src/components/eras/[Era]Era.tsx
import React from 'react';
import { EraSection } from '@/components/sections/EraSection';
import { ImageCarousel } from '@/components/interactive/ImageCarousel';
import { eraData } from '@/data/content/eras';

export const OriginsEra: React.FC = () => {
  const era = eraData.origins;
  
  return (
    <EraSection
      title={era.title}
      timeRange={era.timeRange}
      theme={era.theme}
      backgroundImage={era.backgroundImage}
    >
      {/* Era-specific content */}
      <div className="era-content">
        <h3 className={era.theme.headingClass}>
          {era.keyMilestones.title}
        </h3>
        
        <ImageCarousel
          images={era.galleries.keyWorks}
          variant={era.theme.carouselVariant}
        />
        
        {/* Key innovations, studios, creators */}
        {era.sections.map((section, index) => (
          <section key={index} className="era-section">
            <h4>{section.title}</h4>
            <p>{section.content}</p>
          </section>
        ))}
      </div>
    </EraSection>
  );
};
```

### Era Data Structure
```typescript
// src/data/content/eras.ts
export interface EraData {
  id: string;
  title: string;
  timeRange: string;
  theme: {
    colors: string[];
    headingClass: string;
    carouselVariant: string;
  };
  backgroundImage: string;
  keyMilestones: {
    title: string;
    events: MilestoneEvent[];
  };
  galleries: {
    keyWorks: ImageData[];
    studios: ImageData[];
    creators: ImageData[];
  };
  sections: ContentSection[];
}
```

## 📱 Responsive Development

### Breakpoint System
```typescript
// src/data/constants/breakpoints.ts
export const breakpoints = {
  mobile: '320px',
  mobileLg: '480px',
  tablet: '768px',
  tabletLg: '1024px',
  desktop: '1280px',
  desktopLg: '1440px',
  wide: '1920px'
};

// Tailwind usage
<div className="
  grid grid-cols-1 gap-4
  md:grid-cols-2 md:gap-6
  lg:grid-cols-3 lg:gap-8
  xl:grid-cols-4 xl:gap-12
">
```

### Mobile-First CSS
```css
/* Mobile base styles */
.hero-section {
  padding: 1rem;
  font-size: 1.5rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .hero-section {
    padding: 2rem;
    font-size: 2rem;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .hero-section {
    padding: 4rem;
    font-size: 3rem;
  }
}
```

## ⚡ Performance Guidelines

### Image Optimization
```typescript
// Always use Next.js Image component
import Image from 'next/image';

<Image
  src="/images/eras/origins/namakura-gatana-still.jpg"
  alt="Namakura Gatana (1917) - First Japanese animated film"
  width={800}
  height={600}
  priority={isAboveFold}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### Code Splitting
```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const DataVisualization = dynamic(
  () => import('@/components/data-viz/RevenueChart'),
  {
    loading: () => <LoadingSpinner />,
    ssr: false
  }
);

// Lazy load era components
const OriginsEra = dynamic(
  () => import('@/components/eras/OriginsEra').then(mod => ({ default: mod.OriginsEra })),
  { loading: () => <EraLoadingSkeleton /> }
);
```

### Bundle Analysis
```bash
# Analyze bundle size
npm run build
npm run analyze

# Check for unused dependencies
npx depcheck

# Performance profiling
npm run dev -- --profile
```

## 🎯 Animation Development

### Scroll-Triggered Animations
```typescript
// src/hooks/useScrollProgress.ts usage
import { useScrollProgress } from '@/hooks/useScrollProgress';

const TimelineComponent = () => {
  const { scrollY, progress } = useScrollProgress();
  
  return (
    <motion.div
      style={{
        opacity: progress,
        scale: 0.8 + (progress * 0.2)
      }}
    >
      Timeline content
    </motion.div>
  );
};
```

### Parallax Effects
```typescript
// src/components/animations/ParallaxContainer.tsx usage
<ParallaxContainer speed={0.5} direction="vertical">
  <div className="background-layer">
    <Image src="/images/era-background.jpg" alt="" />
  </div>
</ParallaxContainer>
```

### GSAP Scroll Animations
```typescript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.fromTo('.era-title', 
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.era-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );
}, []);
```

## 🔍 Development Tools

### VS Code Extensions
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
```

### ESLint Configuration
```javascript
// .eslintrc.js
module.exports = {
  extends: [
    'next/core-web-vitals',
    '@typescript-eslint/recommended'
  ],
  rules: {
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prefer-const': 'error'
  }
};
```

### Prettier Configuration
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

## 🧪 Testing Strategy

### Component Testing
```typescript
// src/components/__tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Hook Testing
```typescript
// src/hooks/__tests__/useScrollProgress.test.ts
import { renderHook } from '@testing-library/react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

describe('useScrollProgress', () => {
  it('returns initial scroll state', () => {
    const { result } = renderHook(() => useScrollProgress());
    
    expect(result.current.scrollY).toBe(0);
    expect(result.current.progress).toBe(0);
  });
});
```

## 📊 Performance Monitoring

### Core Web Vitals
```typescript
// src/utils/performance.ts
export const measurePerformance = () => {
  // Largest Contentful Paint
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      console.log('LCP:', entry.startTime);
    });
  }).observe({ entryTypes: ['largest-contentful-paint'] });
  
  // First Input Delay
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      console.log('FID:', entry.processingStart - entry.startTime);
    });
  }).observe({ entryTypes: ['first-input'] });
};
```

### Bundle Size Monitoring
```bash
# Add to package.json scripts
"analyze": "ANALYZE=true npm run build",
"lighthouse": "lighthouse http://localhost:3000 --view"
```

## 🚨 Common Issues & Solutions

### Animation Performance
```typescript
// ❌ Bad: Animating layout properties
<motion.div animate={{ left: 100 }}>

// ✅ Good: Animating transform properties
<motion.div animate={{ x: 100 }}>
```

### Image Loading Issues
```typescript
// ❌ Bad: No placeholder
<Image src="/image.jpg" alt="" width={800} height={600} />

// ✅ Good: With placeholder and priority
<Image 
  src="/image.jpg" 
  alt="Descriptive alt text"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  priority={isAboveFold}
/>
```

### Scroll Performance
```typescript
// ❌ Bad: Heavy calculations on scroll
useEffect(() => {
  const handleScroll = () => {
    // Heavy DOM queries and calculations
    const elements = document.querySelectorAll('.heavy-selector');
    // Complex calculations...
  };
  
  window.addEventListener('scroll', handleScroll);
}, []);

// ✅ Good: Throttled with cached values
import { throttle } from 'lodash';

useEffect(() => {
  const handleScroll = throttle(() => {
    // Lightweight operations only
    setScrollY(window.scrollY);
  }, 16); // ~60fps
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

## 🎯 Quality Checklist

### Before Committing
- [ ] TypeScript compilation passes (`npm run type-check`)
- [ ] ESLint passes (`npm run lint`)
- [ ] Components are responsive (mobile, tablet, desktop)
- [ ] Images have proper alt text and optimization
- [ ] Animations perform at 60fps
- [ ] No console errors or warnings
- [ ] Loading states are implemented
- [ ] Error boundaries are in place

### Before Deploying
- [ ] Bundle size analysis completed
- [ ] Core Web Vitals meet thresholds (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] Cross-browser testing completed
- [ ] Accessibility audit passed
- [ ] SEO meta tags implemented
- [ ] Performance monitoring configured

## 📚 Resources

### Documentation
- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Tailwind CSS Reference](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Design Inspiration
- [Awwwards - Animation](https://www.awwwards.com/websites/animation/)
- [Dribbble - Timeline Design](https://dribbble.com/search/timeline)
- [Behance - Historical Websites](https://www.behance.net/search/projects?search=historical%20website)

### Performance Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Web Vitals Extension](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma)
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

---

**Happy coding! 🎬✨**

*For deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)*