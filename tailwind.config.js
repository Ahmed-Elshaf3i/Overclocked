/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode with class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Brand Colors from design system
      colors: {
        brand: {
          red: '#DB4444',
          black: '#000000',
          white: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#DB4444',
          hover: '#C13838',
          active: '#A92E2E',
        },
        success: {
          DEFAULT: '#00B517',
          light: '#E6F7E9',
        },
        // Enhanced Dark Theme Colors
        dark: {
          bg: {
            primary: '#0f172a',    // Slate 900 - Main background
            secondary: '#1e293b',  // Slate 800 - Cards/elevated surfaces
            tertiary: '#334155',   // Slate 700 - Hover states
            elevated: '#475569',   // Slate 600 - Active/selected
          },
          text: {
            primary: '#f8fafc',    // Slate 50 - Main text
            secondary: '#e2e8f0',  // Slate 200 - Secondary text
            tertiary: '#cbd5e1',   // Slate 300 - Muted text
            muted: '#94a3b8',      // Slate 400 - Disabled/placeholder
          },
          border: {
            primary: '#334155',    // Slate 700 - Default borders
            secondary: '#475569',  // Slate 600 - Hover borders
            accent: '#6366f1',     // Indigo 500 - Accent borders
          },
          accent: {
            primary: '#6366f1',    // Indigo 500
            secondary: '#8b5cf6',  // Violet 500
            success: '#10b981',    // Emerald 500
            warning: '#f59e0b',    // Amber 500
            error: '#ef4444',      // Red 500
          },
          glow: {
            indigo: 'rgba(99, 102, 241, 0.15)',
            violet: 'rgba(139, 92, 246, 0.15)',
            emerald: 'rgba(16, 185, 129, 0.15)',
          }
        },
      },
      
      // Typography
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      
      // Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      
      // Border Radius
      borderRadius: {
        'card': '0.25rem',
      },
      
      // Shadows
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'card-dark': '0 4px 16px rgba(0, 0, 0, 0.4)',
        'card-hover-dark': '0 8px 32px rgba(0, 0, 0, 0.5)',
        'glow-indigo': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-violet': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.3)',
      },
      
      // Animations
      animation: {
        'countdown': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
    base: false,
  },
};

