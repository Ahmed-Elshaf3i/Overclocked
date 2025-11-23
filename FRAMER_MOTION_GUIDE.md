# 🎬 Framer Motion Enhanced Theme System

Complete guide to the enhanced dark/light theme with beautiful Framer Motion animations and modern color palette.

## 🎨 What's New

### ✅ Framer Motion Animations
- **Theme Toggle**: Smooth icon transitions with rotation, scale, and fade effects
- **Animated Background Glow**: Pulsing gradient effect behind the toggle button
- **Icon Rotation**: Continuous subtle rotation on the sun icon
- **Hover Effects**: Scale transforms with spring physics
- **Page Transitions**: Fade and slide animations when theme changes

### ✅ Enhanced Dark Color Palette
Modern, sophisticated colors optimized for readability and visual appeal:

#### Background Colors
```css
dark-bg-primary: #0f172a    /* Slate 900 - Main background */
dark-bg-secondary: #1e293b  /* Slate 800 - Cards/elevated surfaces */
dark-bg-tertiary: #334155   /* Slate 700 - Hover states */
dark-bg-elevated: #475569   /* Slate 600 - Active/selected */
```

#### Text Colors
```css
dark-text-primary: #f8fafc    /* Slate 50 - Main text */
dark-text-secondary: #e2e8f0  /* Slate 200 - Secondary text */
dark-text-tertiary: #cbd5e1   /* Slate 300 - Muted text */
dark-text-muted: #94a3b8      /* Slate 400 - Disabled/placeholder */
```

#### Accent Colors
```css
dark-accent-primary: #6366f1    /* Indigo 500 - Main accent */
dark-accent-secondary: #8b5cf6  /* Violet 500 - Secondary accent */
dark-accent-success: #10b981    /* Emerald 500 - Success */
dark-accent-warning: #f59e0b    /* Amber 500 - Warning */
dark-accent-error: #ef4444      /* Red 500 - Error */
```

#### Border Colors
```css
dark-border-primary: #334155    /* Slate 700 - Default borders */
dark-border-secondary: #475569  /* Slate 600 - Hover borders */
dark-border-accent: #6366f1     /* Indigo 500 - Accent borders */
```

#### Glow Effects
```css
glow-indigo: rgba(99, 102, 241, 0.15)
glow-violet: rgba(139, 92, 246, 0.15)
glow-emerald: rgba(16, 185, 129, 0.15)
```

---

## 🚀 Using Framer Motion Animations

### 1. Enhanced ThemeToggle Component

The theme toggle now features:
- Spring-based scale animations
- Rotating sun icon (continuous 360° rotation)
- AnimatePresence for smooth icon transitions
- Pulsing gradient background
- Hover effects with spring physics

```typescript
import { ThemeToggle } from '../components/ui/ThemeToggle';

// Basic usage
<ThemeToggle />

// With label
<ThemeToggle showLabel />
```

### 2. AnimatedThemeWrapper Component

Wrap content to animate when theme changes:

```typescript
import { AnimatedThemeWrapper } from '../components/ui/AnimatedThemeWrapper';

export const MyPage = () => {
  return (
    <AnimatedThemeWrapper>
      <div>Your page content</div>
    </AnimatedThemeWrapper>
  );
};
```

### 3. PageTransition Component

For full-page animations with slide effect:

```typescript
import { PageTransition } from '../components/ui/AnimatedThemeWrapper';

export const ProductPage = () => {
  return (
    <PageTransition>
      <div>Product details</div>
    </PageTransition>
  );
};
```

### 4. CardReveal Component

Animate cards with staggered reveal:

```typescript
import { CardReveal } from '../components/ui/AnimatedThemeWrapper';

export const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product, index) => (
        <CardReveal key={product.id} delay={index * 0.1}>
          <ProductCard product={product} />
        </CardReveal>
      ))}
    </div>
  );
};
```

### 5. ThemeGlow Component

Add animated glow effect that changes with theme:

```typescript
import { ThemeGlow } from '../components/ui/AnimatedThemeWrapper';

export const HeroSection = () => {
  return (
    <ThemeGlow>
      <h1 className="text-5xl font-bold">Welcome to Our Store</h1>
      <p>Amazing products await</p>
    </ThemeGlow>
  );
};
```

### 6. FloatingElement Component

Create gentle floating animation:

```typescript
import { FloatingElement } from '../components/ui/AnimatedThemeWrapper';

export const Feature = ({ icon, title }) => {
  return (
    <div>
      <FloatingElement>
        <div className="text-4xl">{icon}</div>
      </FloatingElement>
      <h3>{title}</h3>
    </div>
  );
};
```

---

## 🎨 Using Enhanced Dark Colors

### Quick Reference

All components now use the enhanced color palette. Here's how to use them:

```typescript
// Backgrounds
<div className="bg-white dark:bg-dark-bg-primary">
<div className="bg-gray-50 dark:bg-dark-bg-secondary">
<div className="hover:bg-gray-100 dark:hover:bg-dark-bg-tertiary">

// Text
<h1 className="text-gray-900 dark:text-dark-text-primary">
<p className="text-gray-700 dark:text-dark-text-secondary">
<span className="text-gray-500 dark:text-dark-text-muted">

// Borders
<div className="border border-gray-300 dark:border-dark-border-primary">
<div className="hover:border-black dark:hover:border-dark-accent-primary">

// Accent Colors
<button className="bg-accent dark:bg-dark-accent-primary">
<div className="text-blue-600 dark:text-dark-accent-primary">

// Shadows with Glow
<div className="shadow-lg dark:shadow-card-dark hover:shadow-glow-indigo">
```

---

## 🎭 Animation Examples

### Custom Button with Framer Motion

