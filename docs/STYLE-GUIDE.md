# 🎨 Design System Style Guide
**Anime History Website - Visual Identity & Design Standards**

## 🎯 **Design Philosophy**

This website embodies the **cinematic evolution of anime** through visual design that progresses from vintage film aesthetics to cutting-edge digital experiences. Every design decision should reflect the **artistry, innovation, and cultural significance** of anime history.

### **Core Design Principles**
1. **Cinematic Storytelling** - Visual hierarchy guides users through historical narrative
2. **Cultural Respect** - Japanese aesthetic influences integrated thoughtfully
3. **Progressive Enhancement** - Visual complexity increases with technological eras
4. **Emotional Journey** - Design evokes appropriate feelings for each time period
5. **Accessibility First** - Beautiful design that works for everyone

---

## 🎨 **Color System**

### **Master Palette**
```css
/* Base System */
--color-black-deep: #0a0a0a;
--color-black-rich: #1a1a1a;
--color-black-soft: #2a2a2a;
--color-white-pure: #ffffff;
--color-white-soft: #f8f8f8;
--color-white-muted: #e8e8e8;

/* Accent Colors */
--color-gold-primary: #ffd700;
--color-gold-rich: #ffb300;
--color-gold-deep: #ff8f00;
--color-blue-electric: #00d4ff;
--color-blue-primary: #0080ff;
--color-blue-deep: #0056b3;

/* Semantic Colors */
--color-success: #4ecdc4;
--color-warning: #ffa726;
--color-error: #ff6b6b;
--color-info: #42a5f5;
```

### **Era-Specific Color Palettes**

#### **Origins Era (1900s-1930s)**
```css
--origins-primary: #8b4513; /* Saddle Brown */
--origins-secondary: #f4e4bc; /* Vintage Cream */
--origins-accent: #cd853f; /* Peru Gold */
--origins-text: #2f1b14; /* Dark Brown */
--origins-background: #faf6f0; /* Aged Paper */
```

#### **Foundation Era (1950s-1960s)**
```css
--foundation-primary: #4a90e2; /* Classic Blue */
--foundation-secondary: #f5f5dc; /* Beige */
--foundation-accent: #ff6b47; /* Coral */
--foundation-text: #2c3e50; /* Dark Slate */
--foundation-background: #ffffff; /* Clean White */
```

#### **Expansion Era (1970s-1980s)**
```css
--expansion-primary: #e74c3c; /* Vibrant Red */
--expansion-secondary: #3498db; /* Sky Blue */
--expansion-accent: #f39c12; /* Orange */
--expansion-text: #34495e; /* Charcoal */
--expansion-background: #ecf0f1; /* Light Gray */
```

#### **Golden Age Era (1990s-2000s)**
```css
--golden-primary: #9b59b6; /* Amethyst */
--golden-secondary: #1abc9c; /* Turquoise */
--golden-accent: #e67e22; /* Carrot */
--golden-text: #2c3e50; /* Midnight Blue */
--golden-background: #ffffff; /* Pure White */
```

#### **Digital Age Era (2010s)**
```css
--digital-primary: #00d4ff; /* Cyan */
--digital-secondary: #667eea; /* Gradient Blue */
--digital-accent: #764ba2; /* Purple */
--digital-text: #0a0a0a; /* Deep Black */
--digital-background: #f8fafc; /* Off White */
```

#### **Current Era (2020s-2025)**
```css
--current-primary: #ff6b6b; /* Coral Pink */
--current-secondary: #4ecdc4; /* Teal */
--current-accent: #45b7d1; /* Sky Blue */
--current-text: #0a0a0a; /* Pure Black */
--current-background: #ffffff; /* Clean White */
```

### **Gradient System**
```css
/* Primary Gradients */
--gradient-gold: linear-gradient(135deg, #ffd700 0%, #ff8f00 100%);
--gradient-blue: linear-gradient(135deg, #00d4ff 0%, #0056b3 100%);
--gradient-cinematic: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);

/* Era Gradients */
--gradient-origins: linear-gradient(135deg, #f4e4bc 0%, #8b4513 100%);
--gradient-foundation: linear-gradient(135deg, #f5f5dc 0%, #4a90e2 100%);
--gradient-expansion: linear-gradient(135deg, #3498db 0%, #e74c3c 100%);
--gradient-golden: linear-gradient(135deg, #1abc9c 0%, #9b59b6 100%);
--gradient-digital: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-current: linear-gradient(135deg, #4ecdc4 0%, #ff6b6b 100%);
```

