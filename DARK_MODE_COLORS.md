# Dark Mode Color Scheme

## Overview
The dark mode has been redesigned with a **comfortable, elegant, and premium** color palette that creates a cohesive luxury e-commerce experience. The new scheme features reduced contrast for eye comfort while maintaining excellent readability and a warm, sophisticated aesthetic.

---

## Color Palette

### 🖤 Backgrounds

| Token | Color | Hex Code | Usage |
|-------|-------|----------|-------|
| `dark-bg-primary` | Comfortable dark gray | `#1a1a1a` | Main background, easy on the eyes |
| `dark-bg-secondary` | Elevated surface | `#242424` | Cards, elevated surfaces, secondary panels |
| `dark-bg-tertiary` | Light surface | `#2e2e2e` | Hover states, interactive elements |
| `dark-bg-elevated` | Lightest surface | `#383838` | Active/selected states, prominent elements |

### ✨ Text Colors

| Token | Color | Hex Code | Usage |
|-------|-------|----------|-------|
| `dark-text-primary` | Soft white | `#f5f5f5` | Main headings, important text (gentle on eyes) |
| `dark-text-secondary` | Light gray | `#e0e0e0` | Secondary text, descriptions |
| `dark-text-tertiary` | Medium gray | `#b8b8b8` | Muted text, labels |
| `dark-text-muted` | Subdued gray | `#8a8a8a` | Disabled text, placeholders |

### 🔴 Accent Colors

| Token | Color | Hex Code | Usage |
|-------|-------|----------|-------|
| `dark-accent-primary` | Bright brand red | `#e74c4c` | Primary actions, brand elements |
| `dark-accent-secondary` | Lighter red | `#ff6b6b` | Highlights, hover effects |
| `dark-accent-success` | Softer green | `#34d399` | Success states, positive actions |
| `dark-accent-warning` | Warm amber | `#fbbf24` | Warning messages, alerts |
| `dark-accent-error` | Soft red | `#f87171` | Error states, destructive actions |

### 🔲 Borders

| Token | Color | Hex Code | Usage |
|-------|-------|----------|-------|
| `dark-border-primary` | Subtle border | `#333333` | Default borders, dividers |
| `dark-border-secondary` | Visible border | `#4a4a4a` | Hover borders, active borders |
| `dark-border-accent` | Brand red | `#DB4444` | Accent borders, focus states |

### ✨ Glow Effects

| Token | Color | RGBA | Usage |
|-------|-------|------|-------|
| `dark-glow-red` | Soft red glow | `rgba(231, 76, 76, 0.12)` | Subtle red glow for cards |
| `dark-glow-redStrong` | Moderate red glow | `rgba(231, 76, 76, 0.2)` | Moderate red glow |
| `dark-glow-success` | Soft green glow | `rgba(52, 211, 153, 0.12)` | Green glow for success |
| `dark-glow-subtle` | Very subtle glow | `rgba(255, 255, 255, 0.03)` | Minimal highlight |

---

## Design Principles

### 1. **Comfortable Viewing Experience**
- **Reduced contrast** for extended viewing comfort
- Backgrounds are lighter (`#1a1a1a` vs pure black) to reduce eye strain
- Soft white text (`#f5f5f5`) instead of harsh pure white
- Perfect balance between readability and comfort

### 2. **Warmth & Sophistication**
- Warm, sophisticated grays instead of cold slate tones
- Creates a premium, luxury feel appropriate for e-commerce
- Better matches the brand's exclusive positioning

### 3. **Consistent Brand Identity**
- Slightly brighter brand red (`#e74c4c`) for better visibility on darker backgrounds
- All accent colors harmonize with the brand identity
- Maintains visual consistency across light and dark modes

### 4. **Optimal Contrast & Accessibility**
- Comfortable contrast ratios that meet WCAG AA standards
- Clear hierarchy through 4 levels of text colors
- Sufficient readability without being harsh

### 5. **Subtle Depth & Layering**
- 4 background shades create clear visual hierarchy
- Gentle shadows and glows add depth without overwhelming
- Borders are visible but not distracting