```typescript
import { motion } from 'framer-motion';

export const AnimatedButton = ({ children, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="
        px-6 py-3 rounded-lg
        bg-accent dark:bg-dark-accent-primary
        text-white font-medium
        shadow-md dark:shadow-glow-indigo
      "
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
};
```

### Animated Card

```typescript
import { motion } from 'framer-motion';

export const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="
        product-card p-6
        bg-white dark:bg-dark-bg-secondary
        border dark:border-dark-border-primary
      "
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-bold dark:text-dark-text-primary">
        {product.name}
      </h3>
      <p className="text-gray-600 dark:text-dark-text-tertiary">
        {product.description}
      </p>
    </motion.div>
  );
};
```

### Staggered List Animation

```typescript
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const ProductList = ({ products }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-3 gap-6"
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={item}>
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
};
```

---

## 🎨 Advanced Styling Techniques

### Gradient Animated Background

Use the `.gradient-animate` class for animated gradients:

```typescript
<div className="gradient-animate h-screen flex items-center justify-center">
  <h1 className="text-white text-6xl font-bold">
    Amazing Hero Section
  </h1>
</div>
```

### Card with Glow Effect

```typescript
<div className="card-glow product-card p-6">
  <h3 className="text-xl font-bold dark:text-dark-text-primary">
    Featured Product
  </h3>
  {/* Glow appears on hover */}
</div>
```

### Custom Scrollbar

Automatically styled in dark mode:

```css
/* Already implemented globally */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: light or dark-bg-secondary;
}

::-webkit-scrollbar-thumb {
  background: dark-bg-elevated;
  border-radius: 9999px;
}
```

---

## 🔧 Utility Classes

### Enhanced Buttons

```typescript
// Primary (no changes - already uses accent color)
<button className="btn-primary">Shop Now</button>

// Secondary (enhanced with dark colors + animations)
<button className="btn-secondary">Learn More</button>

// Outline (glowing border on hover in dark mode)
<button className="btn-outline">Contact Us</button>
```

### Input Fields

```typescript
// Enhanced with focus rings and better colors
<input 
  type="text" 
  placeholder="Search products..."
  className="input-field"
/>
```

### Product Cards

```typescript
// Hover lift effect + shadow enhancements
<div className="product-card">
  <img src={product.image} alt={product.name} />
  <h3 className="text-lg font-semibold dark:text-dark-text-primary">
    {product.name}
  </h3>
  <p className="text-gray-600 dark:text-dark-text-tertiary">
    ${product.price}
  </p>
</div>
```

---

## 🎯 Complete Example: Animated Product Page

```typescript
import { FC } from 'react';
import { motion } from 'framer-motion';
import { PageTransition, CardReveal, ThemeGlow } from '../components/ui/AnimatedThemeWrapper';

export const ProductsPage: FC = () => {
  return (
    <PageTransition>
      <div className="container-custom py-12">
        {/* Hero Section with Glow */}
        <ThemeGlow>
          <motion.h1 
            className="text-5xl font-bold text-center mb-4 dark:text-dark-text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Products
          </motion.h1>
        </ThemeGlow>

        {/* Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {products.map((product, index) => (
            <CardReveal key={product.id} delay={index * 0.1}>
              <motion.div
                className="product-card p-6 bg-white dark:bg-dark-bg-secondary"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold dark:text-dark-text-primary">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-dark-text-tertiary mt-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-accent dark:text-dark-accent-primary">
                    ${product.price}
                  </span>
                  <motion.button
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            </CardReveal>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
```

---

## 🎨 Color Comparison

### Before (Basic Dark Mode)
```css
Background: #gray-900 (#111827)
Cards: #gray-800 (#1f2937)
Text: #white / #gray-100
Borders: #gray-700
```

### After (Enhanced Dark Mode)
```css
Background: #dark-bg-primary (#0f172a) ← Deeper, richer
Cards: #dark-bg-secondary (#1e293b) ← Better contrast
Text: #dark-text-primary (#f8fafc) ← Softer on eyes
Borders: #dark-border-primary (#334155) ← More subtle
Accent: #dark-accent-primary (#6366f1) ← Vibrant indigo
```

---

## 📊 Performance Tips

1. **Framer Motion is optimized** - Uses GPU acceleration for smooth animations
2. **AnimatePresence** - Only animates when theme actually changes
3. **Lazy Load** - Consider code-splitting animation components:

```typescript
import { lazy, Suspense } from 'react';

const AnimatedThemeWrapper = lazy(() => 
  import('../components/ui/AnimatedThemeWrapper').then(m => ({ 
    default: m.AnimatedThemeWrapper 
  }))
);

<Suspense fallback={<div>Loading...</div>}>
  <AnimatedThemeWrapper>
    <YourContent />
  </AnimatedThemeWrapper>
</Suspense>
```

---

## 🐛 Troubleshooting

### Animations not working?
- Ensure Framer Motion is installed: `npm list framer-motion`
- Check imports are correct: `import { motion } from 'framer-motion'`

### Colors not applying?
- Clear your browser cache
- Restart dev server: `npm run dev`
- Verify Tailwind config has the dark colors

### Theme not persisting?
- Check localStorage in DevTools
- Ensure ThemeProvider wraps your app

---

## 🎉 What You Get

✅ **Buttery smooth animations** powered by Framer Motion  
✅ **Modern color palette** optimized for dark mode  
✅ **Enhanced UX** with hover effects and transitions  
✅ **Production-ready** components  
✅ **Fully accessible** with proper ARIA labels  
✅ **Type-safe** with full TypeScript support  
✅ **Performance optimized** with GPU acceleration  

---

**Your theme system is now a work of art! 🎨✨**