---

## 📝 **Typography System**

### **Font Stack**
```css
/* Primary Font (Japanese Support) */
--font-primary: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif;

/* Secondary Font (Modern Sans) */
--font-secondary: 'Inter Variable', -apple-system, BlinkMacSystemFont, sans-serif;

/* Monospace Font */
--font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;

/* Decorative Font (Era Titles) */
--font-display: 'Playfair Display', Georgia, serif;
```

### **Type Scale**
```css
/* Display Sizes */
--text-9xl: clamp(4rem, 8vw, 8rem);     /* 64px - 128px */
--text-8xl: clamp(3rem, 6vw, 6rem);     /* 48px - 96px */
--text-7xl: clamp(2.5rem, 5vw, 4.5rem); /* 40px - 72px */
--text-6xl: clamp(2rem, 4vw, 3.75rem);  /* 32px - 60px */

/* Heading Sizes */
--text-5xl: clamp(1.75rem, 3vw, 3rem);  /* 28px - 48px */
--text-4xl: clamp(1.5rem, 2.5vw, 2.25rem); /* 24px - 36px */
--text-3xl: clamp(1.25rem, 2vw, 1.875rem); /* 20px - 30px */
--text-2xl: clamp(1.125rem, 1.5vw, 1.5rem); /* 18px - 24px */
--text-xl: clamp(1rem, 1.25vw, 1.25rem);    /* 16px - 20px */

/* Body Sizes */
--text-lg: 1.125rem; /* 18px */
--text-base: 1rem;   /* 16px */
--text-sm: 0.875rem; /* 14px */
--text-xs: 0.75rem;  /* 12px */
```

### **Font Weights**
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
--font-black: 900;
```

### **Line Heights**
```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### **Typography Usage Guidelines**

#### **Display Typography**
- **Hero Titles:** `--text-8xl` with `--font-display`
- **Era Titles:** `--text-6xl` with `--font-primary`
- **Section Headers:** `--text-4xl` with `--font-secondary`

#### **Body Typography**
- **Main Content:** `--text-lg` with `--leading-relaxed`
- **Captions:** `--text-sm` with `--leading-normal`
- **Labels:** `--text-xs` with `--font-medium`

#### **Japanese Text**
- **All Japanese text:** `--font-primary` (Noto Sans JP)
- **Romanized names:** `--font-secondary` (Inter)
- **Technical terms:** `--font-mono` when appropriate

---

## 🎭 **Layout System**

### **Spacing Scale**
```css
/* Base unit: 4px */
--space-px: 1px;
--space-0: 0;
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
--space-32: 8rem;    /* 128px */
--space-40: 10rem;   /* 160px */
--space-48: 12rem;   /* 192px */
--space-56: 14rem;   /* 224px */
--space-64: 16rem;   /* 256px */
```

### **Container System**
```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

/* Responsive Containers */
@media (min-width: 640px) {
  .container { max-width: 640px; }
}

@media (min-width: 768px) {
  .container { 
    max-width: 768px; 
    padding-left: var(--space-6);
    padding-right: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .container { 
    max-width: 1024px; 
    padding-left: var(--space-8);
    padding-right: var(--space-8);
  }
}

@media (min-width: 1280px) {
  .container { max-width: 1280px; }
}

@media (min-width: 1536px) {
  .container { max-width: 1536px; }
}
```

### **Grid System**
```css
/* Main Content Grid */
.era-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-16);
}

/* Era Layout */
.era-content {
  grid-column: span 8;
}

.era-sidebar {
  grid-column: span 4;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .era-content,
  .era-sidebar {
    grid-column: span 12;
  }
}
```

---

## 🎨 **Component Design Standards**

### **Button System**

#### **Primary Button**
```css
.btn-primary {
  background: var(--gradient-gold);
  color: var(--color-black-deep);
  font-weight: var(--font-semibold);
  padding: var(--space-3) var(--space-6);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  font-family: var(--font-secondary);
  min-height: 44px; /* Touch-friendly */
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 215, 0, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}
```

#### **Secondary Button**
```css
.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: var(--color-white-pure);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: var(--space-3) var(--space-6);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  font-family: var(--font-secondary);
  font-weight: var(--font-medium);
  min-height: 44px;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}
```