### 6. **Interactive Feedback**
- Hover states use warmer, lighter tones
- Softer brand-colored glows for elegance
- Smooth transitions (300ms) for all color changes

---

## Component Examples

### Buttons

**Primary Button:**
```css
bg-accent dark:bg-dark-accent-primary
hover:bg-accent-hover dark:hover:bg-dark-accent-secondary
shadow-md hover:shadow-lg dark:hover:shadow-glow-red
```

**Secondary Button:**
```css
bg-black dark:bg-dark-bg-elevated
hover:bg-neutral-800 dark:hover:bg-dark-bg-tertiary
```

**Outline Button:**
```css
border-dark-border-primary
hover:border-dark-accent-primary
dark:hover:shadow-glow-red
```

### Cards

**Product Card:**
```css
bg-white dark:bg-dark-bg-secondary
border-transparent dark:border-dark-border-primary
hover:dark:border-dark-border-secondary
```

### Inputs

**Input Field:**
```css
bg-white dark:bg-dark-bg-secondary
border-neutral-200 dark:border-dark-border-primary
focus:border-accent dark:focus:border-dark-accent-primary
focus:ring-accent/20 dark:focus:ring-dark-accent-primary/20
```

---

## Shadows & Effects

### Box Shadows

| Name | Light Mode | Dark Mode |
|------|-----------|-----------|
| Card | `0 2px 8px rgba(0,0,0,0.1)` | `0 2px 8px rgba(0,0,0,0.3)` |
| Card Hover | `0 4px 16px rgba(0,0,0,0.15)` | `0 4px 16px rgba(231,76,76,0.1), 0 2px 8px rgba(0,0,0,0.4)` |
| Subtle Glow | N/A | `0 1px 4px rgba(255,255,255,0.03)` |
| Red Glow | N/A | `0 0 16px rgba(231,76,76,0.25)` |
| Red Glow Strong | N/A | `0 0 24px rgba(231,76,76,0.35)` |

### Animations

**Gradient Animate:**
```css
background: linear-gradient(-45deg, #e74c4c, #ff6b6b, #f87171, #DB4444);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
```

---

## Usage Guidelines

### ✅ DO:
- Use `dark:` prefix for all dark mode styles
- Maintain consistent transition durations (300ms)
- Layer backgrounds from primary → secondary → tertiary → elevated
- Use glow effects sparingly and softly for elegance
- Ensure text contrast is comfortable yet readable
- Test for extended viewing comfort

### ❌ DON'T:
- Mix cold and warm tones within the same component
- Use pure black (`#000000`) or pure white (`#ffffff`) - they're too harsh
- Overuse glow effects (they should be very subtle)
- Forget hover and focus states
- Use gradients excessively (use for special elements only)
- Make contrast too extreme (causes eye strain)

---

## Browser Compatibility

The dark mode uses standard CSS classes and Tailwind utilities, ensuring compatibility with:
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

---

## Testing Checklist

- [ ] All text is readable and comfortable for extended viewing
- [ ] Contrast is sufficient but not harsh
- [ ] Backgrounds are not too dark (avoiding pure black)
- [ ] Hover states provide clear feedback
- [ ] Focus states are visible for keyboard navigation
- [ ] Cards have proper depth and hierarchy
- [ ] Borders are visible but not distracting
- [ ] Transitions are smooth (300ms)
- [ ] Brand colors are consistent throughout
- [ ] Glow effects are subtle and elegant
- [ ] Can be used comfortably for 30+ minutes

---

## Future Enhancements

Consider these improvements for future iterations:
1. Add user preference for color temperature (warmer/cooler)
2. Implement per-component theme customization
3. Add high-contrast mode for accessibility
4. Create theme preview in settings
5. Allow custom accent color selection

---

## Key Features

✨ **Reduced Contrast** - Comfortable for extended viewing  
🎨 **Warm Aesthetics** - Sophisticated dark grays instead of pure black  
👁️ **Eye-Friendly** - Soft white text prevents eye strain  
🔴 **Brand Consistency** - Red accents throughout  
⚡ **Smooth Interactions** - Gentle glows and transitions  

---

**Last Updated:** November 24, 2025  
**Version:** 2.1.0 (Reduced Contrast Edition)