#### **Ghost Button**
```css
.btn-ghost {
  background: transparent;
  color: var(--color-gold-primary);
  border: 1px solid var(--color-gold-primary);
  padding: var(--space-3) var(--space-6);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  font-family: var(--font-secondary);
  font-weight: var(--font-medium);
  min-height: 44px;
}

.btn-ghost:hover {
  background: var(--color-gold-primary);
  color: var(--color-black-deep);
}
```

### **Card System**

#### **Base Card**
```css
.card {
  background: var(--color-white-pure);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: var(--space-6);
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
```

#### **Glass Card**
```css
.card-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: var(--space-6);
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.card-glass:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}
```

#### **Era Card**
```css
.card-era {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: var(--color-black-rich);
  color: var(--color-white-pure);
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.card-era::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
  z-index: 1;
}

.card-era:hover {
  transform: scale(1.05);
}

.card-era-content {
  position: relative;
  z-index: 2;
  padding: var(--space-8);
}
```

---

## ✨ **Animation System**

### **Easing Functions**
```css
/* Standard Easing */
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
--ease-decelerate: cubic-bezier(0.0, 0.0, 0.2, 1);
--ease-accelerate: cubic-bezier(0.4, 0.0, 1, 1);
--ease-sharp: cubic-bezier(0.4, 0.0, 0.6, 1);

/* Cinematic Easing */
--ease-cinematic: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-elastic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

### **Duration Scale**
```css
--duration-instant: 100ms;
--duration-fast: 200ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 700ms;
--duration-slowest: 1000ms;
```

### **Animation Classes**

#### **Fade Animations**
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn var(--duration-normal) var(--ease-standard);
}

.animate-fade-in-up {
  animation: fadeInUp var(--duration-normal) var(--ease-standard);
}
```

#### **Slide Animations**
```css
@keyframes slideInLeft {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.animate-slide-in-left {
  animation: slideInLeft var(--duration-slow) var(--ease-cinematic);
}

.animate-slide-in-right {
  animation: slideInRight var(--duration-slow) var(--ease-cinematic);
}
```

#### **Scale Animations**
```css
@keyframes scaleIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-scale-in {
  animation: scaleIn var(--duration-normal) var(--ease-standard);
}

.animate-pulse {
  animation: pulse 2s infinite var(--ease-standard);
}
```

#### **Cinematic Transitions**
```css
@keyframes filmGrain {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.6; }
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

.animate-film-grain {
  animation: filmGrain 0.1s infinite alternate;
}

.animate-typewriter {
  overflow: hidden;
  border-right: 2px solid var(--color-gold-primary);
  white-space: nowrap;
  animation: typewriter 3s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: var(--color-gold-primary); }
}
```

---

## 🎯 **Responsive Design Standards**

### **Breakpoint System**
```css
/* Mobile First Approach */
--breakpoint-xs: 320px;
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### **Media Query Mixins**
```css
/* Screen Size Queries */
.responsive-text {
  font-size: var(--text-base);
}

@media (min-width: 640px) {
  .responsive-text {
    font-size: var(--text-lg);
  }
}

@media (min-width: 1024px) {
  .responsive-text {
    font-size: var(--text-xl);
  }
}
```

### **Touch Target Guidelines**
- **Minimum touch target:** 44px × 44px
- **Comfortable spacing:** 8px between interactive elements
- **Thumb zone optimization:** Bottom 75% of screen prioritized
- **Gesture support:** Swipe, pinch, long-press where appropriate

---

## 🎨 **Visual Effects Standards**

### **Shadow System**
```css
/* Elevation Shadows */
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.15);

/* Colored Shadows */
--shadow-gold: 0 10px 25px rgba(255, 215, 0, 0.3);
--shadow-blue: 0 10px 25px rgba(0, 212, 255, 0.3);
--shadow-cinematic: 0 20px 40px rgba(0, 0, 0, 0.4);
```

### **Glassmorphism Effects**
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.glass-dark {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### **Film Grain Texture**
```css
.film-grain::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  background-image: url('/images/ui/backgrounds/film-grain-texture.jpg');
  background-repeat: repeat;
  background-size: 200px 200px;
  pointer-events: none;
  z-index: 1;
}
```

---

## 🎭 **Era-Specific Design Guidelines**

### **Origins Era (1900s-1930s)**
**Visual Theme:** Silent film, vintage cinema, handcrafted animation

**Design Elements:**
- **Typography:** Serif fonts, ornate decorations, vintage movie titles
- **Color Palette:** Sepia tones, warm browns, cream backgrounds
- **Textures:** Film grain, paper texture, aged materials
- **Animations:** Hand-drawn feel, flickering effects, old film aesthetics
- **Layout:** Classical compositions, centered layouts, border decorations

```css
.origins-section {
  background: var(--origins-background);
  color: var(--origins-text);
  font-family: var(--font-display);
  position: relative;
}

.origins-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    url('/images/ui/backgrounds/film-grain-texture.jpg'),
    linear-gradient(135deg, var(--origins-secondary) 0%, var(--origins-primary) 100%);
  opacity: 0.1;
  pointer-events: none;
}

.origins-title {
  font-size: var(--text-6xl);
  font-weight: var(--font-bold);
  text-align: center;
  margin-bottom: var(--space-8);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
```

### **Foundation Era (1950s-1960s)**
**Visual Theme:** Television age, optimism, technological progress

**Design Elements:**
- **Typography:** Clean sans-serif, futuristic touches, TV-inspired fonts
- **Color Palette:** Primary colors, clean whites, television blue
- **Textures:** Clean surfaces, minimal grain, broadcast scanlines
- **Animations:** Smooth transitions, TV-static effects, retro-futuristic
- **Layout:** Grid systems, modernist compositions, functional design

```css
.foundation-section {
  background: var(--foundation-background);
  color: var(--foundation-text);
  font-family: var(--font-secondary);
}

.foundation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
  margin: var(--space-16) 0;
}

.foundation-card {
  background: var(--color-white-pure);
  border: 2px solid var(--foundation-primary);
  border-radius: 0; /* Sharp, modernist edges */
  padding: var(--space-6);
  transition: all var(--duration-normal) var(--ease-standard);
}

.foundation-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

### **Digital Age Era (2010s)**
**Visual Theme:** Streaming revolution, digital interfaces, global connectivity

**Design Elements:**
- **Typography:** Sharp, digital fonts, interface-inspired text
- **Color Palette:** Electric blues, digital gradients, interface colors
- **Textures:** Digital noise, pixelation effects, screen textures
- **Animations:** Digital transitions, glitch effects, interface animations
- **Layout:** App-inspired layouts, card systems, responsive grids

```css
.digital-section {
  background: var(--digital-background);
  background-image: 
    linear-gradient(135deg, var(--digital-primary) 0%, var(--digital-secondary) 100%);
  color: var(--digital-text);
  font-family: var(--font-secondary);
  position: relative;
}

.digital-interface {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 12px;
  padding: var(--space-6);
  margin: var(--space-4);
  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
}

.digital-glitch {
  position: relative;
  overflow: hidden;
}

.digital-glitch::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), transparent);
  animation: glitch-scan 2s infinite;
}

@keyframes glitch-scan {
  0% { left: -100%; }
  100% { left: 100%; }
}
```

---

## 🎨 **Icon System**

### **Icon Guidelines**
- **Style:** Outline style for consistency
- **Weight:** 2px stroke width
- **Size:** 24px base size (16px, 20px, 24px, 32px variants)
- **Color:** Inherit from parent text color
- **Accessibility:** Always paired with text labels or aria-labels

### **Icon Categories**
```css
/* Navigation Icons */
.icon-nav {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

/* Action Icons */
.icon-action {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
  transition: all var(--duration-fast) var(--ease-standard);
}

.icon-action:hover {
  transform: scale(1.1);
}

/* Status Icons */
.icon-status {
  width: 16px;
  height: 16px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}
```

---

## 📱 **Mobile-Specific Design Standards**

### **Mobile Typography**
```css
@media (max-width: 640px) {
  .mobile-title {
    font-size: var(--text-4xl);
    line-height: var(--leading-tight);
    margin-bottom: var(--space-4);
  }
  
  .mobile-body {
    font-size: var(--text-base);
    line-height: var(--leading-relaxed);
    margin-bottom: var(--space-6);
  }
}
```

### **Mobile Interactions**
```css
.mobile-touch-target {
  min-height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-swipe-container {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.mobile-swipe-item {
  scroll-snap-align: start;
  flex-shrink: 0;
}
```

### **Mobile Loading States**
```css
.mobile-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

## ♿ **Accessibility Standards**

### **Color Contrast Requirements**
- **Normal text:** Minimum 4.5:1 contrast ratio
- **Large text:** Minimum 3:1 contrast ratio
- **UI components:** Minimum 3:1 contrast ratio
- **Focus indicators:** Minimum 3:1 contrast with adjacent colors

### **Focus Management**
```css
.focus-visible {
  outline: 2px solid var(--color-gold-primary);
  outline-offset: 2px;
  border-radius: 4px;
}

.focus-visible:not(:focus-visible) {
  outline: none;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .card {
    border: 2px solid currentColor;
  }
  
  .btn-primary {
    border: 2px solid var(--color-black-deep);
  }
}
```

### **Reduced Motion Support**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  .parallax-element {
    transform: none !important;
  }
}
```

### **Screen Reader Optimization**
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
}
```

---

## 🎯 **Design Quality Checklist**

### **Visual Design Standards**
- [ ] **Consistent spacing** using the 4px grid system
- [ ] **Proper typography hierarchy** with appropriate font sizes and weights
- [ ] **Color accessibility** meeting WCAG contrast requirements
- [ ] **Responsive behavior** across all breakpoints
- [ ] **Era-appropriate styling** matching historical periods
- [ ] **Smooth animations** with appropriate easing and duration
- [ ] **Touch-friendly interactions** with 44px minimum targets
- [ ] **Loading states** for all dynamic content

### **Component Standards**
- [ ] **Hover states** for all interactive elements
- [ ] **Focus indicators** for keyboard navigation
- [ ] **Error states** with clear messaging
- [ ] **Empty states** with helpful guidance
- [ ] **Consistent behavior** across similar components
- [ ] **Accessibility labels** for screen readers
- [ ] **Performance optimization** with minimal DOM impact

### **Cross-Browser Compatibility**
- [ ] **Modern browsers** (Chrome, Firefox, Safari, Edge)
- [ ] **Mobile browsers** (iOS Safari, Chrome Mobile)
- [ ] **Fallbacks** for unsupported features
- [ ] **Progressive enhancement** approach
- [ ] **Vendor prefixes** where necessary

---

## 🚀 **Performance Guidelines**

### **CSS Optimization**
- **Critical CSS inlined** for above-the-fold content
- **Non-critical CSS loaded** asynchronously
- **CSS purging** to remove unused styles
- **Minification** for production builds
- **CSS containment** for expensive layouts

### **Animation Performance**
```css
/* GPU-accelerated animations */
.gpu-optimized {
  transform: translateZ(0);
  will-change: transform, opacity;
}

/* Efficient animations */
.efficient-animation {
  /* Animate only transform and opacity */
  transition: transform var(--duration-normal) var(--ease-standard),
              opacity var(--duration-normal) var(--ease-standard);
}

/* Avoid animating expensive properties */
.avoid-expensive {
  /* DON'T animate: width, height, top, left, margin, padding */
  /* DO animate: transform, opacity, filter */
}
```

### **Image Optimization**
- **WebP with PNG/JPG fallbacks** for broad compatibility
- **Responsive images** with appropriate sizes
- **Lazy loading** for below-the-fold images
- **Placeholder images** during loading
- **Art direction** with different crops per device

---

## 🎨 **Brand Consistency Rules**

### **Logo Usage**
- **Minimum size:** 32px height for digital
- **Clear space:** 50% of logo height on all sides
- **Background contrast:** Ensure readability on all backgrounds
- **Color variations:** Gold on dark, dark on light, white on colors

### **Photography Style**
- **Cinematic quality:** Professional, high-resolution images
- **Cultural sensitivity:** Respectful representation of Japanese culture
- **Historical accuracy:** Period-appropriate imagery
- **Consistent filtering:** Era-appropriate color treatments
- **Aspect ratios:** 16:9 for hero images, 4:3 for content cards

### **Illustration Guidelines**
- **Line weight:** Consistent 2px stroke for icons
- **Color palette:** Use system colors only
- **Style consistency:** Maintain visual language across all graphics
- **Cultural elements:** Thoughtful integration of Japanese design motifs

---

**This design system ensures that every pixel serves the story of anime history while providing users with a beautiful, accessible, and engaging experience that honors the artistry and cultural significance of this incredible medium.**